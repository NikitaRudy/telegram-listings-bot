/***********
* Onliner Layout JS
* Author: Morozov Igor (http://www.igormorozov.com) & Onliner.by (http://www.onliner.by)
************/

var timenav;

$(document).ready(function() {
	
	/* -- slider --*/
	if($('.slider-photo-wrap').length) {
		$('.slider-photo-wrap').imSlider({
			sliderScrollArea:			'.slider-photo-area',
			sliderScrollItems:			'td',
			sliderShadL:				'.shd-l',
			sliderShadR:				'.shd-r',
			sliderDrag:			'.photos-slider-track'
		});
	}
	/* -- / slider --*/
	
	/* -- tooltip --*/
	$('.pp-tip-link').bind({
		click: function(){
			var hid = $(this).attr('href').split('#'),
				ofs = $(this).offset(),
				wdth = $(this)[0].offsetWidth;
			$('#pp-tooltip .pp-tooltip-i').html($('#tip-'+hid[1]).html());
			$('#pp-tooltip').css({
				top: ofs.top+30+'px',
				left: ofs.left - ($('#pp-tooltip').width()/2) - 18 + (wdth/2) +'px',
				display: 'block'
			});
			
			return false;
		},
		mouseleave:function(){
			$('#pp-tooltip').hide()
		}
	})
	/* -- / tooltip --*/

    /* search block */
    $('#search-choose a').click(function(){
        var $t = $(this)
        if($t.hasClass('onlsearch__tabs__active')) {return false};
        $('#search-choose a').removeClass('onlsearch__tabs__active')
        $t.addClass('onlsearch__tabs__active')
        return false;
    })
    $('#onliner-search .onlsearch__ip').onlinerplaceholder();
    /* / search block */

    if($('#onliner-auth').length) {
        var $auth = $('#onliner-auth');
        $('input[type=text],input[type=password]',$auth).onlinerplaceholder();
        $('input',$auth).bind({
          focus: function(e) {
            //console.info($(e.target));
            $auth.addClass('onliner__active__auth');
          },
          blur: function(e) {
             if(!$auth.hasClass('onliner__active__remind')) $auth.removeClass('onliner__active__auth');
          }
        });

        $('.onliner__remind').hover(function(){
             $auth.addClass('onliner__active__remind');
        }, function(){
            $auth.removeClass('onliner__active__remind');
        });
    }

    newsViewCount();
    setScreenClass();
});

var ONotice = {
    timer: null,

    notify: function(msg, timeout, css) {
        timeout = timeout || 5;
        clearTimeout(this.timer);
        this.timer = null;
        this.remove();
        var el = $('<div id="onlNotice">'+ msg +'</div>').appendTo('body');
        if (css) {
            el.css(css);
        }

        if (timeout > 0) {
            this.timer = setTimeout(this.remove, timeout * 1000);
        }
    },

    error: function(msg, timeout) {
        this.notify(msg, timeout, {backgroundColor: '#f00'});
    },

    remove: function() {
        var el = document.getElementById('onlNotice');
        if (el) {
            el.parentNode.removeChild(el);
        }
    },

    isset: function() {
        return (document.getElementById('onlNotice'));
    }
};

/*
    jQuery Version:             jQuery 1.4.2
    Plugin Name:                OnlinerPlaceholder V 1.0
    Author:                     Morozov Igor: http://www.igormorozov.com
*/
(function($) {
    $.fn.onlinerplaceholder = function() {

        return this.each(function() {
            var obj = $(this);

            if(obj.attr('title').length == 0) return this;

            obj.data('value', obj.attr('title'))
                .removeAttr('title');

            if(obj.attr('type') == 'password') {
                obj
                    .wrap('<div class="pasws" />')
                    .after('<span class="pass-value">'+ obj.data('value') +'</span>')
            }

            if((obj.val() == '') || (obj.val() == obj.data('value'))) {
                obj.addClass('noactive__ip');
                if(obj.attr('type') != 'password') obj.val(obj.data('value'))
            }

            obj.bind({
              focus: function() {
                if((obj.val() == '') || (obj.val() == obj.data('value'))) obj.removeClass('noactive__ip').val('')
              },
              blur: function() {
                if((obj.val() == '') || (obj.val() == obj.data('value'))) obj.addClass('noactive__ip').val(obj.data('value'))
              }
            });

        }); // END: return this

        // returns the jQuery object to allow for chainability.
        return this;
    };
})(jQuery);

//check support box-shadow and radius

