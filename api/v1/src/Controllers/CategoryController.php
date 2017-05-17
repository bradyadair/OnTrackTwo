<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 12/1/2016
 * Time: 8:31 PM
 */

namespace OnTrack\Controllers;


use OnTrack\Http\StatusCodes;
use OnTrack\Models\Category;
use OnTrack\Models\Token;
use PDO;
use OnTrack\Utilities\DatabaseConnection;

class CategoryController
{

    public function postCategory($args)
    {
        $username = Token::getUsernameFromToken();
        if($username == null){
            return array("error"=>"Token not valid.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

        $categoryName = strip_tags($data->categoryName);

        $query_create_category = '
        INSERT INTO Category
        (CategoryName)
        VALUES 
        (:categoryName)
        ';

        $statement_create_category = $dbo->prepare($query_create_category);
        $statement_create_category->bindParam(':categoryName', $categoryName);

        if (!$statement_create_category->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Category not created in database."
            );
        }

        $categoryId = $dbo->lastInsertId();
        $category = new Category($categoryId, $categoryName);

        return $category->jsonSerialize();
    }

    public function putCategory($args)
    {
        $username = Token::getUsernameFromToken();
        if($username == null){
            return array("error"=>"Token not valid.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

        $categoryName = strip_tags($data->categoryName);
        $categoryId = strip_tags($data->categoryId);

        $query_update_category = '
        UPDATE Category
        SET CategoryName = :categoryName
        WHERE CategoryId = :categoryId
        ';

        $statement_update_category = $dbo->prepare($query_update_category);
        $statement_update_category->bindParam(':categoryName', $categoryName);
        $statement_update_category->bindParam(':categoryId', $categoryId);

        if (!$statement_update_category->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Category not updated in database."
            );
        }

        $category = new Category($categoryId, $categoryName);

        return $category->jsonSerialize();
    }

    public function deleteCategory($args)
    {
        $username = Token::getUsernameFromToken();
        if($username == null){
            return array("error"=>"Token not valid.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

        $categoryId = strip_tags($data->categoryId);

        $query_delete_category = '
        DELETE FROM Category
        WHERE CategoryId = :categoryId
        ';

        $statement_delete_category = $dbo->prepare($query_delete_category);
        $statement_delete_category->bindParam(':categoryId', $categoryId);

        if (!$statement_delete_category->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Category not deleted in database."
            );
        }

        return array(
            "deleted" => $statement_delete_category->rowCount()
        );
    }

    public function getCategory($args)
    {

        // Get League ID
        $categoryId = $args['id'];
        $dbo = DatabaseConnection::getInstance();


        $query_select_category = '
        SELECT CategoryId, CategoryName 
        FROM Category
        WHERE CategoryId = :categoryId
        ';

        $statement_select_category = $dbo->prepare($query_select_category);
        $statement_select_category->bindParam(':categoryId', $categoryId);

        if (!$statement_select_category->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Query failed."
            );
        }

        $result = $statement_select_category->fetchAll(PDO::FETCH_ASSOC);

        $category = new Category(
            $result['CategoryId'],
            $result['CategoryName']
        );


        return $category->jsonSerialize();
    }

    public function getCategories($args)
    {
        $dbo = DatabaseConnection::getInstance();


        $query_select_category = '
        SELECT CategoryId, CategoryName 
        FROM Category
        ';

        $statement_select_category = $dbo->prepare($query_select_category);

        if (!$statement_select_category->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Query failed."
            );
        }

        $result = $statement_select_category->fetchAll(PDO::FETCH_ASSOC);

        $categories = [];
        foreach ($result as $category) {
            array_push($categories, array(
                'CategoryId'=>$category['CategoryId'],
                'CategoryName'=>$category['CategoryName']
            ));
        }

        return $categories;
    }
}