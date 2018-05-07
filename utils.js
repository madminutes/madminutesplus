
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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

