// Run with Node

import {mkdirSync, writeFileSync} from 'fs';

const year = 2025;
mkdirSync(`./content/gigs/${year}`, { recursive: true });
function firstDayInMonth(day: number, month: number, year: number, hour: number, minute: number) {
    const date = new Date(0);
    date.setFullYear(year);
    date.setMonth(month-1);
    date.setHours(hour, minute, 0, 0);
    
    for (let i = 1; i < 8; i++) {
        date.setDate(i);
        if (date.getDay() == day) {
            return date;
        }
    }
    throw new Error("oops, bug");
}

const where = 'Cashmere Club';
const googleid = 'ChIJNX-lW6UgMm0R9d5y5Ot775I';
for (let i = 1; i <= 12; i++) {
    const firstSat = firstDayInMonth(6, i, year, 19, 30);
    const padMonth = (firstSat.getMonth() + 1).toString().padStart(2, '0');
    const padDate = firstSat.getDate().toString().padStart(2, '0');
    console.log(firstSat.toLocaleString())
    const template = `---
date: ${year}-${padMonth}-${padDate}T${firstSat.getHours()}:${firstSat.getMinutes()}:00+${firstSat.getTimezoneOffset() / 60 * 100 * -1}
where: ${where}
googleid: ${googleid}
---`;


    writeFileSync(`./content/gigs/${year}/${padMonth}-${padDate}.md`, template)
}