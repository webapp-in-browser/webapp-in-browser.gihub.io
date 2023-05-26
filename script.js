function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function timer() {

  

  const interval_time = setInterval(clock, 1000);
  
  function clock() {
    
    const clock = new Date ();
    
   let date = document.getElementById("date");
   date.innerHTML = clock.toLocaleDateString();
   let timer = document.getElementById('timer');
   timer.innerHTML = 
    clock.toLocaleTimeString();
    
    
  }
  
}
timer();


let mas = ['yellow','blue','green'];



let myInterval = setInterval(myTimer, 1000);

function myTimer() {

let ai3 = Math.floor(Math.random()*3)+0;

console.log(ai3);
  
let timer1 = document.getElementById("timer1").style.color = mas[`${ai3}`];

console.log(timer1);
  
};

let mas1 = ['Привет!','Добро пожаловать!','Уважаемый гость!','❤️','👋','😄'];




let myInterval1 = setInterval(myTimer1, 1000);



function myTimer1() {

    let ai31 = Math.floor(Math.random()*6)+0;

    console.log(ai31);
  
    let p1 = document.getElementById("p1").innerHTML = mas1[`${ai31}`];

    console.log(p1);
  
}
