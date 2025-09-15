// A.U.R.O.R.A. Mission 1: Advanced Systems Analysis
// Game state and modules data
const gameState = {
    currentModule: null,
    completedModules: new Set(),
    tutorialStep: 1,
    tutorialActive: true,
    timerInterval: null,
    startTime: null
};

// Module data with correct and corrupted code
const modules = {
    energia: {
        id: "energia",
        name: "Modulo_GestionDeEnergia.js",
        icon: "⚡️",
        corruptCode: `// Protocolo de distribución de energía V2.1
// Estado: CRÍTICO - Requiere inspección inmediata.

const CAPACIDAD_MAXIMA = 5000; // Capacidad en kWh

function revisarCeldas() {
  // Niveles de energía de las 5 celdas principales.
  let niveles = [98, 85 76, 91, 60];
  let celdasCriticas = [];
  let energiaTotal = 0;

  console.log("INICIANDO VERIFICACIÓN DE CELDAS...");

  for (let i = 0; i < niveles.length, i++) {
    let nivelActual = niveles[i]
    energiaTotal += (CAPACIDAD_MAXIMA / 5) * (nivelActual / 100);
    console.log("Celda " + i + ": " + nivelActual + "%");
    if (nivelActual < 70) {
      celdasCriticas.push(i);
      alertarBajoBateria(i);
    }
  }

  console.log("Verificación completa. Celdas críticas: " + celdasCriticas.length);
  return energiaTotal;
}`,
        correctCode: `// Protocolo de distribución de energía V2.1
// Estado: CRÍTICO - Requiere inspección inmediata.

const CAPACIDAD_MAXIMA = 5000; // Capacidad en kWh

function revisarCeldas() {
  // Niveles de energía de las 5 celdas principales.
  let niveles = [98, 85, 76, 91, 60];
  let celdasCriticas = [];
  let energiaTotal = 0;

  console.log("INICIANDO VERIFICACIÓN DE CELDAS...");

  for (let i = 0; i < niveles.length; i++) {
    let nivelActual = niveles[i];
    energiaTotal += (CAPACIDAD_MAXIMA / 5) * (nivelActual / 100);
    console.log("Celda " + i + ": " + nivelActual + "%");
    if (nivelActual < 70) {
      celdasCriticas.push(i);
      alertarBajoBateria(i);
    }
  }

  console.log("Verificación completa. Celdas críticas: " + celdasCriticas.length);
  return energiaTotal;
}`,
        errors: ["Falta coma entre 85 y 76 en el array", "Coma en lugar de punto y coma en el bucle for", "Falta punto y coma después de `niveles[i]`"]
    },
    herramientas: {
        id: "herramientas",
        name: "Modulo_Herramientas.js",
        icon: "🛠️",
        corruptCode: `// Protocolo de escaneo geológico de herramientas.
// Estado: CORRUPTO.

const HERRAMIENTA_ACTIVA = "Escaner de Densidad";

function escanearObjetivos() {
  // Lista de minerales de alta prioridad para recolección.
  let objetivos = ["Basalto", "Sedimentaria" "Pirita", "Cuarzo"];
  let objetivosEncontrados = 0;

  console.log("Iniciando escaneo con: " + HERRAMIENTA_ACTIVA...)

  if (objetivos.length > 0) {
    console.log("Objetivos en cola: " + objetivos.length);
    activarEscaner();
    
    for (let i = 0; i < objetivos.length; i++) {
        console.log("Escaneando: " + objetivos[i]);
        objetivosEncontrados++
    }
    
    console.log(objetivosEncontrados + " objetivos procesados.");
  
}`,
        correctCode: `// Protocolo de escaneo geológico de herramientas.
// Estado: CORRUPTO.

const HERRAMIENTA_ACTIVA = "Escaner de Densidad";

function escanearObjetivos() {
  // Lista de minerales de alta prioridad para recolección.
  let objetivos = ["Basalto", "Sedimentaria", "Pirita", "Cuarzo"];
  let objetivosEncontrados = 0;

  console.log("Iniciando escaneo con: " + HERRAMIENTA_ACTIVA...);

  if (objetivos.length > 0) {
    console.log("Objetivos en cola: " + objetivos.length);
    activarEscaner();
    
    for (let i = 0; i < objetivos.length; i++) {
        console.log("Escaneando: " + objetivos[i]);
        objetivosEncontrados++;
    }
    
    console.log(objetivosEncontrados + " objetivos procesados.");
  }
}`,
        errors: ["Falta coma entre strings en el array", "Comilla mal cerrada en console.log", "Falta punto y coma en `objetivosEncontrados++`", "Falta llave de cierre"]
    },
    navegacion: {
        id: "navegacion",
        name: "Modulo_NavegacionAvanzada.js",
        icon: "🗺️",
        corruptCode: `// Protocolo de seguimiento de ruta autónoma.
// Estado: INESTABLE.

// Coordenadas [x, y, z] de la ruta.
const PUNTOS_RUTA = [
  [10, 20, 5],
  [15, 25, 5],
  [30, 35, 8],
  [45, 50, 12]
];

let waypoint_actual = 0;

function seguirRuta() {
  console.log("Sistema de navegación activado.");
  
  if (waypoint_actual < PUNTOS_RUTA.length)
    console.log("Waypoint actual: " + waypointActual);
    console.log("Moviendo a: " + PUNTOS_RUTA[waypointActual]);
    moverA(PUNTOS_RUTA[waypointActual]);
  } else {
    console.log("Ruta completada.");
  }
}`,
        correctCode: `// Protocolo de seguimiento de ruta autónoma.
// Estado: INESTABLE.

// Coordenadas [x, y, z] de la ruta.
const PUNTOS_RUTA = [
  [10, 20, 5],
  [15, 25, 5],
  [30, 35, 8],
  [45, 50, 12]
];

let waypoint_actual = 0;

function seguirRuta() {
  console.log("Sistema de navegación activado.");
  
  if (waypoint_actual < PUNTOS_RUTA.length) {
    console.log("Waypoint actual: " + waypoint_actual);
    console.log("Moviendo a: " + PUNTOS_RUTA[waypoint_actual]);
    moverA(PUNTOS_RUTA[waypoint_actual]);
  } else {
    console.log("Ruta completada.");
  }
}`,
        errors: ["Falta llave de apertura en if", "Inconsistencia en nombre de variable (waypointActual vs waypoint_actual)", "Llave de cierre extra"]
    },
    comunicaciones: {
        id: "comunicaciones",
        name: "Modulo_Comunicaciones.js",
        icon: "🛰️",
        corruptCode: `// Protocolo de transmisión de paquetes de datos.
// Estado: SINCRONIZACIÓN PERDIDA.

const ID_MISION = "AURORA-01";
const FRECUENCIA = "2.4GHz";

function enviarPaqueteDeDatos() {
  // Recopilación de telemetría.
  let estado = "Operacional"
  let temperatura = 23;
  let humedad = 45;
  let presion = 1012; // en hPa
  
  // Ensamblaje del paquete de datos.
  let datos = [
    ID_MISION, 
    estado,
    temperatura,
    humedad,
    presion
  ]

  console.log("Paquete de datos ensamblado.");
  transmitirPaquete(datos, FRECUENCIA);
}`,
        correctCode: `// Protocolo de transmisión de paquetes de datos.
// Estado: SINCRONIZACIÓN PERDIDA.

const ID_MISION = "AURORA-01";
const FRECUENCIA = "2.4GHz";

function enviarPaqueteDeDatos() {
  // Recopilación de telemetría.
  let estado = "Operacional";
  let temperatura = 23;
  let humedad = 45;
  let presion = 1012; // en hPa
  
  // Ensamblaje del paquete de datos.
  let datos = [
    ID_MISION, 
    estado,
    temperatura,
    humedad,
    presion
  ];

  console.log("Paquete de datos ensamblado.");
  transmitirPaquete(datos, FRECUENCIA);
}`,
        errors: ["Falta punto y coma después de 'Operacional'", "Corchete de cierre del array mal colocado"]
    },
    diagnostico: {
        id: "diagnostico",
        name: "Modulo_Diagnostico.js",
        icon: "🩺",
        corruptCode: `// Protocolo de diagnóstico de integridad del sistema.
// Estado: ERRORES NO ESPECIFICADOS.

function ejecutarDiagnostico() {
  // Lista de sistemas críticos a verificar.
  let sistemas = [
    "Motores", 
    "Comunicaciones, 
    "Soporte Vital",
    "Herramientas"
  ];
  let erroresDetectados = false;
  
  console.log("INICIANDO DIAGNÓSTICO PROFUNDO...");

  for (let i = 0 i < sistemas.length; i++) {
    console.log("Verificando integridad de: " + sistemas[i]);
    let resultado = verificarSistema(sistemas[i]);
    if (!resultado) {
      erroresDetectados = true;
    }
  }
  
  console.log("Diagnóstico finalizado.");
  return !erroresDetectados;
}`,
        correctCode: `// Protocolo de diagnóstico de integridad del sistema.
// Estado: ERRORES NO ESPECIFICADOS.

function ejecutarDiagnostico() {
  // Lista de sistemas críticos a verificar.
  let sistemas = [
    "Motores", 
    "Comunicaciones", 
    "Soporte Vital",
    "Herramientas"
  ];
  let erroresDetectados = false;
  
  console.log("INICIANDO DIAGNÓSTICO PROFUNDO...");

  for (let i = 0; i < sistemas.length; i++) {
    console.log("Verificando integridad de: " + sistemas[i]);
    let resultado = verificarSistema(sistemas[i]);
    if (!resultado) {
      erroresDetectados = true;
    }
  }
  
  console.log("Diagnóstico finalizado.");
  return !erroresDetectados;
}`,
        errors: ["Comilla mal colocada en 'Comunicaciones,'", "Falta punto y coma en bucle for"]
    }
};


