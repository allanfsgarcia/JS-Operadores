/*Tipo de operadores utilizados no JavaScript

        Operadores Aritiméticos
Operador           Descrição da Operação
+     ------------------- Adição
-     ------------------- Subtração
*     ------------------- Multiplicação
**    ------------------- Exponencial
/     ------------------- Divisão
%     ------------------- Módulo
++    ------------------- Incrementar
--    ------------------- Decrementar



        Operadores de Atribuição
Operador        Exemplo         Equivalemnte a
= -------------- x = y ----------- x= y
*= ------------- x += y --------- x= x + y
*= ------------- x *= y --------- x= x * y
/= ------------- x /= y ---------- x= x/y
%= ------------- x %= y ---------- x= x % y


        Operadores de Comparação 
Operador ------------------------ Descrição
== ------------------------------ Igual a (não checa tipo)
=== ----------------------------- Mesmo valor e mesto tipo
!= ----------------------------- Diferente
!== ---------------------------- Valor e tipo diferente
> ------------------------------ Maior que
< ------------------------------ Menor que
>= ----------------------------- Maior ou Igual
<= ----------------------------- Menor ou Igual


        Operadores de Lógica
Operador ------------------------ Descrição
&& ------------------------------ "e" lógico
|| ------------------------------ "ou" lógico
! ------------------------------- "não lógico"


        Operadores Condicional (if ternário)

(condition) ? expression1: expression2
funciona da mesma forma que um If/Else: 

if(condition){
expression1;
} else {
statement};


-------------------------------------------- Atividades ---------------------------------------------------
*/

function checkNumbers(num1, num2) {
  if (num1 == num2) {
    var comparaIguais = `são iguais`;
  } else {
    var comparaIguais = `não são iguais`;
  }
  if (num1 + num1 > 10) {
    var comparaDez = `maior que 10`;
  } else {
    var comparaDez = `menor que 10`;
  }

  if (num1 + num2 > 20) {
    var comparaVinte = `maior que 20`;
  } else {
    var comparaVinte = `menor que 20`;
  }

  console.log(`Os números ${num1} e ${num2} ${comparaIguais}. Sua soma é ${num1 + num2} que é ${comparaDez} e ${comparaVinte}`);
}
checkNumbers(10, 10);

/*_______________________________________________________Resolução do Professor____________________________________________________________

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
*/
