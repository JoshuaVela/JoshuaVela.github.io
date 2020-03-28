let name;
let mail;
let contra;
let area = document.querySelector("#contenedor")
let JSONN = {};
let obejetojson;
let boton = document.querySelector("#convertirajson");


boton.addEventListener("click", (e) => {
    name = document.querySelector("#nombre").value;
    mail = document.querySelector("#correo").value;
    contra = document.querySelector("#contraseña").value;
    console.log(name);
    JSONN = { name: name, mail: mail, password: contra };
    obejetojson = JSON.stringify(JSONN);
    area.textContent = obejetojson;

});

document.querySelector("#jsonastring").addEventListener("click", (e) => {
    JSONN = JSON.parse(area.value);
    document.querySelector("#nombre").value = JSONN.name;
    document.querySelector("#correo").value = JSONN.mail;
    document.querySelector("#contraseña").value = JSONN.password;
});