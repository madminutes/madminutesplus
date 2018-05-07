function fillInAnswers() {
    const className = "answers";
    const probs = document.getElementsByClassName(className);

    iterateCollection(probs)((p, i) => {
        const randAnswer = getRandomInt(10);
        p.value = randAnswer;
    });

}


function iterateCollection (collection) {
    return function(f) {
      for(var i = 0; collection[i]; i++) {
        f(collection[i], i);
      }
    }
  }
