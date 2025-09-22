// A.U.R.O.R.A. Mission 1 - Advanced IDE JavaScript

class AuroraIDE {
    constructor() {
        this.currentModule = null;
        this.completedModules = new Set();
        this.currentTutorialStep = 1;
        this.audioContext = null;
        this.timerInterval = null;
        this.startTime = 0;
        this.feedbackTimeout = null;
        this.finalTime = "00:00";
        
        // Tutorial data
        this.tutorialSteps = [
            {
                step: 1,
                title: "Bienvenido/a, Ingeniero/a Senior",
                description: "La corrupción ha alcanzado el núcleo lógico de A.U.R.O.R.A. Tu misión es auditar 6 módulos en busca de errores sutiles de lógica, estado y sintaxis.",
                icon: "👨‍💻"
            },
            {
                step: 2,
                title: "Explorador de Archivos Avanzado",
                description: "Tu acceso ha sido ampliado. Navega por la estructura de archivos del sistema para seleccionar un módulo.",
                icon: "📁"
            },
            {
                step: 3,
                title: "Entorno de Desarrollo Profesional",
                description: "Este es tu entorno de desarrollo. Nota el resaltado de sintaxis avanzado y la capacidad de navegación mejorada.",
                icon: "💻"
            },
            {
                step: 4,
                title: "¡ALERTA DE CÓDIGO COMENTADO!",
                description: "¡CUIDADO! Un simple '//' puede desactivar una línea de código vital. Si ves un comando importante en gris, podría ser un error. Bórralo para reactivarlo.",
                icon: "⚠️"
            },
            {
                step: 5,
                title: "Documentación Avanzada",
                description: "Tu documentación ahora incluye detalles sobre operadores lógicos y sintaxis básica. Úsala como tu guía principal.",
                icon: "📚"
            },
            {
                step: 6,
                title: "Interfaz Responsiva",
                description: "En dispositivos móviles, la documentación y la consola se ubicarán en la parte inferior para optimizar el espacio.",
                icon: "📱"
            },
            {
                step: 7,
                title: "Iniciar Auditoría",
                description: "¡Todo listo! Comienza tu auditoría de código profesional.",
                icon: "🚀"
            }
        ];

        // Module data - REESCRITO CON CÓDIGO MÁS LARGO Y DIFÍCIL
        this.modules = {
             energia: {
                id: "energia",
                name: "Modulo_GestionDeEnergia.js",
                icon: "⚡",
                corruptCode: `// Protocolo de distribución de energía v4.2
function gestionarCicloEnergia(datosSensor, modoOperacion) {
  // Constantes de operación
  const CAPACIDAD_MAXIMA = 5000;
  const NIVEL_CRITICO = 1000;
  const UMBRAL_PANELES = 2500;
  const CONSUMO_BASE = 50;

  let consumoActual = datosSensor.consumo + CONSUMO_BASE;
  let nivelBateria = datosSensor.bateria;
  let estadoSistema = "Estable";
  let solarPanelStatus = "Inactivo";

  function logPowerState(estado, nivel) {
    let logMsg = "Estado: " + estado + " // Nivel Batería: " + nivel;
    console.log(logMsg)
  }

  // Activa paneles si es necesario y si no están ya activos
  if (nivelBateria <= UMBRAL_PANELES && solarPanelStatus = "Inactivo") {
    console.log("Activando paneles solares por bajo nivel.");
    // activarPanelesSolares();
    solarPanelStatus = "Activo";
  }

  // Lógica de balanceo de carga según el modo
  if (modoOperacion == "Combate") {
    consumoActual *= 2.5; // El modo combate consume mucho más
  } else if (modoOperacion == "Sigilo") {
    // balancearCargaSigilo();
  }

  // Lógica de distribución principal
  if (consumoActual > nivelBateria); {
    estadoSistema = "Déficit Energético";
    // Redireccionar energía de sistemas no críticos
    redigirEnergia(consumoActual, nivelBateria);
  } else if (nivelBateria >= CAPACIDAD_MAXIMA) {
    console.log("Batería llena, desactivando carga.");
    if (solarPanelStatus == "Activo") {
      desactivarPanelesSolares()
    }
  }

  logPowerState(estadoSistema, nivelBateria);
  return estadoSistema
}`,
                correctCode: `// Protocolo de distribución de energía v4.2
function gestionarCicloEnergia(datosSensor, modoOperacion) {
  // Constantes de operación
  const CAPACIDAD_MAXIMA = 5000;
  const NIVEL_CRITICO = 1000;
  const UMBRAL_PANELES = 2500;
  const CONSUMO_BASE = 50;

  let consumoActual = datosSensor.consumo + CONSUMO_BASE;
  let nivelBateria = datosSensor.bateria;
  let estadoSistema = "Estable";
  let solarPanelStatus = "Inactivo";

  function logPowerState(estado, nivel) {
    let logMsg = "Estado: " + estado + " // Nivel Batería: " + nivel;
    console.log(logMsg);
  }

  // Activa paneles si es necesario y si no están ya activos
  if (nivelBateria <= UMBRAL_PANELES && solarPanelStatus == "Inactivo") {
    console.log("Activando paneles solares por bajo nivel.");
    activarPanelesSolares();
    solarPanelStatus = "Activo";
  }

  // Lógica de balanceo de carga según el modo
  if (modoOperacion == "Combate") {
    consumoActual *= 2.5; // El modo combate consume mucho más
  } else if (modoOperacion == "Sigilo") {
    balancearCargaSigilo();
  }

  // Lógica de distribución principal
  if (consumoActual > nivelBateria) {
    estadoSistema = "Déficit Energético";
    // Redireccionar energía de sistemas no críticos
    redigirEnergia(consumoActual, nivelBateria);
  } else if (nivelBateria >= CAPACIDAD_MAXIMA) {
    console.log("Batería llena, desactivando carga.");
    if (solarPanelStatus == "Activo") {
      desactivarPanelesSolares();
    }
  }

  logPowerState(estadoSistema, nivelBateria);
  return estadoSistema;
}`,
            },
            navegacion: {
                id: "navegacion",
                name: "Modulo_NavegacionAvanzada.js",
                icon: "🗺️",
                corruptCode: `// Sistema de Navegación Inercial Asistida v2.3
function calcularVectorDeRuta(coordenadas, threatLevel) {
  let velocidadCrucero = 1500;
  let navigationStatus = "Calculando...";
  const VELOCIDAD_WARP = 9500;

  // Función anidada para calcular consumo de combustible
  function estimarConsumo(distancia, velocidad) {
    let factor = velocidad > 2000 ? 1.5 : 1.1;
    let consumoEstimado = (distancia / velocidad) * factor
    // return consumoEstimado;
  }
  
  function plotEvasiveManeuver(threat) {
    console.log("Amenaza de nivel " + threat + " detectada. Maniobra evasiva...")
    // return "Ruta evasiva trazada";
  }

  // Ajuste de velocidad para rutas largas o peligrosas
  if (coordenadas.distanciaTotal > 100000 || threatLevel > 75%) {
    navigationStatus = "Ruta Larga/Peligrosa";
    velocidadCrucero = VELOCIDAD_WARP;
  }

  let tiempoEstimado = coordenadas.distanciaTotal / velocidadCrucero;
  let consumoFinal = estimarConsumo(coordenadas.distanciaTotal, velocidadCrucero);
  let maniobra = null

  if (coordenadas.hayObstaculos == true) {
    console.log("¡ALERTA! recalculando por obstáculos.";
    maniobra = plotEvasiveManeuver(threatLevel)
  }
  
  if (navigationStatus = "Calculando...") {
    navigationStatus = "Ruta Estándar Calculada";
  }

  console.log("Cálculo de vector finalizado."
  return {
    velocidad: velocidadCrucero,
    tiempo: tiempoEstimado
    consumo: consumoFinal,
    maniobra: maniobra,
    estado: navigationStatus
  };
}`,
                correctCode: `// Sistema de Navegación Inercial Asistida v2.3
function calcularVectorDeRuta(coordenadas, threatLevel) {
  let velocidadCrucero = 1500;
  let navigationStatus = "Calculando...";
  const VELOCIDAD_WARP = 9500;

  // Función anidada para calcular consumo de combustible
  function estimarConsumo(distancia, velocidad) {
    let factor = velocidad > 2000 ? 1.5 : 1.1;
    let consumoEstimado = (distancia / velocidad) * factor;
    return consumoEstimado;
  }
  
  function plotEvasiveManeuver(threat) {
    console.log("Amenaza de nivel " + threat + " detectada. Maniobra evasiva...");
    return "Ruta evasiva trazada";
  }

  // Ajuste de velocidad para rutas largas o peligrosas
  if (coordenadas.distanciaTotal > 100000 || threatLevel > 75) {
    navigationStatus = "Ruta Larga/Peligrosa";
    velocidadCrucero = VELOCIDAD_WARP;
  }

  let tiempoEstimado = coordenadas.distanciaTotal / velocidadCrucero;
  let consumoFinal = estimarConsumo(coordenadas.distanci
