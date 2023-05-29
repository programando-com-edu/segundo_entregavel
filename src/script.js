function showFibonacciSequence() {
    let position = document.getElementById('position').value;
    let primeiro_termo = 0;
    let segundo_termo = 1;
    let variavel_auxiliar, termos;
  
    termos = parseInt(position);
  
    let sequencia = [primeiro_termo, segundo_termo];
  
    for (let i = 2; i < termos; i++) {
      variavel_auxiliar = primeiro_termo + segundo_termo;
      sequencia.push(variavel_auxiliar);
      primeiro_termo = segundo_termo;
      segundo_termo = variavel_auxiliar;
    }
  
    let sequenceElement = document.getElementById('fibonacci-sequence');
    sequenceElement.innerHTML = `A sequência de Fibonacci é: <br>${sequencia.join(', ')}`;
  }
  s