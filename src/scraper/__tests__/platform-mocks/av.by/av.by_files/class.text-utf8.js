var CText = function(options) {
    this.initialize(options);
}

CText.prototype = {

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

var textInterface = new CText({
    'login_form_head_txt': 'Вход на сайт',
    'private_messages': 'Личные сообщения',
    'only_registered_users_allowed_private_messages': 'Только зарегистрированные пользователи могут оставлять сообщения',
    'offer_exchange':'Предложить обмен',
    'only_registered_users_allowed_exchanged': 'Только зарегистрированные пользователи могут предлагать обмен',
    'password': 'Пароль',
    'claim_success_title': 'Спасибо за участие!',
    'claim_title': 'Жалоба на сообщения',
    'year': 'год',
    'cubic_centimeters': 'см<sup>3</sup>'
    ,'ask_yourself_head': 'Хотите задать вопрос сами себе?'
    ,'ask_yourself_text':'Вообще-то, это выглядит странно...<br>Сходите лучше прогуляйтесь и&nbsp;подышите свежим воздухом.'
    ,'exchange_yourself_head':'Хотите обменяться сами с собой?'
    ,'exchange_yourself_text':'Отличная идея!<br>Если не&nbsp;понравится, то&nbsp;в&nbsp;любое время можно будет обменяться обратно.'
    ,'dialog_delete_confirm': 'Вы действительно хотите удалить эту переписку?'
    ,'kWt': 'кВт'
    ,'bookmarks': 'Закладки'
    ,'only_registered_users_allowed_bookmarks': 'Только зарегистрированные на сайте пользователи могут создавать закладки'
    ,'bookmarks_success_add': 'Объявление добавлено в закладки'
    ,'bookmarks_success_remove': 'Объявление удалено из закладок'
    ,'views': 'Просмотры'
});
