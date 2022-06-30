class HomePage{

get checkOut(){ return $('a.nav-link.btn.btn-primary')}

get cards(){ return $$('app-card')}

}

module.exports = new HomePage();