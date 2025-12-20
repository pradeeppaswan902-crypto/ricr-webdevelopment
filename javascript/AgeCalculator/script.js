function calculateAge() {
    const startdate = document.getElementById("date-birth").value;
    const TillDate = document.getElementById("tillDate").value;

    if (!startdate || !TillDate) {
        alert("Please select both dates.");
        return;
    }

    const d1 = new Date(startdate);
    const d2 = new Date(TillDate);

    let y1 = d1.getFullYear();
    let m1 = d1.getMonth();
    let day1 = d1.getDate();

    let y2 = d2.getFullYear();
    let m2 = d2.getMonth();
    let day2 = d2.getDate();

    // Year difference
    let years = y2 - y1;

    // Month difference
    let months = m2-m1;

    if(months< 0){
        years--;
        months +=12;
    }
  let days = day2 - day1;
  if(days < 0){
    months--;
    const getdays = new Date(y2,m2,0).getDate();
    getdays +=12;

  }
 document.getElementById("result").innerText = `Your are ${years} Years ${months} Months ${days} Days` 







    // let months = m2 - m1;
    // if (months < 0) {
    //     years--;
    //     months += 12;
    // }

    // // Day difference
    // let days = day2 - day1;
    // if (days < 0) {
    //     months--;
    //     const previousMonthDays = new Date(y2, m2, 0).getDate();
    //     days += previousMonthDays;
    // }

    // console.log("Years =", years);
    // console.log("Months =", months);
    // console.log("Days =", days);

    // document.getElementById("result").innerText =
    //     `Your Age: ${years} Years, ${months} Months, ${days} Days`;


    let month = m2-m1;
}