// Tutorial data
const tutorialSteps = [
    {
        step: 1,
        title: "Bienvenido, Especialista de Sistemas",
        description: "La corrupción de datos ha afectado las estructuras lógicas de A.U.R.O.R.A. Tu misión es reparar las listas y los bucles en 5 módulos críticos.",
        icon: "🎯"
    },
    {
        step: 2,
        title: "Panel de Módulos",
        description: "Selecciona un sistema para analizar su código fuente. Cada módulo contiene errores estructurales que debes identificar y corregir.",
        icon: "📋"
    },
    {
        step: 3,
        title: "Editor de Código Avanzado",
        description: "Este es tu editor mejorado. Nota el resaltado de sintaxis por colores y los números de línea, te ayudarán a identificar anomalías estructurales.",
        icon: "💻"
    },
    {
        step: 4,
        title: "Manual Técnico Actualizado",
        description: "Tu manual ha sido actualizado con protocolos para Listas de Datos y Bucles. ¡Consúltalo!",
        icon: "📚"
    },
    {
        step: 5,
        title: "Interfaz Responsiva",
        description: "IMPORTANTE: Si estás en un dispositivo móvil, el Manual Técnico aparecerá en la parte inferior de la pantalla para facilitar el acceso.",
        icon: "📱"
    },
    {
        step: 6,
        title: "Compilación y Verificación",
        description: "Cuando hayas resuelto la estructura, compila tu código para verificar la solución.",
        icon: "⚙️"
    },
    {
        step: 7,
        title: "Iniciar Análisis",
        description: "¡Todo listo! Comienza tu análisis de protocolos estructurales.",
        icon: "🚀"
    }
];

