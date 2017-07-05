<?php

class MonthSavings implements \JsonSerializable
{
    private $ClientID;
    private $DateSaved;
    private $ClientHours;
    private $ClientRate;
    private $ClientPRDeductions;
    private $ClientSelfEmployment;
    private $ClientSocialSecurity;
    private $ClientPension;
    private $ClientAlimony;
    private $ClientChildSupport;
    private $ClientOtherIncome;
    private $SpouseHours;
    private $SpouseRate;
    private $SpousePRDeductions;
    private $SpouseSelfEmployment;
    private $SpouseSocialSecurity;
    private $SpousePension;
    private $SpouseAlimony;
    private $Rent;
    private $Electricity;
    private $Gas;
    private $WaterSewerGarbage;
    private $CableNetflixHulu;
    private $Internet;
    private $EntertainmentPkg;
    private $OtherHomeUtilities;
    private $CellPhone;
    private $Groceries;
    private $EatingOut;
    private $PersonalHygiene;
    private $GroceiresOther;
    private $AutoInsurance;
    private $AutoFuel;
    private $PublicTransit;
    private $TransOther;
    private $MedicalOutOfPocket;
    private $MedicalPrescriptions;
    private $MedicalOther;
    private $EduFees;
    private $EduSupplies;
    private $EduOther;
    private $ChildCareExpense;
    private $ChildSupport;
    private $ChildRecreation;
    private $ChildClothing;
    private $ChildOther;
    private $Memberships;
    private $LegalFees;
    private $Donations;
    private $Entertainment;
    private $Pets;
    private $Storage;
    private $OtherShopping;
    private $ConstructiveDebt;
    private $ConsumerDebt;
    private $Collections;
    private $OtherExpenses;
    private $Savings;
    
    /**
     * @return mixed
     */
    public function getClientID()
    {
        return $this->ClientID;
    }

    /**
     * @param mixed $ClientID
     */
    public function setClientID($ClientID)
    {
        $this->ClientID = $ClientID;
    }

    /**
     * @return mixed
     */
    public function getDateSaved()
    {
        return $this->DateSaved;
    }

    /**
     * @param mixed $DateSaved
     */
    public function setDateSaved($DateSaved)
    {
        $this->DateSaved = $DateSaved;
    }

    /**
     * @return mixed
     */
    public function getClientHours()
    {
        return $this->ClientHours;
    }

    /**
     * @param mixed $ClientHours
     */
    public function setClientHours($ClientHours)
    {
        $this->ClientHours = $ClientHours;
    }

    /**
     * @return mixed
     */
    public function getClientRate()
    {
        return $this->ClientRate;
    }

    /**
     * @param mixed $ClientRate
     */
    public function setClientRate($ClientRate)
    {
        $this->ClientRate = $ClientRate;
    }

    /**
     * @return mixed
     */
    public function getClientPRDeductions()
    {
        return $this->ClientPRDeductions;
    }

    /**
     * @param mixed $ClientPRDeductions
     */
    public function setClientPRDeductions($ClientPRDeductions)
    {
        $this->ClientPRDeductions = $ClientPRDeductions;
    }

    /**
     * @return mixed
     */
    public function getClientSelfEmployment()
    {
        return $this->ClientSelfEmployment;
    }

    /**
     * @param mixed $ClientSelfEmployment
     */
    public function setClientSelfEmployment($ClientSelfEmployment)
    {
        $this->ClientSelfEmployment = $ClientSelfEmployment;
    }

    /**
     * @return mixed
     */
    public function getClientSocialSecurity()
    {
        return $this->ClientSocialSecurity;
    }

    /**
     * @param mixed $ClientSocialSecurity
     */
    public function setClientSocialSecurity($ClientSocialSecurity)
    {
        $this->ClientSocialSecurity = $ClientSocialSecurity;
    }

    /**
     * @return mixed
     */
    public function getClientPension()
    {
        return $this->ClientPension;
    }

    /**
     * @param mixed $ClientPension
     */
    public function setClientPension($ClientPension)
    {
        $this->ClientPension = $ClientPension;
    }

    /**
     * @return mixed
     */
    public function getClientAlimony()
    {
        return $this->ClientAlimony;
    }

    /**
     * @param mixed $ClientAlimony
     */
    public function setClientAlimony($ClientAlimony)
    {
        $this->ClientAlimony = $ClientAlimony;
    }

