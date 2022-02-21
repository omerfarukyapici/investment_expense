import İnvestment from './assets/İnvestment.js';
import dates from './assets/Dates.js';
import Expense from './assets/Expense.js';


/* İnvestment */
const userOne = new İnvestment(5000);

const userTwo = new İnvestment(12000);

const userThree = new İnvestment(8000);

const userFour = new İnvestment(4000);

const userOneİnvestments = {
    salary: userOne.salary,
    btc: 'Btc İnvestment : ' + userOne.btc() + ' $',
    stockMarket: userOne.stockMarket('Google') + '$',

    moneyForHouse: userOne.moneyForHouse() + '$'
}
const userTwoİnvestments = {
    salary: userTwo.salary,
    btc: 'Btc İnvestment : ' + userTwo.btc() + ' $',
    stockMarket: userTwo.stockMarket('Facebook') + '$',
    moneyForHouse: userTwo.moneyForHouse() + '$'
}
const userThreeİnvestments = {
    salary: userThree.salary,
    btc: 'Btc İnvestment : ' + userThree.btc() + ' $',
    stockMarket: userThree.stockMarket('Twitter') + '$',
    moneyForHouse: userThree.moneyForHouse() + '$'
}
const userFourİnvestments = {
    salary: userFour.salary,
    btc: 'Btc İnvestment : ' + userFour.btc() + ' $',
    stockMarket: userFour.stockMarket('Duolingo') + '$',
    moneyForHouse: userFour.moneyForHouse() + '$'
}

console.log(userOneİnvestments);

console.log(userTwoİnvestments);

console.log(userThreeİnvestments);

console.log(userFourİnvestments);




/* Expense */
const persons = [
    new Expense(1, "John", 5000, 1300, 400, 100, 100, 150, 300, 200),
    new Expense(2, "Emily", 15000, 4000, 400, 130, 130, 190, 400, 1000),
    new Expense(3, "Alissa", 7000, 1300, 400, 110, 100, 150, 300, 300),
    new Expense(4, "Gökhan", 3800, 1200, 400, 110, 100, 150, 200, 400),
    new Expense(5, "Ömer", 4000, 1000, 400, 140, 100, 150, 300, 200),
    new Expense(6, "Nisa", 6000, 1500, 400, 150, 100, 150, 350, 300)
]

console.log(
    persons
);

console.log("THE REMAİNDER İNCOME =")




for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].personName + ": " + persons[i].remainder());
}






/* dates */
console.log(dates())






/* 
    Connect İndex.js with index.html
    Show data into web page and console.
*/


const root = document.querySelector('#root');

