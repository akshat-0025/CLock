const secondHand=document.querySelector(`.second-hand`);
const minHand=document.querySelector(`.min-hand`);
const hourHand=document.querySelector(`.hour-hand`);
function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    console.log(seconds);
    const mins=now.getMinutes();
    const minsDegrees=((mins/60)*360)+90;
    minHand.style.transform=`rotate(${minsDegrees}deg)`;
    // console.log(mins);
    const hours=now.getHours();
    const hoursDegrees=((hours/12 )*360)+90;
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
    // const audio=document.querySelector(`audio`);
    // audio.currentTime=0;
    // audio.play(); 
    // console.log(hours);
    // var x = document.audio.autoplay;
    const sound=new Audio('ticki.mp3');
    sound.play();
    sound.loop();
}
setInterval(setDate,1000);
