function HashObserver() {
    this.lastState = null;

    var hash = this.getHashFromSeoDefaults(window.seoFilterDefaults);

    if (hash) {
        window.location.hash = hash;
    }

    SearchAdvert.parseHash(window.location.hash);

    $(window).on('hashchange', function () {
        SearchAdvert.parseHash(window.location.hash);
    });

    setTimeout(function() {
        SearchAdvert.init();
    }, 300);
}

HashObserver.prototype.getHashFromSeoDefaults = function (filterDefaults) {
    if (_.isEmpty(filterDefaults)) {
        return '';
    }

    var hashParts = [],
        carPart = '';

    filterDefaults.manufacturer && (carPart += 'car[0][' + filterDefaults.manufacturer + ']');
    filterDefaults.model && (carPart += '[m]=' + filterDefaults.model);

    carPart && hashParts.push(carPart);
    filterDefaults.country && hashParts.push('country=' + filterDefaults.country);
    filterDefaults.region && hashParts.push('region=' + filterDefaults.region);
    filterDefaults.city && hashParts.push('city=' + filterDefaults.city);

    return hashParts.join('&');
};

var SearchAdvert = {
    seoFilterDefaults: window.seoFilterDefaults || null,

    options: {},

    init: function() {
        // currency selector
        $('.autoba-filter-currency a').click(function(e) {
            var prevCurr = $(e.target).parents('.autoba-filter-currency').find('.active');
            prevCurr.removeClass('active');
            $(e.target).parent().addClass('active');

            var minPrice = $(e.target).parents('.autoba-filters').find('select[name="min-price"]');
            var maxPrice = $(e.target).parents('.autoba-filters').find('select[name="max-price"]');

            var prevMin = minPrice.val();
            var prevMax = maxPrice.val();

            minPrice.find('option').not(':first').remove();
            maxPrice.find('option').not(':first').remove();

            var currencyCode = $(e.target).attr('data').toLowerCase();

            for (key in Prices[currencyCode]) {
                var option = document.createElement('option');
                option.value = key;
                option.innerHTML = Prices[currencyCode][key] + ' ' + $(e.target).html();
                minPrice.append($(option).clone());
                maxPrice.append($(option).clone());
            }

            minPrice.val(prevMin);
            maxPrice.val(prevMax);

            this.setHash();

            return false;
        }.bind(this));

//        // inputs & selects
        $('.selsgroup select, .grid-autoba input').live('change', function(e) {
            if ($(e.target).is('select[name="models_manufactures_id[]"]')) {
                var modelsSelect = $(e.target).parents('.manufactures:first').find('select[name="models_id[]"]');

                if (modelsSelect.val() != '') {
                    modelsSelect.val('');
                }
            }

            if ($(e.target).is('select[name="country"]')) {
                var regionsSelect = $(e.target).parents('.ofm-forms-ips').find('select[name="region"]');
                var citySelect = $(e.target).parents('.ofm-forms-ips').find('select[name="city"]');

                regionsSelect.val('');
                citySelect.val('');
            }

            if ($(e.target).is('select[name="region"]')) {
                var citySelect = $(e.target).parents('.ofm-forms-ips').find('select[name="city"]');

                citySelect.val('');
            }

            this.setHash();
        }.bind(this));

        // sorting actual & new & photos count
        $('.autoba-sorters').find('li.autoba-sorters-big a').click(function(event) {
            $('.autoba-sorters').find('.active').removeClass('active');
            $(event.target).parent().addClass('active');

            this.setHash();
            return false;
        }.bind(this));

        // sorting with direction
        var sortDirection = {
            year: 'desc',
            odometer: 'asc',
            price: 'asc'
        };
        $('.autoba-sorters').find('li:not(.autoba-sorters-big) a').click(function(event) {
            var link = $(event.target);

            if (link.hasClass('sort-bt') || link.hasClass('sort-up')) {
                link.toggleClass('sort-up');
                link.toggleClass('sort-bt');
            } else {
                $('.autoba-sorters').find('.sort-up').removeClass('sort-up');
                $('.autoba-sorters').find('.sort-bt').removeClass('sort-bt');

                var direction = sortDirection[link.attr('data')];
                switch (direction) {
                    case 'desc':
                        link.toggleClass('sort-bt');
                        break;
                    case 'asc':
                        link.toggleClass('sort-up');
                        break;
                }
            }

            this.setHash();
            return false;
        }.bind(this));

        // paging
        $('.pages-fastnav a, .active-pageslider a').live('click', function(e) {
            this.setHash(e.currentTarget.getAttribute('data'));
            $(window).scrollTop(0);

            return false;
        }.bind(this));

        //car brand filter add & remove
        $('.autoba-filters .add-brand a').click(function(e) {
            SearchGui.addManufacturer();

            return false;
        }.bind(this));

        $('.autoba-filters .remove-brand').live('click', function(e) {
            if ($('.autoba-filters .manufactures').length == 1) {
                return false;
            }

            $(e.target).parents('.manufactures').remove();

            if ($('.manufactures').length == 1) {
                $('.manufactures').find('.i-trash').hide();
            }

            this.setHash();
            return false;

        }.bind(this));

        //colors
        $('.autoba-filters .add-color a').click(function(e) {
            if ($('.autoba-filters .color').length >= ColorsCount) {
                return false;
            }
            $('.color:first').find('.i-trash').css('display', 'inline');

            var newColorFilter = $('.autoba-filters .color:first').clone();
            newColorFilter.find('select').val('');
            $(e.target).parent().before(newColorFilter);

            return false;
        }.bind(this));

        $('.autoba-filters .remove-color').live('click', function(e) {
            if ($('.autoba-filters .color').length == 1) {
                return false;
            }

            $(e.target).parents('.color').remove();

            if ($('.color').length == 1) {
                $('.color').find('.i-trash').hide();
            }

            this.setHash();
            return false;

        }.bind(this));

        // reset filter
        $('.autoba-count .total-count a, .reset-filter').live('click', function(e) {
            SearchGui.emptyFilter();

            this.setHash();

            return false;

        }.bind(this));

        $('.ofm-header .b-update-btn-1').live('click', function(e) {
            $(this).html($(this).html().replace('Обновить','Обновление'));

            SearchAdvert.parseHash(window.location.hash);

            $(this).removeClass('no-hint');

            return false;
        });
    },

    getFormData: function(form, removeFields) {
        var removeFields = removeFields || {};

        var data = '';
        if (removeFields) {
            var params = $(form).serializeArray();
            $.each(params, function(i, field) {
                if (!(field.name in removeFields) && field.value != '') {
                    data += field.name + '=' + field.value + '&';
                }
            });

            data = data.substr(0, data.length-1);
        } else {
            data = $(form).serialize();
        }

        var currency = $('.autoba-filter-currency .active a').attr('data');
        data += '&currency=' + currency;

        var sortBig = $('.autoba-sorters li.active a').attr('data');
        var sortDirection = $('.autoba-sorters li a.sort-up').attr('data') !== undefined
                                ? $('.autoba-sorters li a.sort-up').attr('data')
                                : ($('.autoba-sorters li a.sort-bt').attr('data') !== undefined
                                        ? $('.autoba-sorters li a.sort-bt').attr('data') : '');

        if (sortDirection != '') {
            var direction = $('.autoba-sorters').find('.sort-bt').length > 0 ? 'desc' : 'asc';
            data += '&direction=' + direction;
        }

        return data + '&sort[]=' + sortBig + '&sort[]=' + sortDirection;
    },

    setHash: function(page) {
        if (!SearchGui.isNumber(page)) {
            page = 1;
        }

        var newHash = '';

        var form = $('.autoba-filters');

        $.each(
            decodeURIComponent(
                this.getFormData(
                    form,
                    {
                        'models_manufactures_id[]' : 1,
                        'models_id[]' : 1
                    }
                ) + '&page=' + page
            ).split('&'),
            function(index, data) {
                var data = data.split('=');

                if (data[1] != '' && data.length > 1) {
                    newHash += data[0] + '=' + data[1] + '&';
                }
            }
        );

        var selectedModels = {};

        $.each(form.find('.manufactures'), function(index, filter) {
            var manufactureId = $(filter).find('.manufacture').val();

            var modelSelect = $(filter).find('.model');
            var selectedModelOption = modelSelect.find('option:selected');
            var model = modelSelect.val();

            if (selectedModels[index] == undefined) {
                selectedModels[index] = {};
                if (selectedModels[index][manufactureId] == undefined) {
                    selectedModels[index][manufactureId] = {};
                }
            }

            if (model != '') {
                if (selectedModelOption.hasClass('group')) {
                    selectedModels[index][manufactureId] = {'g': selectedModelOption.attr('data')};
                } else {
                    selectedModels[index][manufactureId] = {'m': model};
                }
            } else {
                selectedModels[index][manufactureId] = "";
            }

        });
        $.each(selectedModels, function(index, carData) {
            $.each(carData, function(manufactureId, models) {
                if (manufactureId) {
                    if (Object.prototype.toString.call(models) === '[object Object]') {
                        $.each(models, function(type, id) {
                            newHash += 'car[' + index + '][' + manufactureId + '][' + type + ']=' + id + '&';
                        });
                    } else {
                        newHash += 'car[' + index + '][' + manufactureId + ']=' + models + '&';
                    }

                }
            });
        });

        window.location.hash = newHash.substr(0, newHash.length-1);

        this.seoFilterDefaults && SearchAdvert.clearSeoUrlPart();
    },

    parseHash: function(hash) {
        this.options = {};

        $('.ofm-header .b-update-btn-1').addClass('no-hint');

        $.each(decodeURIComponent(hash).substr(1).split('&'), function(index, data) {
            var data = data.split('=');
            if (!(data[0] in this.options)) {
                this.options[data[0]] = [];
                this.options[data[0]].push(data[1]);
            } else if (Object.prototype.toString.call(this.options[data[0]]) === "[object Array]") {
                this.options[data[0]].push(data[1]);
            }

        }.bind(this));

        SearchQuery.doLoad(hash.substr(1));
    },

    update: function(response) {
        if (response.counters.total != 0) {
            SearchGui.setCounters(response.counters);
            SearchGui.updateFilter(this.options);
        }
        if (response.content) {
            SearchGui.updateFilterSelects(this.options, response.counters);
            SearchGui.updateAdvertList(response.content);
        }

        PaginationSlider.afterPageLoad();
    },

    clearSeoUrlPart: function () {
        if (_.isEmpty(this.seoFilterDefaults)) {
            return;
        }

        var self = this,
            path = window.location.pathname,
            origin = window.location.origin,
            hash = window.location.hash,
            searchParts = window.location.search.replace('?', '').split('&'),
            newUrl;

        if (this.seoFilterDefaults.manufacturer) {
            path = path.substring(0, path.lastIndexOf('/'));
        }

        searchParts = _.filter(searchParts, function (part) {
            var shouldRemove = false;

            if (!part) {
                shouldRemove = true;
            }

            if (self.seoFilterDefaults.model) {
                part.indexOf('model') !== -1 && (shouldRemove = true);
            }

            if (self.seoFilterDefaults.city) {
                part.indexOf('city') !== -1 && (shouldRemove = true);
            }

            return !shouldRemove;
        });

        newUrl = origin + path;
        searchParts.length && (newUrl += ('?' + searchParts.join('&')));
        newUrl += hash;

        window.history.pushState({}, '', newUrl);
    }
};


