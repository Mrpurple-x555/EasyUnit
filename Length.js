const units = {
  meter: 1,
  km: 0.001,
  cm: 100,
  mm: 1000
};

function convert(){
  const value = document.getElementById("value").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const result = value * (units[to] / units[from]);

  document.getElementById("result").innerText = result;
}