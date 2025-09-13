const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".span");


// getting new date, current year and month 
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () =>{
let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); //getting first day of month
lastDateofMonth = new Date(currYear, currMonth + 1 ,0).getDate(); //getting last date of month
lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); //getting last date of month
console.log(lastDayofMonth);
lastDateofLastMonth = new Date(currYear, currMonth ,0).getDate(); //getting last date of previous month //getting last date of month
let liTag = "";

for (let i = firstDayofMonth; i>0; i--){
    liTag += `<li class="inactive-back my-list">${lastDateofMonth - i +1 }</li>`
}

for (let i =1; i <= lastDateofMonth; i++){
    let isToday = i === date.getDate()  && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="my-list back ${isToday}">${i}</li>`;
}
 
for (let i = lastDayofMonth; i <6; i++){
    liTag += `<li class="inactive-back my-list ">${i - lastDayofMonth + 1}</li>`
}

currentDate.innerText =  `${months[currMonth]} ${currYear}`;
daysTag.innerHTML = liTag;
}
 renderCalendar();



 prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
      
        //adding click event on both icons
        //if clikcked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth= icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            //if current month is less than 0 or greater than 11
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else{
            date =new Date();
        }
        renderCalendar();
    });
 });