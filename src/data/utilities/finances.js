import { dateStringToDateObj, monthDiff } from "./time";

export const amountPaid = ( start, cost ) => {
    
    let startDate = dateStringToDateObj(start);

    let current = new Date();

    let elapsed = monthDiff(startDate, current);

    return elapsed*cost;
}