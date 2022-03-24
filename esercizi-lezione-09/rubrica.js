function salvaContatto(form, risultato){
    let clientHttp = new HttpClient();
    if (form.elements["id"] === null || form.elements["id"] === undefined){
        clientHttp.post('https://ifts.adriasonline.com/contatti', formToJson(form))
        .then((result) => {
          risultato.innerHTML = "Contatto creato correttamente!";
          risultato.className = "alert alert-success";
          form.reset();
        })
        .catch((error) => stampaMessaggio(error, risultato));
    } else {
        clientHttp.put('https://ifts.adriasonline.com/contatti/' + form.elements["id"].value, formToJson(form))
        .then((result) => {
          risultato.innerHTML = "Contatto modificato correttamente!";
          risultato.className = "alert alert-success";
        })
        .catch((error) => stampaMessaggio(error, risultato));
    }

}

function caricaContatto(id, risultato){
    let client = new HttpClient();
    client.get('https://ifts.adriasonline.com/contatti/' + id)
        .then((result) => {
            for(let attr in result){
                document.getElementById(attr).value = result[attr];
            }
        })
        .catch((error) => stampaMessaggio(error, risultato));
}

function caricaContatti(risultato){
    let client = new HttpClient();
    document.getElementById("spinner").className = "spinner-border";
    client.get('https://ifts.adriasonline.com/contatti')
        .then((result) => stampaContatti(result, risultato))
        .catch((error) => stampaMessaggio(error, risultato))
        .finally(() => document.getElementById("spinner").className = "d-none");
}

function stampaContatti(contatti, risultato) {
    var rubrica = document.getElementById("contatti");
    rubrica.innerHTML = "<div class='row text-light bg-dark'><div class='col h4'>Nome</div><div class='col h4'>Cognome</div><div class='col h4'>Email</div><div class='col h4'>Numero di telefono</div><div class='col h4'>Azioni</div></div>";
    for (var i = 0; i < contatti.length; i++) {
      var contatto = contatti[i];
      var divRow = document.createElement("div");
      if (i % 2 == 0) {
        divRow.className = "row text-light bg-secondary";
      } else {
        divRow.className = "row bg-light";
      }
      var email = "--";
      if (contatto.email !== null){
        email = contatto.email;
      }
      var numeroTel = "--";
      if (contatto.numeroDiTelefono !== null){
        numeroTel = contatto.numeroDiTelefono;
      }
      divRow.innerHTML = "<div class='col-md border'>" + contatto.nome + "</div>" 
      + "<div class='col-md border'>" + contatto.cognome + "</div>" 
      + "<div class='col-md border'>" + email + "</div>" 
      + "<div class='col-md border'>" + numeroTel + "</div>";
      var divButton = document.createElement("div");
      divButton.className = "col-md border";
      var deleteIcon = document.createElement("button");
      deleteIcon.className = "btn btn-danger";
      deleteIcon["data-id"] = contatto.id;
      deleteIcon.onclick = function(e){
        e.preventDefault();
        let client = new HttpClient();
        client.delete("https://ifts.adriasonline.com/contatti/"+ this["data-id"])
            .then((result) => caricaContatti(risultato))
            .catch((error) => stampaMessaggio(error, risultato));
      }
      deleteIcon.innerHTML = "Elimina";
      var editLink = document.createElement("a");
      editLink.href = "modifica-contatto.html?id=" + contatto.id;
      editLink.className = "btn btn-warning";
      editLink.innerHTML = "Modifica";
      divButton.append(editLink);
      divButton.append(deleteIcon);
      divRow.append(divButton);
      rubrica.append(divRow);
    }
  }

function stampaMessaggio(error, risultato){
    risultato.innerHTML = "Si è verificato un errore: " + error.message;
    risultato.className = "alert alert-danger";
}

function formToJson(form){
    var formData = new FormData(form);
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });

    var json = JSON.stringify(object);
    return json;
}