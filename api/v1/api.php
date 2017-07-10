<?php

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
require_once 'src/Controllers/MonthSavingsController.php';

require_once 'src/Models/Category.php';
require_once 'src/Models/Entry.php';
require_once 'src/Models/User.php';
require_once 'src/Models/Token.php';
require_once 'src/Models/MonthSavings.php';

require_once 'src/Utilities/DatabaseConnection.php';
require_once 'src/Utilities/Setup.php';

$main = function () {
    $args = array();
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {

        if ($_GET['endpoint'] == 'entry') {
            if (isset($_GET['id'])) {
                $args = array("id" => $_GET['id']);
                echo json_encode((new \OnTrack\Controllers\EntryController())->getEntry($args));
            } 
            //Using getEntryName to find the values with the name beginning with certain text (Ex. housing_1) to use for calculations
            else if (isset($_GET['name'])) {
                $args = array("name" => $_GET['name']);
                echo json_encode((new \OnTrack\Controllers\EntryController())->getEntryName($args));
            } 
            else if (isset($_GET['category'])) {
                $args = array("category" => $_GET['category']);
                echo json_encode((new \OnTrack\Controllers\EntryController())->getEntryCategory($args));
            } 
            else echo json_encode((new \OnTrack\Controllers\EntryController())->getEntries($args));
        }

        if ($_GET['endpoint'] == 'category') {
            if (isset($_GET['id'])) {
                $args = array("id" => $_GET['id']);
                echo json_encode((new \OnTrack\Controllers\CategoryController())->getCategory($args));
            } else echo json_encode((new \OnTrack\Controllers\CategoryController())->getCategories($args));
        }

        if ($_GET['endpoint'] == 'monthSavingsByCoach') {
            if (!empty($_GET['token'])) {
                    $args = $_GET['token'];
                }
            else{
                $json = (object)json_decode(file_get_contents('php://input'));
                $args = $json->token;
            }
            $coachID = (new \OnTrack\Controllers\TokenController())->getId($args);
            echo json_encode((new \OnTrack\Controllers\TokenController())->getId($args));
            echo json_encode((new \OnTrack\Controllers\MonthSavingsController())->getMonthSavingsForCoach($coachID));
        }

        if ($_GET['endpoint'] == 'token') {
            if (isset($_GET['token'])) {
                if (!empty($_GET['token'])) {
                    //$args = $_GET['token'];
                }
                else{
                    $json = (object)json_decode(file_get_contents('php://input'));
                    $args = $json->token;
                }
                echo json_encode((new \OnTrack\Controllers\TokenController())->getRole($args));
            } else echo json_encode((new \OnTrack\Controllers\TokenController())->getRole($args));
        }


    }
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if ($_GET['endpoint'] == 'entry') {
            echo json_encode((new \OnTrack\Controllers\EntryController())->postEntry($args));
        }
        if ($_GET['endpoint'] == 'category') {
            echo json_encode((new \OnTrack\Controllers\CategoryController())->postCategory($args));
        }
        if ($_GET['endpoint'] == 'token') {
            $tokenController = new \OnTrack\Controllers\TokenController();
                //Is the data via a form?
            if (!empty($_POST['username'])) {
                $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
                $password = $_POST['password'];
            } 
            else {
                //Attempt to parse json input
                $json = (object)json_decode(file_get_contents('php://input'));
                if (count((array)$json) >= 2) {
                    $username = filter_var($json->username, FILTER_SANITIZE_STRING);
                    $password = $json->password;
                } else {
                    http_response_code(\OnTrack\Http\StatusCodes::BAD_REQUEST);
                    exit();
                }
            }
            echo $tokenController->buildToken($username, $password);
        };
        if ($_GET['endpoint'] == 'user') {
            echo json_encode((new \OnTrack\Controllers\UserController())->postUser($args));
        }
        if ($_GET['endpoint'] == 'monthsavings') {
            echo json_encode((new \OnTrack\Controllers\MonthSavingsController())->postMonthSavings($args));
        }
    }
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        if ($_GET['endpoint'] == 'entry') {
            echo json_encode((new \OnTrack\Controllers\EntryController())->putEntry($args));
        }
        if ($_GET['endpoint'] == 'category') {
            echo json_encode((new \OnTrack\Controllers\CategoryController())->putCategory($args));
        }
        if ($_GET['endpoint'] == 'user') {
            echo json_encode((new \OnTrack\Controllers\UserController())->patchUser($args));
        }
    }
    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        if ($_GET['endpoint'] == 'entry') {
            echo json_encode((new \OnTrack\Controllers\EntryController())->deleteEntry($args));
        }
        if ($_GET['endpoint'] == 'category') {
            echo json_encode((new \OnTrack\Controllers\CategoryController())->deleteCategory($args));
        }
        if ($_GET['endpoint'] == 'user') {
            echo json_encode((new \OnTrack\Controllers\UserController())->deleteUser($args));
        }
    }
};

$main();