const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  const arrayOfSentence = sentence.split("");
  // console.log('arrayOfSentence', arrayOfSentence);
  let timeVar = 0;
  for (let i = 0; i < arrayOfSentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(arrayOfSentence[i]);
      // console.log('arrayOfSentence[i]', arrayOfSentence[i]);
    }, timeVar);
    // console.log('timeVar before', timeVar);
    timeVar += 50;
    // console.log('timeVar after', timeVar);
  }
  console.log("\n");
};

console.log(typewriter(sentence));