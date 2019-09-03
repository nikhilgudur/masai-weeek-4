function Power(device, elec, time) {

    this.device = device
    this.elecConsumption = elec
    this.timeRunning = time

}

var arr = []
var btn = document.querySelector('#add');
btn.addEventListener('click', add)
var btn2 = document.querySelector('#calc');
btn2.addEventListener('click', calculate)

var device = '';
var consumption = 0
var time = 0

function add() {
    device = (document.querySelector('#applience').value).toString();
    consumption =Number(document.querySelector('#consumption').value);
    time = Number(document.querySelector('#runTime').value);
    
    var newDevice = new Power(device, consumption, time)
    
    arr.push(newDevice)
    document.querySelector('#applience').value = "";
    document.querySelector('#consumption').value = ''
    document.querySelector('#runTime').value = ''
    
}
var totalUnits = 0;
var totalBill = 0;

function calculate() {
    arr.forEach(function () {
        for (key in arr) {
            var cDevice = (arr[key]["device"]).toString();
            var calcElec = Number(arr[key]["elecConsumption"])
            var calcTime = Number(arr[key]["timeRunning"])

            var monthlyConsupmtion = ((calcElec * calcTime) / 1000) * 30

            totalUnits += monthlyConsupmtion
            if (totalUnits < 100) {
                totalBill = totalUnits * 4
            }
            
            else if ((totalUnits > 100) || (totalUnits < 300)) {
                totalBill = totalUnits * 5
            }   
            else if ((totalUnits > 300)||(totalUnits < 500)) {
                totalBill = totalUnits * 7
            }
            else if(totalUnits > 500){
                totalBill = totalUnits * 10
            }
        }
        
        var units = document.querySelector('.show1')
        var amount = document.querySelector('.show2')
        units.textContent = "Total units of power used: " + Math.floor(totalUnits); 
        amount.textContent ="Electricity bill for the month: " + Math.floor(totalBill);

        fl.appendChild(bill)
        fl.appendChild(units)

        arr = []

    });

    console.log("Units is" + totalUnits)
    console.log("Bill is" +  totalBill)
}