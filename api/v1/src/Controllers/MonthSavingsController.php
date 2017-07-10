<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 12/1/2016
 * Time: 8:31 PM
 */

namespace OnTrack\Controllers;


use MonthSavings;
use OnTrack\Http\StatusCodes;
use OnTrack\Models\Token;
use PDO;
use OnTrack\Utilities\DatabaseConnection;

class MonthSavingsController
{

    public function postMonthSavings($args)
    {
        $role = Token::getRoleFromToken();
        if($role != Token::ROLE_ADMIN && $role != Token::ROLE_COACH){
            return array("error"=>"Not Authorized.");
        }

        $data = (object)json_decode(file_get_contents('php://input'));
        $dbo = DatabaseConnection::getInstance();

        $ClientID = strip_tags($data->ClientID);
        $DateSaved = strip_tags($data->DateSaved);
        $ClientHours = strip_tags($data->ClientHours);
        $ClientRate = strip_tags($data->ClientRate);
        $ClientPRDeductions = strip_tags($data->ClientPRDeductions);
        $ClientSelfEmployment = strip_tags($data->ClientSelfEmployment);
        $ClientSocialSecurity = strip_tags($data->ClientSocialSecurity);
        $ClientPension = strip_tags($data->ClientPension);
        $ClientAlimony = strip_tags($data->ClientAlimony);
        $ClientChildSupport = strip_tags($data->ClientChildSupport);
        $ClientOtherIncome = strip_tags($data->ClientOtherIncome);
        $SpouseHours = strip_tags($data->SpouseHours);
        $SpouseRate = strip_tags($data->SpouseRate);
        $SpousePRDeductions = strip_tags($data->SpousePRDeductions);
        $SpouseSelfEmployment = strip_tags($data->SpouseSelfEmployment);
        $SpouseSocialSecurity = strip_tags($data->SpouseSocialSecurity);
        $SpousePension = strip_tags($data->SpousePension);
        $SpouseAlimony = strip_tags($data->SpouseAlimony);
        $SpouseChildSupport = strip_tags($data->SpouseChildSupport);
        $SpouseOtherIncome = strip_tags($data->SpouseOtherIncome);
        $Rent = strip_tags($data->Rent);
        $Electricity = strip_tags($data->Electricity);
        $Gas = strip_tags($data->Gas);
        $WaterSewerGarbage = strip_tags($data->WaterSewerGarbage);
        $CableNetflixHulu = strip_tags($data->CableNetflixHulu);
        $Internet = strip_tags($data->Internet);
        $EntertainmentPkg = strip_tags($data->EntertainmentPkg);
        $OtherHomeUtilities = strip_tags($data->OtherHomeUtilities);
        $CellPhone = strip_tags($data->CellPhone);
        $Groceries = strip_tags($data->Groceries);
        $EatingOut = strip_tags($data->EatingOut);
        $PersonalHygiene = strip_tags($data->PersonalHygiene);
        $GroceiresOther = strip_tags($data->GroceiresOther);
        $AutoInsurance = strip_tags($data->AutoInsurance);
        $AutoFuel = strip_tags($data->AutoFuel);
        $PublicTransit = strip_tags($data->PublicTransit);
        $TransOther = strip_tags($data->TransOther);
        $MedicalOutOfPocket = strip_tags($data->MedicalOutOfPocket);
        $MedicalPrescriptions = strip_tags($data->MedicalPrescriptions);
        $MedicalOther = strip_tags($data->MedicalOther);
        $EduFees = strip_tags($data->EduFees);
        $EduSupplies = strip_tags($data->EduSupplies);
        $EduOther = strip_tags($data->EduOther);
        $ChildCareExpense = strip_tags($data->ChildCareExpense);
        $ChildSupport = strip_tags($data->ChildSupport);
        $ChildRecreation = strip_tags($data->ChildRecreation);
        $ChildClothing = strip_tags($data->ChildClothing);
        $ChildOther = strip_tags($data->ChildOther);
        $Memberships = strip_tags($data->Memberships);
        $LegalFees = strip_tags($data->LegalFees);
        $Donations = strip_tags($data->Donations);
        $Entertainment = strip_tags($data->Entertainment);
        $Pets = strip_tags($data->Pets);
        $Storage = strip_tags($data->Storage);
        $OtherShopping = strip_tags($data->OtherShopping);
        $ConstructiveDebt = strip_tags($data->ConstructiveDebt);
        $ConsumerDebt = strip_tags($data->ConsumerDebt);
        $Collections = strip_tags($data->Collections);
        $OtherExpenses = strip_tags($data->OtherExpenses);
        $Savings = strip_tags($data->Savings);

        $query_create_entry = 'INSERT INTO MonthSavingsRecord (MonthSavingsRecordID, ClientID, DateSaved, ClientHours, ClientRate, ClientPRDeductions, 
        ClientSelfEmployment, ClientSocialSecurity, ClientPension, ClientAlimony, ClientChildSupport, ClientOtherIncome, SpouseHours, SpouseRate, SpousePRDeductions, 
        SpouseSelfEmployment, SpouseSocialSecurity, SpousePension, SpouseAlimony, SpouseChildSupport, SpouseOtherIncome, Rent, Electricity, Gas, WaterSewerGarbage, 
        CableNetflixHulu, Internet, EntertainmentPkg, OtherHomeUtilities, CellPhone, Groceries, EatingOut, PersonalHygiene, GroceiresOther, AutoInsurance, AutoFuel, 
        PublicTransit, TransOther, MedicalOutOfPocket, MedicalPrescriptions, MedicalOther, EduFees, EduSupplies, EduOther, ChildCareExpense, ChildSupport, ChildRecreation, 
        ChildClothing, ChildOther, Memberships, LegalFees, Donations, Entertainment, Pets, Storage, OtherShopping, ConstructiveDebt, ConsumerDebt, Collections, OtherExpenses, 
        Savings) 
        VALUES (NULL, :ClientID, CURRENT_TIMESTAMP, :ClientHours, :ClientRate, :ClientPRDeductions, :ClientSelfEmployment, :ClientSocialSecurity, :ClientPension, 
        :ClientAlimony, :ClientChildSupport, :ClientOtherIncome, :SpouseHours, :SpouseRate, :SpousePRDeductions, :SpouseSelfEmployment, 
        :SpouseSocialSecurity, :SpousePension, :SpouseAlimony, :SpouseChildSupport, :SpouseOtherIncome, :Rent, :Electricity, :Gas, :WaterSewerGarbage, :CableNetflixHulu, 
        :Internet, :EntertainmentPkg, :OtherHomeUtilities, :CellPhone, :Groceries, :EatingOut, :PersonalHygiene, :GroceiresOther, :AutoInsurance, :AutoFuel, 
        :PublicTransit, :TransOther, :MedicalOutOfPocket, :MedicalPrescriptions, :MedicalOther, :EduFees, :EduSupplies, :EduOther, :ChildCareExpense, :ChildSupport, 
        :ChildRecreation, :ChildClothing, :ChildOther, :Memberships, :LegalFees, :Donations, :Entertainment, :Pets, :Storage, :OtherShopping, :ConstructiveDebt, 
        :ConsumerDebt, :Collections, :OtherExpenses, :Savings)
        ';

