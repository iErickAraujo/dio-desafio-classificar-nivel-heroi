function submitForm() {
  const nome = document.getElementById("nome").value;
  const xp = document.getElementById("xp").value;
  let infoPlayer = document.getElementById("info-player");
  if (nome === "" || xp === "") {
    infoPlayer.innerHTML = `Por favor, preencha todos os campos.`;
    console.log("Por favor, preencha todos os campos.");
  } else {
    if (xp <= 1000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Ferro.`;
    } else if (xp >= 1001 && xp <= 2000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Bronze.`;
    } else if (xp >= 2001 && xp <= 3000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Prata.`;
    } else if (xp >= 3001 && xp <= 4000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Ouro.`;
    } else if (xp >= 4001 && xp <= 5000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Platina.`;
    } else if (xp >= 5001 && xp <= 6000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Diamante.`;
    } else if (xp >= 6001 && xp <= 7000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Ascendente.`;
    } else if (xp >= 7001 && xp <= 8000) {
      infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Imortal.`;
    } else if (xp >= 8001) {
      infoPlayer.innerHTML = `O Heroi de nome  ${nome} tem ${xp} de experiencia, sendo assim seu nivel é Radiante.`;
    } else {
      infoPlayer.innerHTML = `Por favor, preencha todos os campos.`;
      console.log("Por favor, preencha todos os campos.");
    }
  }
}
