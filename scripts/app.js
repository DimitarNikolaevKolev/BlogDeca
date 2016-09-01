(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_SJcY3fIs"; // Place your appKey from Kinvey here...
    let appSecret = "96be0705baf14f9db2b7ab373aa9fd51"; // Place your appSecret from Kinvey here...
    let _guestCredentials = "77a9f20f-d322-499a-a29d-27285354d52c.N6sgjOK1rRwqd0wVAaVYmrvCiQbNJ2TIDUkTsOCXw50="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester
    let authService = new AuthorizationService(baseUrl,appKey,appSecret,_guestCredentials)
    let requester = new Requester(authService);

    authService.initAuthorizationType("Kinvey");

    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController
    let homeView = new HomeView(mainContentSelector, selector);
    let homeController = new HomeController(homeView);

    let userView = new UserView(mainContentSelector,selector);
    let userController = new UserController(userView);

    let postView = new PostView(mainContentSelector,selector);
    let postController = new PostController(postView);

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
        userController.showLoginPage();
    });

    onRoute("#/register", function () {
        // Show the register page...
        userController.showRegisterPage();
    });

    onRoute("#/logout", function () {
        // Logout the current user...
        userController.logout();
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
        postController.showCreatePostPage();
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