    /**
     * @return mixed
     */
    public function getClientChildSupport()
    {
        return $this->ClientChildSupport;
    }

    /**
     * @param mixed $ClientChildSupport
     */
    public function setClientChildSupport($ClientChildSupport)
    {
        $this->ClientChildSupport = $ClientChildSupport;
    }

    /**
     * @return mixed
     */
    public function getClientOtherIncome()
    {
        return $this->ClientOtherIncome;
    }

    /**
     * @param mixed $ClientOtherIncome
     */
    public function setClientOtherIncome($ClientOtherIncome)
    {
        $this->ClientOtherIncome = $ClientOtherIncome;
    }

    /**
     * @return mixed
     */
    public function getSpouseHours()
    {
        return $this->SpouseHours;
    }

    /**
     * @param mixed $SpouseHours
     */
    public function setSpouseHours($SpouseHours)
    {
        $this->SpouseHours = $SpouseHours;
    }

    /**
     * @return mixed
     */
    public function getSpouseRate()
    {
        return $this->SpouseRate;
    }

    /**
     * @param mixed $SpouseRate
     */
    public function setSpouseRate($SpouseRate)
    {
        $this->SpouseRate = $SpouseRate;
    }

    /**
     * @return mixed
     */
    public function getSpousePRDeductions()
    {
        return $this->SpousePRDeductions;
    }

    /**
     * @param mixed $SpousePRDeductions
     */
    public function setSpousePRDeductions($SpousePRDeductions)
    {
        $this->SpousePRDeductions = $SpousePRDeductions;
    }

    /**
     * @return mixed
     */
    public function getSpouseSelfEmployment()
    {
        return $this->SpouseSelfEmployment;
    }

    /**
     * @param mixed $SpouseSelfEmployment
     */
    public function setSpouseSelfEmployment($SpouseSelfEmployment)
    {
        $this->SpouseSelfEmployment = $SpouseSelfEmployment;
    }

    /**
     * @return mixed
     */
    public function getSpouseSocialSecurity()
    {
        return $this->SpouseSocialSecurity;
    }

    /**
     * @param mixed $SpouseSocialSecurity
     */
    public function setSpouseSocialSecurity($SpouseSocialSecurity)
    {
        $this->SpouseSocialSecurity = $SpouseSocialSecurity;
    }

    /**
     * @return mixed
     */
    public function getSpousePension()
    {
        return $this->SpousePension;
    }

    /**
     * @param mixed $SpousePension
     */
    public function setSpousePension($SpousePension)
    {
        $this->SpousePension = $SpousePension;
    }

    /**
     * @return mixed
     */
    public function getSpouseAlimony()
    {
        return $this->SpouseAlimony;
    }

    /**
     * @param mixed $SpouseAlimony
     */
    public function setSpouseAlimony($SpouseAlimony)
    {
        $this->SpouseAlimony = $SpouseAlimony;
    }

    /**
     * @return mixed
     */
    public function getRent()
    {
        return $this->Rent;
    }

    /**
     * @param mixed $Rent
     */
    public function setRent($Rent)
    {
        $this->Rent = $Rent;
    }

    /**
     * @return mixed
     */
    public function getElectricity()
    {
        return $this->Electricity;
    }

    /**
     * @param mixed $Electricity
     */
    public function setElectricity($Electricity)
    {
        $this->Electricity = $Electricity;
    }

    /**
     * @return mixed
     */
    public function getGas()
    {
        return $this->Gas;
    }

    /**
     * @param mixed $Gas
     */
    public function setGas($Gas)
    {
        $this->Gas = $Gas;
    }

    /**
     * @return mixed
     */
    public function getWaterSewerGarbage()
    {
        return $this->WaterSewerGarbage;
    }

    /**
     * @param mixed $WaterSewerGarbage
     */
    public function setWaterSewerGarbage($WaterSewerGarbage)
    {
        $this->WaterSewerGarbage = $WaterSewerGarbage;
    }

    /**
     * @return mixed
     */
    public function getCableNetflixHulu()
    {
        return $this->CableNetflixHulu;
    }

    /**
     * @param mixed $CableNetflixHulu
     */
    public function setCableNetflixHulu($CableNetflixHulu)
    {
        $this->CableNetflixHulu = $CableNetflixHulu;
    }

    /**
     * @return mixed
     */
    public function getInternet()
    {
        return $this->Internet;
    }

    /**
     * @param mixed $Internet
     */
    public function setInternet($Internet)
    {
        $this->Internet = $Internet;
    }

