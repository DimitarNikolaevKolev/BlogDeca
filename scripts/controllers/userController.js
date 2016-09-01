class UserController{
    constructor(userView, requester, baseUrl, appkey){
        this._userView = userView;
        this._requester = requester;
        this._appKey = appkey;
        this._baseServiceUrl = baseUrl; //TODO

    }
    showLoginPage(){
        this._userView.showLoginPage();
    }

    showRegisterPage() {
        this._userView.showRegisterPage();
    }

    register(data){

    }

    login(data){

    }

    logout(){
        sessionStorage.clear();
        
    }
}
