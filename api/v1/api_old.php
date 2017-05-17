<?php
ini_set('log_errors', 1);
ini_set('error_log', 'errors.log');
date_default_timezone_set('UTC');

use OnTrack\Http\Methods;

require_once 'config.php';
require_once 'vendor/autoload.php';
require_once 'vendor/ircmaxell/password-compat/lib/password.php';

require_once 'src/Http/Methods.php';
require_once 'src/Http/StatusCodes.php';

require_once 'src/Controllers/CategoryController.php';
require_once 'src/Controllers/EntryController.php';
require_once 'src/Controllers/UserController.php';
require_once 'src/Controllers/TokenController.php';

require_once 'src/Models/Category.php';
require_once 'src/Models/Entry.php';
require_once 'src/Models/User.php';
require_once 'src/Models/Token.php';

require_once 'src/Utilities/DatabaseConnection.php';
require_once 'src/Utilities/Setup.php';

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) use ($baseURI) {

    // Categories

    $handleSetup = function($args){
        return (new \OnTrack\Utilities\Setup())->set_it_up();
    };
    $r->addRoute('GET', $baseURI . '/setup/', $handleSetup);


    $handleGetCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->getCategory($args);
    };
    $handleGetCategories = function($args){
        return (new \OnTrack\Controllers\CategoryController())->getCategories($args);
    };
    $handlePostCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->postCategory($args);
    };
    $handlePutCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->putCategory($args);
    };
    $handleDeleteCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->deleteCategory($args);
    };

    $r->addRoute('GET', $baseURI . '/category/{id:\d+}', $handleGetCategory);
    $r->addRoute('GET', $baseURI . '/category/{id:\d+}/', $handleGetCategory);
    $r->addRoute('GET', $baseURI . '/category', $handleGetCategories);
    $r->addRoute('GET', $baseURI . '/category/', $handleGetCategories);
    $r->addRoute('POST', $baseURI . '/category', $handlePostCategory);
    $r->addRoute('POST', $baseURI . '/category/', $handlePostCategory);
    $r->addRoute('PUT', $baseURI . '/category', $handlePutCategory);
    $r->addRoute('PUT', $baseURI . '/category/', $handlePutCategory);
    $r->addRoute('DELETE', $baseURI . '/category', $handleDeleteCategory);
    $r->addRoute('DELETE', $baseURI . '/category/', $handleDeleteCategory);


    // Entries

    $handleGetEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->getEntry($args);
    };
    $handleGetEntries = function($args){
        return (new \OnTrack\Controllers\EntryController())->getEntries($args);
    };
    $handlePostEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->postEntry($args);
    };
    $handlePutEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->putEntry($args);
    };
    $handleDeleteEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->deleteEntry($args);
    };

    $r->addRoute('GET', $baseURI . '/entry/{id:\d+}', $handleGetEntry);
    $r->addRoute('GET', $baseURI . '/entry/{id:\d+}/', $handleGetEntry);
    $r->addRoute('GET', $baseURI . '/entry', $handleGetEntries);
    $r->addRoute('GET', $baseURI . '/entry/', $handleGetEntries);
    $r->addRoute('POST', $baseURI . '/entry', $handlePostEntry);
    $r->addRoute('POST', $baseURI . '/entry/', $handlePostEntry);
    $r->addRoute('PUT', $baseURI . '/entry', $handlePutEntry);
    $r->addRoute('PUT', $baseURI . '/entry/', $handlePutEntry);
    $r->addRoute('DELETE', $baseURI . '/entry', $handleDeleteEntry);
    $r->addRoute('DELETE', $baseURI . '/entry/', $handleDeleteEntry);


//    $handleGetUser = function($args){
//        return (new \OnTrack\Controllers\UserController())->getUser($args);
//    };
    $handlePostUser = function($args){
        return (new \OnTrack\Controllers\UserController())->postUser($args);
    };
    $handlePutUser = function($args){
        return (new \OnTrack\Controllers\UserController())->patchUser($args);
    };
    $handleDeleteUser = function($args){
        return (new \OnTrack\Controllers\UserController())->deleteUser($args);
    };

//    $r->addRoute('GET', $baseURI . '/user/{id:\d+}', $handleGetUser);
//    $r->addRoute('GET', $baseURI . '/user/{id:\d+}/', $handleGetUser);
    $r->addRoute('POST', $baseURI . '/user', $handlePostUser);
    $r->addRoute('POST', $baseURI . '/user/', $handlePostUser);
    $r->addRoute('PUT', $baseURI . '/user', $handlePutUser);
    $r->addRoute('PUT', $baseURI . '/user/', $handlePutUser);
    $r->addRoute('DELETE', $baseURI . '/user', $handleDeleteUser);
    $r->addRoute('DELETE', $baseURI . '/user/', $handleDeleteUser);


    $handlePostToken = function ($args) {

        $tokenController = new \OnTrack\Controllers\TokenController();
        //Is the data via a form?
        if (!empty($_POST['username'])) {
            $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
            $password = $_POST['password'];
        } else {
            //Attempt to parse json input
            $json = (object) json_decode(file_get_contents('php://input'));
            if (count((array)$json) >= 2) {
                $username = filter_var($json->username, FILTER_SANITIZE_STRING);
                $password = $json->password;
            } else {
                http_response_code(\OnTrack\Http\StatusCodes::BAD_REQUEST);
                exit();
            }
        }
        return $tokenController->buildToken($username, $password);
    };

    $r->addRoute('POST', $baseURI . '/token/', $handlePostToken);
    $r->addRoute('POST', $baseURI . '/token', $handlePostToken);

});

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

$pos = strpos($uri, '?');
if ($pos !== false) {
    $uri = substr($uri, 0, $pos);
}

$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($method, $uri);

switch($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        http_response_code(OnTrack\Http\StatusCodes::NOT_FOUND);
        //Handle 404
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        http_response_code(OnTrack\Http\StatusCodes::METHOD_NOT_ALLOWED);
        //Handle 403
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler  = $routeInfo[1];
        $vars = $routeInfo[2];

        $response = $handler($vars);
        echo json_encode($response);
        break;
}