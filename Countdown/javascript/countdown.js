console.log('welcome');

const countdown=document.querySelector('.countdown');

// get time get the result in miliseconds
const launchDate=new Date('jan 1 ,2021 13:00:00').getTime();

// console.log(launchDate);

// we want our time to update every sec
const intvl = setInterval(() => {

    // get todays date n time in milliseconds
    const now=new Date().getTime();

    // get the distance from now to the launch date
    const distance=launchDate-now;
    
    // time calculations
    const days=Math.floor(distance/(1000*60*60*24));
    
    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const mins=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    // display result
    countdown.innerHTML=`
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>seconds</span></div>

    `;
   //if distance passed 
    if(distance<0){
        // stop countdown
        clearInterval(intvl);

        // style n output some text
        countdown.style.color='yellow';
        countdown.innerHTML='launcnced!';
    }


}, 1000);