/* -------------------------------------------------- *
 * Project scripts
 * -------------------------------------------------- *
 * Author: Morozov Igor
 * URL: http://www.morozoff.info/
 * Copyright: 2011 Morozov Igor
 ** -------------------------------------------------- */

$(document).ready(function() {
    jQuery.fn.center = function () {
        var top = ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() - 150;
        if (top < 0) {
            top = 0;
        }
        this.css("top", top + "px");

        return this;
    }

    jQuery.fn.clientCenter = function () {
        if (this.outerHeight() < $(window).height()) {
            this.css('top', (($(window).height() - this.outerHeight()) / 2) + 'px');
        } else {this.css('top', 0)};
        if (this.outerWidth() < $(window).width()){
            this.css('left', (($(document).width() - this.outerWidth()) / 2) + 'px')
        } else {this.css('left', 0)}
        return this;
    }
});

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

if(!Array.prototype.indexOf){
    Array.prototype.indexOf = function(obj){
        for(var i=0; i<this.length; i++){
            if(this[i]==obj){
                return i;
            }
        }
        return -1;
    }
}

if (!Number.prototype.moneyFormat) {
    Number.prototype.moneyFormat = function(decimals, delimiter, precision) {
        var decimals = decimals || 2;
        var delimiter = delimiter || ' ';
        var precision = precision || ',';
        //round  upwards to {decimals} decimals digits
        var nstr = (Math.ceil((this.toFixed(decimals+1)*Math.pow(10,decimals)))/Math.pow(10,decimals)).toFixed(decimals)+'';
        var x = nstr.split('.');
        var integer = x[0];
        if (Math.abs(integer) > 9999) {
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(integer))
                integer = integer.replace(rgx, '$1' + delimiter + '$2');
        }
        var rest = x[1].replace(/0+$/,'');
        return integer + (parseInt(rest)>0 ? precision + rest : '');
    };
}

