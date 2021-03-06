(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_BJZW-Gws"; // Place your appKey from Kinvey here...
    let appSecret = "90c1641b24694c2e8a962ebd8751e8ba"; // Place your appSecret from Kinvey here...
    let _guestCredentials = "f8b2eef9-b90d-4f2a-b480-076b8ca05851.Wo47zJ0Bfn9aiRJjiKVJQ9TTDMoUeEruxIVdmg4GzUM="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester
    let authService = new AuthorizationService(baseUrl,appKey,appSecret,_guestCredentials)
    let requester = new Requester(authService);

    authService.initAuthorizationType("Kinvey");

    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController
    let homeView = new HomeView(mainContentSelector, selector);
    let homeController = new HomeController(homeView, requester, baseUrl, appKey);

    let userView = new UserView(mainContentSelector,selector);
    let userController = new UserController(userView, requester, baseUrl, appKey);

    let postView = new PostView(mainContentSelector,selector);
    let postController = new PostController(postView, requester, baseUrl, appKey);

    initEventServices();

    onRoute("#/", function () {
        // Check if user is logged in and if its not show the guest page, otherwise show the user page...
        if(authService.isLoggedIn()){
            homeController.showUserPage();
        }else {
            homeController.showGuestPage();
        }
    });

    onRoute("#/post-:id", function () {
        // Create a redirect to one of the recent posts...

    });

    onRoute("#/login", function () {
        // Show the login page...
        userController.showLoginPage(authService.isLoggedIn());
    });

    onRoute("#/register", function () {
        // Show the register page...
        userController.showRegisterPage(authService.isLoggedIn());
    });

    onRoute("#/logout", function () {
        // Logout the current user...
        userController.logout();
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
        let fullName = sessionStorage.getItem('fullName');
        postController.showCreatePostPage(fullName, authService.isLoggedIn());
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
        userController.login(data);
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
        userController.register(data);
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
        postController.createNewPost(data);
    });

    run('#/');
})();
