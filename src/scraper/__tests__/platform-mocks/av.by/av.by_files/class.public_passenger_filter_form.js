var CPassengerFilterForm = function (options) {
    this.initialize(options);
};
CPassengerFilterForm.prototype = {
    options: {},
    initialize: function (options) {
        this.options = options || {};
    },
    setOptions: function (options) {
        $.extend(this.options, options);
    },

    getModels: function (brandField) {
        var $form = $('.filterForm');
        var $brandField = $(brandField);
        var modelFieldName = $brandField.attr('data-model-field');
        var $modelField = $form.find('select[name="'+ modelFieldName +'"]');
        $modelField.find("option[value!='']").remove();
        $modelField.attr('disabled', 'disabled');
        $modelField.trigger("chosen:updated");

        var generationFieldName = $modelField.attr('data-generation-field');
        var $generationField = $form.find('select[name="'+ generationFieldName +'"]');
        $generationField.find("option[value!='']").remove();
        $generationField.attr('disabled', 'disabled');
        $generationField.trigger("chosen:updated");

        if ($brandField.val() != 0) {
            $.ajax({
                url: $form.attr('data-counter-action'),
                type: 'post',
                dataType: 'json',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                data: {
                    'event': 'Model_List',
                    'id_parent_category': $brandField.val(),
                    'only_exist_messages': 1
                },
                success: function (jsonResponse) {
                    $.each(jsonResponse, function (key, option) {
                        $modelField.append($('<option>').text(option.name).attr('value', option.id));
                    });
                    $modelField.removeAttr('disabled');
                    $modelField.trigger("chosen:updated");
                }
            });
        }
        CPassengerFilterFormInterface.updateCounter();
    },

    getGenerations: function (modelField) {
        var $form = $('.filterForm');
        var $modelField = $(modelField);
        var generationFieldName = $modelField.attr('data-generation-field');
        var $generationField = $form.find('select[name="'+ generationFieldName +'"]');
        $generationField.find("option[value!='']").remove();
        $generationField.attr('disabled', 'disabled');
        $generationField.trigger("chosen:updated");
        if ($modelField.val() != 0) {
            $.ajax({
                url: $form.attr('data-counter-action'),
                type: 'post',
                dataType: 'json',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                data: {
                    'event': 'Generation_List',
                    'model_id': $modelField.val()
                },
                success: function (jsonResponse) {
                    if (jsonResponse.length > 0) {
                        $.each(jsonResponse, function (key, option) {
                            $generationField.append($('<option>').text(option.full_name).attr('value', option.id));
                        });
                        $generationField.removeAttr('disabled');
                        $generationField.trigger("chosen:updated");
                    }
                }
            });
        }
        CPassengerFilterFormInterface.updateCounter();
    },

    checkEngineType: function (el) {
        var $el = $(el);
        var engineType = $el.val();
        var engineHybrid = $('#engine_hybrid');
        var enginePropan = $('#engine_propan');
        var engineMetan = $('#engine_metan');
        var engineVolumeMin = $('#engine_volume_min');
        var engineVolumeMax = $('#engine_volume_max');

        engineHybrid.off('change');
        enginePropan.off('change');
        engineMetan.off('change');
        engineVolumeMin.off('change');
        engineVolumeMax.off('change');

        if ($el.is(':checked')) {
            if (engineType == '3') {
                engineHybrid.attr('disabled', 'disabled').removeAttr('checked');
                enginePropan.attr('disabled', 'disabled').removeAttr('checked');
                engineMetan.attr('disabled', 'disabled').removeAttr('checked');
                if (engineVolumeMin) {
                    engineVolumeMin.attr('disabled', 'disabled');
                    engineVolumeMax.attr('disabled', 'disabled');
                }
            } else if (engineType == '2') {
                engineHybrid.removeAttr('disabled');
                enginePropan.attr('disabled', 'disabled').removeAttr('checked');
                engineMetan.attr('disabled', 'disabled').removeAttr('checked');
                if (engineVolumeMin) {
                    engineVolumeMin.removeAttr('disabled');
                    engineVolumeMax.removeAttr('disabled');
                }
            } else {
                engineHybrid.removeAttr('disabled');
                enginePropan.removeAttr('disabled');
                engineMetan.removeAttr('disabled');
                if (engineVolumeMin) {
                    engineVolumeMin.removeAttr('disabled');
                    engineVolumeMax.removeAttr('disabled');
                }
            }
        } else {
            engineHybrid.removeAttr('disabled');
            enginePropan.removeAttr('disabled');
            engineMetan.removeAttr('disabled');
            if (engineVolumeMin) {
                engineVolumeMin.removeAttr('disabled');
                engineVolumeMax.removeAttr('disabled');
            }
        }

        engineHybrid.on('change', this.updateCounter);
        enginePropan.on('change', this.updateCounter);
        engineMetan.on('change', this.updateCounter);
        engineVolumeMin.on('change', this.updateCounter);
        engineVolumeMax.on('change', this.updateCounter);

        //заглушка чтобы не дублировался обработчик
        var $allSiblingsElements = $('input[name="' + $el.attr('name') + '"]');
        var hasAnyOtherSiblingSelected = false;
        $.each($allSiblingsElements, function (i, elem) {
            if ($(elem).attr('previousvalue') == 'checked') {
                hasAnyOtherSiblingSelected = true;
            }
        });
        if (($el.attr('previousvalue') == 'false') && hasAnyOtherSiblingSelected) {
            return false;
        }
        CPassengerFilterFormInterface.updateCounter();
    },

    checkTransmission: function (el) {
        var $el = $(el);
        //заглушка чтобы не дублировался обработчик
        var $allSiblingsElements = $('input[name="' + $el.attr('name') + '"]');
        var hasAnyOtherSiblingSelected = false;
        $.each($allSiblingsElements, function (i, elem) {
            if ($(elem).attr('previousvalue') == 'checked') {
                hasAnyOtherSiblingSelected = true;
            }
        });
        if (($el.attr('previousvalue') == 'false') && hasAnyOtherSiblingSelected) {
            return false;
        }
        CPassengerFilterFormInterface.updateCounter();
    },

    getCities: function (el, parentField) {
        var form = $('.filterForm');
        var postData = {
            'event': 'City_List'
        };
        if (parentField == 'country_id') {
            postData.id_country = $(el).val();
        }
        else if (parentField == 'region_id') {
            postData.id_region = $(el).val();
        }
        form.find("select[name='city_id'] option[value!='']").remove();
        form.find("select[name='city_id']").trigger("chosen:updated");
        if (parseInt($(el).val()) > 0) {

            $.ajax({
                url: form.attr('data-counter-action'),
                type: 'post',
                dataType: 'json',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                data: postData,
                success: function (jsonResponse) {
                    form.find("select[name='city_id'] option[value!='']").remove();
                    $.each(jsonResponse, function (key, option) {
                        if (option.id != 0) {
                            $('#city_id_filter').append($('<option>').text(option.name).attr('value', option.id));
                        }
                    });
                    $('#city_id_filter').removeAttr('disabled');
                    form.find("select[name='city_id']").trigger("chosen:updated");
                }.bind(this)
            });
            $('#city_id_filter').removeAttr('disabled');

        } else {
            $('#city_id_filter').attr('disabled', 'disabled');
        }
        CPassengerFilterFormInterface.updateCounter();
    },

    updateCounter: function () {
        /*
         If current form is advanced form
         */
        var form = $('.filterForm');
        if (form.find('input[name="advanced_options[]"]').length > 0) {
            return;
        }
        var postData = form.serialize() + '&event=Number_PreSearch';
        $.ajax({
            url: form.attr('data-counter-action'),
            type: 'post',
            data: postData,
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (jsonResponse) {
                var counter = parseInt(jsonResponse['number']);
                var searchUrl = jsonResponse['search_url'];

                var $searchLink = form.find('.js-submit-search-link');
                $searchLink.html('Показать: ' + counter);
                $searchLink.attr('href', searchUrl);
                
                if (counter == 0) {
                    $searchLink.attr('disabled', true);
                } else {
                    $searchLink.attr('disabled', false);
                }
            }
        });
    },

    getPrices: function (el) {

        var currentForm = $(el).parents('form');
        var currency = $(el).val();
        var priceList = currentForm.attr('data-' + currency.toLowerCase() + '-price-list');
        var field_price_from = $("select[name='price_from']", currentForm);
        var field_price_to = $("select[name='price_to']", currentForm);
        field_price_from.find("option[value!='']").remove();
        field_price_to.find("option[value!='']").remove();

        if (priceList !== undefined) {
            priceList = JSON.parse(priceList);
            $.each(priceList, function (key, title) {
                if (key === '0') {
                    title = '';
                }
                field_price_from.append($('<option>').text(title).attr('value', key));
                field_price_to.append($('<option>').text(title).attr('value', key));
            });
        }

        field_price_from.trigger("chosen:updated");
        field_price_to.trigger("chosen:updated");
    },

    resetForm: function () {
        var isRecountNeed = true;

        var $form = $('#PublicPassengerFilter');

        var currencyIdOld = $form.find('input[name=currency]:checked').val();

        $form.trigger('reset');

        $form.find("select[name='model_id[0]'] option[value!='']").remove();
        $form.find('.js-brand-model-container:not(:first)').remove();
        $form.find('.js-brand-model-container:first a.js-delete-brand-model-container').removeClass('js-delete-brand-model-container').addClass('js-add-brand-model-container').text('Добавить модель');
        var $brandField = $("select[name='brand_id[0]']");
        $brandField.prop('selectedIndex', 0);
        $brandField.trigger("chosen:updated");

        $form.find("select[name='city_id'] option[value!='']").remove();
        $('#city_id_filter').attr('disabled', 'disabled');

        $form.find('input[type=checkbox]').prop('checked', false);
        $form.find('input[type=radio][name!=currency]').prop('checked', false);
        $form.find('input[type=radio][name=currency]:nth(0)').prop('checked', true);

        $form.find('select').prop('selectedIndex', 0);
        $form.find('select').val('').trigger("change");
        $form.find('input[type="text"]').val('');

        $('.js-fakeradio input').removeAttr('previousvalue');

        if (currencyIdOld != 'USD') {
            var $currencyField = $form.find('input[name=currency]');
            CPassengerFilterFormInterface.getPrices($currencyField);
        }

        if (isRecountNeed && $form.find('input[name="advanced_options[]"]').length) {
            isRecountNeed = false;
        }

        // fix counter after delete select
        if (isRecountNeed) {
            CPassengerFilterFormInterface.updateCounter();
        }

        return false;
    },

    /**
     * @param evt
     * @returns {boolean}
     */
    isNumberKey: function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
};
var CPassengerFilterFormInterface = new CPassengerFilterForm({});