        $statement_create_entry = $dbo->prepare($query_create_entry);
        $statement_create_entry->bindParam(':ClientID', $ClientID);
        $statement_create_entry->bindParam(':ClientHours', $ClientHours);
        $statement_create_entry->bindParam(':ClientRate', $ClientRate);
        $statement_create_entry->bindParam(':ClientPRDeductions', $ClientPRDeductions);
        $statement_create_entry->bindParam(':ClientSelfEmployment', $ClientSelfEmployment);
        $statement_create_entry->bindParam(':ClientSocialSecurity', $ClientSocialSecurity);
        $statement_create_entry->bindParam(':ClientPension', $ClientPension);
        $statement_create_entry->bindParam(':ClientAlimony', $ClientAlimony);
        $statement_create_entry->bindParam(':ClientChildSupport', $ClientChildSupport);
        $statement_create_entry->bindParam(':ClientOtherIncome', $ClientOtherIncome);
        $statement_create_entry->bindParam(':SpouseHours', $SpouseHours);
        $statement_create_entry->bindParam(':SpouseRate', $SpouseRate);
        $statement_create_entry->bindParam(':SpousePRDeductions', $SpousePRDeductions);
        $statement_create_entry->bindParam(':SpouseSelfEmployment', $SpouseSelfEmployment);
        $statement_create_entry->bindParam(':SpouseSocialSecurity', $SpouseSocialSecurity);
        $statement_create_entry->bindParam(':SpousePension', $SpousePension);
        $statement_create_entry->bindParam(':SpouseAlimony', $SpouseAlimony);
        $statement_create_entry->bindParam(':SpouseChildSupport', $SpouseChildSupport);
        $statement_create_entry->bindParam(':SpouseOtherIncome', $SpouseOtherIncome);
        $statement_create_entry->bindParam(':Rent', $Rent);
        $statement_create_entry->bindParam(':Electricity', $Electricity);
        $statement_create_entry->bindParam(':Gas', $Gas);
        $statement_create_entry->bindParam(':WaterSewerGarbage', $WaterSewerGarbage);
        $statement_create_entry->bindParam(':CableNetflixHulu', $CableNetflixHulu);
        $statement_create_entry->bindParam(':Internet', $Internet);
        $statement_create_entry->bindParam(':EntertainmentPkg', $EntertainmentPkg);
        $statement_create_entry->bindParam(':OtherHomeUtilities', $OtherHomeUtilities);
        $statement_create_entry->bindParam(':CellPhone', $CellPhone);
        $statement_create_entry->bindParam(':Groceries', $Groceries);
        $statement_create_entry->bindParam(':EatingOut', $EatingOut);
        $statement_create_entry->bindParam(':PersonalHygiene', $PersonalHygiene);
        $statement_create_entry->bindParam(':GroceiresOther', $GroceiresOther);
        $statement_create_entry->bindParam(':AutoInsurance', $AutoInsurance);
        $statement_create_entry->bindParam(':AutoFuel', $AutoFuel);
        $statement_create_entry->bindParam(':PublicTransit', $PublicTransit);
        $statement_create_entry->bindParam(':TransOther', $TransOther);
        $statement_create_entry->bindParam(':MedicalOutOfPocket', $MedicalOutOfPocket);
        $statement_create_entry->bindParam(':MedicalPrescriptions', $MedicalPrescriptions);
        $statement_create_entry->bindParam(':MedicalOther', $MedicalOther);
        $statement_create_entry->bindParam(':EduFees', $EduFees);
        $statement_create_entry->bindParam(':EduSupplies', $EduSupplies);
        $statement_create_entry->bindParam(':EduOther', $EduOther);
        $statement_create_entry->bindParam(':ChildCareExpense', $ChildCareExpense);
        $statement_create_entry->bindParam(':ChildSupport', $ChildSupport);
        $statement_create_entry->bindParam(':ChildRecreation', $ChildRecreation);
        $statement_create_entry->bindParam(':ChildClothing', $ChildClothing);
        $statement_create_entry->bindParam(':ChildOther', $ChildOther);
        $statement_create_entry->bindParam(':Memberships', $Memberships);
        $statement_create_entry->bindParam(':LegalFees', $LegalFees);
        $statement_create_entry->bindParam(':Donations', $Donations);
        $statement_create_entry->bindParam(':Entertainment', $Entertainment);
        $statement_create_entry->bindParam(':Pets', $Pets);
        $statement_create_entry->bindParam(':Storage', $Storage);
        $statement_create_entry->bindParam(':OtherShopping', $OtherShopping);
        $statement_create_entry->bindParam(':ConstructiveDebt', $ConstructiveDebt);
        $statement_create_entry->bindParam(':ConsumerDebt', $ConsumerDebt);
        $statement_create_entry->bindParam(':Collections', $Collections);
        $statement_create_entry->bindParam(':OtherExpenses', $OtherExpenses);
        $statement_create_entry->bindParam(':Savings', $Savings);

