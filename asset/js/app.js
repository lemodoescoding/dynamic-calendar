const date = new Date(),
	currYear = date.getFullYear(),
	currMonth = date.getMonth(),
	lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
	firstDateOfMonth = new Date(currYear, currMonth, 1).getDate();

console.log(currYear, currMonth, lastDateOfMonth, firstDateOfMonth);
