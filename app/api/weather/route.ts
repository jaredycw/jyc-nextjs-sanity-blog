import { currentWeather } from "@/app/lib/hko";
export const fetchCache = 'force-no-store'
export const revalidate = 0

export async function GET(){
    try {
        const response = await currentWeather();

        if (!response.ok) {
            throw new Error('Failed to fetch data'); // Handle this error appropriately
          }
          
        const report = await response.json();
        let uvPlace = " ";
        let uvIndex = " ";
        let uvDesc = " ";
        let uvTimeDesc = " ";
        let warningMessage =  "NA";
        let hkoIcon = " ";
        if (report.uvindex === ""){
            uvIndex = "NA";
            uvPlace = "NA";
            uvDesc = "NA";
            uvTimeDesc = "NA";

        }   else{
            uvPlace = report.uvindex.data[0].place 
            uvIndex = report.uvindex.data[0].value 
            uvDesc = report.uvindex.data[0].desc 
            uvTimeDesc = report.uvindex.recordDesc 

        }


        const humidity = report.humidity.data[0].value || "Error";
        const humidityTime = report.humidity.recordTime || "Error";

        const hkoPlace = report.temperature.data[1].place || "Error";
        const hkoTemperature = report.temperature.data[1].value || "Error";
        const TemperatureTime = report.temperature.recordTime || "Error";
       
        

        if (report.warningMessage === ""){
          warningMessage = "No warning message";
        }
        else{
          warningMessage = report.warningMessage;
        }      
        if (report.icon === ""){
            hkoIcon = "/";
        }
        else{
            hkoIcon = report.icon;
        }


        return new Response(JSON.stringify({
            uvPlace, uvIndex, uvDesc, uvTimeDesc,
            humidity, humidityTime,
            hkoPlace, hkoTemperature, TemperatureTime,
            warningMessage, hkoIcon
          }), {
            status: 200,
            headers: {
              'content-type': 'application/json',

            }
            
          });
    }
    catch (error :any) {
        // Handle the error appropriately, log it, and return an error response
        console.error('An error occurred:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            'content-type': 'application/json'
          }
        });
      }

}