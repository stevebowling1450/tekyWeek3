 function darkcomplete(result){
             console.log("Summary"+" "+result.currently.summary);
             console.log("Temp:"+" "+result.currently.temperature);
             console.log("Rain"+" "+result.currently.precipProbability+"%");
             console.log("Timezone" +" "+result.timezone);
       
        
         $("#temp").append(result.currently.temperature+"F");
         $("#status").append(result.currently.summary);
         $("#min").append(result.daily.data["0"].temperatureMin+"F");
         $("#rain").append(result.currently.precipProbability+"%");
         
         
     }
        
    
        

         $(function(){ 
               
              var x= ("https://api.darksky.net/forecast/13c7c3d7c0d1f00ccd3d109b56933094/"+lat +"," +long )
             var request= {
    

     url:(x),
     dataType: "jsonp",
     success: darkcomplete
             };
        
         $.ajax(request);
         });        




         onclick="testGenerateCard()"


          $("#hide").click(function(){
                $("#templateDiv").hide("scale", 500)});