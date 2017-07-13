<?php
/**
 * Created by PhpStorm.
 * User: Joshua
 * Date: 10/24/2016
 * Time: 12:55 PM
 */

namespace OnTrack\Controllers;

use PDO;
use OnTrack\Models\Token;
use OnTrack\Http\StatusCodes;
use OnTrack\Utilities\DatabaseConnection;
//require_once '../../vendor/ircmaxell/password-compat/lib/password.php';

class TokenController
{
    public function buildToken($username, $password)
    {
        $data = (object)json_decode(file_get_contents('php://input'));
        if(!$username) $username = $data->username;
        if(!$password) $password = $data->password;
        $dbo = DatabaseConnection::getInstance();
        $query_get_password_hash = '
        SELECT Password, UserId, UserRole
        From OnTrackUsers
        WHERE Username = :username
        LIMIT 1
        ';
        $statement_get_password = $dbo->prepare($query_get_password_hash);
        $statement_get_password->bindValue(':username', $username);

        if ($statement_get_password->execute()) {
            $fetched_data = $statement_get_password->fetch(PDO::FETCH_ASSOC);
            $hashed_password = $fetched_data['Password'];
            $user_role = $fetched_data['UserRole'];
            $id = $fetched_data['UserId'];

            if (password_verify($password, $hashed_password)) {
                $token_object = new Token();
                if($user_role == 'Admin'){
                    $role = Token::ROLE_ADMIN;
                }
                else if($user_role == 'Coach'){
                    $role = Token::ROLE_COACH;
                }
                else{
                    $role = Token::ROLE_CLIENT;
                }

                $token = $token_object->buildToken($role, $username, $id);
                return $token;
            }
        }
        return null;

    }

    public function getRole($token)
    {
        $token_object = new Token();
        //$data = (object)json_decode(file_get_contents('php://input'));
        //if(!$token) $token = $data->token;
        return $token_object->getRoleFromToken($token);
    }

    public function getId($token)
    {
        $token_object = new Token();
        $data = (object)json_decode(file_get_contents('php://input'));
        if(!$token) $token = $data->token;
        return $token_object->getIdFromToken($token);
    }
}