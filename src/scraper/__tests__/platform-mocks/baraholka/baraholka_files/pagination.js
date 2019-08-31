var PaginationSlider = {
    totalPages: 0,
    itemsPerPage: 0,
    currentPage: 0,
    url: '#',
    sliderTemplate: '',

    init: function(totalPages, itemsPerPage, currentPage, url) {
        this.totalPages = totalPages;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = currentPage;
        this.url = url ? url : '#';

        if (this.url != '#')
        {
            $(document).ready(function() {
                PaginationSlider.afterPageLoad();
            });
        }
    },

    afterPageLoad: function() {
        if (this.totalPages < 15) {
            return;
        }

        this.makeSlider();
        $('a.exppages-ttl').click(jQuery.proxy(this, 'sliderActivation'));
        $(document).bind('click', this.sliderHide);
    },

    sliderActivation: function(e) {
        e.preventDefault();
        var el = $(e.target).parents('div.b-pages');
        el.addClass('active-droppages');
        $(this.sliderTemplate).appendTo(el)
        .imSlider({
            sliderScrollArea: '.b-pageslider-i',
            sliderScrollItems: 'a',
            sliderShadL: '.pageslider-shd-l',
            sliderShadR: '.pageslider-shd-r',
            sliderDrag: '.pages-slider-track'
        });

        return false;
    },

    sliderHide: function(e) {
        var el = $(e.target);
        if((!el.hasClass('b-pageslider')) && (!el.parents('.b-pageslider').hasClass('active-pageslider'))) {
            $('.b-pageslider').remove();
            $('.b-pages').removeClass('active-droppages');
        }
    },

    makeSlider: function() {
        var li = '';
        var pageUrl = '';

        for (var i=1; i<=this.totalPages; i++) {
            pageUrl = ((this.url != '#') ? this.url + i : '#');
            li += '<li><a href="' + pageUrl + '" data="'+ i +'"'
                + (this.currentPage == i ? ' class="slider-drop slider-hr"' : '')
                + '>' + (this.totalPages > 10 && !(i % 10) ? '<strong>'+ i +'</strong>' : i) + '</a></li>';
        }

        this.sliderTemplate = '<div class="b-pageslider active-pageslider"><div class="b-pageslider-i">'
            + '<ul class="pagesslider__ul">'+ li +'</ul></div>'
            + '<div class="pages-slider-track"><i class="pages-slider-drag"></i></div>'
            + '<i class="pageslider-shd-l"></i><i class="pageslider-shd-r"></i></div>';
    }
};
