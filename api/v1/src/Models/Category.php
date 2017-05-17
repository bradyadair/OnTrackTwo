<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 1/23/2017
 * Time: 10:36 AM
 */

namespace OnTrack\Models;


class Category implements \JsonSerializable
{
    private $categoryId;
    private $categoryName;

    public function __construct($categoryId, $categoryName)
    {
        $this->categoryName=$categoryName;
        $this->categoryId=$categoryId;
    }

    public function jsonSerialize()
    {
        // TODO: Implement jsonSerialize() method.
        return array(
            "categoryId"=>$this->getCategoryId(),
            "categoryName"=>$this->getCategoryName()
        );
    }

    /**
     * @return mixed
     */
    public function getCategoryId()
    {
        return $this->categoryId;
    }

    /**
     * @param mixed $categoryId
     */
    public function setCategoryId($categoryId)
    {
        $this->categoryId = $categoryId;
    }

    /**
     * @return mixed
     */
    public function getCategoryName()
    {
        return $this->categoryName;
    }

    /**
     * @param mixed $categoryName
     */
    public function setCategoryName($categoryName)
    {
        $this->categoryName = $categoryName;
    }

}