window.Modernizr=function(n,g){function h(c,d){var b=c.charAt(0).toUpperCase()+c.substr(1),i;a:{b=[c,"webkit"+b,"Moz"+b,"moz"+b,"o"+b,"ms"+b];for(var j in b)if(k[b[j]]!==undefined&&(!d||d(b[j]))){i=true;break a}}return!!i}var e={},l=g.documentElement,a=g.createElement("modernizr"),k=a.style;a=g.createElement("input");" -o- -moz- -ms- -webkit- ".split(" ");a={};var f,m=[];a.borderradius=function(){return h("borderRadius","",function(c){return c.indexOf("orderRadius")!==-1})};a.boxshadow=function(){return h("boxShadow")}; for(f in a)if(a.hasOwnProperty(f))m.push((!(e[f]=a[f]())?"no-":"")+f);k.cssText="";a=a=null;e._enableHTML5=true;e._enableNoClasses=true;e._version="1.1";(function(c,d){c[d]=c[d].replace(/\bno-js\b/,"js")})(l,"className");l.className+=" "+m.join(" ");return e}(this,this.document);


/**
 * jQuery Version: jQuery 1.4.2
 * Plugin Name: OnlinerSearch V 1.0
 * Author: Domashevich Artyom
 *
 * jQuery-плагин быстрого поиска по сайту Onliner
 * эта функция будет вызываться при нажатии на кнопку Найти
 */

(function($) {

    $.fn.onliner_search = function() {

        var ext = location.hostname.replace(/^[a-z0-9\-]*\.onliner\./,'');

        var search_string = $("#search-input").val();
        //если строка поиска пуста
        if( ! search_string.length || search_string == $.qsearch.rus_vocabulary['help_text'])
        {
            //добавляем в нее серую надпись "Введите текст для поиска" и ничего больше не делаем
            $("#search-input").addClass('search_example').val($.qsearch.rus_vocabulary['help_text']);
            $("#search-input").blur();
            return false;
        }

        //определяем активную вкладку - {search_news,search_catalog,search_baraholka,search_forum}
        var active_tab = $("#search-choose").find(".onlsearch__tabs__active").attr("id");

        //определяем кодировку страницы - {windows-1251,utf8}
        var charset = $('#s_charset').val();
        if( (charset === 'utf-8') || (charset === 'utf8'))
        {
            charset = 'utf8';
        }
        else
        {
            charset = 'cp1251';
        }

        //в зависимости от выбраной активной вкладки работаем дальше:
        var url = '';
        var form_type = '';

        if(active_tab == 'search_news') //search_news:
        {
            //определяем урл и форму поиска
            url = 'www.onliner.'+ext;
            form_type = 'google';

        }else if(active_tab == 'search_catalog')    //search_catalog
        {
            //определяем форму поиска
            form_type = 'catalog';

        }else if(active_tab == 'search_baraholka')  //search_baraholka
        {
            //редиректим на http://forum.onliner.'+ext+'/baraxolka.php?fkeyw={строка поиска}
            window.location.href = 'http://baraholka.onliner.'+ext+'/baraxolka.php?fkeyw=' + search_string + '&c=' + charset;
            return false;

        }else if(active_tab == 'search_forum')  //search_forum
        {
            //определяем урл и форму поиска
            url = 'forum.onliner.'+ext;
            form_type = 'google';
        }

        //удаляем оставшиеся от старого запроса hidden поля
        this.children('input:hidden').remove();

        //формы поиска:
        var fields = '';
        if(form_type == 'google')
        {
            this.attr('method','get');
            this.attr('action','http://www.google.ru/custom');
            this.attr('target','google_window');
            fields = '<input type="hidden" name="sitesearch" value="'+ url +'">\
                      <input type="hidden" name="domains" value="'+ url +'">\
                      <input type="hidden" name="q" value="'+ $('<span>').text(search_string).html() +'">\
                      <input type="hidden" name="client" value="pub-4273170588193461">\
                      <input type="hidden" name="forid" value="1">\
                      <input type="hidden" name="ie" value="'+ charset +'">\
                      <input type="hidden" name="oe" value="'+ charset +'">\
                      <input type="hidden" name="cof" value="GALT:#008000;GL:1;DIV:#336699;VLC:663399;AH:center;BGC:FFFFFF;LBGC:FFFFFF;ALC:0000FF;LC:0000FF;T:000000;GFNT:0000FF;GIMP:0000FF;LH:41;LW:126;L:pic/logo.gif;S:http://'+ url +'/;LP:1;FORID:1">\
                      <input type="hidden" name="hl" value="ru">\
                      <input type="hidden" name="sa" value="Искать">';
        }else if(form_type == 'catalog')
        {
            this.attr('method','post');
            this.attr('action','http://catalog.onliner.'+ext+'/search/');
            this.removeAttr('target');
            fields = '  <input type="hidden" name="search_text" value="'+ $('<span>').text(search_string).html() +'">\
                        <input type="hidden" name="charset" value="'+ charset +'">';
        }

        //добавляем нужные поля в форму
        this.append(fields);

        return this;
    };
})(jQuery);


