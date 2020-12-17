export const convertToDays = (miliseconds) => {
    let daysFloat = miliseconds / (1000*60*60*24);
    let daysInt = Math.floor(daysFloat);
    return daysInt;
}

export const dateStringToDateObj = (dateInt) => {
    let dateString = dateInt.toString();
    let year = +dateString.substring(0, 4);
    let month = +dateString.substring(4, 6);
    let day = +dateString.substring(6, 8);
    let dateObj = new Date(year, month -1 , day)
    return dateObj;
}

export const paymentDayToDateObj= (int) => {
    let current = new Date();
    let today = current.getDate();

    if ( int > today ) {
        current.setDate(int)
        return current;
    } else {
        current.setDate(int)
        current.setMonth(current.getMonth() + 1);
        return current;
    }
}

const dateAppend = (int) => {
    switch (int){
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

export const paymentDateToString = (int) => {
    let monthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let paymentDate = paymentDayToDateObj(int);
    console.log(paymentDate);
    let date = paymentDate.getDate();
    let month = monthsArray[paymentDate.getMonth()];
    

    return `${date}${dateAppend(date)} ${month}`;
    
}

export const cancelDate = ( noticePeriod, paymentDate ) => {
    let noticeMili = noticePeriod*1000*60*60*24;
    let now = new Date();

    let cancelDateObj = new Date(paymentDate - noticeMili);

    if ( cancelDateObj - now >= 0 ){
        return cancelDateObj;
    } else {
        cancelDateObj.setMonth(cancelDateObj.getMonth() + 1);
        return cancelDateObj;
    }
}

export const daysToCancel = (noticePeriod, paymentDate) => {

    let paymentDay = paymentDayToDateObj(paymentDate);

    let cancelOn = cancelDate(noticePeriod, paymentDay);

    let current = new Date();

    let days = convertToDays(cancelOn - current);
    
    return days;

}

export const monthDiff = ( startDateObj, endDateObj ) => {
    
    let yearsAsMonths = (endDateObj.getFullYear() - startDateObj.getFullYear()) * 12;

    let monthsInCurrentYear = endDateObj.getMonth() - startDateObj.getMonth();

    let elapsed = yearsAsMonths + monthsInCurrentYear;


    return elapsed;

}