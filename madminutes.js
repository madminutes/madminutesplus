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
            MUL: (a, b, z) => { return a * b === z },
            DIV: (a, b, z) => { return a / b === z },
            SUB: (a, b, z) => { return a - b === z },
            ADD: (a, b, z) => { return a + b === z },
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
            const a = prob[0];
            const b = prob[1];

            const z = answers[i];

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
        type
        problemSet
        const htmlTypeFn = getHtmlTypeFn(type); //?

        const shuffledProbs = shuffle(problemSet);
        return shuffledProbs.reduce((html, prob, i) => {
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



})(typeof exports === 'undefined' ? this['MM'] = {} : exports);