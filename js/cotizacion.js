let btnQuote = document.getElementById("btnCotizar"); 
let btnPrint = document.getElementById("btnImplimir"); 

btnQuote.addEventListener("click", function (e){    
    e.preventDefault();
    let horas = parseInt(document.getElementById("inputHoras").value);       
    let iva = document.getElementById("checkIVA").checked;    
    let email = document.getElementById("inputEmail").value;
    let nombre = document.getElementById("inputName").value;
    let cardText = document.getElementById("cardText");   
    let cardCost = document.getElementById("cardCost");
    let flag = false;
    
   
    if (isNaN(horas)) { 
        document.getElementById("inputHoras").style.borderColor = "#FF0000"   
        flag = false;
      }else{
        let horas = parseInt(document.getElementById("inputHoras").value);  
        document.getElementById("inputHoras").style.borderColor = "green"
        flag = true;
    }

  if(flag){  
    cardText.innerHTML = `Name: ${nombre}<br/>Email: ${email},</br>
      Tu pedido :<br/> ${getRequirements(extras)}`;
    cardCost.innerHTML = "<strong> $" + calcular(horas, trabajo, iva).toFixed(2) + "<strong>";       
}  
});

btnPrint.addEventListener("click", function (e){    
    e.preventDefault;  
    window.print();  
});

const getRequirements = (ex) => {   
  let str = `<br/><ul class="list-group col-4">`;    
  for (let i=0; i<ex.options.length; i++) {
    console.log(ex.options[i].selected);
    if (ex.options[i].selected) {
      str += `<li class="list-group-item list-group-item-secondary"> ${ex.options[i].text}`; 
                                                                                    
    }
  }
  str += `</ul>`;   
  return str;
};

function calcular(h,r,vat){
    let horas = h*5
    for (let i=0; i< ex.options.length; i++) {
      console.log(ex.options[i].selected);
      if (ex.options[i].selected) {
        result += parseFloat(ex.options[i].value);
      }
    }
    result = result* horas;
    if (vat) {
        result *= 1.16;
    }
    return result;
}