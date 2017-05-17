<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 4/22/2017
 * Time: 3:27 PM
 */
namespace OnTrack\Utilities;

use OnTrack\Utilities\DatabaseConnection;

class Setup
{

    public function set_it_up()
    {

        echo "0";

        $dbo = DatabaseConnection::getInstance();
        $dbo->beginTransaction();

        $statement_use_db = $dbo->prepare('USE cottage6_expungement;');
        echo $statement_use_db->execute();

        echo "1";

//        $query_drop_user_table = '
//            DROP TABLE IF EXISTS OnTrackUsers';
//        $query_create_user_table = '
//            CREATE TABLE OnTrackUsers
//            (
//              UserID INTEGER PRIMARY KEY,
//              UserName VARCHAR(32),
//              Password VARCHAR(60)
//          )';
//
//        $query_drop_entry_table = '
//        DROP TABLE IF EXISTS Entry';
//        $query_create_entry_table = '
//            CREATE TABLE Entry
//            (
//              EntryID INTEGER PRIMARY KEY,
//              EntryName VARCHAR(128),
//              EntryValue FLOAT,
//              CategoryId INTEGER,
//              DisplayName VARCHAR(128)
//            )
//        ';
//
//        $query_drop_category_table = '
//        DROP TABLE IF EXISTS Category';
//        $query_create_category_table = '
//            CREATE TABLE Category
//            (
//              CategoryID INTEGER PRIMARY KEY
//              CategoryName VARCHAR(128)
//            )';
//
//        echo 2;
//
//        $statement_drop_user_table = $dbo->prepare($query_drop_user_table);
//        $statement_create_user_table = $dbo->prepare($query_create_user_table);

//        $statement_drop_entry_table = $dbo->prepare($query_drop_user_table);
//        $statement_create_entry_table = $dbo->prepare($query_create_user_table);
//
//        $statement_drop_category_table = $dbo->prepare($query_drop_user_table);
//        $statement_create_category_table = $dbo->prepare($query_create_user_table);
//
//
//        echo 3;
//
//        echo $statement_drop_user_table->execute();
//        echo $statement_create_user_table->execute();
//
//        echo $statement_drop_entry_table->execute();
//        echo $statement_create_entry_table->execute();
//
//        echo $statement_drop_category_table->execute();
//        try{
//            echo $statement_create_category_table->execute();
//        } catch(\PDOException $e){
//            echo $e;
//        }
//
//        echo 4;
//
//        $dbo->commit();


        echo 5;

//        $statement_test_input = $dbo->prepare("INSERT INTO Category (CategoryName) VALUES ('hi there')");
//        echo $statement_test_input->execute();
//        $statement_select_categories = $dbo->prepare("SELECT * FROM Category");
//        echo $statement_select_categories->execute();
//        var_dump($statement_select_categories->fetchAll(\PDO::FETCH_ASSOC));

        echo 6;

        $CATEGORY_URL = 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/category';
        $ENTRY_URL = 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry';
        $TOKEN_URL = 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/token';
        $USER_URL = 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/user';

        $categories = json_decode(file_get_contents($CATEGORY_URL));

//        var_dump($categories);

//        foreach($categories as $category){
//            $QUERY_INPUT_CATEGORY = "INSERT INTO Category VALUES (:id, :name)";
//            $statement_input_category = $dbo->prepare($QUERY_INPUT_CATEGORY);
//            $statement_input_category->bindParam(":id", $category->CategoryId);
//            $statement_input_category->bindParam(":name", $category->CategoryName);
//            echo $statement_input_category->execute();
//            echo '<br/>';
//        }
//
        $entries = json_decode(file_get_contents($ENTRY_URL));
        var_dump($entries);
        foreach($entries as $entry){

            $QUERY_INPUT_ENTRY = "INSERT INTO Entry VALUES (:id, :value, :name, :displayname, :categoryId)";
            $statement_input_entry = $dbo->prepare($QUERY_INPUT_ENTRY);
            $statement_input_entry->bindParam(":id", $entry->entryId);
            $statement_input_entry->bindParam(":value", $entry->entryValue);
            $statement_input_entry->bindParam(":name", $entry->entryName);
            $statement_input_entry->bindParam(":displayname", $entry->displayName);
            $statement_input_entry->bindParam(":categoryId", $entry->categoryId);
            echo $statement_input_entry->execute() . ' - ' . $entry->entryId;
            echo '<br/>';
        }


    }
}
