var CPublicMotoView = function(options) {
    this.initialize(options);
}

CPublicMotoView.prototype = {

    options: {},

    initialize: function(options)
    {
        this.options = options || {};
    },

    setOptions: function(options)
    {
        $.extend(this.options, options);
    },

    viewBigImage: function(el)
    {
        $('.view-images img').removeClass('active-preview');
        $(el).find('img:first').addClass('active-preview');
        $('#main-image').attr('src', $(el).attr('rel'));
    },

    viewAllBigPhotos: function(el) {
        $(el).remove();

        var $bigImagePath = publicViewInterface.options['big_image_path'];
        var $photos = publicViewInterface.options['photos'];

        if ($photos.length){
            $.each( $photos, function( key, elem ) {
                $('.js-card-allphotos').append('<img src="' + $bigImagePath + elem.image + '" alt="">');
            });
        }
    },

    selectAllUsersMessage: function(el)
    {
        var $allCheckBox = $('input[name="users_message_selected[]"]:enabled');
        if ($(el).hasClass('collapsed'))
        {
            $(el).addClass('expanded').removeClass('collapsed').next('span').text('Снять все');
            if($allCheckBox.length>0) {
                $allCheckBox.prop('checked', true);
                publicViewInterface.selectMessage();
            }
        }
        else
        {
            $(el).addClass('collapsed').removeClass('expanded').next('span').text('Выбрать все');
            if($allCheckBox.length>0) {
                $allCheckBox.prop('checked', false);
                publicViewInterface.selectMessage();
            }
        }
    },

    selectMessage: function(el)
    {
        var count = $('input[name="users_message_selected[]"]:checked').length,
            text  = $('.js-mylist-selected-text');

        text.text(plural(count, 'объявление', 'объявления', 'объявлений'));

        $('.js-mylist-selected-count').text(count);

        if ( count > 0 ) {
            $('.js-mylist-up-link').hide();
            $('.js-mylist-operations').show();
        }
        else
        {
            $('.js-mylist-operations').hide();
            $('.js-mylist-up-link').show();
        }

        if ( count == $('input[name="users_message_selected[]"]:enabled').length ) {
            $('.js-mylist-checkall').prop('checked', true).addClass('expanded').removeClass('collapsed').next('span').text('Снять все');
        }
        else
        {
            $('.js-mylist-checkall').prop('checked', false).addClass('collapsed').removeClass('expanded').next('span').text('Выбрать все');
        }
    },

    upSelectedMessages:function()
    {
        var $upForm = $('#PublicUp');
        $upForm.find('input[name="selected_ids[]"]').remove();
        var $selectedMessages = $('input[name="users_message_selected[]"]:checked');
        if ($selectedMessages.length) {
            $.each($selectedMessages, function( index, message ) {
                $upForm.prepend('<input type="hidden" name="selected_ids[]" value="'+$(message).val()+'">');
            });
            $upForm.submit();
        } else {
            alert('Не выбрано сообщений для продления!');
        }
        return false;
    },

    paySelectedMessages: function()
    {
        var $payForm = $('#PublicPay');
        $payForm.find('input[name="public_delete[]"]').remove();
        var $selectedMessages = $('input[name="users_message_selected[]"]:checked');
        if (!$selectedMessages.length){
            alert('Не выбраны сообщения для оплаты!');
        } else if ($selectedMessages.length > 5){
            alert('За один заказ можно оплатить не более 5 объявлений');

        } else {
            $.each($selectedMessages, function (index, message) {
                $payForm.prepend('<input type="hidden" name="public_delete[]" value="' + $(message).val() + '">');
            });
            $payForm.submit();
        }
        return false;
    },

    deleteSelectedMessages:function()
    {
        var $deleteForm = $('#delete_messages_form');
        $deleteForm.find('input[name="selected_ids[]"]').remove();
        var $selectedMessages = $('input[name="users_message_selected[]"]:checked');
        if ($selectedMessages.length)
        {
            $.each($selectedMessages, function( index, message ) {
                $deleteForm.prepend('<input type="hidden" name="selected_ids[]" value="'+$(message).val()+'">');
            });
            $deleteForm.submit();
        }
        else
        {
            alert('Не выбрано сообщений для удаления!');
            return false;
        }
    },

    hideStatusMessage: function(el)
    {
        $('.js-status').hide();
    },

    showPreEditPopup: function(el)
    {
        var $preEditForm = $('.js-edit-message-popup');
        showModal($preEditForm);
        var editLink = $preEditForm.find('a.button');
        editLink.attr('href', $(el).attr('href'));
        return false;
    },

    showPreEditPhonePopup: function(el)
    {
        var $preEditForm = $('.js-edit-message-phone-popup');
        showModal($preEditForm);
        var editLink = $preEditForm.find('a.button');
        editLink.attr('href', $(el).attr('href'));
        return false;
    }
};

var publicViewInterface = new CPublicMotoView({});