var SearchGui = {
    counters: {},
    options: {
        titlePlaceholder: 'Автобарахолка',
        counterElements: {
            '.autoba-count': 'total',
            '.body-types' : 'body_type',
            '.states': 'state',
            '.fuels': 'fuel',
            '.transmissions': 'transmission',
            '.drivetrains': 'drivetrain',
            '.options': 'options',
            '.customs_clearance': 'customs_clearance',
            '.exchange': 'exchange',
            '.seller_type': 'seller_type'
        }
    },

    elements: {
        'min-price': 'select',
        'max-price': 'select',
        'max-year': 'select',
        'min-year': 'select',
        'max-mileage': 'select',
        'min-mileage': 'select',
        'max-capacity': 'select',
        'min-capacity': 'select',
        'body_type[]': 'input',
        'state[]': 'input',
        'fuel[]': 'input',
        'transmission[]': 'input',
        'drivetrain[]': 'input',
        'options[]': 'input',
        'customs_clearance': 'input',
        'exchange': 'input',
        'seller_type[]': 'input',
        'models_manufactures_id[]': 'select',
        'models_id[]': 'select',
        'colors_id[]': 'select',
        'country': 'select',
        'region': 'select',
        'city': 'select'
    },


    emptyCounters: function() {
        $.each(this.options.counterElements, function(selector, field) {
            $(selector).find('input').attr('disabled', 'disabled');
            $(selector).find('label').addClass('disb');
            $(selector).find('.count').html('');
        });

        $('.autoba-count .count').html('');
        $('.autoba-count .cars').html('');
        $('.autoba-count .total-count a').html('');
    },

    setCounters: function(counters) {
        this.emptyCounters();

        $.each(this.options.counterElements, function(selector, field) {
            if (counters[field] !== undefined) {
                if (counters[field].constructor == Object) {
                    $.each(counters[field], function(id, count) {
                        $(selector).find('.' + field + '-' + id + ' input').removeAttr('disabled');
                        $(selector).find('.' + field + '-' + id + ' label').removeClass('disb');
                        $(selector).find('.' + field + '-' + id + ' .count').html(count);
                    });
                } else {
                    $(selector).find('.count').html(counters[field]);
                }
            }
        });

        ColorsCount = Object.size(counters.colors_id);

        if (counters.total == counters.advCount) {
            $('.autoba-count .cars').html(this.declOfNum(counters.total, ['объявление', 'объявления', 'объявлений']));
        } else {
            $('.autoba-count .cars').html(this.declOfNum(counters.total, ['объявление', 'объявления', 'объявлений']) + ' из');
            $('.autoba-count .total-count a').html(counters.advCount);
        }
    },

    emptyFilter: function() {
        $('.autoba-sorters .sort-up').removeClass('sort-up');
        $('.autoba-sorters .sort-bt').removeClass('sort-bt');
        $.each(this.elements, function(field, type) {
            var domEl = $(document).find(type + '[name="' + field + '"]');

            if (domEl.is('input:checkbox')) {
                $.each(domEl, function(index, el) {
                    el.checked = false;
                });
            } else if (domEl.is('select')) {
                domEl.val('');
                $.each(domEl, function(index, el) {
                    $(el).val('')
                });

                var relatedSelects = domEl.parents('.ofm-forms-ips').find('select').not(':first');
                $.each(relatedSelects, function(index, el) {
                    if ($(el).hasClass('model') || $(el).hasClass('region') || $(el).hasClass('city')) {
                        $(el).attr('disabled', 'disabled');
                    }
                })

                // remove additional filters like car brand & colors
                if (domEl.length > 1) {
                    $(domEl).parents('fieldset').children('div').not(':first').remove();
                }
            }
        });
    },

    updateFilter: function(hash) {
        // empty filter
        this.emptyFilter();

        // restore filter
        $.each(hash, function(field, values) {
            $.each(values, function(index, value) {
                var domEl = $(document).find(this.elements[field] + '[name="' + field + '"]');

                if (domEl.is('input:checkbox')) {
                    $.each(domEl, function(index, el) {
                        if (el.value == value && !$(el).attr('disabled')) {
                            el.checked = 'checked';
                        }
                    });
                }
                else if (domEl.is('select')) {
                    $(domEl).val(value);
                }
                else {
                    if (field == 'currency') {
                        $('.autoba-filters .autoba-filter-currency .active').removeClass('active');
                        var currencySelector = $('.autoba-filters .autoba-filter-currency a[data="' + value.toUpperCase() + '"]');
                        currencySelector.parent().addClass('active');

                        var minPrice = $('.autoba-filters').find('select[name="min-price"]');
                        var maxPrice = $('.autoba-filters').find('select[name="max-price"]');

                        minPrice.find('option').not(':first').remove();
                        maxPrice.find('option').not(':first').remove();

                        var currencyCode = value.toLowerCase();

                        for (key in Prices[currencyCode]) {
                            var option = document.createElement('option');
                            option.value = key;
                            option.innerHTML = Prices[currencyCode][key] + ' ' + currencySelector.html();
                            minPrice.append($(option).clone());
                            maxPrice.append($(option).clone());
                        }

                        minPrice.val(hash['min-price']);
                        maxPrice.val(hash['max-price'])
                    }
                    // sorting
                    else if (field == 'sort[]') {
                        var sortField = $('.autoba-sorters a[data="' + value + '"]');
                        if (sortField.parent().hasClass('autoba-sorters-big')) {
                            $('.autoba-sorters-big.active').removeClass('active');
                            sortField.parent().addClass('active');
                        } else {
                            if (hash['direction'] != undefined) {
                                switch (hash['direction'][0]) {
                                    case 'desc':
                                        sortField.addClass('sort-bt');
                                        break;
                                    case 'asc':
                                        sortField.addClass('sort-up');
                                        break;
                                }
                            }

                        }
                    }
                }
            }.bind(this));
        }.bind(this))

    },

    updateFilterSelects: function(hash, counters) {
        var avaliableManufactures = counters.models_manufactures_id;
        var avaliableModels       = counters.models_id;

        var manufacturesSelect = $('.autoba-filters').find('select[name="models_manufactures_id[]"]');
        manufacturesSelect.find('option').not(':first').remove();

        $.each(Manufactures, function() {
            if (this.id in avaliableManufactures) {
                var option = document.createElement('option');
                option.value = this.id;
                option.innerHTML = this.name + ' (' + avaliableManufactures[this.id] + ')';
                manufacturesSelect.append(option)
            }
        });

        var selectedManufacture = {};
        var selectedModels = {};
        var seriesModels = [];

        for (field in hash) {
            if (field.indexOf('car') > -1) {
                var position = field.split('[')[1].substr(0, field.split('[')[1].length-1);
                var manufactureId = field.split('[')[2].substr(0, field.split('[')[2].length-1);
                var models = hash[field][0];

                if (field.split('[')[3]) {
                    var type = field.split('[')[3].substr(0, field.split('[')[3].length-1);
                } else {
                    var type = null;
                }

                if (type == 'g') {
                    if (models != '' && !(models in seriesModels)) {
                        $.each(ManufacturesModel[manufactureId], function(index, data) {
                            $.each(data, function(name, modelData) {
                                // group
                                if (Object.prototype.toString.call(modelData) == '[object Array]') {
                                    if (modelData[0] == models) {
                                        $.each(modelData[1], function(name, modelId) {
                                            if (modelId in avaliableModels) {
                                                selectedManufacture[position] = manufactureId;
                                                selectedModels[position] = 'series['+manufactureId+']=' + models;
                                                seriesModels.push(models);
                                                return false;
                                            }
                                        });
                                    }
                                }
                            });
                        });
                    }
                } else if (type == 'm') {
                    if (models in avaliableModels) {
                        selectedManufacture[position] = manufactureId;
                        selectedModels[position] = models;
                    }
                } else {
                    selectedManufacture[position] = manufactureId;
                }
            }
        }

        if (selectedManufacture) {
            var iterator = 0;
            $.each(selectedManufacture, function(index, manufactureId) {
                if(!(manufactureId in avaliableManufactures)) {
                    return
                }
                if (iterator != 0 && manufactureId in avaliableManufactures) {
                    SearchGui.addManufacturer();
                }
                manufacturesSelect = $('.autoba-filters').find('select[name="models_manufactures_id[]"]:last');
                manufacturesSelect.val(manufactureId);

                var modelsSelect = $(manufacturesSelect).parents('.manufactures:first').find('.model');
                modelsSelect.find('option').not(':first').remove();

                var seriesCount = {};
                $.each(ManufacturesModel[manufactureId], function(index, data) {
                    $.each(data, function(name, modelData) {
                        // group
                        if (Object.prototype.toString.call(modelData) == '[object Array]') {
                            var groupId = modelData[0];
                            var models = _.map(modelData[1], function (value, key) {
                                return {
                                    name: key,
                                    value: value
                                }
                            });

                            models = _.sortBy(models, function (model) {
                               return model.name;
                            });

                            var groupIsEmpty = true;
                            $.each(models, function(index, model) {
                                if (model.value in avaliableModels) {
                                    groupIsEmpty = false;
                                    if (!seriesCount[groupId]) {
                                        seriesCount[groupId] = 0;
                                    }
                                    seriesCount[groupId] += parseInt(avaliableModels[model.value]);
                                }
                            });

                            if (groupIsEmpty) return false;

                            var option = document.createElement('option');
                            option.value = 'series[' + manufactureId + ']='+groupId;
                            option.innerHTML = CarSeries[groupId] + ' (' + seriesCount[groupId] + ')';
                            option.className = 'group';
                            option.setAttribute('data', groupId);
                            modelsSelect.append(option);

                            $.each(models, function(index, model) {
                                if (model.value in avaliableModels) {
                                    option = document.createElement('option');
                                    option.value = model.value;
                                    option.innerHTML = '&nbsp;&nbsp;&nbsp;' + model.name + ' (' + avaliableModels[model.value] + ')';
                                    option.className = 'group-element';
                                    modelsSelect.append(option);
                                }
                            });
                        }
                        // model
                        else if (Object.prototype.toString.call(modelData) == '[object String]') {
                            if (modelData in avaliableModels) {
                                option = document.createElement('option');
                                option.value = modelData;
                                option.innerHTML = name + ' (' + avaliableModels[modelData] + ')';
                                modelsSelect.append(option);
                            }
                        }
                    });
                });

                modelsSelect.val(selectedModels[index]);
                modelsSelect.removeAttr('disabled');

                iterator++;
            });
        }

        var availableCountries = counters.country_id;
        var availableRegions   = counters.region_id;
        var availableCities    = counters.city_id;

        var countrySelect = $('.autoba-filters').find('select[name="country"]');
        var regionSelect = $(countrySelect).parents('fieldset').find('select[name="region"]');
        var citySelect = $(countrySelect).parents('fieldset').find('select[name="city"]');

        countrySelect.find('option').not(':first').remove();
        regionSelect.find('option').not(':first').remove();
        citySelect.find('option').not(':first').remove();

        var addNotInBelarusSellingCarsOption = function() {
            var notInBelarusCarsCount = 0;
            $.each(availableCountries, function(countryId, count) {
                if (countryId != SearchGui.belarusId) {
                    notInBelarusCarsCount += count;
                }
            });

            var option = document.createElement('option');
            option.value = '!' + SearchGui.belarusId;
            option.innerHTML = 'Не в Беларуси (' + notInBelarusCarsCount + ')';
            countrySelect.append(option);
        };

        $.each(availableCountries, function(countryId, count) {

            var option = document.createElement('option');
            option.value = countryId;
            option.innerHTML = Countries[countryId] + ' (' + count + ')';
            countrySelect.append(option);

            if (countryId == SearchGui.belarusId) {
                addNotInBelarusSellingCarsOption();
            }
        });

        if (hash['country']) {
            (function loadRegions() {
                var country = hash['country'][0];

                countrySelect.val(country);

                $.ajax({
                    async: false,
                    url: '/api/location/regions/' + country,
                    type: 'get',
                    dataType: 'json',
                    success: function (response) {
                        if (typeof response === 'object') {
                            $.each(response, function (region_id, region_name) {
                                if (availableRegions[region_id]) {
                                    var option = document.createElement('option');

                                    option.value = region_id;
                                    option.innerHTML = region_name + ' (' + availableRegions[region_id] + ')';

                                    regionSelect.append(option);
                                }
                            });

                            regionSelect.removeAttr('disabled');
                        }
                    }
                });
            })();
        }

        if (hash['region']) {
            (function loadCities() {
                var region = hash['region'][0];

                regionSelect.val(region);

                $.ajax({
                    async: false,
                    url: '/api/location/cities/' + region,
                    type: 'get',
                    dataType: 'json',
                    success: function (response) {
                        if (typeof response === 'object') {
                            $.each(response, function (city_id, city_name) {
                                if (availableCities[city_id]) {
                                    var option = document.createElement('option');

                                    option.value = city_id;
                                    option.innerHTML = city_name + ' (' + availableCities[city_id] + ')';

                                    citySelect.append(option);
                                }
                            });

                            citySelect.removeAttr('disabled');
                        }
                    }
                });
            })();

            if (hash['city']) {
                citySelect.val(hash['city']);
            }
        }

        var avaliableColor = counters.colors_id;
        var colorSelect = $('.autoba-filters').find('select[name="colors_id[]"]');
        colorSelect.find('option').not(':first').remove();
        $.each(Colors, function(index, data) {
            $.each(avaliableColor, function(colorId, count) {
                if (data[0] == colorId) {
                    var option = document.createElement('option');
                    option.value = colorId;
                    option.innerHTML = data[1] + ' (' + count + ')';
                    colorSelect.append(option);
                }
            });
        });

        if (hash['colors_id[]']) {
            var iterator = 0;
            $.each(hash['colors_id[]'], function(index, colorId) {
                if(!(colorId in avaliableColor)) {
                    return
                }
                if (iterator != 0 && colorId in avaliableColor) {
                    $('.autoba-filters .add-color a').trigger('click');
                }

                colorSelect = $('.autoba-filters').find('select[name="colors_id[]"]:last');
                colorSelect.val(colorId);
                iterator++;
            })
        }

        this.updateTitle();
    },

    addManufacturer: function () {
        $('.manufactures:first').find('.i-trash').css('display', 'inline');
        var newBrandFilter = $('.autoba-filters').find('.manufactures:first').clone();

        newBrandFilter.find('select').val('');
        newBrandFilter.find('select[name="models_id[]"]').attr('disabled', 'disabled');
        newBrandFilter.insertBefore('.car-brands .add-brand');
    },

    clearAdvertList: function() {
        $('.adverts-table').find('tr').not(':first').remove();

        //car brand & color remove icons
        if ($('.manufactures').length == 1) {
            $('.manufactures').find('.i-trash').hide();
        } else {
            $('.manufactures').find('.i-trash').css('display', 'inline');
        }
        if ($('.color').length == 1) {
            $('.color').find('.i-trash').hide();
        } else {
            $('.color').find('.i-trash').css('display', 'inline');
        }
    },

    updateAdvertList: function(content) {
        this.clearAdvertList();
        $('.grid-autoba .adverts-table').append(content);
    },

    declOfNum: function(number, titles)
    {
        cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    },

    isNumber: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },

    updateTitle: function () {
        var $manufactureSelected =$('[name*=models_manufactures_id]').find(':selected'),
            $modelSelected =$('[name*=models_id]').find(':selected'),
            $citySelected =$('[name=city]').find(':selected'),
            parts = [], titleText;

        if ($manufactureSelected.length <= 1 && $modelSelected.length <= 1) {
            [$manufactureSelected, $modelSelected, $citySelected].forEach(function ($item) {
                if (!$item.val()) {
                    return;
                }

                var text = $item.text();

                parts.push(text.slice(0, text.lastIndexOf(' (')).trim());
            });

            titleText = parts.join(' ');
        }

        $('.js-search-title').text(titleText || this.options.titlePlaceholder);
    }
};


