async function getData() {
    const url = 'http://api.weatherstack.com/current?access_key=a971dec33ebda8db431b51e891e4a28b&query=New York';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);

      let text = document.createElement("p");
      text.innerHTML = json.location.name + " " + json.location.localtime;
      document.getElementById("this").appendChild(text);

      let text2 = document.createElement("p");
      text2.innerHTML = json.current.temperature + "°C";
      document.getElementById("this").appendChild(text2);

    } catch (error) {
      console.error(error.message);
    }
  }

getData();