export const convertToDays = (miliseconds) => {
    let daysFloat = miliseconds / (1000*60*60*24);
    let daysInt = Math.floor(daysFloat);
    return daysInt;
}

export const dateStingToDateObj = (dateString) => {
    let year = +dateString.substring(0, 4);
    let month = +dateString.substring(4, 6);
    let day = +dateString.substring(6, 8);
    let dateObj = new Date(year, month -1 , day)
    return dateObj;
}