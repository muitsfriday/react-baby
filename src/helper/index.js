import moment from 'moment'
import 'moment/locale/th'
export const numberWithCommas = function (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const dateFormat = function (dateStr = null, strFormat = 'YYYY-MM-DD hh:mm:ss', locale = 'th') {
    moment.locale(locale)
    let time = moment()
    if (dateStr !== null) {
        time = moment(dateStr, strFormat)
    }
    return time.format('D MMMM ') + (parseInt(time.format('YYYY'), 10) + 543) + time.format(' - LT น.')
}
