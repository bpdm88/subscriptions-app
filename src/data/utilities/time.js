export const convertToDays = (miliseconds) => {
    let daysFloat = miliseconds / (1000*60*60*24);
    let daysInt = Math.floor(daysFloat);
    return daysInt;
}

export const dateStringToDateObj = (dateString) => {
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
        return current.setDate(int);
    } else {
        current.setDate(int)
        current.setMonth(current.getMonth() + 1);
        return current;
    }
}

export const cancelDate = ( noticePeriod, paymentDate ) => {
    let noticeMili = noticePeriod*1000*60*60*24;
    let now = new Date();

    let cancelDateObj = new Date(paymentDate - noticeMili);

    console.log(cancelDateObj);

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

