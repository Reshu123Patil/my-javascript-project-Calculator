var defaultDate = document.getElementById('todaysDate');
defaultDate.valueAsDate = new Date();

function calculateAge(){
     var days=0;
     var latestMonthDays=0;
     var latestMonth=0 ;
     var Month=0;
     var latestYear=0;

    BirthDate = document.getElementById('birthdate').valueAsDate;
    latestDate = document.getElementById('todaysDate').valueAsDate;

if(BirthDate.getDate()> latestDate.getDate()){
   
    latestMonthDays = latestDate.getDate()+ getDaysInMonth(latestDate.getFullYear(),latestDate.getMonth())
    days = latestMonthDays-BirthDate.getDate();
    latestMonth = (latestDate.getMonth()+1)-1;
     console.log(`Days:- ${days}`);
}
else{
     days = latestDate.getDate() - BirthDate.getDate();
     latestMonth = latestDate.getMonth()+1;
     console.log(`Days:- ${days}`);
}

if((BirthDate.getMonth()+1)> latestMonth){
    latestMonth += 12;
    Month = latestMonth - (BirthDate.getMonth()+1);
    console.log(`Month :- ${Month}`);   
    latestYear = latestDate.getFullYear()-1;      
}
else{
    Month = latestMonth - (BirthDate.getMonth()+1);
    console.log(`Month :- ${Month}`); 
    latestYear = latestDate.getFullYear();     
}

   year = latestYear - BirthDate.getFullYear();

   console.log(`Year:- ${year}`);
     document.getElementById("result").classList.remove("d-none");
     Age=document.getElementById("ageDisplay");

     Age.textContent=`${year} Year, ${Month} Month,${days} Days`
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

