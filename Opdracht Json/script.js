

async function getData() {
    const url = "generated.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

getData();

function myFunction(item) {
  console.log(item)
  let P = document.createElement('p');
  P.innerHTML = item.tags;
  
}