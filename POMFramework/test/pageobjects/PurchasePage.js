class Purchase{

get setCountry(){ return $('#country')}

get countryLoad(){ return $('.lds-ellipsis')}

selectCountry(country) { return $("//li/a[text()='"+country+"']")}

 get termsCheck(){ return  $("label[for='checkbox2']")}

 get purchaseBtn(){return $("input[value='Purchase']")}

 get successMsg(){ return $('.alert alert-success alert-dismissible')}

}

module.exports = new Purchase();