const units = {
  kb: 1,
  mb: 1024,
  gb: 1048576
};

function convert(){
  const value = parseFloat(document.getElementById("value").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const result = value * (units[from] / units[to]);

  document.getElementById("result").innerText = result;
}