class UserController{
    constructor(userView, requester, baseUrl, appkey){
        this._userView = userView;
        this._requester = requester;
        this._appKey = appkey;
        this._baseServiceUrl = baseUrl + "/user/" + appkey + "/"; //TODO

    }
    showLoginPage(isLoggedIn){
        this._userView.showLoginPage(isLoggedIn);
    }

    showRegisterPage(isLoggedIn) {
        this._userView.showRegisterPage(isLoggedIn);
    }

    register(data){
        if(data.username.length < 6){
            showPopup('error','Your username is less than 6 symbols');
            return;
        }
        if(data.fullName.length < 5){
            showPopup('error','Your Full Name is less than 5 symbols')
        return;
        }
        if(data.password != data.confirmPassword){
            showPopup('error','Your password do not match');
            return;
        }
        if(data.password.length < 8 ){
            showPopup('error', 'Your password is less than 8 symbols');
            return;
        }

        delete data['confirmPassword']

        this._requester.post(this._baseServiceUrl,data,
        
        function successCallback(response) {
            showPopup('success', 'Successful registration!');
            redirectUrl('#/login');
        },
        function errorCallback(response) {
            showPopup('error', 'Unsuccessful registration!')
        }
        );

    }

    login(data){
        let requestUrl = this._baseServiceUrl + "login";
        this._requester.post(requestUrl, data,

            function successCallback(response) {
                showPopup('success', 'Successful login!');
                redirectUrl('#/');
            },
            function errorCallback(response) {
                showPopup('error', 'Unsuccessful login!')
            }
        );
    }

    logout(){
        sessionStorage.clear();
        redirectUrl('#/')
    }
}
