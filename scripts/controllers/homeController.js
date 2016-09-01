class HomeController{
    constructor(homeView, requester, baseUrl, appkey){
        this._homeView = homeView;
        this._requester = requester;
        this._appKey = appkey;
        this._baseServiceUrl = baseUrl; // TODO
    
    }
    showGuestPage(){
        this._homeView.showGuestPage();
    }
    showUserPage(){
        this._homeView.showUserPage();
    }
}