$(function(){
    ofmtlptip();

    $('li.li-reply a').live('click', function() {
        $.ajax({
            url: '/car/canEdit/' + $(this).attr('href').split('/').pop() + '?' + new Date().getTime(),
            type: 'GET',
            dataType: 'json',
            context: this,
            timeout: 15000,
            success: function(r) {
                if (r != null && r.result == 'ok') {
                    document.location.href = this.href;
                    return true;
                } else if (r.error) {
                    document.location.href = r.redirectUrl;
                }
            },
            error: function() {
                ONotice.error('Что-то пошло не так');
            }
        });

        return false;
    });

    $.post_view_count.put();

    var actions = {
        'b-mtauthor-i': function() {
            var cardauthor = $(this);

            $('.ava-box, .poster-name', cardauthor).bind('mouseenter', function() {
                $(this).parents('.b-mtauthor-i').addClass('mtauthor-active');
            });
            cardauthor.bind('mouseleave', function() {
                var el = $(this);
                if (el.hasClass('mtauthor-active')) {
                    el.removeClass('mtauthor-active');
                }
            });
        },
        'li-bestbest a.li-bb-link': function() {
            $(this).unbind('click').bind('click', function() {
                if($(this).parent().attr('class').search("li-best-hover") == -1){
                    $(this).parent().addClass('li-best-hover');
                } else {
                    $(this).parent().removeClass('li-best-hover');
                }
                return false;
            });
        },
        'autoba-fast-contacts': function() {
            $(this).find('a').unbind('click').bind('click', function() {
                $.scrollTo('#autoba-contacts-content', 400);
                return false;
            });
        },
        // Comment posting
        'ofm-postcomment': function() {
            $(this).unbind('submit').bind('submit', function() {
                var form = $(this);
                var disabledClassName = 'ajax';
                var textArea = $('textarea[name="message"]', form);

                if ($.trim(textArea.val()).length < 3) {
                    alert('Чего же вы молчите?');
                } else {
                    if (!textArea.hasClass(disabledClassName)) {
                        $.ajax({
                            type: 'POST',
                            url:  form.attr('action'),
                            data: form.serialize(),
                            beforeSend: function() {
                                textArea.addClass(disabledClassName);
                            },
                            error: function(request, error) {
                                if (request.error().status === 403) {
                                    window.profileAuth && window.profileAuth.validatePhone();
                                }

                                textArea.removeClass(disabledClassName);
                            },
                            success: function(data) {
                                if (data.error) {
                                    ONotice.error(data.error);
                                    textArea.removeClass(disabledClassName).val('');
                                    return;
                                } else {
                                    var modfunctions = '';
                                    if (ModerEditFunctions) {
                                        modfunctions += '<span class="com-tls-edit"><a href="#" class="cite_' + data.comment.comment_id + '">Редактировать</a></span>';
                                    }
                                    if (ModerDeleteFunctions) {
                                        modfunctions += '<span class="com-tls-remove"><a href="#" class="cite_' + data.comment.comment_id + '">Удалить</a></span>';
                                    }
                                    var comment = '<li id="comment_' + data.comment.comment_id + '"' + ((data.user.user_id == data.advertAuthor.user_id ) ? ' class="ofm-comments-my"' : '') + '>' +
                                        '<div class="b-cmts-author">' +
                                        '<strong><a href="' + data.user.profileUrl + '"><i class="b-cmts-ava" style="background-image: url(\'' + data.user.avatarUrl +'\');"></i>' + data.user.username + '</a></strong> только что' +
                                        '</div>' +
                                        '<div id="message_' + data.comment.comment_id + '" class="content">' + data.message + '</div>' +
                                        '<p class="com-tls">' +
                                        '<span class="com-tls-answer"><a href="#commentform" class="cite_' + data.comment.comment_id + '">Ответить</a></span>' +
                                        '<span class="com-tls-cite"><a href="#commentform" class="cite_' +  + data.comment.comment_id + '">Цитировать</a></span>' +
                                        modfunctions +
                                        '</p>' +
                                        '</li>';
                                    var place = $('.ofm-comments__ul');
                                    $(comment).appendTo(place);
                                    bindCommentActions(data.comment.comment_id);
                                    $('#comments_title').show();
                                    $.scrollTo('#comment_' + data.comment.comment_id, 400);
                                    $('#nocomments').remove();
                                    textArea.removeClass(disabledClassName).val('');
                                }
                                ONotice.remove();
                                getInstance();
                            },
                            dataType: 'json'
                        });
                    }
                }
                return false;
            });
        },
        'ofm-btn-send-comments': function() {
            $(this).unbind('click').bind('click', function() {
                window.location.hash = '#commentform';
                $('#postmessage').focus();
            });
        },
        'btn-up': function() {
            upBindClick($(this));
        },
        'ofm-carmodel-add': function() {
            $(this).bind('click', function(e) {
                $('.autoba-addcustommodel input[name="model"]').focus();
            });
        },
        'ofm-tooltip-i': function() {
            var lock = false;

            var sendModel = function() {
                var model = $(this).find('input[name="model"]').val();
                if (model != '' && !lock) {
                    $.ajax({
                        url: '/carmodel',
                        type: 'post',
                        dataType: 'json',
                        data: {model: model},
                        context: this,
                        beforeSend: function() {
                            lock = true;
                            ONotice.notify('Отправляю');
                        },
                        success: function(response) {
                            $('.ofm-tip').mouseleave();

                            if (response.success) {
                                ONotice.notify('Заявка успешно отправлена', 5 , {backgroundColor: 'green'});
                                $('#ofm-tooltip').hide();
                            } else {
                                if (response.error) {
                                    ONotice.error(response.error);
                                }
                                else {
                                    ONotice.error('Что-то пошло не так. Зявка не была отправлена.');
                                }
                            }
                        },
                        error: function() {
                            ONotice.error('Что-то пошло не так. Зявка не была отправлена.');
                        },
                        complete: function() {
                            lock = false;
                        }
                    });
                }
            }.bind(this);

            $(this).find('.autoba-addcustommodel input[name="model"]').live('keypress', function(e) {
                if (e.keyCode == 13) {
                    sendModel();
                }
            });

            $(this).find('.autoba-addcustommodel button').live('click', function() {
                sendModel();
            });

            $(this).find('.ofm-forms-btn .yes').live('click', function() {
                $('#ofm-tooltip').trigger('yes');
                $('#ofm-tooltip').hide();
            });

            $(this).find('.ofm-forms-btn .no').live('click', function() {
                $('#ofm-tooltip').trigger('no');
                $('#ofm-tooltip').hide();
            });
        },
        'autoba-msgphotos-zoom': function() {
            $(this).click(function(){window.open(this.href);return false;});
        },
        'all-photosmcz': function() {
            $(this).click(function(){window.open(this.href);return false;});
        }
    };

    function getInstance() {
        for (var i in actions) {
            if (typeof(actions[i]) == 'object') {
                for (var j in actions[i]) {
                    if (actions[i][j]) {
                        $('.' + i + '.' + j).each(actions[i][j]);
                    }
                }
            } else {
                $('.' + i).each(actions[i]);
            }
        }
    }

    // bookmarks on my adverts & search pages
    $('.add-bookmark').live('click', function() {
        var adv = $(this);
        var noCache = new Date().getTime();

        if (adv.hasClass('i-fav-star')) {
            ONotice.notify('Удаляю закладку…', 0);
            $.getJSON(adv.attr('href'), { "noCache": noCache }, function(data) {
                if ( ! data || ! data.success) {
                    ONotice.notify('Ошибка подключения');
                    return;
                }
                if (data.success) {
                    if ($('.ofm-tofavsmall').length > 0) {
                        $('.i-fav').removeClass('i-fav-star').attr('title', 'Добавить в закладки');
                        $('.ofm-tofavsmall').find('a').removeClass('i-fav-star').html('<i class="b-ico i-in-smallfav"></i> Добавить в закладки');
                    } else {
                        var id = $.getSplitValue(adv.parents('tr').attr('id'));
                        $('#car_'+id+' .i-fav').removeClass('i-fav-star').attr('title', 'Добавить в закладки');
                        $('#car_'+id+' .fav a').removeClass('i-fav-star').html('<i class="b-ico i-in-smallfav"></i> Добавить в закладки');
                    }
                    ONotice.remove();
                }
            });
        } else {
            ONotice.notify('Добавляю в закладки…', 0);
            $.getJSON(adv.attr('href'), { "noCache": noCache }, function(data) {
                if ( ! data) {
                    ONotice.notify('Ошибка подключения');
                    return;
                }
                if (data.error) {
                    ONotice.notify(data.error);
                }
                else if(data.success) {
                    if ($('.ofm-tofavsmall').length > 0) {
                        $('.i-fav').addClass('i-fav-star').attr('title', 'Удалить из закладок');
                        $('.ofm-tofavsmall').find('a').addClass('i-fav-star').html('<i class="b-ico i-in-smallfav"></i> Удалить из закладок');
                    } else {
                        var id = $.getSplitValue(adv.parents('tr').attr('id'));
                        $('.i-fav', '#car_'+id).addClass('i-fav-star').attr('title', 'Удалить из закладок');
                        $('.fav a', '#car_'+id).addClass('i-fav-star').html('<i class="b-ico i-in-smallfav"></i> Удалить из закладок');
                    }
                    ONotice.remove();
                }
            });
        }

        return false;
    });

    if ($('.b-ab-promo').length) {
        premiumAdvertBanner.init();
    } else {
        premiumPopup.init();
    }
    CloseCarPopup.init();
    deleteCarPopup.init();
    getInstance();

});

