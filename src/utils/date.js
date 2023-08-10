class GetDate {

    getDate() {

        var dateToday = new Date();
        var day = String(dateToday.getDate()).padStart(2, '0');
        var month = String(dateToday.getMonth() + 1).padStart(2, '0');
        var year = dateToday.getFullYear();

        var hour = String(dateToday.getHours()).padStart(2, '0');
        var minute = String(dateToday.getMinutes()).padStart(2, '0');
        var hourFormat = hour + ':' + minute;

        var dateFormat = '[' + day + '/' + month + '/' + year + ' ' + hourFormat + ']';
        return dateFormat;

    }
}

export default GetDate;