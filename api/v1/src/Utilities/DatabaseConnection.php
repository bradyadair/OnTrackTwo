<?php
/**
 * Created by PhpStorm.
 * User: iamcaptaincode
 */

namespace OnTrack\Utilities;


class DatabaseConnection
{
    private static $instance = null;
    private static $host = "localhost";
    private static $dbname = "cottage6_expungement";
    private static $user = "cottage6_weber";
    private static $pass = "cottages3750";

    private function __construct()
    {
    }

    public static function getInstance()
    {
        if (!static::$instance === null) {
            return static::$instance;
        } else {
            try {
                static::$instance = new \PDO('mysql:host=' . static::$host. ';dbname=' . static::$dbname, static::$user, static::$pass);
//                static::$instance = new \PDO('mysql:host=' . static::$host, static::$user, static::$pass);
//                $connectionString = "mysql:host=" . static::$host . ";dbname=" . static::$dbname;
//                static::$instance = new \PDO($connectionString, static::$user, static::$pass);
                static::$instance->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
                return static::$instance;
            } catch (PDOException $e) {
                echo "Unable to connect to the database: " . $e->getMessage();
                die();
            }
        }
    }

}

