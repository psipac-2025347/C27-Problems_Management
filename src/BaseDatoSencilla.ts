import { reporte} from './interfaces';

let idContador = 3; 

export function generarId(): number {
    return ++idContador;
}

export const incidentes: reporte[] = [
    {
        id: 1,
        titulo: "Cable roto",
        descripcion: "Cable de red roto en la computadora 22",
        persona: "Mynor Sandoval",
        prioridad: "ALTO",
        estado: "ABIERTO",
        fechaReporte: new Date()
    },
    {
        id: 2,
        titulo: "Silla rota",
        descripcion: "La silla está rota de la computadora 15",
        persona: "Joaquin Martinez",
        prioridad: "ALTO",
        estado: "EN PROGRESO",
        fechaReporte: new Date()
    },
    {
        id: 3,
        titulo: "Software no responde",
        descripcion: "El software de contabilidad se congela al abrirlo",
        persona: "Carlos López",
        prioridad: "ALTO",
        estado: "RESUELTO",
        fechaReporte: new Date()
    }
];
