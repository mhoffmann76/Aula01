function calcular() {
  var al = document.getElementById("aluno").value;
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = parseFloat(document.getElementById("n3").value);
  var n4 = parseFloat(document.getElementById("n4").value);
  var res = document.getElementById("res");

  var media = (n1 + n2 + n3 + n4) / 4;

  if (media >= 7) {
    res.innerHTML = al + "<br>Nota: " + media + "<br> Aprovado";
    document.getElementById("color").style.color = "black";
    let color = document.getElementById("color");
    color.style.backgroundColor = "green";
  } else if (media >= 4) {
    res.innerHTML = al + "<br>Nota: " + media + "<br> Recuperação<br>";
    document.getElementById("color").style.color = "black";
    let color = document.getElementById("color");
    color.style.backgroundColor = "#ffff00";
  } else if (media < 4) {
    res.innerHTML = al + "<br>Nota: " + media + "<br> Reprovado<br>";
    document.getElementById("color").style.color = "black";
    let color = document.getElementById("color");
    color.style.backgroundColor = "red";
  } else {
    res.innerHTML = ` Nota: ${media}<br>Dados informados inválidos. Favor preencher os campos Corretamente<br>`;
    document.getElementById("color").style.color = "black";
    let color = document.getElementById("color");
    color.style.backgroundColor = "red";
  }

  if (al == "") {
    res.innerHTML = al + "Favor informa o nome do Aluno!!";

    var al = document.getElementById("aluno").focus();
  }
}

function limpar() {
  document.getElementById("form").reset();
  res.innerHTML = "";
  color.style.backgroundColor = "";
}
