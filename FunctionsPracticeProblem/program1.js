// Help user find degF or degC based on their Conversion Selection. 
// Use Case Statement and ensure that the inputs are within the Freezing Point ( 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9


function degCToDegF(temperature){
    let degF = temperature*1.8 + 32;
    if(degF>=32 && degF<=212){
      console.log(degF +" degF");
    }else{
      console.log("Invalid input");
    }
}
function degFToDegC(temperature){
    let degC = (temperature-32)*0.555;
    if(degC>=0 && degC<=100){
      console.log(degC +" degC");
    }else{
      console.log("Invalid input");
    }
}
    
let temperature = 10;
let input =1;
    
switch(input){
    case 1:degCToDegF(temperature)
    break;
    case 2:degFToDegC(temperature)
    break;
}