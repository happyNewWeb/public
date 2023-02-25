//人物弹出
let showPerson = document.querySelector('.show-person');
let person = document.querySelectorAll('.introduce .top .importance a')
let topPerson = document.querySelector('.introduce .top .importance')
let span1 = document.querySelector('.show-person span');
let pers = document.querySelectorAll('.show-person div');
//底部人物弹出
let showBotPerson = document.querySelector('.show-bot-person');
let persons = document.querySelectorAll('.introduce .bottom .importance a')
let botPerson = document.querySelector('.introduce .bottom .importance')
console.log(botPerson);
let span2 = document.querySelector('.show-bot-person span');
let per1s = document.querySelectorAll('.show-bot-person > div');
let arr = [...per1s]
//监听事件封装到函数中 
function show(){
      //上部介绍人物事件
      topPerson.addEventListener('click', (e) => {
           if (e.target == person[0]) {
                per(showPerson, span1, pers[0]);
           } else if (e.target == person[1]) {
                per(showPerson, span1, pers[1]);
           }
      })
      span1.addEventListener('click', () => {
           sp(showPerson,span1)
      })
      //下部介绍人物事件
      botPerson.addEventListener('click', (e) => {
           switch (e.target) {
                case persons[0]:  per(showBotPerson, span2, arr[0]);  break;
                case persons[1]:  per(showBotPerson, span2, arr[1]);  break;
                case persons[2]:  per(showBotPerson, span2, arr[2]);  break;
                case persons[3]:  per(showBotPerson, span2, arr[3]);  break;
                case persons[4]:  per(showBotPerson, span2, arr[4]);  break;
                case persons[5]:  per(showBotPerson, span2, arr[5]);  break;
                case persons[6]:  per(showBotPerson, span2, arr[6]);  break;
                case persons[7]:  per(showBotPerson, span2, arr[7]);  break;
                case persons[8]:  per(showBotPerson, span2, arr[8]);  break;
                case persons[9]:  per(showBotPerson, span2, arr[9]);  break;
                case persons[10]: per(showBotPerson, span2, arr[10]); break;
                case persons[11]: per(showBotPerson, span2, arr[11]); break;
           }
      })
      span2.addEventListener('click', () => {
          sp(showBotPerson,span2)
     })
}
show()
//简化监听事件代码
function sp(show, span){
     show.style.visibility = 'hidden';
     show.style.backgroundColor = 'rgba(6, 6, 6,0)'
     show.style.transition = '0s'
     span.style.transition = '0s'
}

//简化监听事件代码
function per(show, span, perone) {
     arr.forEach(function(elm){
       if(elm!=perone){
            elm.style.display = 'none'
       }
     })
     show.style.visibility = 'visible';
     show.style.backgroundColor = 'rgba(6, 6, 6,0.9)'
     show.style.transition = '1s'
     span.style.transition = '0.3s'
     perone.style.display = 'block'
}