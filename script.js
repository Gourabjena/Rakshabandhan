endTime="19 August 2024 00:00";
let input=document.querySelectorAll("input")
console.log(input);
 function clock(){

  const end= new Date(endTime)
  const now = new Date();
  console.log(end);
  console.log(now);
  const diff=(end-now)/1000;
  const day=Math.floor((diff/3600)/24);
  const hour=Math.floor((diff/3600)%24);
  const minutes=Math.floor((diff/60)%60);
  const seconds=Math.floor((diff)%60);
  if(day>0){
  input[0].value=time(day);
  input[1].value=time(hour);
  input[2].value=time(minutes);
  input[3].value=time(seconds);
  }
 }
 clock();

 setInterval(
  ()=>{
    clock(); 
  },1000
 );
 function time (time){
  if(time<10){
    return`0${time}`;
  }
  else{
    return`${time}`;
  }
 }