    /**
     * @return mixed
     */
    public function getEntertainmentPkg()
    {
        return $this->EntertainmentPkg;
    }

    /**
     * @param mixed $EntertainmentPkg
     */
    public function setEntertainmentPkg($EntertainmentPkg)
    {
        $this->EntertainmentPkg = $EntertainmentPkg;
    }

    /**
     * @return mixed
     */
    public function getOtherHomeUtilities()
    {
        return $this->OtherHomeUtilities;
    }

    /**
     * @param mixed $OtherHomeUtilities
     */
    public function setOtherHomeUtilities($OtherHomeUtilities)
    {
        $this->OtherHomeUtilities = $OtherHomeUtilities;
    }

    /**
     * @return mixed
     */
    public function getCellPhone()
    {
        return $this->CellPhone;
    }

    /**
     * @param mixed $CellPhone
     */
    public function setCellPhone($CellPhone)
    {
        $this->CellPhone = $CellPhone;
    }

    /**
     * @return mixed
     */
    public function getGroceries()
    {
        return $this->Groceries;
    }

    /**
     * @param mixed $Groceries
     */
    public function setGroceries($Groceries)
    {
        $this->Groceries = $Groceries;
    }

    /**
     * @return mixed
     */
    public function getEatingOut()
    {
        return $this->EatingOut;
    }

    /**
     * @param mixed $EatingOut
     */
    public function setEatingOut($EatingOut)
    {
        $this->EatingOut = $EatingOut;
    }

    /**
     * @return mixed
     */
    public function getPersonalHygiene()
    {
        return $this->PersonalHygiene;
    }

    /**
     * @param mixed $PersonalHygiene
     */
    public function setPersonalHygiene($PersonalHygiene)
    {
        $this->PersonalHygiene = $PersonalHygiene;
    }

    /**
     * @return mixed
     */
    public function getGroceiresOther()
    {
        return $this->GroceiresOther;
    }

    /**
     * @param mixed $GroceiresOther
     */
    public function setGroceiresOther($GroceiresOther)
    {
        $this->GroceiresOther = $GroceiresOther;
    }

    /**
     * @return mixed
     */
    public function getAutoInsurance()
    {
        return $this->AutoInsurance;
    }

    /**
     * @param mixed $AutoInsurance
     */
    public function setAutoInsurance($AutoInsurance)
    {
        $this->AutoInsurance = $AutoInsurance;
    }

    /**
     * @return mixed
     */
    public function getAutoFuel()
    {
        return $this->AutoFuel;
    }

    /**
     * @param mixed $AutoFuel
     */
    public function setAutoFuel($AutoFuel)
    {
        $this->AutoFuel = $AutoFuel;
    }

    /**
     * @return mixed
     */
    public function getPublicTransit()
    {
        return $this->PublicTransit;
    }

    /**
     * @param mixed $PublicTransit
     */
    public function setPublicTransit($PublicTransit)
    {
        $this->PublicTransit = $PublicTransit;
    }

    /**
     * @return mixed
     */
    public function getTransOther()
    {
        return $this->TransOther;
    }

    /**
     * @param mixed $TransOther
     */
    public function setTransOther($TransOther)
    {
        $this->TransOther = $TransOther;
    }

    /**
     * @return mixed
     */
    public function getMedicalOutOfPocket()
    {
        return $this->MedicalOutOfPocket;
    }

    /**
     * @param mixed $MedicalOutOfPocket
     */
    public function setMedicalOutOfPocket($MedicalOutOfPocket)
    {
        $this->MedicalOutOfPocket = $MedicalOutOfPocket;
    }

    /**
     * @return mixed
     */
    public function getMedicalPrescriptions()
    {
        return $this->MedicalPrescriptions;
    }

    /**
     * @param mixed $MedicalPrescriptions
     */
    public function setMedicalPrescriptions($MedicalPrescriptions)
    {
        $this->MedicalPrescriptions = $MedicalPrescriptions;
    }

    /**
     * @return mixed
     */
    public function getMedicalOther()
    {
        return $this->MedicalOther;
    }

    /**
     * @param mixed $MedicalOther
     */
    public function setMedicalOther($MedicalOther)
    {
        $this->MedicalOther = $MedicalOther;
    }

    /**
     * @return mixed
     */
    public function getEduFees()
    {
        return $this->EduFees;
    }

