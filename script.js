
const btn = document.querySelector('#btn');
//Adicionando um escutador
btn.addEventListener('click',calcular);

//Criando a função
function calcular(){
    const seletor = document.querySelector('#select').value;
    const num1 = document.querySelector('#txt1');
    const num2 = document.querySelector('#txt2');
    const res = document.querySelector('.res');

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    //Caso não for digitado nada nos inputs
    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert("[ERRO] Digite um valor.");
    }else{
            switch(seletor){
            case '#':
                res.innerHTML = "Escolha uma opção válida.";
                break;
            case '+':
                res.innerHTML = `O resultado é <strong>${n1 + n2}</strong>.`;
                break;
            case '-':
                res.innerHTML = `O resultado é <strong>${n1 - n2}</strong>.`;
                break;
            case '/':
                calculo = (n1/n2);
                //Caso o resultado for Not A Number
                if(Number.isNaN(calculo)){
                    window.alert("[ERRO] Digite um divisível válido.");
                    res.innerHTML = '';
                //Caso o resultado der Infinity
                }else if(calculo=='Infinity'){
                    res.innerHTML = `O resultado é <strong>${n1}</strong>`;
                }else{
                    res.innerHTML = `O resultado é <strong>${calculo}</strong>`;
                }
                break;
            case '*':
                res.innerHTML = `O resultado é <strong>${n1 * n2}</strong>.` ;
                break;
        }
    }
    

}