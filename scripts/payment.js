let paynow=()=>
{
    alert("Your booking is successfull");
}
let adult=sessionStorage.getItem("adult");
let nameOfPerson=sessionStorage.getItem("name");
let fromDate=sessionStorage.getItem("fromDate");
let toDat=sessionStorage.getItem("toDat");
let price=sessionStorage.getItem("price");
let days=sessionStorage.getItem("days");
let output=`
<div class="customerInfo">
<p><b><span style="font-family:cursive"> Name:</b>${nameOfPerson}</p></span>
<p><b><span style="font-family:cursive">Number of adults:</b>${adult}</p></span>
<p><b><span style="font-family:cursive"> Check-in Date:</b>${fromDate}</p></span>
<p><b><span style="font-family:cursive">Check-out Date:</b>${toDat}</p></span>
</div>
<div class="tariffDetails">
<p><b><span style="font-family:cursive">Tariff BreakDown:</b>Rs 1000 x ${adult} Adults x ${days} Nights</p></span>
<p><b><span style="font-family:cursive">Total Amount:</b>Rs ${price}</p></span>
</div>
<div>
`
document.getElementById("container2").innerHTML=output;
let query=sessionStorage.getItem("cityName");
let hotelLocationId=sessionStorage.getItem("hotelLocationId");
const xhr=new XMLHttpRequest();
      let url="https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query="+query;
  
      xhr.open("GET",url);
      xhr.setRequestHeader("X-RapidAPI-Key", "b770b38b95mshbc0af9af8d6af01p13576cjsn93f0b6b72802");
xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
xhr.send();
xhr.onreadystatechange=()=>{
  if(xhr.readyState==4 && xhr.status==200)
  {
    let resStr=xhr.responseText;
   
   let resObj=JSON.parse(resStr);
   for(let i=0;i<resObj.data.length;i++)
   {
    let user=resObj.data[i].location_id;
    if(user==hotelLocationId){
        let photo=resObj.data[i].photo.images.original.url;
        let output=`
        <img src="${photo}" height="300px" width="350px" alt="">
        `
        document.getElementById("insideContainer1").innerHTML=output;

    }
   }
   
  

  }    
  
  }