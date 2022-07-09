let update=()=>{
    let adult = document.getElementById("adult");
    let price = document.getElementById("price");
    let toDateElement = document.getElementById("toDate");
    let fromDateElement = document.getElementById("fromDate");

    let toDateValue = new Date(toDateElement.value);
    let fromDateValue = new Date(fromDateElement.value);

    toDateElement.min = fromDateElement.value;

    let days = (toDateValue - fromDateValue)/(24*60*60*1000);
    
    if(adult.value && toDateElement.value && fromDateElement.value)
        price.value = "Rs. " + parseInt(adult.value)*1000*days;
    else
        price.value = "Rs.0";   

}