var premiumPopupActions = {
    activateHideByUser: function () {
        $('html').live(
            'click',
            $.proxy(
                function (e) {
                    if ($(this.selectors.bigPopup).has(e.target).length === 0) {
                        $.proxy(premiumPopupActions.hidePremiumPopup, this)();
                    }
                },
                this
            )
        );
        $('html').live(
            'keydown',
            $.proxy(
                function (e) {
                    if (e.keyCode == 27) {
                        $.proxy(premiumPopupActions.hidePremiumPopup, this)();
                    }
                },
                this
            )
        );
    },
    hidePremiumPopup: function(e) {
        $(this.selectors.bigPopupWrapper).hide();
        $(this.selectors.body).css({'overflow':'visible'});
        this.carId = null;

        return false;
    }
};

var premiumPopup = {
    token: null,
    carId:null,
    premiumCost: null,
    isSingleCar: false,
    sendRequestLock:false,
    carRowBlockUrl:'/info/carrowblock',
    makePremiumUrl:'/payments/markupontop',
    cancelPremiumUrl:'/payments/cancelmarkup',

    errors: {
        serverError: 'Что-то пошло не так'
    },

    messages: {
        preparePremium: 'Подготавливаю как будет выглядеть ваше объявление...'
    },

    selectors:{
        showPremiumPopup:'.showPremiumPopup',
        hidePremiumPopup:'.hidePremiumPopup',
        makePremium:'.makePremium',
        renewPremium:'.renewPremium',
        cancelPremium:'.cancelPremium',
        bigPopupWrapper:'#autofleamarket-outlayer',
        bigPopup:'.b-autofleamarket__popup',
        smallPopup:'.b-pop-up',
        premiumInfoTitle:'.premiumInfoTitle',
        carRow:'.carRow',
        premiumCarBlock: '#premiumCarBlock',
        preparePremium: '.sample-image',
        body:'body'

    },

    events:{
        showPremiumPopup:{
            mouseenter:function(e) {
                $(e.currentTarget).siblings(this.selectors.smallPopup).show();
            },
            mouseleave:function(e) {
                $(e.currentTarget).siblings(this.selectors.smallPopup).hide();
            },
            click:function(e) {
                var target = $(e.currentTarget);
                this.carId = $.getSplitValue(target.parents(this.selectors.carRow).attr('id'));
                target.siblings(this.selectors.smallPopup).hide();


                $.ajax({
                    type: 'get',
                    dataType: 'json',
                    url: this.carRowBlockUrl + '?' + new Date().getTime(),
                    data: { carId: this.carId },
                    context: this,
                    beforeSend: function() {
                    },
                    error: function() {
                        $(this.selectors.preparePremium)
                            .css('color', '#F30')
                            .text(this.errors.serverError);
                    },
                    success: function(response) {
                        if (response.error) {
                            ONotice.error(response.error);
                        } else {
                            $(this.selectors.body).css({'overflow':'hidden'});
                            $(this.selectors.premiumInfoTitle).text(target.data('info-title'));
                            $(this.selectors.bigPopupWrapper).show();
                            $(this.selectors.bigPopup).clientCenter();

                            $(this.selectors.premiumCarBlock).html('');
                            $(this.selectors.preparePremium)
                                .css('color', '#000')
                                .text(this.messages.preparePremium)
                                .show();

                            $(this.selectors.premiumCarBlock).html(response.success);
                            $(this.selectors.preparePremium).hide();
                            $(this.selectors.bigPopup).clientCenter();
                        }
                    }
                });

                return false;
            }
        },
        hidePremiumPopup:{
            click:function(e) {
                $(this.selectors.bigPopupWrapper).hide();
                $(this.selectors.body).css({'overflow':'visible'});
                this.carId = null;
                return false;
            }
        },
        makePremium:{
            click:function(e) {
                this.sendRequest(this.makePremiumUrl);
                return false;
            }
        },
        renewPremium:{
            click:function(e) {
                this.carId = $.getSplitValue($(e.currentTarget).parents(this.selectors.carRow).attr('id'));
                this.sendRequest(this.makePremiumUrl);
                return false;
            }
        },
        cancelPremium:{
            click:function(e) {
                this.carId = $.getSplitValue($(e.currentTarget).parents(this.selectors.carRow).attr('id'));
                this.sendRequest(this.cancelPremiumUrl);
                return false;
            }
        },
        window:{
            resize:function() {
                $(this.selectors.bigPopup).clientCenter();
            }
        }
    },

    init: function() {
        $(this.selectors.showPremiumPopup).live('mouseenter', $.proxy(this.events.showPremiumPopup.mouseenter, this));
        $(this.selectors.showPremiumPopup).live('mouseleave', $.proxy(this.events.showPremiumPopup.mouseleave, this));
        $(this.selectors.showPremiumPopup).live('click', $.proxy(this.events.showPremiumPopup.click, this));

        $(this.selectors.hidePremiumPopup).live('click', $.proxy(this.events.hidePremiumPopup.click, this));
        $.proxy(premiumPopupActions.activateHideByUser, this)();

        $(this.selectors.makePremium).live('click', $.proxy(this.events.makePremium.click, this));
        $(this.selectors.renewPremium).live('click', $.proxy(this.events.renewPremium.click, this));
        $(this.selectors.cancelPremium).live('click', $.proxy(this.events.cancelPremium.click, this));

        $(window).resize($.proxy(this.events.window.resize, this));
    },

    buildRequestData: function() {
        return {
            isSingleCar: this.isSingleCar ? 1 : 0,
            token: this.token,
            carId: this.carId
        };
    },

    sendRequest: function(url) {
        if (this.sendRequestLock) {
            return false;
        }

        $.ajax({
            type: 'post',
            dataType: 'json',
            url: url + '?' + new Date().getTime(),
            data: this.buildRequestData(),
            context: this,
            beforeSend: function() {
                this.sendRequestLock = true;
            },
            error: function() {
                ONotice.error(this.errors.serverError);
            },
            success: function(response) {
                if (response && response.status == 'ok') {
                    $('#car_' + this.carId).replaceWith(response.html);
                    upBindClick($('#car_' + this.carId).find('.btn-up'));
                } else if (response.reload) {
                    window.location.reload(true);
                } else if (response.redirect) {
                    window.location = response.redirect;
                } else if (response.error) {
                    ONotice.error(response.error);
                }

                if (response.balance) {
                    $('#user-balance').html(response.balance);
                }

                this.carId = null;
                $(this.selectors.bigPopupWrapper).hide();
            },
            complete: function() {
                this.sendRequestLock = false;
                $(this.selectors.body).css({'overflow':'visible'});
            }
        });
    }
};

