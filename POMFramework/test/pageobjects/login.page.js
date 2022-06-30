
const Page = require('./page');
class LoginPage extends Page{


get UserName(){ return $('#username');}

get password(){ return $('#password');}

get selectType(){ return $('select[data-style="btn-info"]');}

get userType(){ return $$('label.customradio')}

get okayBtn(){ return $('#okayBtn')}

get terms(){ return $('#terms');}

get signInBtn(){return $('#signInBtn');}

open() {   
    return super.open();
  }
}


module.exports = new LoginPage();
