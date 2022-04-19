function salvaUser(form, risultato){
    let clientHttp = new HttpClient();
    if (form.elements["id"] === null || form.elements["id"] === undefined){
        clientHttp.post('https://ifts.adriasonline.com/users', formToJson(form))
        .then((result) => {
          risultato.innerHTML = "User creato correttamente!";
          risultato.className = "alert alert-success";
          form.reset();
        })
        .catch((error) => stampaMessaggio(error, risultato));
    } else {
        clientHttp.put('https://ifts.adriasonline.com/users/' + form.elements["id"].value, formToJson(form))
        .then((result) => {
          risultato.innerHTML = "User modificato correttamente!";
          risultato.className = "alert alert-success";
        })
        .catch((error) => stampaMessaggio(error, risultato));
    }

}

function cambiaPassword(form, risultato){
  let clientHttp = new HttpClient();
  clientHttp.put('https://ifts.adriasonline.com/users/' + form.elements["id"].value + "/change-password", formToJson(form))
  .then((result) => {
    risultato.innerHTML = "Password modificata correttamente!";
    risultato.className = "alert alert-success";
  })
  .catch((error) => stampaMessaggio(error, risultato));
}

function caricaUser(id, risultato){
    let client = new HttpClient();
    client.get('https://ifts.adriasonline.com/users/' + id)
        .then((result) => {
            for(let attr in result){
                if (document.getElementById(attr) !== null){
                  document.getElementById(attr).value = result[attr];
                }
            }
        })
        .catch((error) => stampaMessaggio(error, risultato));
}

function caricaUsers(risultato){
    let client = new HttpClient();
    document.getElementById("spinner").className = "spinner-border";
    client.get('https://ifts.adriasonline.com/users')
        .then((result) => stampaUsers(result, risultato))
        .catch((error) => stampaMessaggio(error, risultato))
        .finally(() => document.getElementById("spinner").className = "d-none");
}

function stampaUsers(users, risultato) {
    var utenti = document.getElementById("utenti");
    utenti.innerHTML = "<div class='row text-light bg-dark'><div class='col h4'>Id</div><div class='col h4'>Name</div><div class='col h4'>Email</div><div class='col h4'>Azioni</div></div>";
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      var divRow = document.createElement("div");
      if (i % 2 == 0) {
        divRow.className = "row text-light bg-secondary";
      } else {
        divRow.className = "row bg-light";
      }
      var email = "--";
      if (user.email !== null){
        email = user.email;
      }
      divRow.innerHTML = "<div class='col-md border'>" + user.id + "</div>" 
      + "<div class='col-md border'>" + user.name + "</div>" 
      + "<div class='col-md border'>" + email + "</div>";
      var divButton = document.createElement("div");
      divButton.className = "col-md border";
      var deleteIcon = document.createElement("button");
      deleteIcon.className = "btn btn-danger";
      deleteIcon["data-id"] = user.id;
      deleteIcon.onclick = function(e){
        e.preventDefault();
        let client = new HttpClient();
        client.delete("https://ifts.adriasonline.com/users/"+ this["data-id"])
            .then((result) => caricaUsers(risultato))
            .catch((error) => stampaMessaggio(error, risultato));
      }
      deleteIcon.innerHTML = "Elimina";
      var editLink = document.createElement("a");
      editLink.href = "modifica-user.html?id=" + user.id;
      editLink.className = "btn btn-warning";
      editLink.innerHTML = "Modifica";
      divButton.append(editLink);

      var editPasswordLink = document.createElement("a");
      editPasswordLink.href = "change-password.html?id=" + user.id;
      editPasswordLink.className = "btn btn-primary";
      editPasswordLink.innerHTML = "Cambia Passowrd";
      divButton.append(editPasswordLink);

      divButton.append(deleteIcon);
      divRow.append(divButton);
      utenti.append(divRow);
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