function calcular(){
	var form = document.calculoIMC;
	var altura = form.altura.value;
	var peso = Number(form.peso.value);

	if(altura.indexOf(',')>-1){
		altura=altura.replace(',','.');
	}
	altura= Number(altura);
	var IMC=peso/Math.pow(altura,2);
	var imcNew=IMC.toFixed(2);
	var resultado = 'O seu IMC é ' + imcNew + '<br>'; 
/*Novo*/
if (imcNew<18.5) {
	resultado += ' Voçê encontra-se abaixo do peso Ideal!';
}else if (imcNew<25) {
	resultado += ' Voçê está com o seu peso normal. Parabens!';
}else if (imcNew<30) {
	resultado += ' Voçê está acima do seu peso. Sobrepeso!';
}else if (imcNew<35) {
	resultado += ' Obesidade grau I';
}else if (imcNew<40) {
	resultado += ' Obesidade grau II';
}else{
	resultado += ' Obesidade grau III';
}


	document.getElementById('resultado').innerHTML=resultado;
}