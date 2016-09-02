class UserView{
    constructor(mainContentSelector, wrapperSelector){
        this._mainContentSelector = mainContentSelector;
        this._wrapperSelector = wrapperSelector;
    }
    showLoginPage(isLoggedIn){

        let _that = this;
        let requsetTemplate = isLoggedIn ? 'templates/form-user.html' : 'templates/form-guest.html';

        $.get(requsetTemplate, function (template) {

            let renderedTemplate = Mustache.render(template, null);

            $(_that._wrapperSelector).html(renderedTemplate);

            $.get('templates/login.html', function (template) {
                let renderedLogin = Mustache.render(template,null);
                $(_that._mainContentSelector).html(renderedLogin)
            })
        })



    }
    showRegisterPage(isLoggedIn){
        
    }
}