var premiumAdvertBanner = {
    token: null,
    carId: null,
    sendRequestLock: false,
    carRowBlockUrl: '/info/carrowblock',
    makePremiumUrl: '/payments/markupontop',
    cancelPremiumUrl: '/payments/cancelmarkup',

    errors: {
        serverError: 'Что-то пошло не так'
    },

    messages: {
        preparePremium: 'Подготавливаю как будет выглядеть ваше объявление...'
    },

    selectors:{
        showPremiumPopup: '.showPremiumPopup',
        hidePremiumPopup: '.hidePremiumPopup',
        makePremium: '.makePremium',
        bigPopupWrapper: '#autofleamarket-outlayer',
        bigPopup: '.b-autofleamarket__popup',
        smallPopup: '.b-ab-promo .b-pop-up',
        premiumInfoTitle: '.premiumInfoTitle',
        premiumCarBlock: '#premiumCarBlock',
        preparePremium: '.sample-image',
        body: 'body',
        premiumAdvertBanner: '.b-ab-promo'
    },

    events:{
        showPremiumPopup:{
            mouseenter:function(e) {
                $(this.selectors.smallPopup).show();
            },
            mouseleave:function(e) {
                $(this.selectors.smallPopup).hide();
            },
            click:function(e) {
                var target = $(e.currentTarget);
                this.carId = $(this.selectors.premiumAdvertBanner).data(
                    'advert-id'
                );
                $(this.selectors.smallPopup).hide();

                $.ajax({
                    type: 'get',
                    dataType: 'json',
                    url: this.carRowBlockUrl + '?' + new Date().getTime(),
                    data: { carId: this.carId },
                    context: this,
                    beforeSend: function() {
                    },
                    error: function() {
                        $(this.selectors.preparePremium)
                            .css('color', '#F30')
                            .text(this.errors.serverError);
                    },
                    success: function(response) {
                        if (response.error) {
                            ONotice.error(response.error);

                            return false;
                        }

                        $(this.selectors.body).css({'overflow':'hidden'});
                        $(this.selectors.premiumInfoTitle).text(
                            target.data('info-title')
                        );
                        $(this.selectors.bigPopupWrapper).show();
                        $(this.selectors.bigPopup).clientCenter();

                        $(this.selectors.premiumCarBlock).html('');
                        $(this.selectors.preparePremium)
                            .css('color', '#000')
                            .text(this.messages.preparePremium)
                            .show();

                        $(this.selectors.premiumCarBlock).html(response.success);
                        $(this.selectors.preparePremium).hide();
                        $(this.selectors.bigPopup).clientCenter();
                    }
                });

                return false;
            }
        },
        hidePremiumPopup:{
            click:function(e) {
                $(this.selectors.bigPopupWrapper).hide();
                $(this.selectors.body).css({'overflow':'visible'});
                this.carId = null;
                return false;
            }
        },
        makePremium:{
            click:function(e) {
                this.sendRequest(this.makePremiumUrl);
                return false;
            }
        },
        window:{
            resize:function() {
                $(this.selectors.bigPopup).clientCenter();
            }
        }
    },

    init: function() {
        $(this.selectors.showPremiumPopup).live('mouseenter', $.proxy(this.events.showPremiumPopup.mouseenter, this));
        $(this.selectors.showPremiumPopup).live('mouseleave', $.proxy(this.events.showPremiumPopup.mouseleave, this));
        $(this.selectors.showPremiumPopup).live('click', $.proxy(this.events.showPremiumPopup.click, this));
        $(this.selectors.hidePremiumPopup).live('click', $.proxy(this.events.hidePremiumPopup.click, this));
        $(this.selectors.makePremium).live('click', $.proxy(this.events.makePremium.click, this));

        $.proxy(premiumPopupActions.activateHideByUser, this)();

        $(window).resize($.proxy(this.events.window.resize, this));
    },

    buildRequestData: function() {
        return {
            isSingleCar: 1,
            token: this.token,
            carId: this.carId
        };
    },

    sendRequest: function(url) {
        if (this.sendRequestLock) {
            return false;
        }

        $.ajax({
            type: 'post',
            dataType: 'json',
            url: url + '?' + new Date().getTime(),
            data: this.buildRequestData(),
            context: this,
            beforeSend: function() {
                this.sendRequestLock = true;
            },
            error: function() {
                ONotice.error(this.errors.serverError);
            },
            success: function(response) {
                if (response && response.status == 'ok') {
                    $(this.selectors.premiumAdvertBanner).remove();

                    SearchGui.emptyFilter();
                    SearchAdvert.setHash();
                    SearchAdvert.parseHash(window.location.hash);
                } else if (response.reload) {
                    window.location.reload(true);
                } else if (response.redirect) {
                    window.location = response.redirect;
                } else if (response.error) {
                    ONotice.error(response.error);
                }

                if (response.balance) {
                    $('#user-balance').html(response.balance);
                }

                this.carId = null;
                $(this.selectors.bigPopupWrapper).hide();
            },
            complete: function() {
                this.sendRequestLock = false;
                $(this.selectors.body).css({'overflow':'visible'});
            }
        });
    }
};