    /**
     * @param mixed $EduFees
     */
    public function setEduFees($EduFees)
    {
        $this->EduFees = $EduFees;
    }

    /**
     * @return mixed
     */
    public function getEduSupplies()
    {
        return $this->EduSupplies;
    }

    /**
     * @param mixed $EduSupplies
     */
    public function setEduSupplies($EduSupplies)
    {
        $this->EduSupplies = $EduSupplies;
    }

    /**
     * @return mixed
     */
    public function getEduOther()
    {
        return $this->EduOther;
    }

    /**
     * @param mixed $EduOther
     */
    public function setEduOther($EduOther)
    {
        $this->EduOther = $EduOther;
    }

    /**
     * @return mixed
     */
    public function getChildCareExpense()
    {
        return $this->ChildCareExpense;
    }

    /**
     * @param mixed $ChildCareExpense
     */
    public function setChildCareExpense($ChildCareExpense)
    {
        $this->ChildCareExpense = $ChildCareExpense;
    }

    /**
     * @return mixed
     */
    public function getChildSupport()
    {
        return $this->ChildSupport;
    }

    /**
     * @param mixed $ChildSupport
     */
    public function setChildSupport($ChildSupport)
    {
        $this->ChildSupport = $ChildSupport;
    }

    /**
     * @return mixed
     */
    public function getChildRecreation()
    {
        return $this->ChildRecreation;
    }

    /**
     * @param mixed $ChildRecreation
     */
    public function setChildRecreation($ChildRecreation)
    {
        $this->ChildRecreation = $ChildRecreation;
    }

    /**
     * @return mixed
     */
    public function getChildClothing()
    {
        return $this->ChildClothing;
    }

    /**
     * @param mixed $ChildClothing
     */
    public function setChildClothing($ChildClothing)
    {
        $this->ChildClothing = $ChildClothing;
    }

    /**
     * @return mixed
     */
    public function getChildOther()
    {
        return $this->ChildOther;
    }

    /**
     * @param mixed $ChildOther
     */
    public function setChildOther($ChildOther)
    {
        $this->ChildOther = $ChildOther;
    }

    /**
     * @return mixed
     */
    public function getMemberships()
    {
        return $this->Memberships;
    }

    /**
     * @param mixed $Memberships
     */
    public function setMemberships($Memberships)
    {
        $this->Memberships = $Memberships;
    }

    /**
     * @return mixed
     */
    public function getLegalFees()
    {
        return $this->LegalFees;
    }

    /**
     * @param mixed $LegalFees
     */
    public function setLegalFees($LegalFees)
    {
        $this->LegalFees = $LegalFees;
    }

    /**
     * @return mixed
     */
    public function getDonations()
    {
        return $this->Donations;
    }

    /**
     * @param mixed $Donations
     */
    public function setDonations($Donations)
    {
        $this->Donations = $Donations;
    }

    /**
     * @return mixed
     */
    public function getEntertainment()
    {
        return $this->Entertainment;
    }

    /**
     * @param mixed $Entertainment
     */
    public function setEntertainment($Entertainment)
    {
        $this->Entertainment = $Entertainment;
    }

    /**
     * @return mixed
     */
    public function getPets()
    {
        return $this->Pets;
    }

    /**
     * @param mixed $Pets
     */
    public function setPets($Pets)
    {
        $this->Pets = $Pets;
    }

    /**
     * @return mixed
     */
    public function getStorage()
    {
        return $this->Storage;
    }

    /**
     * @param mixed $Storage
     */
    public function setStorage($Storage)
    {
        $this->Storage = $Storage;
    }

    /**
     * @return mixed
     */
    public function getOtherShopping()
    {
        return $this->OtherShopping;
    }

    /**
     * @param mixed $OtherShopping
     */
    public function setOtherShopping($OtherShopping)
    {
        $this->OtherShopping = $OtherShopping;
    }

    /**
     * @return mixed
     */
    public function getConstructiveDebt()
    {
        return $this->ConstructiveDebt;
    }

    /**
     * @param mixed $ConstructiveDebt
     */
    public function setConstructiveDebt($ConstructiveDebt)
    {
        $this->ConstructiveDebt = $ConstructiveDebt;
    }

    /**
     * @return mixed
     */
    public function getConsumerDebt()
    {
        return $this->ConsumerDebt;
    }

    /**
     * @param mixed $ConsumerDebt
     */
    public function setConsumerDebt($ConsumerDebt)
    {
        $this->ConsumerDebt = $ConsumerDebt;
    }

