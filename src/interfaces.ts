type grado = "BAJO"|"MEDIO"|"ALTO";

type estado = "ABIERTO"|"EN PROGRESO"|"RESUELTO";

export interface reporte{
    readonly id : number;
    titulo: string;
    descripcion: string;
    persona: string;
    prioridad: grado;
    estado: estado;
}
