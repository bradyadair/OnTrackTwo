<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 12/1/2016
 * Time: 7:53 AM
 */

namespace OnTrack\Models;


class User implements \JsonSerializable
{
    private $userId;
    private $username;
    private $password;

    public function verify($pass){
        return password_verify($this->password, $pass);
    }

    public function jsonSerialize()
    {
        return array(
            "userId"=>$this->userId,
            "username"=>$this->username
//            "password"=>$this->password,
        );
    }

    /**
     * @return mixed
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @param mixed $userId
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;
    }

    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = password_hash($password, PASSWORD_BCRYPT);
    }

    public function __construct($userId, $username, $password, $leagues=null)
    {
        $this->userId = $userId;
        $this->username = $username;
        $this->password = password_hash($password, PASSWORD_BCRYPT);
    }
}