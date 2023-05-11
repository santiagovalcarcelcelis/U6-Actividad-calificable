// function mostrarPacientes() {
//     let pacientes = []
//     let localPacientes = localStorage.getItem("pacientes")
//     if(localPacientes){
//         pacientes = JSON.parse(localPacientes)
//     }
//     const tablaPacientes = document.getElementById("tabla-pacientes")
//     const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
//     pacientes.forEach(paciente => {
//         let fila = cuerpoTabla.insertRow()
//         let celdaNombrePaciente = fila.insertCell()
//         let celdaApellido = fila.insertCell()
//         let celdaNumeroCedula = fila.insertCell()
//         let celdaEdad = fila.insertCell()
//         let celdaCorreo = fila.insertCell()
//         let celdaEspecialidad = fila.insertCell()

//         celdaNombrePaciente.textContent = paciente.nombre
//         celdaApellido.textContent = paciente.apellido
//         celdaNumeroCedula.textContent = paciente.cedula
//         celdaEdad.textContent = paciente.edad
//         celdaCorreo.textContent = paciente.correo
//         celdaEspecialidad.textContent = paciente.especialidad
//         console.log("llskjjdjdj");
//     });
// }

// mostrarPacientes()

function mostrarMedicos() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePaciente = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()

        celdaNombrePaciente.textContent = paciente.nombre
        celdaApellido.textContent = paciente.apellido
        celdaNumeroCedula.textContent = paciente.cedula
        celdaEdad.textContent = paciente.edad
        celdaEspecialidad.textContent = paciente.especialidad
        console.log("llskjjdjdj");
    });
}

mostrarMedicos()