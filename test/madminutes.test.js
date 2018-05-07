// import * as MM from '../madminutes.js';
const MM = require('../madminutes.js');
const CONFIG = require('../config.js');

const typeSetData = CONFIG.data;

beforeEach(() => {
});
afterEach(() => {
});

test('blank', () => {
    // expect(true).toBe(true);
});

test('has html output for type and set data', () => {
    const html = MM.htmlForTypeSetData(typeSetData);
    expect(html != "").toBe(true);
});

test('able to retrieve a problem set', () => {
    const type = MM.CONST.TYPE.DIV;
    const set = "K";

    const noType = "NoType";
    expect(() => {
        MM.getProblemSetForTypeAndSet(typeSetData, noType, set)
    }).toThrowError(MM.CONST.ERRORS.NO_TYPE_FOUND);

    const noSet = "NoSet";
    expect(() => {
        MM.getProblemSetForTypeAndSet(typeSetData, type, noSet)
    }).toThrowError(MM.CONST.ERRORS.NO_SET_FOUND);

    const probSet = MM.getProblemSetForTypeAndSet(typeSetData, type, set);
    expect(Array.isArray(probSet)).toBe(true);

    // check all prob sets A-Z to make sure there are two questions and 40 questions for each set

});

test('problem set has right answers for multiplication', () => {
    const type = MM.CONST.TYPE.MUL;
    const typeCalc = MM.CONST.TYPE_CALCULATION[type]; //?
    const set = "C";
    const probSet = MM.getProblemSetForTypeAndSet(typeSetData, type, set);
    const allCorrectAnswers = [
        6, 0, 4, 8, 6, 2, 1, 0, 6, 4,
        6, 6, 0, 6, 7, 0, 4, 3, 8, 6,
        6, 0, 8, 4, 0, 6, 9, 1, 7, 0,
        7, 6, 1, 6, 0, 5, 4, 3, 0, 3,
    ];

    const answersChecked = MM.checkAnswers(probSet, allCorrectAnswers, typeCalc);
    expect(Array.isArray(answersChecked)).toBe(true);
    expect(answersChecked.length === 0).toBe(true); // should have no answers wrong so empty array

    const threeWrongAnswers = [
        3, 0, 4, 8, 6, 2, 1, 0, 6, 4,
        6, 6, 0, 6, 7, 0, 4, 3, 8, 6,
        2, 0, 8, 4, 0, 6, 9, 1, 7, 0,
        7, 6, 1, 6, 0, 5, 4, 3, 0, 0,
    ];
    const threeWrong = MM.checkAnswers(probSet, threeWrongAnswers, typeCalc);
    expect(threeWrong.length).toBe(3);
    expect(threeWrong[0]).toBe(0); // answer wrong should be of index 0
    expect(threeWrong[1]).toBe(20);
    expect(threeWrong[2]).toBe(39);

});

test('has html output for mult problem set', () => {
    const type = MM.CONST.TYPE.MUL;/*?*/
    const set = "K";
    const probSet = MM.getProblemSetForTypeAndSet(typeSetData, type, set);/*?*/

    const idx = 3;
    const prob = probSet[idx];
    const htmlIndividualProblem = MM.htmlIndividualProblemMultiplication(prob, idx);/*?*/
    const m = htmlIndividualProblem.match(/(&times)/g); /*?*/
    expect(htmlIndividualProblem).toEqual(expect.stringContaining("&times")); // has multiplication "x" sign 
    
    const htmlMult = MM.htmlForTypeProblemSet(type, probSet);/*?*/
    const m2 = htmlMult.match(/(&times)/g); /*?*/
    expect(m2.length).toBe(40);     // 40 x's
});

test('has html output for div problem set', () => {
    const type = MM.CONST.TYPE.DIV;/*?*/
    const set = "C";
    const probSet = MM.getProblemSetForTypeAndSet(typeSetData, type, set);/*?*/

    const idx = 3;
    const prob = probSet[idx];
    const htmlIndividualProblem = MM.htmlIndividualProblemDivision(prob, idx);/*?*/
    const m = htmlIndividualProblem.match(/(divProb)/g); /*?*/
    expect(htmlIndividualProblem).toEqual(expect.stringContaining("divProb")); // has multiplication "x" sign 
    
    const htmlMult = MM.htmlForTypeProblemSet(type, probSet);/*?*/
    const m2 = htmlMult.match(/(divProb)/g); /*?*/
    expect(m2.length).toBe(40);     // 40 x's
});

