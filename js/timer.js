const Timer = document.getElementById("Timer");
const time = document.querySelectorAll(".time h3");

let date = new Date();
let y = date.getFullYear();
let mo = date.getMonth();
let dy = date.getDate();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

let futurDate =new Date(y+10 , mo , dy , h , m , s);
let GetDate = futurDate.getTime();
 
let countdown = setInterval(getRemainingTime , 1000);

function getRemainingTime(){
    const today = new Date().getTime();
    const t = GetDate - today;

    const oneYear= 12*30*7*24*60*60*1000;
    const oneMonth= 30*7*24*60*60*1000;
    const oneWeek= 7*24*60*60*1000;
    const oneDay = 24*60*60*1000;
    const oneHour= 60*60*1000;
    const oneMinute= 60*1000;
    const oneSec=1000;

    let year = Math.floor(t/oneYear);
    let month = Math.floor((t % oneYear)/oneMonth);
    let Week = Math.floor((t % oneMonth)/oneWeek);
    let day = Math.floor((t % oneWeek)/oneDay);
    let hour = Math.floor((t % oneDay)/oneHour);
    let minute = Math.floor((t % oneHour)/oneMinute);
    let second = Math.floor((t % oneMinute)/oneSec);

    const valuesTimes = [year, month, Week, day , hour , minute , second];

    function format(item){
        if(item < 2000){
              return item ;
        }
        return item;
    }

    time.forEach(function(item , index){
        item.innerHTML = format(valuesTimes[index]);
    });

    if(t < 0){
      clearInterval(countdown);
      Timer.innerHTML=`<h1>Sorry ,There is no time.</h1>`;
    };
}

getRemainingTime();