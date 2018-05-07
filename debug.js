
		/////////////// DEBUG /////////////////////////
		// displayProblemSetPage(MM.CONST.TYPE.MUL, "50 A");
		// fillInAnswers(true, selectedProblemData, (a,b)=> {return a*b});

		// displayProblemSetPage(MM.CONST.TYPE.DIV, "C");
		// fillInAnswers(true, selectedProblemData, (a, b) => { return a / b });

		// // fillInAnswers(false);


		// setTimeout(function () {
		// 	var spaceKey = 32;
		// 	simulateKeydown(spaceKey);
		// }, 10000 * getRandomInt(3));
        /////////////// DEBUG /////////////////////////
        
function fillInAnswers(isAllCorrect = true, problemSet, calcFn) {
    const className = "answers";
    const probs = document.getElementsByClassName(className);

    iterateCollection(probs)((p, i) => {
        let randAnswer = null;
        if (isAllCorrect == false) {
            randAnswer = getRandomInt(10);
        } else {
            const prob = problemSet[i];
            const a = prob[0];
            const b = prob[1];


            randAnswer = calcFn(a, b);
        }
        var randomIntWithProb = 0; // to get a wrong answer some of the time
        var num = Math.random();
        if (num < 0.9) randomIntWithProb = 0;  //probability 0.9
        else randomIntWithProb = 1;  //probability 0.1

        p.value = randAnswer + randomIntWithProb;
    });

}

function simulateKeydown(keycode, isCtrl = false, isAlt = false, isShift = false) {
    var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, char: String.fromCharCode(keycode), key: String.fromCharCode(keycode), shiftKey: isShift, ctrlKey: isCtrl, altKey: isAlt });
    Object.defineProperty(e, 'keyCode', { get: function () { return this.keyCodeVal; } });
    e.keyCodeVal = keycode;
    document.dispatchEvent(e);
}