        if (!$statement_create_entry->execute()) {
            http_response_code(StatusCodes::BAD_REQUEST);
            return array(
                "error" => "Entry not created in database."
            );
        }

        $entryId = $dbo->lastInsertId();
        //$entry = new Entry($entryId, $entryName, $entryValue, $categoryId, $displayName);

        //return $entry->jsonSerialize();
        return $dbo->lastInsertId();
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

    public function getMonthSavingsForCoach($args)
    {
        // Get League ID
        $coachId = $args;
        $dbo = DatabaseConnection::getInstance();

        $query_select_entry = '
            SELECT MonthSavingsRecordID, a.ClientID, DateSaved, ClientHours, ClientRate, ClientPRDeductions, 
            ClientSelfEmployment, ClientSocialSecurity, ClientPension, ClientAlimony, ClientChildSupport, ClientOtherIncome, SpouseHours, SpouseRate, SpousePRDeductions, 
            SpouseSelfEmployment, SpouseSocialSecurity, SpousePension, SpouseAlimony, SpouseChildSupport, SpouseOtherIncome, Rent, Electricity, Gas, WaterSewerGarbage, 
            CableNetflixHulu, Internet, EntertainmentPkg, OtherHomeUtilities, CellPhone, Groceries, EatingOut, PersonalHygiene, GroceiresOther, AutoInsurance, AutoFuel, 
            PublicTransit, TransOther, MedicalOutOfPocket, MedicalPrescriptions, MedicalOther, EduFees, EduSupplies, EduOther, ChildCareExpense, ChildSupport, ChildRecreation, 
            ChildClothing, ChildOther, Memberships, LegalFees, Donations, Entertainment, Pets, Storage, OtherShopping, ConstructiveDebt, ConsumerDebt, Collections, OtherExpenses, 
            Savings, d.ClientFirstName, d.ClientLastName 
            FROM MonthSavingsRecord a
            JOIN CoachClient b ON a.ClientID = b.ClientID
            JOIN OnTrackUsers c ON b.CoachID = c.UserID
            JOIN Client d ON d.ClientID = b.CoachID
            WHERE c.UserID = :coachID;
        ';

        $statement_select_entry = $dbo->prepare($query_select_entry);
        $statement_select_entry->bindParam(':coachID', $coachId);


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
            array_push($entries, new MonthSavings(
                $entry['ClientID'],
                $entry['DateSaved'],
                $entry['ClientHours'],
                $entry['ClientRate'],
                $entry['ClientPRDeductions'],
                $entry['ClientSelfEmployment'],
                $entry['ClientSocialSecurity'],
                $entry['ClientPension'],
                $entry['ClientAlimony'],
                $entry['ClientChildSupport'],
                $entry['ClientOtherIncome'],
                $entry['SpouseHours'],
                $entry['SpouseRate'],
                $entry['SpousePRDeductions'],
                $entry['SpouseSelfEmployment'],
                $entry['SpouseSocialSecurity'],
                $entry['SpousePension'],
                $entry['SpouseAlimony'],
                $entry['SpouseChildSupport'],
                $entry['SpouseOtherIncome'],
                $entry['Rent'],
                $entry['Electricity'],
                $entry['Gas'],
                $entry['WaterSewerGarbage'],
                $entry['CableNetflixHulu'],
                $entry['Internet'],
                $entry['EntertainmentPkg'],
                $entry['OtherHomeUtilities'],
                $entry['CellPhone'],
                $entry['Groceries'],
                $entry['EatingOut'],
                $entry['PersonalHygiene'],
                $entry['GroceiresOther'],
                $entry['AutoInsurance'],
                $entry['AutoFuel'],
                $entry['PublicTransit'],
                $entry['TransOther'],
                $entry['MedicalOutOfPocket'],
                $entry['MedicalPrescriptions'],
                $entry['MedicalOther'],
                $entry['EduFees'],
                $entry['EduSupplies'],
                $entry['EduOther'],
                $entry['ChildCareExpense'],
                $entry['ChildSupport'],
                $entry['ChildRecreation'],
                $entry['ChildClothing'],
                $entry['ChildOther'],
                $entry['Memberships'],
                $entry['LegalFees'],
                $entry['Donations'],
                $entry['Entertainment'],
                $entry['Pets'],
                $entry['Storage'],
                $entry['OtherShopping'],
                $entry['ConstructiveDebt'],
                $entry['ConsumerDebt'],
                $entry['Collections'],
                $entry['OtherExpenses'],
                $entry['Savings']
            ));
        }
        //echo($result);
        //$result = $coachID;

        return $entries;
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