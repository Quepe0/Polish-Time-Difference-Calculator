const sentDate = moment('13/05/2023 10:30', 'DD/MM/YYYY HH:mm');
const currentDate = moment();
const timeDiff = Math.abs(currentDate.diff(sentDate, 'minutes'));
const secondsAgo = Math.floor(timeDiff * 60);
const minutesAgo = Math.floor(timeDiff);
const hoursAgo = Math.floor(timeDiff / 60);
const daysAgo = Math.floor(timeDiff / (60 * 24));
const monthsAgo = Math.floor(timeDiff / (60 * 24 * 30));
const yearsAgo = Math.floor(timeDiff / (60 * 24 * 365));

let timeAgo;

if (yearsAgo > 0) {
    const yearLabel = (yearsAgo === 1) ? 'rok' : (yearsAgo >= 2 && yearsAgo <= 4) ? 'lata' : 'lat';
    timeAgo = `${yearsAgo} ${yearLabel} temu`;
} else if (monthsAgo > 0) {
    const monthLabel = (monthsAgo === 1) ? 'miesiąc' : (monthsAgo >= 2 && monthsAgo <= 4) ? 'miesiące' : 'miesięcy';
    timeAgo = `${monthsAgo} ${monthLabel} temu`;
} else if (daysAgo > 0) {
    if (daysAgo === 1) {
        const yesterdayTime = moment(sentDate).format('HH:mm');
        timeAgo = `wczoraj o ${yesterdayTime}`;
    } else {
        timeAgo = `${daysAgo} dni temu`;
    }
} else if (hoursAgo > 0) {
    const hourLabel = (hoursAgo === 1) ? 'godzina' : (hoursAgo >= 2 && hoursAgo <= 4) ? 'godziny' : 'godzin';
    timeAgo = `${hoursAgo} ${hourLabel} temu`;
} else if (minutesAgo > 0) {
    const minuteLabel = (minutesAgo === 1) ? 'minuta' : (minutesAgo >= 2 && minutesAgo <= 4) ? 'minuty' : 'minut';
    timeAgo = `${minutesAgo} ${minuteLabel} temu`;
} else if (secondsAgo > 0) {
    const secondLabel = (secondsAgo === 1) ? 'sekunda' : (secondsAgo >= 2 && secondsAgo <= 4) ? 'sekundy' : 'sekund';
    timeAgo = `${secondsAgo} ${secondLabel} temu`;
} else {
    timeAgo = 'Przed chwilą';
}

console.log(timeAgo);