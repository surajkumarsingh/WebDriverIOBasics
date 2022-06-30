class CheckOut {
    get prices() {return $$('tr td:nth-child(4) strong') }

    get total() { return $('tbody tr:nth-last-of-type(2) td:nth-last-of-type(1) h3') }

    get checkout(){ return $('.btn.btn-success')}

}

module.exports = new CheckOut();