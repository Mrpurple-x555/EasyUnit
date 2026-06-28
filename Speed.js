function convert(){
  const value = parseFloat(document.getElementById("value").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  let result;

  if(from === to){
    result = value;
  }
  else if(from === "kmh" && to === "mph"){
    result = value * 0.621371;
  }
  else if(from === "mph" && to === "kmh"){
    result = value / 0.621371;
  }

  document.getElementById("result").innerText = result;
}