    /**
     * @return mixed
     */
    public function getCollections()
    {
        return $this->Collections;
    }

    /**
     * @param mixed $Collections
     */
    public function setCollections($Collections)
    {
        $this->Collections = $Collections;
    }

    /**
     * @return mixed
     */
    public function getOtherExpenses()
    {
        return $this->OtherExpenses;
    }

    /**
     * @param mixed $OtherExpenses
     */
    public function setOtherExpenses($OtherExpenses)
    {
        $this->OtherExpenses = $OtherExpenses;
    }

    /**
     * @return mixed
     */
    public function getSavings()
    {
        return $this->Savings;
    }

    /**
     * @param mixed $Savings
     */
    public function setSavings($Savings)
    {
        $this->Savings = $Savings;
    }

    public function __construct($ClientID, $DateSaved, $ClientHours, $ClientRate, $ClientPRDeductions, $ClientSelfEmployment, $ClientSocialSecurity, $ClientPension, 
    $ClientAlimony, $ClientChildSupport, $ClientOtherIncome, $SpouseHours, $SpouseRate, $SpousePRDeductions, $SpouseSelfEmployment, $SpouseSocialSecurity, $SpousePension, $SpouseAlimony, 
    $SpouseChildSupport, $SpouseOtherIncome, $Rent, $Electricity, $Gas, $WaterSewerGarbage, $CableNetflixHulu, $Internet, $EntertainmentPkg, $OtherHomeUtilities, 
    $CellPhone, $Groceries, $EatingOut, $PersonalHygiene, $GroceiresOther, $AutoInsurance, $AutoFuel, $PublicTransit, $TransOther, $MedicalOutOfPocket, 
    $MedicalPrescriptions, $MedicalOther, $EduFees, $EduSupplies, $EduOther, $ChildCareExpense, $ChildSupport, $ChildRecreation, $ChildClothing, $ChildOther, $Memberships, 
    $LegalFees, $Donations, $Entertainment, $Pets, $Storage, $OtherShopping, $ConstructiveDebt, $ConsumerDebt, $Collections, $OtherExpenses, $Savings)
    {
        $this->ClientID=$ClientID;
        $this->DateSaved=$DateSaved;
        $this->ClientHours=$ClientHours;
        $this->ClientRate=$ClientRate;
        $this->ClientPRDeductions=$ClientPRDeductions;
        $this->ClientSelfEmployment=$ClientSelfEmployment;
        $this->ClientSocialSecurity=$ClientSocialSecurity;
        $this->ClientPension=$ClientPension;
        $this->ClientAlimony=$ClientAlimony;
        $this->ClientChildSupport=$ClientChildSupport;
        $this->ClientOtherIncome=$ClientOtherIncome;
        $this->SpouseHours=$SpouseHours;
        $this->SpouseRate=$SpouseRate;
        $this->SpousePRDeductions=$SpousePRDeductions;
        $this->SpouseSelfEmployment=$SpouseSelfEmployment;
        $this->SpouseSocialSecurity=$SpouseSocialSecurity;
        $this->SpousePension=$SpousePension;
        $this->SpouseAlimony=$SpouseAlimony;
        $this->SpouseChildSupport=$SpouseChildSupport;
        $this->SpouseOtherIncome=$SpouseOtherIncome;
        $this->Rent=$Rent;
        $this->Electricity=$Electricity;
        $this->Gas=$Gas;
        $this->WaterSewerGarbage=$WaterSewerGarbage;
        $this->CableNetflixHulu=$CableNetflixHulu;
        $this->Internet=$Internet;
        $this->EntertainmentPkg=$EntertainmentPkg;
        $this->OtherHomeUtilities=$OtherHomeUtilities;
        $this->CellPhone=$CellPhone;
        $this->Groceries=$Groceries;
        $this->EatingOut=$EatingOut;
        $this->PersonalHygiene=$PersonalHygiene;
        $this->GroceiresOther=$GroceiresOther;
        $this->AutoInsurance=$AutoInsurance;
        $this->AutoFuel=$AutoFuel;
        $this->PublicTransit=$PublicTransit;
        $this->TransOther=$TransOther;
        $this->MedicalOutOfPocket=$MedicalOutOfPocket;
        $this->MedicalPrescriptions=$MedicalPrescriptions;
        $this->MedicalOther=$MedicalOther;
        $this->EduFees=$EduFees;
        $this->EduSupplies=$EduSupplies;
        $this->EduOther=$EduOther;
        $this->ChildCareExpense=$ChildCareExpense;
        $this->ChildSupport=$ChildSupport;
        $this->ChildRecreation=$ChildRecreation;
        $this->ChildClothing=$ChildClothing;
        $this->ChildOther=$ChildOther;
        $this->Memberships=$Memberships;
        $this->LegalFees=$LegalFees;
        $this->Donations=$Donations;
        $this->Entertainment=$Entertainment;
        $this->Pets=$Pets;
        $this->Storage=$Storage;
        $this->OtherShopping=$OtherShopping;
        $this->ConstructiveDebt=$ConstructiveDebt;
        $this->ConsumerDebt=$ConsumerDebt;
        $this->Collections=$Collections;
        $this->OtherExpenses=$OtherExpenses;
        $this->Savings=$Savings;
    }

