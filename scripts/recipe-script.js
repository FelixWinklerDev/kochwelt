const input = document.getElementById("ingredient");
const button = document.getElementById("multiply");
const tableCells = document.querySelectorAll("table tr td:first-child");

function parseAmount(text) {
  const match = text.match(/^([\d.,]+)(.*)$/);
  if (match) {
    const number = parseFloat(match[1].replace(",", "."));
    const unit = match[2].trim();
    return { number, unit };
  }
  return null; 
}

button.addEventListener("click", () => {
  const portions = parseFloat(input.value);
  if (isNaN(portions) || portions < 1) return;

  tableCells.forEach(cell => {
    if (!cell.dataset.base) {
      const parsed = parseAmount(cell.textContent);
      if (parsed) {
        cell.dataset.base = parsed.number;
        cell.dataset.unit = parsed.unit;
      }
    }

    if (cell.dataset.base) {
      const base = parseFloat(cell.dataset.base);
      const newAmount = base * portions;
      const unit = cell.dataset.unit || "";
      cell.textContent = Number.isInteger(newAmount)
        ? newAmount + " " + unit
        : newAmount.toFixed(2) + " " + unit;
    }
  });
});