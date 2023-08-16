
import moment from 'moment';

export function getDataString(dString) {
    const part = dString.split("#");
    const dateTimeString = part[2];
    const timex = new Date(dateTimeString);

    return timex;
}


export function formatTime(data) {

    const timeFormatOptions = {
        hour: "numeric",
        minute: "numeric"
    };

    const timeFormatted = moment(data).format('hh:mm'); // Format the time

    return timeFormatted;
}
