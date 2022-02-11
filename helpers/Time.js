
import dayjs from 'dayjs';
import locale_th from 'dayjs/locale/th';
dayjs.locale('th')

const justTime = (seconds=(new Date()).valueOf()/1000)=>{
    // console.log(dayjs.unix(seconds).format());
    return dayjs.unix(seconds).format("HH:mm");
};

const justFullDate = (seconds=(new Date()).valueOf()/1000)=>{
    return dayjs.unix(seconds).format("dddd D MMMM")+ " " + (543 + Number(dayjs.unix(seconds).format("YYYY")));
};

const justShortDate = (seconds=(new Date()).valueOf()/1000)=>{
    return dayjs.unix(seconds).format("DD MMM")+ " " + (-2500 + 543 + Number(dayjs.unix(seconds).format("YYYY")));
};


const justDay = (seconds=(new Date()).valueOf()/1000)=>{
    return dayjs.unix(seconds).format("dddd");
};


export default { justTime, justFullDate, justDay, justShortDate };