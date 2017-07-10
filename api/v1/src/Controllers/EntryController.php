<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 12/1/2016
 * Time: 8:31 PM
 */

namespace OnTrack\Controllers;


use Entry;
use OnTrack\Http\StatusCodes;
use OnTrack\Models\Token;
use PDO;
use OnTrack\Utilities\DatabaseConnection;

class EntryController
{

    public function postEntry($args)
    {
        $username = Token::getUsernameFromToken();
        if($username == null){
            return array("error"=>"Token not valid.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

        $entryName = strip_tags($data->entryName);
        $entryValue = strip_tags($data->entryValue);
        $categoryId = strip_tags($data->categoryId);
        $displayName = strip_tags($data->displayName);

        $query_create_entry = '
        INSERT INTO Entry
        (EntryName, EntryValue, CategoryId, DisplayName)
        VALUES 
        (:entryName, :entryValue, :categoryId, :displayName)
        ';

        $statement_create_entry = $dbo->prepare($query_create_entry);
        $statement_create_entry->bindParam(':entryName', $entryName);
        $statement_create_entry->bindParam(':entryValue', $entryValue);
        $statement_create_entry->bindParam(':categoryId', $categoryId);
        $statement_create_entry->bindParam(':displayName', $displayName);

        if (!$statement_create_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Entry not created in database."
            );
        }

        $entryId = $dbo->lastInsertId();
        $entry = new Entry($entryId, $entryName, $entryValue, $categoryId, $displayName);

        return $entry->jsonSerialize();
    }

    public function putEntry($args)
    {
        $username = Token::getUsernameFromToken();
        if($username == null){
            return array("error"=>"Token not valid.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();


        $entryName = strip_tags($data->entryName);
        $entryId = strip_tags($data->entryId);
        $entryValue = strip_tags($data->entryValue);
        $categoryId = strip_tags($data->categoryId);
        $displayName = strip_tags($data->displayName);

        $query_update_entry = '
        UPDATE Entry
        SET EntryName = :entryName,
            EntryValue = :entryValue,
            CategoryId = :categoryId,
            DisplayName = :displayName
        WHERE EntryId = :entryId
        ';

        $statement_update_entry = $dbo->prepare($query_update_entry);
        $statement_update_entry->bindParam(':entryName', $entryName);
        $statement_update_entry->bindParam(':entryId', $entryId);
        $statement_update_entry->bindParam(':entryValue', $entryValue);
        $statement_update_entry->bindParam(':categoryId', $categoryId);
        $statement_update_entry->bindParam(':displayName', $displayName);

        if (!$statement_update_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Entry not updated in database."
            );
        }

        $entry = new Entry($entryId, $entryName, $entryValue, $categoryId, $displayName);

        return $entry->jsonSerialize();
    }

    public function deleteEntry($args)
    {
        $username = Token::getUsernameFromToken();
        if($username == null){
            return array("error"=>"Token not valid.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

        $entryId = strip_tags($data->entryId);

        $query_delete_entry = '
        DELETE FROM Entry
        WHERE EntryId = :entryId
        ';

        $statement_delete_entry = $dbo->prepare($query_delete_entry);
        $statement_delete_entry->bindParam(':entryId', $entryId);

        if (!$statement_delete_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Entry not deleted in database."
            );
        }

        return array(
            "deleted" => $statement_delete_entry->rowCount()
        );
    }

    public function getEntry($args)
    {

        // Get League ID
        $entryId = $args['id'];
        $dbo = DatabaseConnection::getInstance();

        $query_select_entry = '
        SELECT EntryId, EntryName, EntryValue, CategoryId, DisplayName
        FROM Entry
        WHERE EntryId = :entryId
        ';


        $statement_select_entry = $dbo->prepare($query_select_entry);
        $statement_select_entry->bindParam(':entryId', $entryId);


        if (!$statement_select_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Query failed."
            );
        }

        $result = $statement_select_entry->fetchAll(PDO::FETCH_ASSOC)[0];

        $entry = new Entry(
            $result['EntryId'],
            $result['EntryName'],
            $result['EntryValue'],
            $result['CategoryId'],
            $result['DisplayName']
        );

        return $entry->jsonSerialize();
    }

    //GET ENTRIES BY THE FIRST PART OF THE ENTRY NAME
    public function getEntryName($args)
    {

        // Get entries with EntryName
        $entryName = $args['name'];
        //$entryName+='%';
        $dbo = DatabaseConnection::getInstance();

        $query_select_entry = "
        SELECT EntryId, EntryName, EntryValue, CategoryId, DisplayName
        FROM Entry
        WHERE EntryName like :entryName
        ";


        $statement_select_entry = $dbo->prepare($query_select_entry);
        $statement_select_entry->bindParam(':entryName', $entryName);


        if (!$statement_select_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Query failed."
            );
        }

        $result = $statement_select_entry->fetchAll(PDO::FETCH_ASSOC);

        $entries = [];
        foreach ($result as $entry) {
//            array_push($entries, array(
//                'EntryId'=>$entry['EntryId'],
//                'EntryName'=>$entry['EntryName'],
//                'EntryValue'=>$entry['EntryValue'],
//                'CategoryId'=>$entry['CategoryId']
//            ));
            array_push($entries, new Entry(
                $entry['EntryId'],
                $entry['EntryName'],
                $entry['EntryValue'],
                $entry['CategoryId'],
                $entry['DisplayName']
            ));
        }

        return $entries;
    }

    //GET ENTRIES IN A SPECIFIC CATEGORY
    public function getEntryCategory($args)
    {

        // Get entries with EntryName
        $catName = $args['category'];
        //$entryName+='%';
        $dbo = DatabaseConnection::getInstance();

        $query_select_entry = "
        SELECT EntryId, EntryName, EntryValue, CategoryId, DisplayName
        FROM Entry
        WHERE CategoryId = :catName
        ";


        $statement_select_entry = $dbo->prepare($query_select_entry);
        $statement_select_entry->bindParam(':catName', $catName);


        if (!$statement_select_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Query failed."
            );
        }

        $result = $statement_select_entry->fetchAll(PDO::FETCH_ASSOC);

        $entries = [];
        foreach ($result as $entry) {
//            array_push($entries, array(
//                'EntryId'=>$entry['EntryId'],
//                'EntryName'=>$entry['EntryName'],
//                'EntryValue'=>$entry['EntryValue'],
//                'CategoryId'=>$entry['CategoryId']
//            ));
            array_push($entries, new Entry(
                $entry['EntryId'],
                $entry['EntryName'],
                $entry['EntryValue'],
                $entry['CategoryId'],
                $entry['DisplayName']
            ));
        }

        return $entries;
    }

    public function getEntries($args)
    {
        $dbo = DatabaseConnection::getInstance();


        $query_select_entry = '
        SELECT EntryId, EntryName, EntryValue, CategoryId, DisplayName
        FROM Entry
        ';

        $statement_select_entry = $dbo->prepare($query_select_entry);

        if (!$statement_select_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Query failed."
            );
        }

        $result = $statement_select_entry->fetchAll(PDO::FETCH_ASSOC);

        $entries = [];
        foreach ($result as $entry) {
//            array_push($entries, array(
//                'EntryId'=>$entry['EntryId'],
//                'EntryName'=>$entry['EntryName'],
//                'EntryValue'=>$entry['EntryValue'],
//                'CategoryId'=>$entry['CategoryId']
//            ));
            array_push($entries, new Entry(
                $entry['EntryId'],
                $entry['EntryName'],
                $entry['EntryValue'],
                $entry['CategoryId'],
                $entry['DisplayName']
            ));
        }

        return $entries;
    }
}