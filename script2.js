
// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// Hello Laura
// Good Bye Jim


var speakWord_G = "Good Bye";
var speakWord_H = "Hello";



function speak_G(name) {
  console.log(speakWord_G + " " + name);
}



function speak_H(name) {
  console.log(speakWord_H + " " + name);
}

const x =document.getElementById("p_content");

(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    

    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        // console.log(speak_G(names[i]));
        speak_G(names[i]);
      } else {
        // console.log(speak_H(names[i]));  
       speak_H(names[i]);    }
    }
    
    })();