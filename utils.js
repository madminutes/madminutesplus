
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function toPercentage(num) {
    return (num * 100).toFixed(1) + '%';
}


// http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/
var UID = {
    _current: 0,
    getNew: function () {
        this._current++;
        return this._current;
    }
};

HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
    var _this = this;
    var _sheetId = "pseudoStyles";
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    var className = "pseudoStyle" + UID.getNew();

    _this.className += " " + className;

    _sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";
    _head.appendChild(_sheet);
    return this;
};



// https://stackoverflow.com/questions/469357/html-text-input-allows-only-numeric-input
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}



// https://imbuzu.wordpress.com/2014/02/01/iterating-over-an-htmlcollection/
function iterateCollection(collection) {
    return function (f) {
        for (var i = 0; collection[i]; i++) {
            f(collection[i], i);
        }
    }
}

// https://stackoverflow.com/a/9716488
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


//https://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//https://stackoverflow.com/a/9763769
function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return mins + 'mins' + " " + secs + '.' + ms + "secs";
}


// https://stackoverflow.com/a/24103596
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

