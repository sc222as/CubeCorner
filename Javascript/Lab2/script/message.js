
function Message(message, date) {
    this.getText = function () {
        return message.replace(/[\n\r]/g, "<br />");
    }
    this.setText = function (_text) {
        message = _text;                        //trixy att det stog fel i labbdokumentet
        
    }

    this.getDate = function () {
        return date;
    };                


    this.setDate = function (_date) {
        date = _date;
    };          

    

}

Message.prototype.toString = function () {
                                                                        //return this.message.replace(/[\n\r]/g, "<br />");, 
    return this.getText() + " (" + this.getDate() + ")";
}

Message.prototype.getHTMLText = function () {               
}

Message.prototype.getTime = function () {
    var time = this.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var sec = time.getSeconds();
    return hour + ":" + minute + ":" + sec;
    }


Message.prototype.getDateText = function(){

}
