// Classe base
class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcularTempo() {
    throw new Error("Método deve ser implementado pela subclasse");
  }

  calcularTroco() {
    throw new Error("Método deve ser implementado pela subclasse");
  }
}

// Classe concreta
class ParquimetroSimples extends Parquimetro {
  constructor(valor) {
    super(valor);
  }

  calcularTempo() {
    if (isNaN(this.valor) || this.valor < 1) {
      return "Valor insuficiente";
    }

    if (this.valor >= 1 && this.valor < 2) {
      return "30 minutos";
    } else if (this.valor >= 2 && this.valor < 3) {
      return "60 minutos";
    } else if (this.valor >= 3) {
      return "120 minutos";
    }
  }

  calcularTroco() {
    if (isNaN(this.valor) || this.valor < 1) return null;

    let troco = 0;
    if (this.valor >= 1 && this.valor < 2) troco = this.valor - 1;
    else if (this.valor >= 2 && this.valor < 3) troco = this.valor - 2;
    else if (this.valor >= 3) troco = this.valor - 3;

    return troco.toFixed(2);
  }
}

// Evento do formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("parquimetroForm");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const valor = parseFloat(document.getElementById("valor").value.replace(",", "."));
    const parquimetro = new ParquimetroSimples(valor);

    const tempo = parquimetro.calcularTempo();
    const troco = parquimetro.calcularTroco();

    if (tempo === "Valor insuficiente") {
      resultado.innerHTML = `<p style="color:red;">${tempo}</p>`;
    } else {
      resultado.innerHTML = `
        <p>⏱ Tempo: <strong>${tempo}</strong></p>
        <p>💰 Troco: <strong>R$ ${troco}</strong></p>
      `;
    }
  });
});
