# Projeto de Sistema de Níveis de Jogador

Este projeto é uma aplicação web simples que permite aos usuários inserir o nome e a experiência de um jogador, e calcula o nível do jogador com base na experiência inserida.

## Como usar

1. Insira o nome do jogador no campo "Nome".
2. Insira a experiência do jogador no campo "Experiência".
3. Clique no botão "Enviar".

A aplicação irá calcular o nível do jogador e exibir a informação na tela.

## Código

O código principal para calcular o nível do jogador está no arquivo `main.js`. Ele usa a função `submitForm()` para ler os valores inseridos pelo usuário, calcular o nível do jogador e exibir a informação na tela.

Aqui está um trecho do código:

```javascript
function submitForm() {
  const nome = document.getElementById("nome").value;
  const xp = document.getElementById("xp").value;
  let infoPlayer = document.getElementById("info-player");
  if (nome === "" || xp === "") {
    infoPlayer.innerHTML = `Por favor, preencha todos os campos.`;
    console.log("Por favor, preencha todos os campos.");
  } else {
    // Cálculo do nível do jogador com base na experiência
    // ...
  }
}
```

## Estilos

Os estilos para a aplicação estão no arquivo `main.css`. Ele define a aparência da aplicação, incluindo cores, layout e transições.

Espero que isso ajude! 😊


# Player Level System Project

This project is a simple web application that allows users to input a player's name and experience, and calculates the player's level based on the input experience.

## How to Use

1. Enter the player's name in the "Nome" field.
2. Enter the player's experience in the "Experiência" field.
3. Click the "Enviar" button.

The application will calculate the player's level and display the information on the screen.

## Code

The main code for calculating the player's level is in the `main.js` file. It uses the `submitForm()` function to read the user's input values, calculate the player's level, and display the information on the screen.

Here's a snippet of the code:

```javascript
function submitForm() {
  const nome = document.getElementById("nome").value;
  const xp = document.getElementById("xp").value;
  let infoPlayer = document.getElementById("info-player");
  if (nome === "" || xp === "") {
    infoPlayer.innerHTML = `Por favor, preencha todos os campos.`;
    console.log("Por favor, preencha todos os campos.");
  } else {
    // Player level calculation based on experience
    // ...
  }
}
```

## Styles

The styles for the application are in the `main.css` file. It defines the appearance of the application, including colors, layout, and transitions.

Hope this helps! 😊