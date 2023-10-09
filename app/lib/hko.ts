
export const currentWeather = async () => {
   
    return fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en`, {
        headers: {
          'Content-Type': 'application/json',

        },
      })

  };
