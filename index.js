setInterval(()=>{
    let date=new Date();
    let h=date.getHours()*30;
    let m=date.getMinutes()*6;
    let s=date.getSeconds()*6;
    hour.style.transform = `rotate(${(h)+(m/12)}deg)`;
    minute.style.transform = `rotate(${m}deg)`;
    second.style.transform = `rotate(${s}deg)`;
},1000);