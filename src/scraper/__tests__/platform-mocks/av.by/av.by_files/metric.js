(function(window, document) {

    var debug = false;
    var debugName = 'CheckAdBlock';

    var FabUtils = function() {
        var self = this;
        var options = {};

        this.errors = {
            throwError: function(name, method, type) {
                throw 'Argument "'+name+'" of method "'+method+'" is not an "'+type+'"';
            },
            isObject: function(value, name, method) {
                if(typeof value !== 'object' || Array.isArray(value) === true || value === null) {
                    this.throwError(name, method, 'object');
                }
            },
            isArray: function(value, name, method) {
                if(Array.isArray(value) === false) {
                    this.throwError(name, method, 'array');
                }
            },
            isFunction: function(value, name, method) {
                if(typeof value !== 'function') {
                    this.throwError(name, method, 'function');
                }
            },
            isString: function(value, name, method) {
                if(typeof value !== 'string') {
                    this.throwError(name, method, 'string');
                }
            },
            isBoolean: function(value, name, method) {
                if(typeof value !== 'boolean') {
                    this.throwError(name, method, 'boolean');
                }
            },
        };

        this.options = {
            set: function(optionsList) {
                self.errors.isObject(optionsList, 'optionsList', 'options.set');

                for(var key in optionsList) {
                    options[key] = optionsList[key];
                    self.debug.log('options.set', 'Set "'+key+'" to "'+optionsList[key]+'"');
                }
                return self;
            },
            get: function(key) {
                return options[key];
            },
        };

        this.debug = {
            set: function(isEnable) {
                debug = isEnable;
                self.debug.log('debug.set', 'Set debug to "'+debug+'"');
                return self;
            },
            isEnable: function() {
                return debug;
            },
            log: function(method, message) {
                if(debug === true) {
                    self.errors.isString(method, 'method', 'debug.log');
                    self.errors.isString(message, 'message', 'debug.log');

                    console.log('['+debugName+']['+method+'] '+message);
                }
            },
        };

        this.versionToInt = function(version) {
            var versionInt = '';
            for(var i=0; i<3; i++) {
                var block = version[i]||0;
                if((''+block).length === 1) {
                    block = '0'+block;
                }
                versionInt += block;
            }
            return parseInt(versionInt);
        };
    };

    var FabPlugin = function() {
        FabUtils.apply(this);

        var data = {};
        var callbackDetected = null;
        var callbackUndetected = null;

        this.setDetected = function(callback) {
            callbackDetected = callback;
            return this;
        };
        this.callDetected = function() {
            if(callbackDetected === null) {
                return false;
            }
            callbackDetected();
            callbackDetected = null;
            return true;
        };

        this.setUndetected = function(callback) {
            callbackUndetected = callback;
            return this;
        };
        this.callUndetected = function() {
            if(callbackUndetected === null) {
                return false;
            }
            callbackUndetected();
            callbackUndetected = null;
            return true;
        };
    };

    var Fab = function() {
        FabUtils.apply(this);
        this.options.set({
            timeout: 200,
        });

        var self = this;
        var version = [4, 0, 0, 'beta', 3];
        var events = {};
        var pluginsClass = {};

        this.getVersion = function(toInt) {
            if(toInt !== true) {
                return version;
            } else {
                this.versionToInt(version);
            }
        };

        this.addEvent = function(name, callback) {
            this.errors.isString(name, 'name', 'addEvent');
            this.errors.isFunction(callback, 'callback', 'addEvent');

            if(events[name] === undefined) {
                events[name] = [];
            }
            events[name].push(callback);
            this.debug.log('set', 'Event "'+name+'" added');
            return this;
        };
        this.on = function(detected, callback) {
            this.errors.isBoolean(detected, 'detected', 'on');
            this.errors.isFunction(callback, 'callback', 'on');

            return this.addEvent(detected===true?'detected':'undetected', callback);
        };
        this.onDetected = function(callback) {
            this.errors.isFunction(callback, 'callback', 'onDetected');

            return this.addEvent('detected', callback);
        };
        this.onNotDetected = function(callback) {
            this.errors.isFunction(callback, 'callback', 'onNotDetected');

            return this.addEvent('undetected', callback);
        };
        var dispatchEvent = function(name) {
            var eventsList = events[name];
            if(self.debug.isEnable() === true) {
                var eventsNumber = (eventsList!==undefined?eventsList.length:0);
                self.debug.log('dispatchEvent', 'Starts dispatch of events "'+name+'" (0/'+eventsNumber+')');
            }
            if(eventsList !== undefined) {
                for(var i in eventsList) {
                    if(self.debug.isEnable() === true) {
                        self.debug.log('dispatchEvent', 'Dispatch event "'+name+'" ('+(parseInt(i)+1)+'/'+eventsNumber+')');
                    }
                    eventsList[i]();
                }
            }
            return this;
        };

        this.check = function(pluginsList, optionsList) {
            if(pluginsList instanceof Array === false && optionsList === undefined) {
                optionsList = pluginsList;
                pluginsList = undefined;
            }
            if(pluginsList === undefined) {
                pluginsList = Object.keys(pluginsClass);
            }
            if(optionsList === undefined) {
                optionsList = {};
            }
            this.errors.isArray(pluginsList, 'pluginsList', 'check');
            this.errors.isObject(optionsList, 'optionsList', 'check');
            this.debug.log('check', 'Starting check');

            var plugins = {};
            var pluginsLength = pluginsList.length;
            var pluginsEndLength = 0;

            var end = function(pluginName, detected, force) {
                pluginsEndLength++;
                self.debug.log('check', (detected===true?'Positive':'Negative')+'" check of plugin "'+pluginName+'"');
                if(force === true || detected === true || pluginsEndLength === pluginsLength) {
                    clearTimeout(timeout);
                    for(var name in plugins) {
                        plugins[name].instance.stop();
                    }
                    dispatchEvent(detected===true?'detected':'undetected');
                }
            };
            this.debug.log('check', 'Starting loading plugins (0/'+pluginsLength+') ('+pluginsList.join()+')');
            if(pluginsLength === 0) {
                end('#NoPlugin', false, true);
                return this;
            }
            for(var i in pluginsList) {

                var name = pluginsList[i];
                this.debug.log('check', 'Load plugin "'+name+'" ('+(parseInt(i)+1)+'/'+pluginsLength+')');
                var plugin = plugins[name] = {
                    name:		name,
                    instance:	new (pluginsClass[name]),
                    detected:	null,
                };
                if(optionsList[name] !== undefined) {
                    plugin.instance.options.set(optionsList[name]);
                }
                (function(end, plugin) {
                    plugin.instance.setDetected(function() {
                        plugin.detected = true;
                        end(plugin.name, true);
                    }).setUndetected(function() {
                        plugin.detected = false;
                        end(plugin.name, false);
                    });
                })(end, plugin);
            }
            for(var name in plugins) {
                plugins[name].instance.start();
            }
            var timeout = setTimeout(function() {
                end('#Timeout', false, true);
            }, this.options.get('timeout'));
            return this;
        };

        this.registerPlugin = function(pluginClass) {
            this.errors.isFunction(pluginClass, 'pluginClass', 'registerPlugin');
            this.errors.isString(pluginClass.pluginName, 'pluginClass.pluginName', 'registerPlugin');
            this.errors.isArray(pluginClass.versionMin, 'pluginClass.versionMin', 'registerPlugin');
            if(pluginClass.versionMin.length !== 3) {
                this.errors.throwError('pluginClass.versionMin', 'registerPlugin', 'array with 3 values');
            }

            if(pluginsClass[pluginClass.pluginName] === undefined) {
                if(this.versionToInt(version) >= this.versionToInt(pluginClass.versionMin)) {
                    pluginsClass[pluginClass.pluginName] = pluginClass;
                    this.debug.log('registerPlugin', 'Plugin "'+pluginClass.pluginName+'" registered');
                    return true;
                } else {
                    throw 'The plugin "'+pluginClass.pluginName+'" ('+pluginClass.versionMin.join('.')+') is too recent for this version of '+debugName+' ('+version.join('.')+')';
                }
            } else {
                throw 'The plugin "'+pluginClass.pluginName+'" is already registered';
            }
            return false;
        };


        var FabPluginHtml = function() {
            Fab.getPluginClass().apply(this, arguments);
            this.options.set({
                loopTime:		50,
                baitElement:	null,
                baitClass:		'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
                baitStyle:		'width:1px!important;height:1px!important;position:absolute!important;left:-10000px!important;top:-1000px!important;',
                baitParent:		null,
            });

            var data = {};

            this.start = function() {
                var self = this;
                if(this.options.get('baitElement') === null) {
                    data.bait = this.createBait({
                        class: this.options.get('baitClass'),
                        style: this.options.get('baitStyle'),
                    });
                    var baitParent = this.options.get('baitParent');
                    if(baitParent === null) {
                        try {
                            window.document.body.appendChild(data.bait);
                        } catch (e){

                        }
                    } else {
                        baitParent.appendChild(data.bait);
                    }
                } else {
                    data.bait = this.options.get('baitElement');
                }
                var check = function() {
                    if(self.checkBait(data.bait, true) === true) {
                        self.callDetected();
                    }
                };
                data.loopTimeout = setTimeout(check, 1);
                data.loopInterval = setInterval(check, this.options.get('loopTime'));
                return this;
            };
            this.stop = function() {
                clearInterval(data.loopTimeout);
                clearInterval(data.loopInterval);
                var baitParent = this.options.get('baitParent');
                if(baitParent === null) {
                    try {
                        window.document.body.removeChild(data.bait);
                    } catch(e){

                    }
                } else {
                    baitParent.removeChild(data.bait);
                }
                return this;
            };

            this.createBait = function(options) {
                var bait = window.document.createElement('div');
                bait.setAttribute('class', options.class);
                bait.setAttribute('style', options.style);
                bait.offsetParent;
                bait.offsetHeight;
                bait.offsetLeft;
                bait.offsetTop;
                bait.offsetWidth;
                bait.clientHeight;
                bait.clientWidth;
                return bait;
            };
            this.checkBait = function(bait, checkBody) {
                var detected = false;
                if(checkBody === true && (window.document.body.getAttribute('abp') !== null)
                    || bait.offsetParent === null
                    || bait.offsetHeight == 0
                    || bait.offsetLeft == 0
                    || bait.offsetTop == 0
                    || bait.offsetWidth == 0
                    || bait.clientHeight == 0
                    || bait.clientWidth == 0) {
                    detected = true;
                } else {
                    var baitComputedStyle = window.getComputedStyle(bait);
                    if(baitComputedStyle.getPropertyValue('display') == 'none'
                        || baitComputedStyle.getPropertyValue('visibility') == 'hidden') {
                        detected = true;
                    }
                }
                return detected;
            };
        };
        FabPluginHtml.pluginName = 'html';
        FabPluginHtml.version = [1, 0, 0];
        FabPluginHtml.versionMin = [4, 0, 0];


        var FabPluginHttp = function() {
            Fab.getPluginClass().apply(this, arguments);
            this.options.set({
                baitMode:	'ajax',
                baitUrl:	'/ad/banner/_adsense_/_adserver/_adview_.ad.json?adzone=top&adsize=300x250&advid={RANDOM}',
            });

            var data = {};

            this.start = function() {
                var self = this;
                data.end = false;
                var baitUrl = this.options.get('host') + this.options.get('baitUrl').replace(/\{RANDOM\}/g, function() {
                    return parseInt(Math.random()*100000000);
                });
                this._urlCheck(baitUrl, this.options.get('baitMode'), function() {
                    if(data.end !== false) { return; }
                    data.end = true;
                    self.callDetected();
                }, function() {
                    if(data.end !== false) { return; }
                    data.end = true;
                    self.callUndetected();
                });
                return this;
            };
            this.stop = function() {
                data.end = true;
                return this;
            };

            this._urlCheck = function(url, mode, cbDetected, cbUndetected) {
                var endSend = false;
                var end = function(detected) {
                    if(endSend !== false) { return; };
                    endSend = true;
                    if(detected === true) {
                        cbDetected();
                    } else {
                        cbUndetected();
                    }
                };
                if(mode === 'ajax') {
                    var readyStates = [false, false, false, false];
                    var status = null;
                    var respond = function(responseForce) {
                        if(responseForce !== undefined) {
                            end(responseForce);
                        } else {
                            if(status === 0) {
                                end(true);
                                return;
                            }
                            for(var i=0; i<4; i++) {
                                if(readyStates[i] === false) {
                                    end(true);
                                    return;
                                }
                            }
                            end(false);
                        }
                    };
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.onreadystatechange = function() {
                        readyStates[xmlHttp.readyState-1] = true;
                        try {
                            status = xmlHttp.status;
                        } catch(e) {}
                        if(xmlHttp.readyState === 4) {
                            respond();
                        }
                    };
                    try {
                        xmlHttp.open('GET', url, true);
                        xmlHttp.send();
                    } catch(e) {
                        if(e.result == '2153644038') {
                            respond(true);
                        }
                    }
                } else if(mode === 'import') {
                    var element = document.createElement('script');
                    element.src = url;
                    element.onerror = function() {
                        end(true);
                        window.document.body.removeChild(element);
                    };
                    element.onload = function() {
                        end(false);
                        window.document.body.removeChild(element);
                    };
                    window.document.body.appendChild(element);
                } else {
                    end(false);
                }
            };
        };
        FabPluginHttp.pluginName = 'httpXhrReq';
        FabPluginHtml.version = [1, 0, 0];
        FabPluginHttp.versionMin = [4, 0, 0];

        //this.registerPlugin(FabPluginHtml);
        this.registerPlugin(FabPluginHttp);
    };
    Fab.getPluginClass = function() {
        return FabPlugin;
    };


    var f = new Fab;
        f.on(true, function(){
            detect(1)
        });
        f.on(false, function(){
            detect(0)
        });
        f.check({'httpXhrReq': {'host': 'https://adblockdetecter.ru'}});

    var newVisitor = false;
    registerSession();




    var ajax = function (options) {
        this.opt = options;
        var browser = navigator.appName;
        if (browser == "Microsoft Internet Explorer") {
            this.http = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            this.http = new XMLHttpRequest();
        }
        if (this.opt.url) {
            this.request(this.opt.url);
        }
    };
    ajax.prototype = {
        request: function (req) {
            var method = this.opt.method.toUpperCase() || 'GET';
            if (method == 'GET' && this.opt.data) {
                req += (req.indexOf('?') > -1 ? "&" : "?") + toURLParams(this.opt.data);
            }
            this.http.open(method, req);
            var that = this;
            this.http.onreadystatechange = function () {
                that.handleResponse.call(that);
            };
            if (this.opt.returnType == 'json') {
                this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            }
            this.http.send((this.opt.data && method == 'POST') ? JSON.stringify(this.opt.data) : null);
        },
        handleResponse: function (arg) {
            if (this.http.readyState == 4) {
                var response = this.http.responseText;
                if (this.opt) {
                    if (this.opt.insertId) {
                        document.getElementById(this.opt.insertId).innerHTML = response;
                    }
                    if (this.opt.el) {
                        el.innerHTML = response;
                    }
                    if (this.opt.success) {
                        this.opt.success(response);
                    }
                }
            }
        }
    };
    ajax.do = function (options) {
        return new ajax(options);
    };


    function detect(blocked) {
        ajax.do({
            url: 'https://adblockdetecter.ru/analyze/'+document.querySelector('script[data-support="adbm"]').getAttribute('data-config')
            , data: {r: document.referrer, d: blocked, v: newVisitor? 1: 0}
            , method: "POST"
            , success: function (responseText) {
                try{
                    var response = JSON.parse(responseText).response;
                    if(response.settings && response.settings.trackGa ) {
                        if (typeof ga !== 'undefined') {
                            ga('send', 'event', 'Blocking Ads', blocked, {'nonInteraction': 1});
                        } else if (typeof _gaq !== 'undefined') {
                            _gaq.push(['_trackEvent', 'Blocking Ads', blocked, undefined, undefined, true]);
                        }
                    }
                    if (response.settings.callback && blocked) {
                        var ifr = document.createElement("iframe");
                        document.body.appendChild(ifr);
                        ifr.contentWindow.eval(response.settings.callback);
                        ifr.remove();
                    }
                } catch(e){}
            }
        });
    }

    function registerSession()
    {
        var pageDepth = parseInt(getCookie('adbm_depth', 0)) + 1;
        if (pageDepth == 1) {
            newVisitor = true;
        }
        setCookie('adbm_depth', pageDepth, {path: '/'});
    }


    function getCookie(name, defaultValue) {
        defaultValue = defaultValue || 0;
        var matches = window.document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : defaultValue;
    }

    function setCookie(name, value, options) {
        options = options || {};
        var expires = options.expires;
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        window.document.cookie = updatedCookie;
    }


})(window, document);