// Sound Manager using Web Audio API
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.initAudio();
    }

    async initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.createSounds();
        } catch (error) {
            console.log('Web Audio API not supported');
        }
    }

    createSounds() {
        // UI Click sound
        this.sounds.click = this.createTone(800, 0.1, 'square');
        // Typing sound
        this.sounds.typing = this.createTone(400, 0.05, 'sawtooth');
        // Success sound (chord)
        this.sounds.success = this.createChord([800, 1000, 1200], 0.5);
        // Error sound
        this.sounds.error = this.createTone(200, 0.3, 'square');
    }

    createTone(frequency, duration, waveType = 'sine') {
        return () => {
            if (!this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
            oscillator.type = waveType;
            
            gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        };
    }

    createChord(frequencies, duration) {
        return () => {
            if (!this.audioContext) return;
            
            frequencies.forEach((freq, index) => {
                setTimeout(() => {
                    const oscillator = this.audioContext.createOscillator();
                    const gainNode = this.audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(this.audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                    oscillator.type = 'sine';
                    
                    gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
                    
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + duration);
                }, index * 100);
            });
        };
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
}

// Initialize sound manager
const soundManager = new SoundManager();

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('Initializing A.U.R.O.R.A. Mission 1');
    startTutorial();
    setupTutorialListeners();
    setupMainInterfaceListeners();
    updateLineNumbers();
    console.log('App initialized successfully');
}

// Timer System
function startTimer() {
    gameState.startTime = Date.now();
    const timerElement = document.getElementById('mission-timer');
    
    gameState.timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - gameState.startTime;
        
        const minutes = String(Math.floor((elapsedTime / 1000) / 60)).padStart(2, '0');
        const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0');
        const milliseconds = String(elapsedTime % 1000).padStart(3, '0');
        
        if (timerElement) {
            timerElement.textContent = `${minutes}:${seconds}:${milliseconds}`;
        }
    }, 50); // Update frequently for smooth milliseconds
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

