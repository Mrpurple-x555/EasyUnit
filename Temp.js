function convert(){
  const value = parseFloat(document.getElementById("value").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  let result;

  if(from === to){
    result = value;
  }
  else if(from === "c" && to === "f"){
    result = (value * 9/5) + 32;
  }
  else if(from === "f" && to === "c"){
    result = (value - 32) * 5/9;
  }
  else if(from === "c" && to === "k"){
    result = value + 273.15;
  }
  else if(from === "k" && to === "c"){
    result = value - 273.15;
  }

  document.getElementById("result").innerText = result;
}