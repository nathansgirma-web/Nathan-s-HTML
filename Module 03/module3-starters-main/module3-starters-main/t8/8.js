document.getElementById("calcBtn").addEventListener("click", function () {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;

  let output;

  switch (op) {
    case "add":
      output = n1 + n2;
      break;
    case "sub":
      output = n1 - n2;
      break;
    case "mul":
      output = n1 * n2;
      break;
    case "div":
      output = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
      break;
    default:
      output = "Invalid operation";
  }

  document.getElementById("result").textContent = output;
});