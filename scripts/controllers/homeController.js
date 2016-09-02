class HomeController{
    constructor(homeView, requester, baseUrl, appkey){
        this._homeView = homeView;
        this.requester = requester;
        this._appKey = appkey;
        this._baseServiceUrl = baseUrl + "/appdata/" + appkey + "/posts";
    
    }
    showGuestPage(){
        let _that = this;
        this.requester.get(this._baseServiceUrl, function (response){
            showPopup('success','Got your IDs');
            _that._homeView.showGuestPage(response);
        }, function (data) {
           showPopup('error', 'Mistake!');
        })

    }
    showUserPage(){
        this._homeView.showUserPage();
    }
}