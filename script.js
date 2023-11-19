const apikey="206f8974942b12e4490541856778174c";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_box=document.querySelector(".search input");
const search_button=document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")
async function checkweather(city){
    const response =await fetch(api_url+city+`&appid=${apikey}`);
    var data=await response.json();
if (response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}else{
  // Data of weather update according to  user input 
document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
document.querySelector(".wind").innerHTML= data.wind.speed +" km/hr";
//Updating  weather images according to the input from user 
if (data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
   weatherIcon.src="images/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png";
 }
 else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
 }
 else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
 }
 document.querySelector(".weather").style.display="block";
 document.querySelector(".error").style.display="none"; 
}  
}



search_button.addEventListener("click",()=>{
    checkweather(search_box.value);  

});
