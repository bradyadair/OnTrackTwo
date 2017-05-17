<?php
/**
 * Created by PhpStorm.
 * User: tanner
 * Date: 2/8/2017
 * Time: 10:17 AM
 */


$url = 'https://www.irs.gov/instructions/i8962/ch02.html';

if(isset($_GET['url'])) $url = $_GET['url'];

$output = file_get_contents($url);

$dom = new DOMDocument;
@$dom->loadHTML($output);
$tables = iterator_to_array($dom->getElementsByTagName('table'));
$values = [];
$the_table = $tables[6];
foreach ($the_table->childNodes as $parentNode) {
    foreach (iterator_to_array($parentNode->childNodes) as $key => $row) {
//////// This is the row
        if ($key > 1) {
            $row_values = iterator_to_array($row->childNodes);
            if(sizeof($row_values) > 1){
                if (!ctype_space(@$row_values[2]->textContent)) {
                    $values['a_f_' . @$row_values[2]->textContent] = @$row_values[4]->textContent;
                }
                if (!ctype_space(@$row_values[8]->textContent)) {
                    $values['a_f_' . @$row_values[8]->textContent] = @$row_values[10]->textContent;
                }
                if (!ctype_space(@$row_values[14]->textContent)) {
                    $values['a_f_' . @$row_values[14]->textContent] = @$row_values[16]->textContent;
                }
                if (!ctype_space(@$row_values[20]->textContent)) {
                    $values['a_f_' . @$row_values[20]->textContent] = @$row_values[22]->textContent;
                }
            }
        }
    }
}
natsort($values);

//var_dump($values);
//var_dump($values);
//
$entries_url = "http://www.cottagesofhope.org/weberstate/ontrack/api/v1/api.php?endpoint=entry";
$entries = json_decode(file_get_contents($entries_url));
echo '[';
$output = '';
foreach ($entries as $entry) {
    if($entry->categoryId == 15){
        $json_data = json_encode(array(
            "entryId" => $entry->id,
            "entryName" => $entry->entryName,
            "displayName" => $entry->displayName,
            "entryValue" => str_replace(' ', '', $values[$entry->entryName]),
            "categoryId" => $entry->categoryId
        ));
        $output .= $json_data . ',';
    }

//    var_dump($json_data);
//    $curl = curl_init($entries_url);
//    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
//    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
//        "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTMxNjU3NjcsImp0aSI6IjU4ZmZlNmM3NjMyZTkxLjgwMTc3NTQyIiwiaXNzIjoiaHR0cHM6XC9cL3NlY3VyZS5ibHVlaG9zdC5jb20iLCJuYmYiOjE0OTMxNjU3NjcsImV4cCI6NjIyMzU2NTc2NywiZGF0YSI6eyJyb2xlIjoiQWRtaW4iLCJ1c2VybmFtZSI6InRhbm5lciJ9fQ.CmYysHmetbjI_eNRYms3x8l3v9b0-s-NBE4xXgkPqGk"
//    ));
//    curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
//    $json_response = curl_exec($curl);
//
//    var_dump(curl_getinfo($curl));
}
echo substr($output, 0, -1);
echo ']';
//
//var_dump($values);
//foreach($values as $key=>$value){
//    if (strlen($key) > 6){
//        print($key . ' - ' . $value . '</br>');
//        $icarus = 'https://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/';
//        $json_data = json_encode(array(
//            "entryName"=>$key,
//            "entryValue"=>str_replace(' ', '', $value),
//            "categoryId"=>15
//
//        ));

//        $curl = curl_init($icarus);
//        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
//        curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
//
//        $json_response = curl_exec($curl);
//        print($json_response);
//    }
//}


//foreach ($tables as $table) {
//
//    if ($table->childNodes->length > 100) {
//        $count = 5;
//        foreach ($table->childNodes as $node) {
//            $index = 0;
//            $current_min = str_replace("$", "", $node->childNodes[0]->textContent);
//            foreach ($node->childNodes as $cell) {
//                if ($index != 0 and $index != 1) {
//                    $count++;
//                    $entry_name = $types[$index] . '_' . $current_min;
//                    echo $types[$index];
//                    echo '_';
//                    echo $current_min;
//                    echo ' - ';
//                    echo $index + 5;
//                    echo ' - ';
//                    echo str_replace("$", "", $cell->textContent);
//                    echo '<br/>';
//
//                    $icarus = 'https://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/';
//
//                    $json_data = json_encode(array(
//                        "entryId"=>$count,
//                        "entryName"=>$entry_name,
//                        "entryValue"=>str_replace("$", "", $cell->textContent),
//                        "categoryId"=>$index + 5
//                    ));
//
//                    $curl = curl_init($icarus);
//                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//                    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
//                    curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
//
//
//                    $json_response = curl_exec($curl);
//
//                }
//                $index++;
//            }
//            echo '<br/>';
//        }
//        echo '<br/>';
//    }
//}
