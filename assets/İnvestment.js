class İnvestment {
    constructor(salary) {
        this.salary = salary;
    }

    btc() {
        let a = this.salary / 100;
        return a * 50;
    }

    stockMarket(companyName) {
        let a = this.salary / 100;
        return "Stock Market investment : " + companyName + '.' + ' Money : ' + a * 30;
    }

    moneyForHouse() {
        let a = this.salary / 100;
        return "You Can save for house : " + a * 20;
    }
}

export default İnvestment;



