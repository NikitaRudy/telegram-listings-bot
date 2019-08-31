var CSettings = function(options) {
    this.initialize(options);
}

CSettings.prototype = {

    options: {},

    initialize: function(options)
    {
        this.options = options || {};
    },

    setOptions: function(options)
    {
        $.extend(this.options, options);
    }
};

var settingsInterface = new CSettings({});
