<?php
/**
 * Created by PhpStorm.
 * User: tanner
 * Date: 2/8/2017
 * Time: 10:17 AM
 */

ini_set('log_errors', 1);
ini_set('error_log', 'error.log');


$url = $_GET['url'];

//echo $url;

$output = file_get_contents($url);


$dom = new DOMDocument;
$dom->loadHTML($output);
$tables = $dom->getElementsByTagName('tbody');


$types = [
    'min',
    'max',
    'single_no_children',
    'single_one_child',
    'single_two_children',
    'single_three_children',
    'married_no_children',
    'married_one_child',
    'married_two_children',
    'married_three_children'
];

foreach ($tables as $table) {

    if ($table->childNodes->length > 100) {
        $count = 5;
        echo '$LENGTH > 100';
        foreach (iterator_to_array($table->childNodes) as $node) {
            $index = 0;
            $initial_node_children = iterator_to_array($node->childNodes);
            $current_min = str_replace("$", "", $node->childNodes->item(0)->textContent);

            foreach ($initial_node_children as $cell) {
                if ($index != 0 and $index != 1) {
                    $count++;
                    $entry_name = $types[$index] . '_' . $current_min;
                    echo $types[$index];
                    echo '_';
                    echo $current_min;
                    echo ' - ';
                    echo $index + 5;
                    echo ' - ';
                    echo str_replace("$", "", $cell->textContent);
                    echo '<br/>';

                    $icarus = '../api/v1/api.php?endpoint=entry';
//
                    $json_data = json_encode(array(
                        "entryId"=>$count,
                        "entryName"=>$entry_name,
                        "entryValue"=>str_replace("$", "", $cell->textContent),
                        "categoryId"=>$index + 5
                    ));
//
                    $curl = curl_init($icarus);
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
//
//
                    $json_response = curl_exec($curl);
//
                }
                $index++;
            }
            echo '<br/>';
        }
        echo '<br/>';
    }
}
