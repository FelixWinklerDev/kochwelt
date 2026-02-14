const input = document.getElementById("ingredient");
const button = document.getElementById("multiply");
const tableZellen = document.querySelectorAll("table tr td:first-child");

function parseMenge(text) {
  const match = text.match(/^([\d.,]+)(.*)$/);
  if (match) {
    const zahl = parseFloat(match[1].replace(",", "."));
    const einheit = match[2].trim();
    return { zahl, einheit };
  }
  return null; 
}

button.addEventListener("click", () => {
  const portionen = parseFloat(input.value);
  if (isNaN(portionen) || portionen < 1) return;

  tableZellen.forEach(zelle => {
    if (!zelle.dataset.basis) {
      const parsed = parseMenge(zelle.textContent);
      if (parsed) {
        zelle.dataset.basis = parsed.zahl;
        zelle.dataset.einheit = parsed.einheit;
      }
    }

    if (zelle.dataset.basis) {
      const basis = parseFloat(zelle.dataset.basis);
      const neueMenge = basis * portionen;
      const einheit = zelle.dataset.einheit || "";
      zelle.textContent = Number.isInteger(neueMenge) ? neueMenge + " " + einheit : neueMenge.toFixed(2) + " " + einheit;
    }
  });
});
