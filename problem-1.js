

function calculateMoney(ticketSale) {

    const ticketPrice = 100;
    const totalTicketSale = ticketPrice * ticketSale;

    const watchmanSalary = 500;
    const perStaffLunchCost = 50;
    const totalStaff = 8;
    const totalStaffCost = perStaffLunchCost * totalStaff;

    const totalCost = watchmanSalary + totalStaffCost;

    const totalIncome = totalTicketSale - totalCost;

    if(totalIncome < 0){
        return 'enter a valid positive number';
    }

    return totalIncome;

    
}


const saving = calculateMoney(-10);
// console.log(saving);