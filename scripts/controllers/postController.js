class PostController{
    constructor(postView, requester, baseUrl, appkey){
        this._postView = postView;
        this._requester = requester;
        this._appKey = appkey;
        this._baseServiceUrl = baseUrl; //TODO
    }

    createNewPost(){
        
    }
    
    showCreatePostPage(){
        this._postView.showCreatePostPage();
    }
}