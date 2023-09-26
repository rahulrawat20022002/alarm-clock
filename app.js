const time=document.getElementById('time')
function getTime(){
    
    setInterval(()=>{
        let date=new Date();
        time.innerHTML=date.toLocaleTimeString()
        // console.log(date.toLocaleTimeString());
    },1000)
}
getTime()
const alarmbtn=document.getElementById('alarmbtn');
const inputfield=document.getElementById('inputfield')
alarmbtn.addEventListener('click',function(){
    console.log("success");
    inputfield.style.display='inline';

})
const btn=document.querySelector('button')
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target.hours.value)
    console.log(e.target.minutes.value)
    console.log(e.target.seconds.value)
})