function ofmtlptip() {
	var stime;
	/* -- tooltip --*/
	$('.ofm-tip').bind({
		click: function(){
            clearTimeout(stime);
			var hid = $(this).attr('href').split('#'),
				ofs = $(this).offset(),
                par = $('#ofm-tooltip').parents('.b-whbd').offset(),
                par1 = $('#ofm-tooltip').parent().offset(),
				wdth = $(this)[0].offsetWidth;

			$('#ofm-tooltip .ofm-tooltip-i').html($('#'+hid[1]).html());
			$('#ofm-tooltip').css({
				top: ofs.top - par.top+30+'px',
				left: ofs.left - par1.left - ($('#ofm-tooltip').width()/2)
                    + (wdth/2) +'px',
				display: 'block'
			});
			
			return false;
		}
	});
	$('#ofm-tooltip').bind({
        click: function(event) {
            event.stopPropagation();
        },
		mouseover: function(){
			clearTimeout(stime);
		}
	});
    $(window).unbind('keydown.ofm-tooltip').bind('keydown.ofm-tooltip', function(event){
        if (event.keyCode == 27) {
            $('#ofm-tooltip').hide();
        }
    });
    $('html').bind({
        click: function(event) {
            if ($('#ofm-tooltip .autoba-addcustommodel:visible').length) {
                $('#ofm-tooltip').hide();
            }
        }
    });
	/* -- / tooltip --*/
}

function repositionTooltip(element)
{
    var elementOffset = element.offset();

    $('#ofm-tooltip').css({
        top: elementOffset.top
            - $('#ofm-tooltip').parents('.b-whbd').offset().top
            + element.outerHeight()
            + $('#ofm-tooltip i.cr').outerHeight() + 3 + 'px',
        left: elementOffset.left
            - $('#ofm-tooltip').parent().offset().left
            - ($('#ofm-tooltip').width() / 2)
            + (element[0].offsetWidth / 2) +'px'
    });
}