root.innerHTML = `

<div class="oop-style">
    <div class="oop-content">
        


        
        <div class="İnvestors">

            <div class="invest-Person">
                <p>1. İnvestor </p>
                <ul>
                    <li>Salary : ${userOne.salary} </li>  
                    <li>For Btc : ${userOne.btc()} </li>  
                    <li> ${userOne.moneyForHouse()} </li>  
                    <li> ${userOne.stockMarket("Google")} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <p>2. İnvestor </p>
                <ul>
                    <li>Salary : ${userTwo.salary} </li>  
                    <li>For Btc : ${userTwo.btc()} </li>  
                    <li> ${userTwo.moneyForHouse()} </li>  
                    <li> ${userTwo.stockMarket("Facebook")} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <p>3. İnvestor </p>
                <ul>
                    <li>Salary : ${userThree.salary} </li>  
                    <li>For Btc : ${userThree.btc()} </li>  
                    <li> ${userThree.moneyForHouse()} </li>  
                    <li> ${userThree.stockMarket("Duolingo")} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <p>4. İnvestor </p>
                <ul>
                    <li>Salary : ${userFour.salary} </li>  
                    <li>For Btc : ${userFour.btc()} </li>  
                    <li> ${userFour.moneyForHouse()} </li>  
                    <li> ${userFour.stockMarket("Amazon")} </li>  
                </ul>
            </div>
                
        </div>

        



        <div class="Persons">

            <div class="invest-Person">
                <ul>
                    <li>id : ${persons[0].personId} </li>  
                    <li>Name : ${persons[0].personName} </li>  
                    <li>Salary : ${persons[0].salary} </li>  
                    <li>Rent : ${persons[0].rent} </li>  
                    <li>Food : ${persons[0].food} </li>  
                    <li>ElectricBill : ${persons[0].electricBill} </li>  
                    <li>WaterBill : ${persons[0].waterBill} </li>  
                    <li>İnternetBill : ${persons[0].internetBill} </li>  
                    <li>GasBill : ${persons[0].gasBill} </li>  
                    <li>Fun : ${persons[0].fun} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <ul>
                    <li>id : ${persons[1].personId} </li>  
                    <li>Name : ${persons[1].personName} </li>  
                    <li>Salary : ${persons[1].salary} </li>  
                    <li>Rent : ${persons[1].rent} </li>  
                    <li>Food : ${persons[1].food} </li>  
                    <li>ElectricBill : ${persons[1].electricBill} </li>  
                    <li>WaterBill : ${persons[1].waterBill} </li>  
                    <li>İnternetBill : ${persons[1].internetBill} </li>  
                    <li>GasBill : ${persons[1].gasBill} </li>  
                    <li>Fun : ${persons[1].fun} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <ul>
                    <li>id : ${persons[2].personId} </li>  
                    <li>Name : ${persons[2].personName} </li>  
                    <li>Salary : ${persons[2].salary} </li>  
                    <li>Rent : ${persons[2].rent} </li>  
                    <li>Food : ${persons[2].food} </li>  
                    <li>ElectricBill : ${persons[2].electricBill} </li>  
                    <li>WaterBill : ${persons[2].waterBill} </li>  
                    <li>İnternetBill : ${persons[2].internetBill} </li>  
                    <li>GasBill : ${persons[2].gasBill} </li>  
                    <li>Fun : ${persons[2].fun} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <ul>
                    <li>id : ${persons[3].personId} </li>  
                    <li>Name : ${persons[3].personName} </li>  
                    <li>Salary : ${persons[3].salary} </li>  
                    <li>Rent : ${persons[3].rent} </li>  
                    <li>Food : ${persons[3].food} </li>  
                    <li>ElectricBill : ${persons[3].electricBill} </li>  
                    <li>WaterBill : ${persons[3].waterBill} </li>  
                    <li>İnternetBill : ${persons[3].internetBill} </li>  
                    <li>GasBill : ${persons[3].gasBill} </li>  
                    <li>Fun : ${persons[3].fun} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <ul>
                    <li>id : ${persons[4].personId} </li>  
                    <li>Name : ${persons[4].personName} </li>  
                    <li>Salary : ${persons[4].salary} </li>  
                    <li>Rent : ${persons[4].rent} </li>  
                    <li>Food : ${persons[4].food} </li>  
                    <li>ElectricBill : ${persons[4].electricBill} </li>  
                    <li>WaterBill : ${persons[4].waterBill} </li>  
                    <li>İnternetBill : ${persons[4].internetBill} </li>  
                    <li>GasBill : ${persons[4].gasBill} </li>  
                    <li>Fun : ${persons[4].fun} </li>  
                </ul>
            </div>

            <div class="invest-Person">
                <ul>
                    <li>id : ${persons[5].personId} </li>  
                    <li>Name : ${persons[5].personName} </li>  
                    <li>Salary : ${persons[5].salary} </li>  
                    <li>Rent : ${persons[5].rent} </li>  
                    <li>Food : ${persons[5].food} </li>  
                    <li>ElectricBill : ${persons[5].electricBill} </li>  
                    <li>WaterBill : ${persons[5].waterBill} </li>  
                    <li>İnternetBill : ${persons[5].internetBill} </li>  
                    <li>GasBill : ${persons[5].gasBill} </li>  
                    <li>Fun : ${persons[5].fun} </li>  
                </ul>
            </div>
            
        
        </div>






    </div>
</div>
`;




