function agregarElemento() {
    const input = document.getElementById("input").value;
    const lista = document.getElementById("lista");
    
    //pasos para crear elementos y asignar un valor de texto
    const elementoLista = document.createElement('li'); // primer para creo el elemento
    elementoLista.textContent = input; //segundo paso asigno el valor
    lista.appendChild(elementoLista); //appendChild 

    const button = document.createElement("button");
    button.textContent = 'borrar';
    elementoLista.appendChild(button);

    button.onclick = function(){
        lista.removeChild(elementoLista);
    }
}

