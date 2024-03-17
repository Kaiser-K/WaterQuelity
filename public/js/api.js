setInterval(function(){A()},3000)
function A(){
fetch('http://202.29.238.30:1880/getdata')
                    .then(function (response) {
                        if (response.status == 200) {
                            console.log(response.body);
                            response.json().then(json => {
                                console.log(json);
                                document.getElementById("cnt").innerHTML =  json.cnt
                                document.getElementById("temp").innerHTML =  json.temperature
                                document.getElementById("humi").innerHTML =  json.humidity
                            })
                            return;
                        }
                        else {

                        }
                        throw new Error('Request failed.');
                    })
                    .then(data => {
                        // Work with JSON data here
                        //onsole.log(data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }