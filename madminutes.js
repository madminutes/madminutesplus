// sharing code between node and browser
// https://caolan.org/posts/writing_for_node_and_the_browser.html
(function (exports) {
    exports.CONST = {
        TYPE: {
            MUL: "Multiplication",
            DIV: "Division",
            SUB: "Subtraction",
            ADD: "Addition",
        },
        TYPE_CALCULATION: {
            "Multiplication": (a, b, z) => { return parseFloat(a) * parseFloat(b) === parseFloat(z) },
            "Division": (a, b, z) => { return parseFloat(a) / parseFloat(b) === parseFloat(z) },
            "Subtraction": (a, b, z) => { return parseFloat(a) - parseFloat(b) === parseFloat(z) },
            "Addition": (a, b, z) => { return parseFloat(a) + parseFloat(b) === parseFloat(z) },
        },
        ERRORS: {
            NO_TYPE_FOUND: "No Type found.",
            NO_SET_FOUND: "No set found.",
        }
    };

    exports.getProblemSetForTypeAndSet = function (typeSetData, type, set) {
        if (typeSetData[type] == null)
            throw new Error(this.CONST.ERRORS.NO_TYPE_FOUND);

        if (typeSetData[type][set] == null)
            throw new Error(this.CONST.ERRORS.NO_SET_FOUND);

        return typeSetData[type][set];
    };


    /**
     * Returns array where the answers were wrong
     * @param {Array} problemSet from CONFIG data
     * @param {Array} answers 
     * @param {Function} check function passed in to act as the test to see if the answer passes with the problemSet 
     * @returns {Array} [idx1, idx2] array of indexes where the answers were wrong
     */
    exports.checkAnswers = function (probSet, answers, checkFn) {
        return probSet.reduce((wrongArr, prob, i) => {
            const a = parseFloat(prob[0]);
            const b = parseFloat(prob[1]);

            const z = parseFloat(answers[i]);

            if (checkFn(a, b, z) === false)
                wrongArr.push(i);

            return wrongArr;
        }, []);

        //     var answerInputID = document.getElementById("answer_" + i);
        //     if (answerInputID.value != "") {

        //         // if any input changes on wrong problems, then we can change the class to correct
        //         answerInputID.addEventListener('input', function (evt) {
        //             // console.log(this);

        //             var studentAnswer = this.value

        //             var idx = getIdxFromInputID(this.id);
        //             var prob = selectedProblemData[idx];
        //             var firstNum = prob[0];
        //             var secNum = prob[1];

        //             if (calculatedAnswer == studentAnswer) {
        //                 answerInputID.classList.remove("checkAnswer");
        //                 answerInputID.classList.add("correctedAnswer");
        //             }
        //         });

        //         var studentAnswer = parseFloat(answerInputID.value);
        //         if (calculatedAnswer != studentAnswer) {
        //             answerInputID.classList.add("checkAnswer");
        //         }
        //         else {
        //             numberCorrect++;
        //         }
        //     }
        // });

    };


    exports.htmlIndividualProblemMultiplication = function (prob, idx) {
        const firstNum = prob[0];
        const secNum = prob[1];

        const topVal = getRandMoveValue();
        const rightVal = getRandMoveValue();
        const bottomVal = getRandMoveValue();
        const leftVal = getRandMoveValue();

        return `<div class='mult' style='top:${topVal}em; right:${rightVal}em; bottom:${bottomVal}em; left:${leftVal}em;' >
        <div class='top'>
            <div class='rightSide'>
                <div class='product productFirstNum'>
                ${firstNum}
                </div>
                <div class='product productSecNum'>
                ${secNum}
                </div>
            </div>
            <div class='leftSide'>
                <div class='symbol'>
                    &times;
                </div>
            </div>
            <div class='clearer'></div>
        </div>
        <div class='bottom'>
            <div class='inputArea'>
                <input type='text' class='answers' id='answer_${idx}' onKeyPress='validate(event);'></input>
            </div>
            <div class='clearer'></div>
        </div>
        </div>`;
    };

    exports.htmlIndividualProblemDivision = function (prob, idx) {
        const firstNum = prob[0];
        const secNum = prob[1];

        const topVal = getRandMoveValue();
        const rightVal = getRandMoveValue();
        const bottomVal = getRandMoveValue();
        const leftVal = getRandMoveValue();

        return `<div class='divProb' style='top:${topVal}em; right:${rightVal}em; bottom:${bottomVal}em; left:${leftVal}em;' >
            <div class='top'>
                <div class='inputArea'>
                    <input type='text' class='answers' id='answer_${idx}' onKeyPress='validate(event);'></input>
                </div>
                <div class='clearer'></div>
                <div class='bottom'>
                    <div class='numerator'>
                        <div class='division'>${firstNum}</div>
                    </div>
                    <div class='denominator'>
                        <div class='division'>${secNum}</div>
                    </div>
                    <div class='clearer'></div>
                </div>
            </div>
        </div>`;
    };

    function getHtmlTypeFn(type) {
        switch (type) {/*?*/
            case exports.CONST.TYPE.MUL:/*?*/
                return exports.htmlIndividualProblemMultiplication; /*?*/
                break;
            case exports.CONST.TYPE.DIV:/*?*/
                return exports.htmlIndividualProblemDivision; /*?*/
                break;
            default:
        }
    };

    exports.htmlForTypeProblemSet = function (type, problemSet) {
        const htmlTypeFn = getHtmlTypeFn(type); //?

        return problemSet.reduce((html, prob, i) => {
            html += htmlTypeFn(prob, i);
            return html;
        }, "");
    };

    exports.htmlForTypeSetData = function (typeSetData) {
        return Object.keys(typeSetData).reduce((html, type) => {
            var sets = Object.keys(typeSetData[type]);

            html += "<div class='typeWrapper'>\
                            <div class='typeHeader'>"
                + type +
                "</div>";

            html += "<div class='setWrapper'>";
            sets.forEach(function (set, i) {
                var setData = typeSetData[type][set];
                if (setData.length) {
                    var topVal = getRandMoveValue();
                    var rightVal = getRandMoveValue();
                    var bottomVal = getRandMoveValue();
                    var leftVal = getRandMoveValue();
                    // var colorValA = rainbow(5, Math.random(5));
                    // var colorValB = rainbow(5, Math.random(5));
                    var colorValA = getRandomColor();
                    var colorValB = getRandomColor();

                    html += "<div class='set' style='color:" + colorValA + "; background:" + colorValB + "; top:" + topVal + "em; right:" + rightVal + "em; bottom:" + bottomVal + "em; left:" + leftVal + "em;' onClick='displayProblemSetPage(\"" + type + "\",\"" + set + "\");'>" + set + "</div>";
                }
            });
            html += "</div>";

            html += "<div class='clearer'></div>";
            html += "</div>";
            return html;
        }, "");
    };


    function getRandMoveValue() {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

        var max = 10;

        var randIntA = Math.floor(Math.random() * Math.floor(max)) * plusOrMinus;
        var randIntB = Math.floor(Math.random() * Math.floor(max)) * plusOrMinus;
        var randIntC = Math.floor(Math.random() * Math.floor(max)) * plusOrMinus;

        var initialPlacement = 7;
        var moveValue = initialPlacement * randIntA + randIntB * randIntC;

        return moveValue;
    }

    //https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        // return color;
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // https://stackoverflow.com/questions/1484506/random-color-generator
    function rainbow(numOfSteps, step) {
        // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
        // Adam Cole, 2011-Sept-14
        // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        var r, g, b;
        var h = step / numOfSteps;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch (i % 6) {
            case 0: r = 1; g = f; b = 0; break;
            case 1: r = q; g = 1; b = 0; break;
            case 2: r = 0; g = 1; b = f; break;
            case 3: r = 0; g = q; b = 1; break;
            case 4: r = f; g = 0; b = 1; break;
            case 5: r = 1; g = 0; b = q; break;
        }
        var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
        return (c);
    }





})(typeof exports === 'undefined' ? this['MM'] = {} : exports);