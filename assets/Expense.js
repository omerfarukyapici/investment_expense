class Expense {
    constructor(personId, personName, salary, rent, food, electricBill, waterBill, internetBill, gasBill, fun) {
        this.personId = personId,
            this.personName = personName,
            this.salary = salary,
            this.rent = rent,
            this.food = food,
            this.electricBill = electricBill,
            this.waterBill = waterBill,
            this.internetBill = internetBill,
            this.gasBill = gasBill,
            this.fun = fun
    }

    remainder(){
        let total = this.rent + this.food + this.electricBill + this.waterBill + this.internetBill + this.gasBill + this.fun;
        return this.salary - total;
    }
}

export default Expense;
