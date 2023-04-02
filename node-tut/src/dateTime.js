
// const newDate =new Date(2023,3,7);
// const dayWeek = ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"];

// const { TomlError } = require("@parcel/utils");

// function getWeekDay(date){
    
//     console.log(dayWeek[date.getDay()])
// }
// getWeekDay(newDate)


// function getLastDayofMounth(year, month){
//   const newDay = new Date(year,month +1,0) 
//   console.log(newDay.getDate()); 
// }
// getLastDayofMounth(2012, 1)


let iterval = null;
const tomorrowDay = new Date();
tomorrowDay.setMinutes(35);

function getSecondsToTomorrow() {
 const currentDate = new Date();
 const difference = tomorrowDay - currentDate;
 if (difference <= 0){
    clearInterval(iterval);
    return;
 }
  return Math.trunc(difference / 1000);
}
iterval = setInterval(() => {
    console.log(getSecondsToTomorrow());
},1000);

const btnStopInterval = document.querySelector('button');
btnStopInterval.addEventListener('click' ,() => {
clearInterval(iterval);
});
