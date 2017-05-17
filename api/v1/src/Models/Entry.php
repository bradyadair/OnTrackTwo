<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 1/23/2017
 * Time: 10:44 AM
 */

class Entry implements \JsonSerializable
{
    private $entryId;
    private $entryValue;
    private $entryName;
    private $categoryId;
    private $displayName;

    public function __construct($entryId, $entryName, $entryValue, $categoryId, $displayName)
    {
        $this->entryId=$entryId;
        $this->entryName=$entryName;
        $this->entryValue=$entryValue;
        $this->categoryId=$categoryId;
        $this->displayName=$displayName;
    }

    public function jsonSerialize()
    {
        return array(
            "id"=>$this->entryId,
            "entryValue"=>$this->entryValue,
            "entryName"=>$this->entryName,
            "categoryId"=>$this->categoryId,
            "displayName"=>$this->displayName
        );
    }

    /**
     * @return mixed
     */
    public function getEntryId()
    {
        return $this->entryId;
    }

    /**
     * @param mixed $entryId
     */
    public function setEntryId($entryId)
    {
        $this->entryId = $entryId;
    }

    /**
     * @return mixed
     */
    public function getEntryValue()
    {
        return $this->entryValue;
    }

    /**
     * @param mixed $entryValue
     */
    public function setEntryValue($entryValue)
    {
        $this->entryValue = $entryValue;
    }

    /**
     * @return mixed
     */
    public function getEntryName()
    {
        return $this->entryName;
    }

    /**
     * @param mixed $entryName
     */
    public function setEntryName($entryName)
    {
        $this->entryName = $entryName;
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
}