// Tutorial System
function startTutorial() {
    console.log('Starting tutorial system');
    document.body.classList.add('tutorial-active');
    gameState.tutorialActive = true;
    gameState.tutorialStep = 1;
    
    const tutorialModal = document.getElementById('tutorial-modal');
    if (tutorialModal) {
        tutorialModal.classList.remove('hidden');
        tutorialModal.style.display = 'flex';
    }
    
    updateTutorialContent();
}

function setupTutorialListeners() {
    console.log('Setting up tutorial listeners');
    
    const nextBtn = document.getElementById('tutorial-next');
    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.preventDefault();
            soundManager.play('click');
            if (gameState.tutorialStep < 7) {
                gameState.tutorialStep++;
                updateTutorialContent();
            }
        };
    }
    
    const prevBtn = document.getElementById('tutorial-prev');
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.preventDefault();
            soundManager.play('click');
            if (gameState.tutorialStep > 1) {
                gameState.tutorialStep--;
                updateTutorialContent();
            }
        };
    }
    
    const startBtn = document.getElementById('tutorial-start');
    if (startBtn) {
        startBtn.onclick = function(e) {
            e.preventDefault();
            startMission();
        };
    }
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.onclick = function(e) {
            e.preventDefault();
            const step = index + 1;
            soundManager.play('click');
            gameState.tutorialStep = step;
            updateTutorialContent();
        };
    });
}

function updateTutorialContent() {
    const stepData = tutorialSteps[gameState.tutorialStep - 1];
    if (!stepData) return;
    
    const title = document.getElementById('tutorial-title');
    const description = document.getElementById('tutorial-description');
    const icon = document.querySelector('.tutorial-icon');
    
    if (title) title.textContent = stepData.title;
    if (description) description.textContent = stepData.description;
    if (icon) icon.textContent = stepData.icon;
    
    const prevBtn = document.getElementById('tutorial-prev');
    const nextBtn = document.getElementById('tutorial-next');
    const startBtn = document.getElementById('tutorial-start');
    
    if (prevBtn) prevBtn.style.display = gameState.tutorialStep > 1 ? 'inline-block' : 'none';
    if (nextBtn) nextBtn.style.display = gameState.tutorialStep < 7 ? 'inline-block' : 'none';
    if (startBtn) startBtn.style.display = gameState.tutorialStep === 7 ? 'inline-block' : 'none';
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === gameState.tutorialStep);
    });
    
    highlightTutorialElements();
}

function highlightTutorialElements() {
    document.querySelectorAll('.pulsing-glow').forEach(el => {
        el.classList.remove('pulsing-glow');
    });
    
    let elementToHighlight;
    switch (gameState.tutorialStep) {
        case 2: elementToHighlight = document.getElementById('modules-panel'); break;
        case 3: elementToHighlight = document.getElementById('editor-panel'); break;
        case 4: elementToHighlight = document.getElementById('manual-panel'); break;
        case 6: elementToHighlight = document.getElementById('verify-btn'); break;
    }
    if (elementToHighlight) elementToHighlight.classList.add('pulsing-glow');
}

function startMission() {
    soundManager.play('success');
    
    const tutorialModal = document.getElementById('tutorial-modal');
    if (tutorialModal) {
        tutorialModal.classList.add('hidden');
        tutorialModal.style.display = 'none';
    }
    
    document.body.classList.remove('tutorial-active');
    gameState.tutorialActive = false;
    
    document.querySelectorAll('.pulsing-glow').forEach(el => {
        el.classList.remove('pulsing-glow');
    });
    
    startTimer(); // Start the mission timer
    console.log('Mission started successfully');
}

function setupMainInterfaceListeners() {
    const moduleButtons = document.querySelectorAll('.module-btn');
    moduleButtons.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            if (gameState.tutorialActive) return;
            soundManager.play('click');
            selectModule(btn.dataset.module);
        };
    });
    
    const codeEditor = document.getElementById('code-editor');
    if (codeEditor) {
        codeEditor.oninput = () => {
            soundManager.play('typing');
            updateLineNumbers();
        };
    }
    
    const verifyBtn = document.getElementById('verify-btn');
    if (verifyBtn) verifyBtn.onclick = verifyCode;
    
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.onclick = resetModule;
    
    const copyBtn = document.getElementById('copy-password');
    if (copyBtn) copyBtn.onclick = copyPassword;
    
    const returnBtn = document.getElementById('return-terminal');
    if (returnBtn) returnBtn.onclick = returnToTerminal;
}