var deleteCarPopup = {
    token: null,
    carId: null,
    lock: false,
    isModerator: false,
    deletionReasons: {},
    deleteAdvertUrl: '/car/multipleDelete',

    errors: {
        serverError: 'Что-то пошло не так',
        advancedReasonError: 'Укажите причину'
    },

    texts: {
        closeAdvertQuestion: 'Закрытое объявление не будет доступно<br/> для других пользователей. Продолжить?'
    },

    selectors:{
        cancelLink: '.delete-car-popup .cancel-link',
        openLink: '.ofm-btn.ofm-btn-rd.btn-open',
        popup: '.delete-car-popup',
        moderatorPopup: '.li-bestbest.arrow-bottom-left.li-best-hover',
        deleteLink: '.li-del-car a',
        deleteConfirmationLink: '.confirm.delete-advert',
        reasonsSelect: 'select[name=reason]',
        body: 'body',
        advancedReasonField: 'textarea[name=advanced_reason]',
        deleteMultipleAdvertsLink: '#deleteAdverts',
        advancedReasonError: '#advancedReasonError'
    },

    getDeletionReasonHtml: function(){
        if (Object.keys(this.deletionReasons).length != 0) {
            var $select = $('<select />', {'name': 'reason'});
            for (var key in this.deletionReasons) {
                var $option = $('<option />');
                $option.attr('value', key);
                $option.text(this.deletionReasons[key]);
                $select.append($option);
            }
            return $select[0].outerHTML;
        }
        return '';
    },

    getTextHtml:function(){
        if (!this.isModerator) {
            return '<p class="c-red">' + this.texts.closeAdvertQuestion + '</p>';
        }

        return '';
    },

    events:{
        open: {
            click: function(e){
                var $button = $(e.target).parents('a:first');
                $.ajax({
                    url: '/car/canOpen/' + $button.data('advert-id') + '?' + new Date().getTime(),
                    type: 'GET',
                    dataType: 'json',
                    timeout: 15000,
                    beforeSend: function() {
                        ONotice.notify('Открываю...');
                    },
                    error: function(request, error) {
                        if (request.error().status === 403) {
                            window.profileAuth && window.profileAuth.validatePhone();
                        } else {
                            ONotice.error(error);
                        }
                    },
                    context: this,
                    success: function(r) {
                        if (r != null && r.result == 'ok') {
                            window.location = $button.data('url');
                        } else if (r.error) {
                            if (r.redirectUr) {
                                window.location = r.redirectUrl;
                            } else {
                                ONotice.error(r.error);
                            }
                        }
                    }
                });

                return false;
            }
        },
        cancelDeletion: {
            click: function(e) {
                $(this.selectors.popup).hide();

                return false;
            }
        },
        showPopup: {
            click: function(e) {
                deleteCarPopup.addPopup(
                    $(this.selectors.deleteMultipleAdvertsLink).length > 0
                        ? $(this.selectors.deleteMultipleAdvertsLink)[0]
                        : e.target,
                    $(this.selectors.popup)
                );

                return false;
            }
        },
        toggleAdvancedReasonField: {
            change: function(e) {
                if ($(e.target).val() == 4) {
                    $(this.selectors.advancedReasonField).show();
                } else {
                    $(this.selectors.advancedReasonField).hide();
                }
            }
        },
        deleteAdverts: {
            click: function(e) {
                if (this.lock) {
                    return false;
                }

                this.lock = true;

                var obj = $(e.target);
                var ids = [];
                $('.advertsCheckbox:checked').each(function(){
                    ids.push($(this).val());
                });
                if (!ids.length && !this.carId) {
                    ONotice.error('Не выбрано ни одного объявления');

                    return false;
                }

                if (this.carId) {
                    ids.push(this.carId);
                }

                $.ajax({
                    type: 'post',
                    dataType: 'json',
                    url: this.deleteAdvertUrl + '?' + new Date().getTime(),
                    data: {
                        ids: ids,
                        token: this.token,
                        reason: $(this.selectors.reasonsSelect + ' option:selected').val(),
                        advancedReason: $(this.selectors.advancedReasonField).val()
                    },
                    context: this,
                    beforeSend: function() {
                        ONotice.notify('Закрываю...');
                    },
                    success: function(response) {
                        if (response.reload) {
                            window.location.reload(true);
                        } else if (response.redirect) {
                            window.location = response.redirect;
                        } else if (response.error) {
                            ONotice.error(response.error);
                        }

                        this.carId = null;
                    },
                    error: function() {
                        ONotice.error('Что-то пошло не так.');
                    },
                    complete: function() {
                        this.hidePopups();

                        this.lock = false;
                    }
                });

                obj.blur();
            }
        },
        reasonChanged: {
            change: function(e) {
                this.fixPosition(
                    $(this.selectors.popup),
                    $(
                        $(this.selectors.deleteMultipleAdvertsLink).length > 0
                            ? this.selectors.deleteMultipleAdvertsLink
                            : this.selectors.deleteLink
                    )
                );
            }
        },
        hidePopupByClick: {
            click: function(e) {
                var moderatorPopup = $(this.selectors.moderatorPopup);
                var deletionPopup = $(this.selectors.popup);

                if (moderatorPopup.has(e.target).length === 0) {
                    moderatorPopup.removeClass('li-best-hover');
                }

                if (deletionPopup.has(e.target).length === 0) {
                    deletionPopup.hide();
                }
            }
        },
        hidePopupByKeyUp: {
            keyup: function(e) {
                if (e.keyCode == 27) {
                    this.hidePopups();
                }
            }
        }
    },

    hidePopups: function() {
        $(this.selectors.moderatorPopup).removeClass('li-best-hover');
        $(this.selectors.popup).hide();
    },

    init: function() {
        this.carId = $('h1.m-title').data('advert-id');

        $(this.selectors.cancelLink).live('click', $.proxy(this.events.cancelDeletion.click, this));
        $(this.selectors.deleteLink).live('click', $.proxy(this.events.showPopup.click, this));
        $(this.selectors.deleteMultipleAdvertsLink).live('click', $.proxy(this.events.showPopup.click, this));
        $(this.selectors.deleteConfirmationLink).live('click', $.proxy(this.events.deleteAdverts.click, this));
        $(this.selectors.reasonsSelect).live('change', $.proxy(this.events.toggleAdvancedReasonField.change, this));
        $(this.selectors.openLink).live('click', $.proxy(this.events.open.click, this));

        $('html').live('click', $.proxy(this.events.hidePopupByClick.click, this));
        $('html').live('keyup', $.proxy(this.events.hidePopupByKeyUp.keyup, this));

        $(this.selectors.reasonsSelect).live('change', $.proxy(this.events.reasonChanged.change, this));
    },
    addPopup: function(toEl, popup) {
        popup.hide();
        deleteCarPopup.fixArrow(popup);
        deleteCarPopup.fixPosition(popup, $(toEl));
        popup.show();
    },
    fixArrow: function(popup) {
        if (popup.parent().hasClass('arrow-right')) {
            popup.find('> i').addClass('b-pop-up__arrow-3');
        } else if (popup.parent().hasClass('arrow-bottom')) {
            popup.find('> i').addClass('b-pop-up__arrow-1');
        } else if (popup.parent().hasClass('arrow-bottom-right')) {
            popup.find('> i').addClass('b-pop-up__arrow-2');
        } else if (popup.parent().hasClass('arrow-bottom-left')) {
            popup.find('> i').addClass('b-pop-up__arrow-4');
        }
    },
    fixPosition: function(popup, element) {
        if (!popup.parent().hasClass('arrow-right')) {
            popup.css('top', element.position().top - popup.height()-popup.find('> i').height());
            popup.css('left', element.position().left - popup.width() * 0.1 + element.width() * 0.5);
        }
    }
};

