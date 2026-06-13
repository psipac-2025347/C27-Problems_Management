"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const LogicaIncidentes_1 = require("./LogicaIncidentes");
function crearRL() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}
function mostrarMenu() {
    console.log(`
========================================
   SISTEMA DE INCIDENTES TÉCNICOS C27
========================================
1. Registrar nuevo incidente
2. Listar todos los incidentes
3. Actualizar estado de incidente
4. Buscar incidente por ID
5. Salir
----------------------------------------`);
    const rl = crearRL();
    rl.question('Seleccione una opción (1-5): ', (opcion) => {
        rl.close();
        switch (opcion.trim()) {
            case '1': {
                const rl1 = crearRL();
                rl1.question('Título del incidente: ', (titulo) => {
                    rl1.question('Descripción del problema: ', (descripcion) => {
                        rl1.question('Persona que reporta: ', (persona) => {
                            rl1.question('Prioridad (BAJO / MEDIO / ALTO): ', (p) => {
                                const prioridad = p.trim().toUpperCase();
                                if (!['BAJO', 'MEDIO', 'ALTO'].includes(prioridad)) {
                                    console.log('\nPrioridad inválida. Debe ser BAJO, MEDIO o ALTO.');
                                }
                                else {
                                    (0, LogicaIncidentes_1.crearIncidente)(titulo, descripcion, persona, prioridad);
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
                (0, LogicaIncidentes_1.listarIncidentes)();
                mostrarMenu();
                break;
            case '3': {
                const rl3 = crearRL();
                rl3.question('ID del incidente a actualizar: ', (inputId) => {
                    rl3.question('Nuevo estado (ABIERTO / EN PROGRESO / RESUELTO): ', (e) => {
                        const id = parseInt(inputId);
                        const nuevoEstado = e.trim().toUpperCase();
                        if (isNaN(id)) {
                            console.log('\nID inválido.');
                        }
                        else if (!['ABIERTO', 'EN PROGRESO', 'RESUELTO'].includes(nuevoEstado)) {
                            console.log('\nEstado inválido. Debe ser ABIERTO, EN PROGRESO o RESUELTO.');
                        }
                        else {
                            (0, LogicaIncidentes_1.actualizarEstado)(id, nuevoEstado);
                        }
                        rl3.close();
                        mostrarMenu();
                    });
                });
                break;
            }
            case '4': {
                const rl4 = crearRL();
                rl4.question('ID del incidente a buscar: ', (inputId) => {
                    const id = parseInt(inputId);
                    if (isNaN(id)) {
                        console.log('\nID inválido.');
                    }
                    else {
                        (0, LogicaIncidentes_1.buscarPorId)(id);
                    }
                    rl4.close();
                    mostrarMenu();
                });
                break;
            }
            case '5':
                console.log('\nSaliendo del sistema. ¡Hasta luego!\n');
                process.exit(0);
            default:
                console.log('\nOpción no válida. Intente de nuevo.');
                mostrarMenu();
                break;
        }
    });
}
mostrarMenu();
//# sourceMappingURL=Menu.js.map