$(document).ready(function () {
    var $form = $('form[name="PublicPassengerFilter"]'); // form

    $form.find('select, input')
        .filter('[name!="brand_id[0]"]')
        .filter('[name!="brand_id[1]"]')
        .filter('[name!="brand_id[2]"]')
        .filter('[name!="brand_id[3]"]')
        .filter('[name!="brand_id[4]"]')
        .filter('[name!="brand_id[5]"]')
        .filter('[name!="brand_id[6]"]')
        .filter('[name!="currency"]')
        .filter('[name!="country_id"]')
        .filter('[name!="region_id"]')
        .filter('[name!="engine_type"]')
        .filter('[name!="transmission"]')
        .on('change', CPassengerFilterFormInterface.updateCounter);

    var clearSelectValuePre = function () {
        var input = $(this);
        var options = $(this).find('option');
        var needEmpty = true;

        if (input.hasClass("select_value_with_null")) {
            needEmpty = false;
        }

        if (options.length <= 1) {
            needEmpty = true;
        }

        if (needEmpty && input.val() == 0) {
            input.val('');
        }
    };

    $form.find('select').each(
        function (index) {
            clearSelectValuePre.call(this);
        }
    );
    $form.on('change', 'select', function () {
        clearSelectValuePre.call(this);
        // calculate imposible option for price
        if ($(this).is('[name="price_from"]')) {

            var val = parseInt($(this).val());

            $.each($('[name="price_to"] option'), function (idx, elm) {
                var option_val = parseInt($(elm).val());
                if (option_val < val && option_val != 0) {

                    $(elm).attr('disabled', 'disabled');
                } else {
                    $(elm).attr('disabled', false);
                }
            });

            $(".filterForm select[name='price_to']").trigger("chosen:updated");
        }

        if ($(this).is('[name="price_to"]')) {

            val = parseInt($(this).val());

            $.each($('[name="price_from"] option'), function (idx, elm) {
                var option_val = parseInt($(elm).val());
                if (option_val > val && option_val != 0) {

                    $(elm).attr('disabled', 'disabled');
                } else {
                    $(elm).attr('disabled', false);
                }
            });

            $(".filterForm select[name='price_from']").trigger("chosen:updated");
        }
        // -calculate imposible option for price

        // calculate imposible option for year
        if ($(this).is('[name="year_from"]')) {

            val = parseInt($(this).val());

            $.each($('[name="year_to"] option'), function (idx, elm) {
                var option_val = parseInt($(elm).val());
                if (option_val < val && option_val != 0) {

                    $(elm).attr('disabled', 'disabled');
                } else {
                    $(elm).attr('disabled', false);
                }
            });

            $(".filterForm select[name='year_to']").trigger("chosen:updated");
        }

        if ($(this).is('[name="year_to"]')) {

            val = parseInt($(this).val());

            $.each($('[name="year_from"] option'), function (idx, elm) {
                var option_val = parseInt($(elm).val());
                if (option_val > val && option_val != 0) {

                    $(elm).attr('disabled', 'disabled');
                } else {
                    $(elm).attr('disabled', false);
                }
            });

            $(".filterForm select[name='year_from']").trigger("chosen:updated");
        }
        // -calculate imposible option for year

    });

    var extendedSearchLink = $('#search_extend_link');
    extendedSearchLink.on('click', function () {
        $form.attr('action', $(this).attr('data-action'));
        $form.submit();
    })
});

function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

/**
 *
 * @param from_select
 * @param to_select
 */
function calculateSelectOptions(from_select, to_select) {
    // calculate imposible option for price

    var val = parseInt(from_select.val());

    $.each($('option', to_select), function (idx, elm) {
        var option_val = parseInt($(elm).val());
        if (option_val < val && option_val != 0) {

            $(elm).attr('disabled', 'disabled');
        } else {
            $(elm).attr('disabled', false);
        }
    });

    to_select.trigger("chosen:updated");

    val = parseInt(to_select.val());

    $.each($('option', from_select), function (idx, elm) {
        var option_val = parseInt($(elm).val());
        if (option_val > val && option_val != 0) {

            $(elm).attr('disabled', 'disabled');
        } else {
            $(elm).attr('disabled', false);
        }
    });

    from_select.trigger("chosen:updated");

    // -calculate imposible option for price
}