const time=document.getElementById('time')
const clockContent=document.getElementById('clockContent');
const alarmdetails=document.getElementById('alarmdetails');
const timeinput=document.getElementById('timeinput');
const sound=new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");



function getTime(){
    
    setInterval(()=>{
        let date=new Date();
        time.innerHTML=date.toLocaleTimeString()
        // console.log(date.toLocaleTimeString());
        
    },1000)
}
getTime()
const addalarmbtn=document.getElementById('alarmbtn');
const inputfield=document.getElementById('inputfield')

addalarmbtn.addEventListener('click',function(){
    console.log("success");
    inputfield.style.display='inline';

})
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    timeinputvalue=timeinput.value

    displaydetail(timeinputvalue)

    alarmfunc(timeinputvalue)
})

function displaydetail(e){
    const alarms=document.createElement('div')
    alarms.classList.add('alarms')

    const p=document.createElement('p')
    p.textContent="Alarm set for";
    alarms.appendChild(p);
    
    const span=document.createElement('span')
    span.innerHTML=e
    alarms.appendChild(span)

    const deletebtn=document.createElement('button')
    deletebtn.textContent='Delete';
    alarms.appendChild(deletebtn)

    alarmdetails.appendChild(alarms)

    deletebtnfunc(p,span,alarms,deletebtn)
}

function deletebtnfunc(p,span,alarms,deletebtn){
    deletebtn.addEventListener('click',function(){
        // console.log("clicked delete");
        p.remove()
        span.remove()
        alarms.remove();
        // inputfield.reset();
    })
}

function alarmfunc(timeinputvalue){
    const now=new Date();

    const alarmtime=new Date(`${now.toLocaleDateString()} ${timeinputvalue}`);
    console.log(alarmtime.getTime());//NAN
    
    const nowTime=now.getTime();
    console.log(now.getTime());

    const timeUntilAlarm=alarmtime.getTime()-nowTime;
    console.log(timeUntilAlarm);//NAN

     setTimeout(()=>{
        sound.play()
        alert("time Up")
     },timeUntilAlarm)
     deletebtnfunc()
}