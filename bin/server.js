const app = require("../src/app");
const porta = normalizaPorta(process.env.PORT || "8080");

function normalizaPorta(val) {
  const porta = parseInt(val, 10);
  if (isNaN(porta)) {
    return val;
  }
  if (porta >= 0) {
    return porta;
  }
  return false;
}

app.listen(porta, function () {
  console.log(`aplicação rodando na porta ${porta}`);
});
