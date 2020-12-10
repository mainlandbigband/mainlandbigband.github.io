// Run with Deno
// deno.exe --unstable run --allow-read --allow-write gigGenerator.ts
import {
    ensureDirSync,
} from "https://deno.land/std@0.78.0/fs/mod.ts";
import { format } from 'https://deno.land/std/datetime/mod.ts'
import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

const year = 2021;
ensureDirSync(`./content/gigs/${year}`);
function firstDayInMonth(day: number, month: number, year: number, hour: number, minute: number) {
    return moment({year, month, day, hour, minute}).isoWeekday('Saturday');
}

const where = 'Cashmere Club';
const googleid = 'ChIJNX-lW6UgMm0R9d5y5Ot775I';
for (let i = 1; i < 12; i++) {
    const firstSat = firstDayInMonth(7, i, year, 19, 30);
    console.log(firstSat.toLocaleString())
    const template = `---
date: ${moment(firstSat).format()}
where: ${where}
googleid: ${googleid}
---`;
    
    Deno.writeTextFileSync(`./content/gigs/${year}/${(firstSat.month() + 1).toString().padStart(2, '0')}-${firstSat.date().toString().padStart(2, '0')}.md`, template)
}