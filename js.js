let listToDoList=[]

let agregar=() =>{
  var inputValue  = document.getElementById("myInput").value;
  inputValue      = inputValue.trim();
  if (inputValue === '') {
    alert("¡Tenés que escribir algo!");
  } else{
    const objeto      = new Object();
    let parent        = document.createElement("div");
    let checkBox      = document.createElement("input");
    checkBox.type     = "checkbox";
    let text          = document.createElement("span");
    text.innerText    = inputValue;
    document.getElementById("bigParent").appendChild(parent);

    objeto.checkBox   = parent.appendChild(checkBox);
    objeto.texto      = parent.appendChild(text);
    objeto.agregado   = new Date();

    listToDoList.push(objeto);
    checkBox.setAttribute("onClick", "tachar("+ (listToDoList.length -1) + ")");
    document.getElementById("myInput").value = "";
  }
}

let tachar =(posicion) =>{
  if(listToDoList[posicion].checkBox.checked){
    /*lo mismo que listToDoList[posicion].texto.setAttribute("class", "tachado");*/
    listToDoList[posicion].texto.classList.add("tachado");
    listToDoList[posicion].tachado   = new Date();
  }else{
    /*lo mismo que listToDoList[posicion].texto.removeAttribute("class");*/
    listToDoList[posicion].texto.classList.remove("tachado");
    delete listToDoList[posicion].tachado;
  }
}

let masRapida =() =>{
  let nombreMasrapido;
  let tiempoMasRapido=999999999999999999999999;
  for (let i = 0; i < listToDoList.length; i++) {
    if(listToDoList[i].texto.classList.contains('tachado')){
      let tiempoTerminado = listToDoList[i].tachado - listToDoList[i].agregado;
      if(tiempoTerminado < tiempoMasRapido){
        tiempoMasRapido = tiempoTerminado;
        nombreMasrapido = listToDoList[i].texto.innerText;
      }
    }
  }
  document.getElementById("fastest").innerText = nombreMasrapido;
}