const time=document.getElementById('time')
const clockContent=document.getElementById('clockContent');
const alarmdetails=document.getElementById('alarmdetails');




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
    let currenttime=e.target.hours.value+':'+e.target.minutes.value
    displaydetail(currenttime)
    console.log(currenttime)
    alarmfunc()
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
    })
}

function alarmfunc(){
    
}