var SearchQuery = {
    work: {},
    msg: {
        loading: 'Загружаю...',
        notFound: 'Ничего не найдено.',
        wrong: 'Что-то пошло не так',
        notFoundHtml: '<tr><td colspan="3"><strong>Извините, мы не можем найти объявления, соответствующие вашему запросу.</strong><br /><br />' +
            'Скорее всего, вы задали слишком жесткие условия поиска. Попробуйте <a class="reset-filter" href="#">сбросить фильтр</a> и повторить поиск.</td></tr>'
    },
    request: false,

    doLoad: function(a) {
        var self = this;

        this.work = a;
        this.request && this.request.abort();

        var autobaTable = $('.autoba-table'),
            autobaCount = $('.autoba-count'),
            updateButton = $('.ofm-header .b-update-btn-1');

        this.request = $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/search',
            data: this.work,
            context: this,
            beforeSend: function() {
                ONotice.notify(this.msg.loading);
                autobaTable.addClass('disabled');
                autobaCount.addClass('progress');
                updateButton.addClass('no-hint progress').html(updateButton.html().replace('Обновить', 'Обновление'));
            },

            complete: function() {
                self.request = false;
                autobaTable.removeClass('disabled');
                autobaCount.removeClass('progress');
                updateButton.removeClass('no-hint progress').html(updateButton.html().replace('Обновление', 'Обновить'));
            },

            success: function(response) {
                SearchGui.clearAdvertList();
                if (response.result) {
                    SearchAdvert.update(response.result);
                    ONotice.remove();
                    if (response.result.counters.total == 0) {
                        $('.adverts-table').append(this.msg.notFoundHtml);
                        ONotice.error(this.msg.notFound, 2);
                    }
                } else {
                    $('.adverts-table').append(this.msg.notFoundHtml);
                    ONotice.error(this.msg.notFound, 2);
                }
            },

            error: function() {
                ONotice.error(this.msg.wrong);
            }
        });
    }
};

$(function() {
    new HashObserver();
});
