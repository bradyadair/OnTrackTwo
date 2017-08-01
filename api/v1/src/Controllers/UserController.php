<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 12/1/2016
 * Time: 7:53 AM
 */

namespace OnTrack\Controllers;


use OnTrack\Http\StatusCodes;
use OnTrack\Models\Token;
use OnTrack\Models\User;
use OnTrack\Utilities\DatabaseConnection;
use PDO;

class UserController
{

    public function postUser($args){
        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

        // Do you need to validate? I mean, this is how you actually create a user. So, forget this probably.
        if(Token::getUsernameFromToken() == null){
            return array("error"=>"Token not valid.");
        }

        $username = strip_tags($data->username);
        $password = $data->password;
        $role = "Client";

        if($data->admin)
        {
            $role = "Admin"
        } 
        else if($data->coach)
        {
            $role = "Coach"
        } 
        else 
        {
            $role = "Client"
        }

        $user = new User(null, $username, $password);
        $password = $user->getPassword();

        $query_insert_user = 'INSERT INTO OnTrackUsers (`UserName`, `Password`, `UserRole`) VALUES (:username, :pass, :role)';
        $statement_insert_user = $dbo->prepare($query_insert_user);
        $statement_insert_user->bindParam(':username', $username);
        $statement_insert_user->bindParam(':pass', $password);
        $statement_insert_user->bindParam(':role', $role);

        try{
            if(!$statement_insert_user->execute()){
                http_response_code(StatusCodes::INTERNAL_SERVER_ERROR);
                return array("error"=>"Insert user failed.");
            }
        }
        catch(\PDOException $e){
            http_response_code(StatusCodes::CONFLICT);
            return array("error"=>"PDO Exception - duplicate user name.");
        }

        $response = $dbo->lastInsertId();

        $user->setUserId($response);

        return $user;
    }

    public function patchUser($args){
        $username = Token::getUsernameFromToken();
        if($username == null){
            http_response_code(StatusCodes::BAD_REQUEST);
            return array("error"=>"Token not valid.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

//        if($username != strip_tags($data->username)){
//            return array("error"=>"You can only change your own password.");
//        }

        $old_password = $data->oldPassword;
        $tc = new TokenController();
        var_dump($username);
        if (!$tc->buildToken($username, $old_password)){
            http_response_code(StatusCodes::BAD_REQUEST);
            return array("error"=>"Incorrect old password");
        }

        $password = $data->password;

        $query_change_password = 'UPDATE OnTrackUsers SET Password = :pass WHERE Username = :username';
        $statement_change_password = $dbo->prepare($query_change_password);
        $statement_change_password->bindParam(':username', $username);
        $hashword = password_hash($password, PASSWORD_BCRYPT);
        $statement_change_password->bindParam(':pass', $hashword);

        if(!$statement_change_password->execute()){
            http_response_code(StatusCodes::INTERNAL_SERVER_ERROR);
            return array("error"=>"password not changed.");
        }


        return array(
            "success"=>"password changed"
        );
    }

    public function deleteUser($args){
        $dbo = DatabaseConnection::getInstance();


        $username = Token::getUsernameFromToken();

        $query_get_userid = 'SELECT UserId FROM OnTrackUsers WHERE Username = :username';
        $statement_get_userid = $dbo->prepare($query_get_userid);
        $statement_get_userid->bindParam(":username", $username);

        if(!$statement_get_userid->execute()){
            http_response_code(StatusCodes::INTERNAL_SERVER_ERROR);
            return array("error"=>"Get UserID query failed.");
        }
        $userId = $statement_get_userid->fetch()[0];

        $query_delete_user = 'DELETE FROM OnTrackUsers WHERE UserName = :username';
        $statement_delete_user = $dbo->prepare($query_delete_user);
        $statement_delete_user->bindParam(":username", $username);

        if(!$statement_delete_user->execute()){
            http_response_code(StatusCodes::INTERNAL_SERVER_ERROR);
            return array("error"=>"Delete user query failed.");
        }

        return array("success"=>"Account $username deleted.");

    }
}
