function getTimeInTimezone(timezone) {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone
    });
    return formatter.format(date);
}

function updateClocks() {
    const spainTime = getTimeInTimezone('Europe/Madrid');
    const peruTime = getTimeInTimezone('America/Lima');
    document.getElementById('spain-time').textContent = spainTime;
    document.getElementById('peru-time').textContent = peruTime;
}

updateClocks();
setInterval(updateClocks, 1000);