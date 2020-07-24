// var (globales) o let (locales) o const
var btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(cdascas, cdcascad){
	let nombre = document.getElementById("txtNombre");
	let apellidos = document.getElementById("txtApellidos");
	let fechaNacimiento = document.getElementById("txtFecha");

	if(nombre.value !== "" && apellidos.value !== "" && fechaNacimiento.value !== ""){
		let mensaje = "Mi nombre es " + nombre.value + " " + apellidos.value;
		mensaje += ". Nací el " + fechaNacimiento.value;
		console.log(mensaje);
	} else {
		console.log("Debes llenar los campos");
	}

	for (let i = 0; i < 20; i++){
		console.log("Valor actual " + i);
	}
});