    public function jsonSerialize()
    {
        return array(
        'ClientID'=>$this->ClientID,
        'DateSaved'=>$this->DateSaved,
        'ClientHours'=>$this->ClientHours,
        'ClientRate'=>$this->ClientRate,
        'ClientPRDeductions'=>$this->ClientPRDeductions,
        'ClientSelfEmployment'=>$this->ClientSelfEmployment,
        'ClientSocialSecurity'=>$this->ClientSocialSecurity,
        'ClientPension'=>$this->ClientPension,
        'ClientAlimony'=>$this->ClientAlimony,
        'ClientChildSupport'=>$this->ClientChildSupport,
        'ClientOtherIncome'=>$this->ClientOtherIncome,
        'SpouseHours'=>$this->SpouseHours,
        'SpouseRate'=>$this->SpouseRate,
        'SpousePRDeductions'=>$this->SpousePRDeductions,
        'SpouseSelfEmployment'=>$this->SpouseSelfEmployment,
        'SpouseSocialSecurity'=>$this->SpouseSocialSecurity,
        'SpousePension'=>$this->SpousePension,
        'SpouseAlimony'=>$this->SpouseAlimony,
        'SpouseChildSupport'=>$this->SpouseChildSupport,
        'SpouseOtherIncome'=>$this->SpouseOtherIncome,
        'Rent'=>$this->Rent,
        'Electricity'=> $this->Electricity,
        'Gas'=>$this->Gas,
        'WaterSewerGarbage'=> $this->WaterSewerGarbage,
        'CableNetflixHulu'=> $this->CableNetflixHulu,
        'Internet'=>$this->Internet,
        'EntertainmentPkg'=>$this->EntertainmentPkg,
        'OtherHomeUtilities'=>$this->OtherHomeUtilities,
        'CellPhone'=>$this->CellPhone,
        'Groceries'=>$this->Groceries,
        'EatingOut'=>$this->EatingOut,
        'PersonalHygiene'=>$this->PersonalHygiene,
        'GroceiresOther'=>$this->GroceiresOther,
        'AutoInsurance'=>$this->AutoInsurance,
        'AutoFuel'=>$this->AutoFuel,
        'PublicTransit'=>$this->PublicTransit,
        'TransOther'=>$this->TransOther,
        'MedicalOutOfPocket'=>$this->MedicalOutOfPocket,
        'MedicalPrescriptions'=>$this->MedicalPrescriptions,
        'MedicalOther'=>$this->MedicalOther,
        'EduFees'=>$this->EduFees,
        'EduSupplies'=>$this->EduSupplies,
        'EduOther'=>$this->EduOther,
        'ChildCareExpense'=>$this->ChildCareExpense,
        'ChildSupport'=>$this->ChildSupport,
        'ChildRecreation'=>$this->ChildRecreation,
        'ChildClothing'=>$this->ChildClothing,
        'ChildOther'=>$this->ChildOther,
        'Memberships'=>$this->Memberships,
        'LegalFees'=>$this->LegalFees,
        'Donations'=>$this->Donations,
        'Entertainment'=>$this->Entertainment,
        'Pets'=>$this->Pets,
        'Storage'=>$this->Storage,
        'OtherShopping'=>$this->OtherShopping,
        'ConstructiveDebt'=>$this->ConstructiveDebt,
        'ConsumerDebt'=>$this->ConsumerDebt,
        'Collections'=>$this->Collections,
        'OtherExpenses'=>$this->OtherExpenses,
        'Savings'=>$this->Savings,
        );
    }
}