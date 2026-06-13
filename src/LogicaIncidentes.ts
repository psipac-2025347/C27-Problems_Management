import { reporte, grado, estado } from './interfaces';
import { incidentes, generarId } from './BaseDatoSencilla';  // ← cambia aquí

export function crearIncidente(
    titulo: string,
    descripcion: string,
    persona: string,
    prioridad: grado
): void {
    const nuevo: reporte = {
        id: generarId(), 
        titulo,
        descripcion,
        persona,
        prioridad,
        estado: "ABIERTO",
        fechaReporte: new Date()
    };
    incidentes.push(nuevo);
    console.log(`\nIncidente creado correctamente`);
}


export function listarIncidentes(): void {
    if (incidentes.length === 0) {
        console.log('\nNo hay incidentes puestos.');
        return;
    }
    console.log('\n INCIDENTES ');
    incidentes.forEach((inc) => {
        console.log(`
ID:  ${inc.id}
Título: ${inc.titulo}
Descripción: ${inc.descripcion}
Persona: ${inc.persona}
Prioridad: ${inc.prioridad}
Estado: ${inc.estado}
Fecha: ${inc.fechaReporte.toLocaleDateString()}
`);
    });
}


export function actualizarEstado(id: number, nuevoEstado: estado): void {
    const incidente = incidentes.find(inc => inc.id === id);
    if (!incidente) {
        console.log(`\nNo se encuentra el incidente con ID ${id}.`);
        return;
    }
    incidente.estado = nuevoEstado;
    console.log(`\nEstado del incidente #${id} actualizado a: "${nuevoEstado}".`);
}


export function buscarPorId(id: number): void {
    const incidente = incidentes.find(inc => inc.id === id);
    if (!incidente) {
        console.log(`\nNo se encuentra el incidente con ID ${id}.`);
        return;
    }
    console.log(`
INCIDENTE #${incidente.id}
Título: ${incidente.titulo}
Descripción: ${incidente.descripcion}
Persona: ${incidente.persona}
Prioridad: ${incidente.prioridad}
Estado: ${incidente.estado}
Fecha: ${incidente.fechaReporte.toLocaleDateString()}`);
}
