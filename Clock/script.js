let hrs=document.getElementById("hours");
let mins=document.getElementById("minutes");
let sec=document.getElementById("seconds");

setInterval(()=>{
  let currTime=new Date();

hrs.innerHTML=(currTime.getHours()<10?"0":"")+currTime.getHours();
mins.innerHTML=(currTime.getMinutes()<10?"0":"")+currTime.getMinutes();
sec.innerHTML=(currTime.getSeconds()<10?"0":"")+currTime.getSeconds();
},1000)