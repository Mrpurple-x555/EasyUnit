const units = {
  kg: 1,
  g: 1000,
  lb: 2.20462
};

function convert(){
  const value = document.getElementById("value").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const result = value * (units[to] / units[from]);

  document.getElementById("result").innerText = result;
}