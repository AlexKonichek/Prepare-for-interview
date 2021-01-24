window.addEventListener("DOMContentLoaded", function(){
    let questionWrap = document.getElementById('question');
    let btn = document.getElementById('submit');
        btn.addEventListener('click',() => location.reload())
    let textQuestions = 'What do you know about our company?Tell Me About Yourself?How would you describe yourself?Why do you want to work in this industry?What are you passionate about?What are your goals for the future?What motivates you?What makes you unique?Why do you want to work here?What is Your Greatest Strength?What is Your Greatest Weakness?How you spent your free time?How would your friends describe you?';
    let questionsArr = textQuestions.split('?');

    function moveTextEffect(text, container){
      let idx = 1;
      let speed = 30;
      writeText()
      function writeText() {
        container.innerText = text.slice(0, idx)
        idx++
        if(idx > text.length) {
             return;
        }
        setTimeout(writeText, speed)
      }
    }

    function getRandomIndex(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getrRandomLightColor() {
      let color = (function lol(m, s, c) {
                      return s[m.floor(m.random() * s.length)] +
                          (c && lol(m, s, c - 1));
                  })(Math, '3456789ABCDEF', 4);
                  console.log(color);
      return '#' + color;
    }

    let randomIndex = Math.trunc(getRandomIndex(1, questionsArr.length));
    
    btn.style.backgroundColor = getrRandomLightColor();
    

    question.textContent = moveTextEffect(questionsArr[randomIndex] + '?', questionWrap);
    
    
      
    })
//добавить фичу в текст ефект печатания текста