var CloseCarPopup = {
    getTemplate: function(){
        var template =
        '<div class="b-pop-up close-car-popup">' +
            '<div class="b-pop-up-i pop-up-2">' +
                '' + deleteCarPopup.getTextHtml() + '' +
                '' + deleteCarPopup.getDeletionReasonHtml() + '' +
                '<textarea class="advanced-reason" name="advanced_reason" type="text" style="display: none;" value=""></textarea>' +
                '<div class="advanced-reason-error" id="advancedReasonError"></div>' +
                '<div style="clear:both;"></div>' +
                '<a href="#" class="ofm-btn ofm-btn-rd confirm"><span><span>Да, закрыть</span></span></a>' +
                '<a href="#" class="cancel-link">Отменить</a>' +
                '</div>' +
                '<i class="b-pop-up__arrow-4"></i>' +
        '</div>';
        return template;
    },
    closeByModerator: function(){
        $.ajax({
            url: '/car/canTrash/' + this.data('advert-id') + '?' + new Date().getTime(),
            type: 'GET',
            dataType: 'json',
            timeout: 15000,
            error: function(request, error) {
                ONotice.error(error);
            },
            context: this,
            success: function(r) {
                if (r != null && r.result == 'ok') {
                    var popup = $(CloseCarPopup.getTemplate());
                    CloseCarPopup.addPopup(this, popup);
                } else if (r.error) {
                    switch(r.error) {
                        case 'USER_NOT_FOUND':
                        case 'USER_NOT_ACTIVE':
                            document.location.href = r.redirectUrl;
                            break;
                        default:
                            ONotice.error(r.error);
                    }
                }
            }
        });
    },
    closeByOwner: function(){
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: this.data('url') + '?' + new Date().getTime(),
            data: {
                id: this.data('advert-id'),
                token: deleteCarPopup.token,
                reason: null,
                advancedReason: null
            },
            context: this,
            beforeSend: function() {
                ONotice.notify('Закрываю...');
            },
            success: function(response) {
                if (response.reload) {
                    window.location.reload(true);
                } else if (response.redirect) {
                    window.location = response.redirect;
                } else if (response.error) {
                    ONotice.error(response.error);
                }
            },
            error: function() {
                ONotice.error('Что-то пошло не так.');
            },
            complete: function() {
                deleteCarPopup.hidePopups();
                deleteCarPopup.lock = false;
            }
        });
    },
    init: function() {
        var $closeButton = $('.autoba-toolbar .btn-close');
        $closeButton.click(function(e) {
            $('.b-pop-up.close-car-popup').remove();

            if (deleteCarPopup.isModerator) {
                CloseCarPopup.closeByModerator.call($closeButton);
            } else {
                CloseCarPopup.closeByOwner.call($closeButton);
            }

            return false;
        });

        $(CloseCarPopup).bind('confirmed', function() {
            var $closeBtn = $('.btn-close');
            var url = $closeBtn.data('url');

            $.ajax({
                type: 'post',
                dataType: 'json',
                url: url + '?' + new Date().getTime(),
                data: {
                    id: $closeBtn.data('advert-id'),
                    token: deleteCarPopup.token,
                    reason: $(deleteCarPopup.selectors.reasonsSelect).val(),
                    advancedReason: $(deleteCarPopup.selectors.advancedReasonField).val()
                },
                context: this,
                beforeSend: function() {
                    ONotice.notify('Закрываю...');
                },
                success: function(response) {
                    if (response.reload) {
                        window.location.reload(true);
                    } else if (response.redirect) {
                        window.location = response.redirect;
                    } else if (response.error) {
                        ONotice.error(response.error);
                    }
                },
                error: function() {
                    ONotice.error('Что-то пошло не так.');
                },
                complete: function() {
                    deleteCarPopup.hidePopups();

                    deleteCarPopup.lock = false;
                }
            });
        });
    },
    removePopup: function() {
        $('.b-pop-up.close-car-popup').remove();
        $('html').unbind('click');
        $('html').unbind('keyup');
    },
    addPopup: function(toEl, popup) {
        popup.hide();
        $(toEl).after(popup);
        CloseCarPopup.fixArrow(popup);
        CloseCarPopup.fixPosition(popup);
        popup.show();

        $('.b-pop-up').bind('click', function(e) {
            if (!e) {
                window.event.cancelBubble = true;
            } else if (e.stopPropagation) {
                e.stopPropagation();
            }

            if ($(e.target).is('.cancel-link')) {
                CloseCarPopup.removePopup();
                return false;
            }

            if ($(e.target).parents('.confirm').length > 0) {
                var $advancedReason = $(deleteCarPopup.selectors.advancedReasonField);
                var $advancedReasonError = $(deleteCarPopup.selectors.advancedReasonError);

                if ($advancedReason.is(':visible')) {
                    if ($advancedReason.val().length == 0) {
                        $advancedReasonError.text(deleteCarPopup.errors.advancedReasonError);
                        $advancedReasonError.show();
                    } else {
                        $advancedReasonError.val('').hide();
                    }
                }
                if (!$advancedReasonError.is(':visible')) {
                    $(CloseCarPopup).trigger('confirmed');
                }

                return false;
            }

        });

        $('html').bind('click', function(e) {
            CloseCarPopup.removePopup();
        });
        $('html').keyup(function(e) {
            if (e.keyCode == 27) {
                CloseCarPopup.removePopup();
            }
        });
        $('html').keyup(function(e) {
            if (e.keyCode == 13 && $('.b-pop-up').is(':visible')) {
                $(CloseCarPopup).trigger('confirmed');
            }
        });
    },
    fixArrow: function(popup) {
        if (popup.parent().hasClass('arrow-right')) {
            popup.find('> i').addClass('b-pop-up__arrow-3');
        } else if (popup.parent().hasClass('arrow-bottom')) {
            popup.find('> i').addClass('b-pop-up__arrow-1');
        } else if (popup.parent().hasClass('arrow-bottom-right')) {
            popup.find('> i').addClass('b-pop-up__arrow-2');
        } else if (popup.parent().hasClass('arrow-bottom-left')) {
            popup.find('> i').addClass('b-pop-up__arrow-4');
        }
    },
    fixPosition: function(popup) {
        if (!popup.parent().hasClass('arrow-right')) {
            var top = popup.height() + popup.find('> i').height() - parseInt(popup.parent().find('a').css('margin-top').replace('px', ''));
            popup.css({'top': -top + 'px', 'left': '0px'});
        }
        else
        {
            var top = popup.parent().find('a').height()/2 -2 + parseInt(popup.parent().css('padding-top').replace('px', '')) - popup.height()/2;
            popup.css('top', top + 'px');
        }
    }
};



