class PostController{
    constructor(postView, requester, baseUrl, appkey){
        this._postView = postView;
        this._requester = requester;
        this._appKey = appkey;
        this._baseServiceUrl = baseUrl + "/appdata/" + appkey + "/posts"; //TODO
    }


    
    showCreatePostPage(fullName,isLoggedIn){
        this._postView.showCreatePostPage(fullName, isLoggedIn);
    }

    createNewPost(data){
            this._requester.post(this._baseServiceUrl,data,function (responseData) {
                showPopup('success', 'Made new post!');
                redirectUrl('#/');
            },    function (responseData) {
                    showPopup('error', 'Something missing!');
                }
            )
    }
}