//Calculates week number from a date

export function getNumberOfWeek(date: string): number {
    const today = new Date(date);
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    const res = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    console.log(res);
    return res;
}