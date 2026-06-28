function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (!amount) return;

    fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates[to];
            let result = amount * rate;

            document.getElementById("result").innerText =
                `${result.toFixed(2)} ${to}`;
        })
        .catch(() => {
            document.getElementById("result").innerText = "Error";
        });
}

/* ===== Theme Mode ===== */
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
} else {
    themeBtn.textContent = "🌙";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "🌙";
    }
});