function setScreenClass(){var w=(window.innerWidth)?window.innerWidth:((document.all)?document.body.offsetWidth:null);if(w<1200){$('#banner-four').attr('style','display: none');$('.tpoflnk-i').removeClass('tpoflnk-four');$('.tpoflnk-i').addClass('tpoflnk-three');}else{$('#banner-four').attr('style','display: ');$('.tpoflnk-i').removeClass('tpoflnk-three');$('.tpoflnk-i').addClass('tpoflnk-four');}if(w>=1240){$('#service_blacklist').attr('style','display: ');$('#service_podcast').attr('style','display: ');$('#service_blog').attr('style','display: ');}else if(w<1240 && w>=1160){$('#service_blacklist').attr('style','display: none');$('#service_podcast').attr('style','display: ');$('#service_blog').attr('style','display: ');}else if(w<1160 && w>=1080){$('#service_blacklist').attr('style','display: none');$('#service_podcast').attr('style','display: none');$('#service_blog').attr('style','display: ');}else{$('#service_blacklist').attr('style','display: none');$('#service_podcast').attr('style','display: none');$('#service_blog').attr('style','display: none');}};

function newsViewCount(){
    $(".news_view_count").each(function(){
        var _this=$(this);
        var a=_this.attr("news_id");
        var b=_this.attr("key");
        var show=_this.attr("show");
        var views=' ';
        if(b=="itnewscount" || b=="autonewscount"){
            views=_this.attr("seeing");
        }
        if(a>0 && (b=="itnewscount" || b=="autonewscount")){
            $.ajax({type:"GET",
                url:"/gapi/forum/"+b+"/incr/"+a,dataType:"text",
                success:function(c){if(show==1){_this.html(views+number_format(parseInt(c),{numberOfDecimals:0,decimalSeparator: ',',thousandSeparator: ' ',symbol: ''}));}},
                error:function(xhr,ajaxOptions,thrownError){
                    if(xhr.status==404){
                        $.ajax({type:"GET",
                            url:"/gapi/forum/"+b+"/set/"+a,dataType:"text",
                            success:function(){
                                if(show==1){
                                    _this.html(views+"1");
                                }
                            }
                        });
                    }
                    else{
                        $.ajax({type:"GET",
                            url:"/gapi/forum/"+b+"/get/"+a,dataType:"text",
                            success:function(c){
                                if(show==1){
                                    _this.html(views+number_format(parseInt(c),{numberOfDecimals:0,decimalSeparator:',',thousandSeparator:' ',symbol:''}));
                                }
                            }
                        });
                    }
                }
            });
        }
    });
}

function number_format(numero, params)
{
    var sDefaults =
            {
                numberOfDecimals: 2,
                decimalSeparator: ',',
                thousandSeparator: '.',
                symbol: ''
            }
    var options = jQuery.extend(sDefaults, params);

    var number = numero;
    var decimals = options.numberOfDecimals;
    var dec_point = options.decimalSeparator;
    var thousands_sep = options.thousandSeparator;
    var currencySymbol = options.symbol;

    var exponent = "";
    var numberstr = number.toString ();
    var eindex = numberstr.indexOf ("e");
    if (eindex > -1)
    {
        exponent = numberstr.substring (eindex);
        number = parseFloat (numberstr.substring (0, eindex));
    }

    if (decimals != null)
    {
        var temp = Math.pow (10, decimals);
        number = Math.round (number * temp) / temp;
    }
    var sign = number < 0 ? "-" : "";
    var integer = (number > 0 ? Math.floor (number) : Math.abs (Math.ceil (number))).toString ();

    var fractional = number.toString ().substring (integer.length + sign.length);
    dec_point = dec_point != null ? dec_point : ".";
    fractional = decimals != null && decimals > 0 || fractional.length > 1 ? (dec_point + fractional.substring (1)) : "";
    if (decimals != null && decimals > 0)
    {
        for (i = fractional.length - 1, z = decimals; i < z; ++i)
        {
            fractional += "0";
        }
    }

    thousands_sep = (thousands_sep != dec_point || fractional.length == 0) ? thousands_sep : null;
    if (thousands_sep != null && thousands_sep != "")
    {
        for (i = integer.length - 3; i > 0; i -= 3)
        {
            integer = integer.substring (0 , i) + thousands_sep + integer.substring (i);
        }
    }

    if (options.symbol == '')
    {
        return sign + integer + fractional + exponent;
    }
    else
    {
        return currencySymbol + ' ' + sign + integer + fractional + exponent;
    }
}


