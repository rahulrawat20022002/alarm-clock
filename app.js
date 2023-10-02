const time=document.getElementById('time')
const clockContent=document.getElementById('clockContent');
const alarmdetails=document.getElementById('alarmdetails');
const timeinput=document.getElementById('timeinput');
const sound=new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");

const alarms=document.createElement('div')
    const p=document.createElement('p')
        const span=document.createElement('span')
        const deletebtn=document.createElement('button')

let validate=false
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
    // console.log("success");

    inputfield.style.display='inline';
    validate=true;


})
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const timeinputvalue=timeinput.value
    if(validate && timeinputvalue!==''){
        // console.log(timeinputvalue);
        displaydetail(timeinputvalue)
        alarmbool=true;
        alarmfunc(timeinputvalue)
        validate=false
    }
    else if(timeinputvalue===''){
        alert('please add the time')
    }
    else{
        alert("cannot add more")
    }
    form.reset()
})

function displaydetail(e){
    

        
        alarms.classList.add('alarms')
    
        p.textContent="Alarm set for";
        alarms.appendChild(p);
        
        span.innerHTML=e
        alarms.appendChild(span)
    
        deletebtn.textContent='Delete';
        alarms.appendChild(deletebtn)
    
        alarmdetails.appendChild(alarms)
    
        deletebtnfunc(p,span,alarms,deletebtn)
}

function deletebtnfunc(p,span,alarms,deletebtn){
    deletebtn.addEventListener('click',function(){
        p.remove()
        span.remove()
        alarms.remove();
        validate=true;
    })
}

function alarmfunc(timeinputvalue){
    
        // console.log("true");
        const now=new Date();
    
        const alarmtime=new Date(`${now.toLocaleDateString()} ${timeinputvalue}`);
        // console.log(alarmtime.getTime());
        
        const nowTime=now.getTime();
        // console.log(now.getTime());
    
        const timeUntilAlarm=alarmtime.getTime()-nowTime;
        // console.log(timeUntilAlarm);
    
         setTimeout(()=>{
            sound.play();
            
            alert('times up')
        
            alarms.remove();
            validate=true;
            
        },timeUntilAlarm)

    
    
}

