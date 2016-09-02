class HomeView{
    constructor(mainContentSelector, wrapperSelector){
        this._mainContentSelector = mainContentSelector;
        this._wrapperSelector = wrapperSelector;
    }
    showGuestPage(mainData){
       $.get('templates/welcome-guest.html',
           function (template) {
            let renderedTemplate = Mustache.render(template, null);

               $(this._wrapperSelector).html(renderedTemplate);
               $.get('templates/posts.html',
                   function (template) {

               })
       })
    }
    showUserPage(){
        
    }
}
