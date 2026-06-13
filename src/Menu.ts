import * as readline from 'readline';
import { crearIncidente, listarIncidentes, actualizarEstado, buscarPorId } from './LogicaIncidentes';
import { reporte, grado, estado } from './interfaces';

function crearRL() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

function mostrarMenu(): void {
    console.log(`
   SISTEMA DE INCIDENTES TÉCNICOS C27
1. Registrar nuevo incidente
2. Listar todos los incidentes
3. Actualizar estado de incidente
4. Buscar incidente por ID
5. Salir
`);

    const rl = crearRL();

    rl.question('Seleccione una opción del 1 al 5): ', (opcion) => {
        rl.close();

        switch (opcion.trim()) {

            case '1': {
                const rl1 = crearRL();
                rl1.question('Ingrese el titulo: ', (titulo) => {
                    rl1.question('Ingrese la descripción: ', (descripcion) => {
                        rl1.question('Persona que reporta: ', (persona) => {
                            rl1.question('Prioridad (BAJO / MEDIO / ALTO): ', (p) => {
                                const prioridad = p.trim().toUpperCase() as grado;

                                if (!['BAJO', 'MEDIO', 'ALTO'].includes(prioridad)) {
                                    console.log('\nPrioridad inválida. Debe ser BAJO, MEDIO o ALTO.');
                                } else {
                                    crearIncidente(titulo, descripcion, persona, prioridad);
                                }
                                rl1.close();
                                mostrarMenu();
                            });
                        });
                    });
                });
                break;
            }

            case '2':
                listarIncidentes();
                mostrarMenu();
                break;

            case '3': {
                const rl3 = crearRL();
                rl3.question('ID del incidente a actualizar: ', (inputId) => {
                    rl3.question('Nuevo estado (ABIERTO / EN PROGRESO / RESUELTO): ', (e) => {
                        const id = parseInt(inputId);
                        const nuevoEstado = e.trim().toUpperCase() as estado;

                        if (isNaN(id)) {
                            console.log('\nID inválido.');
                        } else if (!['ABIERTO', 'EN PROGRESO', 'RESUELTO'].includes(nuevoEstado)) {
                            console.log('\nEstado inválido. Debe ser ABIERTO, EN PROGRESO o RESUELTO.');
                        } else {
                            actualizarEstado(id, nuevoEstado);
                        }
                        rl3.close();
                        mostrarMenu();
                    });
                });
                break;
            }

            case '4': {
                const rl4 = crearRL();
                rl4.question('Ingrese el id del incidente: ', (inputId) => {
                    const id = parseInt(inputId);

                    if (isNaN(id)) {
                        console.log('\nID inválido.');
                    } else {
                        buscarPorId(id);
                    }
                    rl4.close();
                    mostrarMenu();
                });
                break;
            }

            case '5':
                console.log('\n Cerrando..\n');
                process.exit(0);

            default:
                console.log('\nOpción no válida. Intente de nuevo.');
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();