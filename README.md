
```markdown
# 🚗 Simulador de Parquímetro Interativo

Este projeto é uma aplicação web que simula o funcionamento de um **parquímetro**, permitindo que o usuário insira um valor em reais e receba como resposta o tempo de permanência no estacionamento e o troco (se houver).

---

## 📂 Estrutura do Projeto

- **index.html** → Interface da aplicação (HTML semântico e acessível).
- **styles.css** → Estilos básicos e responsivos.
- **script.js** → Lógica da aplicação utilizando Programação Orientada a Objetos (POO).

---

## ✨ Funcionalidades

- Receber um valor inserido pelo usuário.
- Calcular o tempo de permanência no estacionamento com base no valor:
  - R$ 1,00 → 30 minutos
  - R$ 2,00 → 60 minutos
  - R$ 3,00 ou mais → 120 minutos
- Calcular e exibir o troco, se houver.
- Exibir mensagem de **"Valor insuficiente"** caso o valor seja menor que R$ 1,00.
- Interface responsiva e acessível, com uso de `aria-live` para leitores de tela.

---

## 🧩 Conceitos de POO aplicados

- **Foco em objetos**: O código é organizado em torno de classes (`Parquimetro` e `ParquimetroSimples`).
- **Herança**: `ParquimetroSimples` herda de `Parquimetro`.
- **Encapsulamento**: A lógica de cálculo está encapsulada dentro dos métodos da classe.
- **Polimorfismo**: Diferentes tipos de parquímetro poderiam ser tratados como instâncias da classe base `Parquimetro`.

---

## 🚀 Como executar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Informe um valor em reais no campo de entrada e clique em **Calcular**.
4. O resultado aparecerá na tela com o tempo e o troco.

---

## 📸 Exemplo de uso

- Entrada: `2.50`  
- Saída:  
  ```
  ⏱ Tempo: 60 minutos
  💰 Troco: R$ 0.50
  ```

- Entrada: `0.50`  
- Saída:  
  ```
  Valor insuficiente
  ```

---

## 🎨 Tecnologias utilizadas

- **HTML5** (semântico e acessível)
- **CSS3** (responsividade e estilo)
- **JavaScript (ES6+)** com Programação Orientada a Objetos

---

## 📖 Licença

Este projeto é de uso livre para fins educacionais e pode ser adaptado conforme necessário.
```

---