jQuery.extend({
    getUrlVars: function(url){
        var vars = [], hash;
        if(typeof(url) == 'undefined') {
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        } else {
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
        }
        for (var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name, url){
        return jQuery.getUrlVars(url)[name];
    },
    getUnixTimestamp: function(){
        return Math.round(((new Date()).getTime()-Date.UTC(1970,0,1))/1000);
    },
    template: function(tmpl, vals) {
        var rgxp, repr;

        // default to doing no harm
        tmpl = tmpl   || '';
        vals = vals || {};

        // regular expression for matching our placeholders; e.g., #{my-cLaSs_name77}
        rgxp = /#\{([^{}]*)}/g;

        // function to making replacements
        repr = function (str, match) {
            return typeof vals[match] === 'string' || typeof vals[match] === 'number' ? vals[match] : str;
        };

        return tmpl.replace(rgxp, repr);
    },
    getSplitValue: function(value){
        var split = value.split("_");
        var el = $(split).length - 1;
        return split[el];
    }
});

$.fn.toggleDisabled = function() {
    return this.each(function() {
        this.disabled = !this.disabled;
    });
};

$.fn.end_for_number= function(num,end1,end2,end5)
{
    var num = parseInt(num);
    var cases = [2, 0, 1, 1, 1, 2];
    var titles = [end1, end2, end5];

    return titles[(num % 100 > 4 && num % 100 < 20)
        ? 2
        : cases[Math.min(num % 10, 5)]];
}

$.post_view_count = {
    put : function() {
        $(".post_count").each(function(){
            var advertId = parseInt($('h1.m-title').data('advert-id'));
            var viewsBlock = $('#post_view_count_block');
            var views = $('#post_view_count');
            if (advertId > 0) {
                $.ajax({
                    type: 'POST',
                    url: '/car/viewsCount/' + advertId,
                    dataType: 'json',
                    success: function(data) {
                        views.html(data.count);
                        views.after(
                            '&nbsp;просмотр' + $.fn.end_for_number(data.count, '', 'а', 'ов')
                        );
                        viewsBlock.show();
                    },
                    error: function(request, status, errorText) {
                        viewsBlock.hide();
                    }
                })
            }
        });
    }
};

jQuery.fn.sortOptions = function(sortCallback)
{
    jQuery('option', this).not(':first')
        .sort(sortCallback)
        .appendTo(this);
    return this;
};
jQuery.fn.sortOptionsByText = function()
{
    var byTextSortCallback = function(x, y) {
        var xText = jQuery(x).text().toUpperCase();
        var yText = jQuery(y).text().toUpperCase();
        return (xText < yText) ? -1 : (xText > yText) ? 1 : 0;
    };
    return this.sortOptions(byTextSortCallback);
};

function upBindClick(element)
{
    var errmsg = 'Что-то пошло не так';
    var upLock = false;

    element.unbind('click').bind('click', function() {
        if (upLock) {
            return false;
        }
        var btn = element;
        var timeAlign = element.parent().parent().hasClass('valign-middle') ? ' time-middle' : '';
        $.ajax({
            url:  element.attr('href') + (/\?/.test(element.attr('href')) ? '&' : '?') + new Date().getTime(),
            type: 'GET',
            dataType: 'json',
            beforeSend: function() {
                upLock = true;
            },
            error: function(request, error) {
                ONotice.error(errmsg);
            },
            context: this,
            success: function(r) {
                if (r != null && r.result == 'ok') {
                    var ce = '';
                    var info = btn.parents('.b-ba-subj-up');

                    info.removeClass('b-ba-subj-noupped');
                    if ( ! info.hasClass('b-ba-subj-upped')) {
                        info.addClass('b-ba-subj-upped');
                    }

                    if (r.holdTime != 0) {
                        ce = '<span class="upper"><span class="time' + timeAlign + '">' + r.holdTime +'</span></span>';
                    } else {
                        ce = '<span class="upper">'+ btn.parent('span').html() +'</span>';
                    }

                    if (btn.parents('td:first').hasClass('btn-up-single')) {
                        $('.btn-up-single').remove();
                    }

                    if ( ! info.hasClass('no-text')) {
                        info.html('<strong>'+ r.counter +'</strong> ' + ce + ' меньше минуты назад');
                    } else {
                        info.html(ce);
                    }
                } else if(r.reload) {
                    window.location.reload(true);
                } else if (r.error) {
                    switch(r.error) {
                        case 'USER_NOT_FOUND':
                        case 'USER_NOT_ACTIVE':
                            document.location.href = r.redirectUrl;
                            break;
                        default:
                            ONotice.error(r.error);
                    }
                }
            },
            complete: function() {
                upLock = false;
            }
        });
        return false;
    });
}

$(function () {
    var isSmsValidated = window.MODELS.currentUser.is_sms_validated();

    $('.js-open-advert').click(function (event) {
        if (!isSmsValidated) {
            event.preventDefault();
            event.stopPropagation();

            window.profileAuth && window.profileAuth.validatePhone(function () {
                isSmsValidated = true;
            });
        }
    });
});