// Module Management
function selectModule(moduleId) {
    const module = modules[moduleId];
    if (!module) return;
    
    gameState.currentModule = moduleId;
    
    document.querySelectorAll('.module-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.module === moduleId);
    });
    
    document.getElementById('code-editor').value = module.corruptCode;
    document.getElementById('current-module-name').textContent = module.name;
    document.getElementById('verify-btn').disabled = false;
    document.getElementById('reset-btn').disabled = false;
    
    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.textContent = '';
    feedbackArea.className = 'feedback-area';
    
    updateLineNumbers();
}

function resetModule() {
    soundManager.play('click');
    if (!gameState.currentModule) return;
    selectModule(gameState.currentModule);
}

// Code Verification System
function verifyCode() {
    soundManager.play('click');
    if (!gameState.currentModule) return;
    
    const module = modules[gameState.currentModule];
    const codeEditor = document.getElementById('code-editor');
    const feedbackArea = document.getElementById('feedback-area');
    
    const userCode = codeEditor.value.trim();
    const correctCode = module.correctCode.trim();
    
    const normalizedUserCode = userCode.replace(/\s+/g, ' ').replace(/\s*([{}();,\[\]])\s*/g, '$1');
    const normalizedCorrectCode = correctCode.replace(/\s+/g, ' ').replace(/\s*([{}();,\[\]])\s*/g, '$1');
    
    if (normalizedUserCode === normalizedCorrectCode) {
        soundManager.play('success');
        markModuleComplete(gameState.currentModule);
        feedbackArea.textContent = '✅ MÓDULO REPARADO EXITOSAMENTE - Integridad estructural restaurada';
        feedbackArea.className = 'feedback-area feedback-success';
        
        if (gameState.completedModules.size === 5) {
            stopTimer(); // Stop the timer on mission completion
            setTimeout(showCompletionScreen, 1500);
        }
    } else {
        soundManager.play('error');
        // MODIFIED: Generic error message as requested
        feedbackArea.textContent = '❌ ERROR DE COMPILACIÓN - Protocolo estructural incorrecto. Revisa la sintaxis usando el Manual Técnico.';
        feedbackArea.className = 'feedback-area feedback-error';
    }
}

function markModuleComplete(moduleId) {
    gameState.completedModules.add(moduleId);
    
    const statusElement = document.getElementById(`status-${moduleId}`);
    if (statusElement) {
        statusElement.textContent = '🟢 REPARADO';
        statusElement.style.color = '#00ff00';
    }
    
    document.getElementById('completed-modules').textContent = gameState.completedModules.size;
    
    if (gameState.completedModules.size === 5) {
        document.getElementById('mission-status').textContent = 'MISIÓN COMPLETA';
    }
}

// Line Numbers System
function updateLineNumbers() {
    const codeEditor = document.getElementById('code-editor');
    const lineNumbers = document.getElementById('line-numbers');
    if (!codeEditor || !lineNumbers) return;
    
    const lines = codeEditor.value.split('\n');
    lineNumbers.innerHTML = lines.map((_, index) => `<div>${index + 1}</div>`).join('');
}

// Completion System
function showCompletionScreen() {
    const password = generatePassword();
    document.getElementById('generated-password').textContent = password;
    const completionModal = document.getElementById('completion-modal');
    completionModal.classList.remove('hidden');
    completionModal.style.display = 'flex';
    soundManager.play('success');
}

function generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const getRandomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
    return `AURORA${getRandomChar()}-M1${getRandomChar()}-COMPLETE${getRandomChar()}`;
}

async function copyPassword() {
    soundManager.play('click');
    const passwordDisplay = document.getElementById('generated-password');
    const copyBtn = document.getElementById('copy-password');
    const password = passwordDisplay.textContent;
    
    try {
        await navigator.clipboard.writeText(password);
        copyBtn.textContent = '[ ¡COPIADO! ]';
        setTimeout(() => { copyBtn.textContent = '[ COPIAR CONTRASEÑA ]'; }, 2000);
    } catch (err) {
        console.error('Fallback copy: ', err);
    }
}

function returnToTerminal() {
    soundManager.play('click');
    window.open('https://gnius-club.github.io/AURORA', '_blank');
}

// Utility functions and event handlers
window.addEventListener('resize', updateLineNumbers);

document.addEventListener('click', () => {
    if (soundManager.audioContext && soundManager.audioContext.state === 'suspended') {
        soundManager.audioContext.resume();
    }
}, { once: true });

document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        const verifyBtn = document.getElementById('verify-btn');
        if (verifyBtn && !verifyBtn.disabled && !gameState.tutorialActive) {
            verifyCode();
        }
    }
});