/*
	jQuery Version:				jQuery 1.4.2
	Plugin Name:				imSlider V 0.1
	Author: 					Morozov Igor: http://www.igormorozov.com
*/
(function($) {

	$.fn.imSlider = function(options) {
				
		var element = this;
		
		if(options !== 'refreshImslider') {
		
			var defaults = {
				sliderScrollArea:			'.sliderArea',
				sliderScrollItems:			'li',
				sliderShadL:				'.shd-l',
				sliderShadR:				'.shd-r',
				sliderDrag:			'.sliderdrag'
			},
			settings = $.extend({}, defaults, options);
			element.data('settings',settings)
		}
		else {
			settings = element.data('settings')
		}
		
		element.supportTouches_ = ( $.browser.webkit && navigator.userAgent.indexOf("Mobile") != -1 );
		
		element.events_ = {
		  "click": this.supportTouches_ ? "touchstart" : "click",
		  "down": this.supportTouches_ ? "touchstart" : "mousedown",
		  "move": this.supportTouches_ ? "touchmove" : "mousemove",
		  "up"  : this.supportTouches_ ? "touchend" : "mouseup"
		};
		
		element.each(function() {
		
			var obj = $(this);
			var objarea = $(settings.sliderScrollArea, obj);
			var objareawidth = objarea.width();
			var slideroffset;
			var elemwidth = 0;
			$(settings.sliderScrollItems, objarea).each(function(){
				elemwidth = elemwidth + $(this)[0].offsetWidth;
			});
			var objcontainer = objarea.children();
				objcontainer.width(elemwidth);
			var slider = $(settings.sliderDrag, obj);
			var dragtrack = $(settings.sliderDrag, obj).children();
			var sliderwidth = slider.width();
			var sliderratio = (elemwidth-objareawidth)/(sliderwidth-dragtrack.width());
			var objisdrag = false;
			var limitdrag = sliderwidth - dragtrack.width();
			var halfdrag = dragtrack[0].offsetWidth/2;
			var groupwidth = elemwidth - objareawidth;
			
			
			disshd()
			//console.info(element.events_.move)		
			
			
			if(objarea.find('.slider-drop').length) {
				dragto();
			}
			
			$(settings.sliderDrag, obj).bind(element.events_.click, function(e){
				objisdrag = true;
				if(e.target != dragtrack[0]) {
					slideroffset = slider.offset().left;
					dragslider(e);
				}
				objisdrag = false;
			});
			
			dragtrack.bind(element.events_.down, function(event){
				objisdrag = true;
				slideroffset = slider.offset().left;
				if(!element.supportTouches_ ) {
				 $(document).bind(element.events_.move, dragslider);
				}
				return false;
			});
			
			if(element.supportTouches_) {
			  $(document)[0].ontouchmove = function(event){dragslider(event)};
			}
						
			$(document).bind(element.events_.down, function(e){
				if(objisdrag) {
					e.stopPropagation();
					e.preventDefault();
				}
			});
			dragtrack.bind(element.events_.up, function(e){
				if(objisdrag) {
					$(document).unbind(element.events_.move,dragslider);
					objisdrag = false;
				}
			});
			$(document).bind(element.events_.up, function(){
				$(document).unbind(element.events_.move,dragslider);
				objisdrag = false;
			});
			
			function dragslider(event) {
				if(objisdrag) {
					
					if( event.touches && event.touches[0] ){
						var x = event.touches[0].pageX;
					} else {
						var x = event.pageX;
					 };
					
					var pos = x - slideroffset - halfdrag;
					pos = (pos < 0) ? 0 : pos;
					pos = (pos > limitdrag) ? limitdrag : pos;
					dragtrack[0].style.left = pos + 'px';
					
					objarea[0].scrollLeft = Math.floor(pos*sliderratio);
					disshd();
				}
			};
			
			function dragto() {
				var $t = objarea.find('.slider-drop');
				var pos = ($t[0].offsetLeft+33 - (objareawidth/2)) / sliderratio;
				
				pos = (pos < 0) ? 0 : pos;
				pos = (pos > limitdrag) ? limitdrag : pos;
				dragtrack[0].style.left = pos + 'px';
				
				objarea[0].scrollLeft = Math.floor(pos*sliderratio);
				disshd();
			};
			
			function disshd() {
				if(objarea[0].scrollLeft === groupwidth) {
					$(settings.sliderShadL,obj).removeClass('dis-shd');
					$(settings.sliderShadR,obj).addClass('dis-shd');
				}
				else if((objarea[0].scrollLeft === 0) && (elemwidth > objareawidth)) {
					$(settings.sliderShadL,obj).addClass('dis-shd');
					$(settings.sliderShadR,obj).removeClass('dis-shd');
				}
				else if(elemwidth <= objareawidth) {
					$(settings.sliderShadL,obj).hide();
					$(settings.sliderShadR,obj).hide();
				}
				else {
					$(settings.sliderShadL,obj).removeClass('dis-shd');
					$(settings.sliderShadR,obj).removeClass('dis-shd');
				}
			};
			
		}); // END: return this

		// returns the jQuery object to allow for chainability.  
		return element;
	};
})(jQuery);