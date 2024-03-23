setInterval(function () {
    A();
  }, 3000);
  
  function A() {
    fetch('http://202.29.238.30:1880/getdata')
      .then(function (response) {
        if (response.status == 200) {
          response.json().then(json => {
            console.log(json);
  
            // Extract and format temperature, DO, pH, and TDS values
            const temperature = parseFloat(json["Temp="]);
            const formattedTemperature = temperature.toFixed(2);
            const doValue = parseFloat(json["DO="]);
            const formattedDOValue = doValue.toFixed(2);
            const phValue = parseFloat(json["pH="]);
            const formattedPHValue = phValue.toFixed(2);
            const tdsValue = parseFloat(json["TDS="]);
            const formattedTDSValue = tdsValue.toFixed(2);
  
            // Update HTML elements with formatted values
            document.getElementById("Temp").innerHTML = formattedTemperature;
            document.getElementById("DO").innerHTML = formattedDOValue;
            document.getElementById("pH").innerHTML = formattedPHValue;
            document.getElementById("TDS").innerHTML = formattedTDSValue;
          });
          return;
        } else {
          throw new Error('Request failed.');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  