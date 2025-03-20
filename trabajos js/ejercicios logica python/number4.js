const citas = {
    '12345': { nombre: 'Juan Pérez', dia: 'Lunes', hora: '10:00 AM', fecha: '2025-03-20' },
    '67890': { nombre: 'Ana Gómez', dia: 'Martes', hora: '2:00 PM', fecha: '2025-03-21' },
    '11223': { nombre: 'Carlos López', dia: 'Miércoles', hora: '9:00 AM', fecha: '2025-03-22' }
  };
  
  function consultarCita() {
    const documento = prompt('Ingrese su número de documento:');
  
    if (citas[documento]) {
      const cita = citas[documento];
      alert(`Hola ${cita.nombre}, su cita es el ${cita.dia} ${cita.fecha} a las ${cita.hora}.`);
  
      const respuesta = prompt('¿Desea cambiar el día o la fecha de su cita? (sí/no)');
      
      if (respuesta.toLowerCase() === 'sí') {
        const nuevoDia = prompt('Ingrese el nuevo día de la cita (por ejemplo, Lunes):');
        const nuevaFecha = prompt('Ingrese la nueva fecha de la cita (por ejemplo, 2025-03-20):');
        const nuevaHora = prompt('Ingrese la nueva hora de la cita (por ejemplo, 10:00 AM):');
        
        citas[documento].dia = nuevoDia;
        citas[documento].fecha = nuevaFecha;
        citas[documento].hora = nuevaHora;
  
        alert('¡Cambio realizado exitosamente! Su nueva cita es:');
        alert(`Nuevo día: ${nuevoDia}, Nueva fecha: ${nuevaFecha}, Nueva hora: ${nuevaHora}`);
      } else {
        alert('No se realizó ningún cambio en su cita.');
      }
    } else {
      alert('No se encontró una cita con ese documento.');
    }
  }
  
  consultarCita();
  