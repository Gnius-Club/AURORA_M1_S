// A.U.R.O.R.A. Mission 1: Advanced Systems Analysis
// Game state and modules data
const gameState = {
    currentModule: null,
    completedModules: new Set(),
    tutorialStep: 1,
    tutorialActive: true
};

// Module data with correct and corrupted code
const modules = {
    energia: {
        id: "energia",
        name: "Modulo_GestionDeEnergia.js",
        icon: "⚡️",
        corruptCode: `function revisarCeldas() {
  let niveles = [98, 85 76, 91, 60];
  for (let i = 0; i < niveles.length, i++) {
    console.log("Celda " + i + ": " + niveles[i] + "%");
    if (niveles[i] < 70) {
      alertarBajoBateria();
    }
  }
}`,
        correctCode: `function revisarCeldas() {
  let niveles = [98, 85, 76, 91, 60];
  for (let i = 0; i < niveles.length; i++) {
    console.log("Celda " + i + ": " + niveles[i] + "%");
    if (niveles[i] < 70) {
      alertarBajoBateria();
    }
  }
}`,
        errors: ["Falta coma entre 85 y 76 en el array", "Coma en lugar de punto y coma en el bucle for"]
    },
    herramientas: {
        id: "herramientas",
        name: "Modulo_Herramientas.js",
        icon: "🛠️",
        corruptCode: `function escanearObjetivos() {
  let objetivos = ["Basalto", "Sedimentaria" "Pirita"];
  console.log("Iniciando escaneo...)
  if (objetivos.length > 0) {
    activarEscaner();
  
}`,
        correctCode: `function escanearObjetivos() {
  let objetivos = ["Basalto", "Sedimentaria", "Pirita"];
  console.log("Iniciando escaneo...");
  if (objetivos.length > 0) {
    activarEscaner();
  }
}`,
        errors: ["Falta coma entre strings en el array", "Comilla mal cerrada en console.log", "Falta llave de cierre"]
    },
    navegacion: {
        id: "navegacion",
        name: "Modulo_NavegacionAvanzada.js",
        icon: "🗺️",
        corruptCode: `function seguirRuta() {
  let ruta = [[10, 20], [15, 25], [30, 35]];
  if (waypoint_actual < ruta.length)
    console.log("Moviendo a: " + ruta[waypointActual]);
    moverA(ruta[waypointActual]);
  }
}`,
        correctCode: `function seguirRuta() {
  let ruta = [[10, 20], [15, 25], [30, 35]];
  if (waypoint_actual < ruta.length) {
    console.log("Moviendo a: " + ruta[waypoint_actual]);
    moverA(ruta[waypoint_actual]);
  }
}`,
        errors: ["Falta llave de apertura en if", "Inconsistencia en nombre de variable", "Llave de cierre extra"]
    },
    comunicaciones: {
        id: "comunicaciones",
        name: "Modulo_Comunicaciones.js",
        icon: "🛰️",
        corruptCode: `function enviarPaqueteDeDatos() {
  let idMision = "AURORA-01"
  let estado = "Operacional";
  let temperatura = 23;
  let humedad = 45;
  let datos = [idMision, estado, temperatura, humedad];
  transmitirPaquete(datos);
}`,
        correctCode: `function enviarPaqueteDeDatos() {
  let idMision = "AURORA-01";
  let estado = "Operacional";
  let temperatura = 23;
  let humedad = 45;
  let datos = [idMision, estado, temperatura, humedad];
  transmitirPaquete(datos);
}`,
        errors: ["Falta punto y coma después de idMision"]
    },
    diagnostico: {
        id: "diagnostico",
        name: "Modulo_Diagnostico.js",
        icon: "🩺",
        corruptCode: `function ejecutarDiagnostico() {
  let sistemas = ["Motores", "Comunicaciones, "Herramientas"];
  for (let i = 0 i < sistemas.length; i++) {
    console.log("Verificando: " + sistemas[i]);
    verificarSistema(sistemas[i]);
  }
}`,
        correctCode: `function ejecutarDiagnostico() {
  let sistemas = ["Motores", "Comunicaciones", "Herramientas"];
  for (let i = 0; i < sistemas.length; i++) {
    console.log("Verificando: " + sistemas[i]);
    verificarSistema(sistemas[i]);
  }
}`,
        errors: ["Comilla mal colocada en array", "Falta punto y coma en bucle for"]
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
    
    // Start tutorial immediately
    startTutorial();
    
    // Set up all event listeners
    setupTutorialListeners();
    setupMainInterfaceListeners();
    
    // Initialize line numbers
    updateLineNumbers();
    
    console.log('App initialized successfully');
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
    
    // Next button
    const nextBtn = document.getElementById('tutorial-next');
    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.preventDefault();
            console.log('Next button clicked, current step:', gameState.tutorialStep);
            soundManager.play('click');
            if (gameState.tutorialStep < 7) {
                gameState.tutorialStep++;
                updateTutorialContent();
                console.log('Advanced to step:', gameState.tutorialStep);
            }
        };
    }
    
    // Previous button
    const prevBtn = document.getElementById('tutorial-prev');
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.preventDefault();
            console.log('Previous button clicked, current step:', gameState.tutorialStep);
            soundManager.play('click');
            if (gameState.tutorialStep > 1) {
                gameState.tutorialStep--;
                updateTutorialContent();
                console.log('Went back to step:', gameState.tutorialStep);
            }
        };
    }
    
    // Start button
    const startBtn = document.getElementById('tutorial-start');
    if (startBtn) {
        startBtn.onclick = function(e) {
            e.preventDefault();
            console.log('Start mission button clicked');
            startMission();
        };
    }
    
    // Progress dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.onclick = function(e) {
            e.preventDefault();
            const step = index + 1;
            console.log('Dot clicked, going to step:', step);
            soundManager.play('click');
            gameState.tutorialStep = step;
            updateTutorialContent();
        };
    });
    
    console.log('Tutorial listeners set up');
}

function updateTutorialContent() {
    console.log('Updating tutorial content for step:', gameState.tutorialStep);
    
    const stepData = tutorialSteps[gameState.tutorialStep - 1];
    if (!stepData) {
        console.error('No step data found for step:', gameState.tutorialStep);
        return;
    }
    
    // Update content elements
    const title = document.getElementById('tutorial-title');
    const description = document.getElementById('tutorial-description');
    const icon = document.querySelector('.tutorial-icon');
    
    if (title) title.textContent = stepData.title;
    if (description) description.textContent = stepData.description;
    if (icon) icon.textContent = stepData.icon;
    
    // Update button visibility
    const prevBtn = document.getElementById('tutorial-prev');
    const nextBtn = document.getElementById('tutorial-next');
    const startBtn = document.getElementById('tutorial-start');
    
    if (prevBtn) prevBtn.style.display = gameState.tutorialStep > 1 ? 'inline-block' : 'none';
    if (nextBtn) nextBtn.style.display = gameState.tutorialStep < 7 ? 'inline-block' : 'none';
    if (startBtn) startBtn.style.display = gameState.tutorialStep === 7 ? 'inline-block' : 'none';
    
    // Update progress dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index + 1 === gameState.tutorialStep) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Add highlighting effects for relevant steps
    highlightTutorialElements();
    
    console.log('Tutorial content updated to step:', gameState.tutorialStep, '- Title:', stepData.title);
}

function highlightTutorialElements() {
    // Remove existing highlights
    document.querySelectorAll('.pulsing-glow').forEach(el => {
        el.classList.remove('pulsing-glow');
    });
    
    // Add highlights based on current step
    switch (gameState.tutorialStep) {
        case 2:
            const modulesPanel = document.getElementById('modules-panel');
            if (modulesPanel) modulesPanel.classList.add('pulsing-glow');
            break;
        case 3:
            const editorPanel = document.getElementById('editor-panel');
            if (editorPanel) editorPanel.classList.add('pulsing-glow');
            break;
        case 4:
            const manualPanel = document.getElementById('manual-panel');
            if (manualPanel) manualPanel.classList.add('pulsing-glow');
            break;
        case 6:
            const verifyBtn = document.getElementById('verify-btn');
            if (verifyBtn) verifyBtn.classList.add('pulsing-glow');
            break;
    }
}

function startMission() {
    console.log('Starting mission - closing tutorial');
    soundManager.play('success');
    
    // Hide tutorial modal
    const tutorialModal = document.getElementById('tutorial-modal');
    if (tutorialModal) {
        tutorialModal.classList.add('hidden');
        tutorialModal.style.display = 'none';
    }
    
    // Remove tutorial active state
    document.body.classList.remove('tutorial-active');
    gameState.tutorialActive = false;
    
    // Remove all highlights
    document.querySelectorAll('.pulsing-glow').forEach(el => {
        el.classList.remove('pulsing-glow');
    });
    
    console.log('Mission started successfully');
}

function setupMainInterfaceListeners() {
    console.log('Setting up main interface listeners');
    
    // Module selection buttons
    const moduleButtons = document.querySelectorAll('.module-btn');
    moduleButtons.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            if (gameState.tutorialActive) return;
            
            soundManager.play('click');
            const moduleId = btn.dataset.module;
            console.log('Module selected:', moduleId);
            selectModule(moduleId);
        };
    });
    
    // Code editor
    const codeEditor = document.getElementById('code-editor');
    if (codeEditor) {
        codeEditor.oninput = function() {
            soundManager.play('typing');
            updateLineNumbers();
        };
    }
    
    // Verify button
    const verifyBtn = document.getElementById('verify-btn');
    if (verifyBtn) {
        verifyBtn.onclick = function(e) {
            e.preventDefault();
            verifyCode();
        };
    }
    
    // Reset button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.onclick = function(e) {
            e.preventDefault();
            resetModule();
        };
    }
    
    // Completion modal buttons
    const copyBtn = document.getElementById('copy-password');
    if (copyBtn) {
        copyBtn.onclick = function(e) {
            e.preventDefault();
            copyPassword();
        };
    }
    
    const returnBtn = document.getElementById('return-terminal');
    if (returnBtn) {
        returnBtn.onclick = function(e) {
            e.preventDefault();
            returnToTerminal();
        };
    }
    
    console.log('Main interface listeners set up');
}

// Module Management
function selectModule(moduleId) {
    const module = modules[moduleId];
    if (!module) return;
    
    console.log('Loading module:', moduleId);
    gameState.currentModule = moduleId;
    
    // Update UI
    const moduleButtons = document.querySelectorAll('.module-btn');
    moduleButtons.forEach(btn => {
        if (btn.dataset.module === moduleId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Load module code
    const codeEditor = document.getElementById('code-editor');
    const moduleName = document.getElementById('current-module-name');
    
    if (codeEditor) codeEditor.value = module.corruptCode;
    if (moduleName) moduleName.textContent = module.name;
    
    // Enable controls
    const verifyBtn = document.getElementById('verify-btn');
    const resetBtn = document.getElementById('reset-btn');
    if (verifyBtn) verifyBtn.disabled = false;
    if (resetBtn) resetBtn.disabled = false;
    
    // Clear feedback
    const feedbackArea = document.getElementById('feedback-area');
    if (feedbackArea) {
        feedbackArea.textContent = '';
        feedbackArea.className = 'feedback-area';
    }
    
    updateLineNumbers();
}

function resetModule() {
    soundManager.play('click');
    if (!gameState.currentModule) return;
    
    const module = modules[gameState.currentModule];
    const codeEditor = document.getElementById('code-editor');
    const feedbackArea = document.getElementById('feedback-area');
    
    if (codeEditor) codeEditor.value = module.corruptCode;
    if (feedbackArea) {
        feedbackArea.textContent = '';
        feedbackArea.className = 'feedback-area';
    }
    
    updateLineNumbers();
}

// Code Verification System
function verifyCode() {
    soundManager.play('click');
    if (!gameState.currentModule) return;
    
    const module = modules[gameState.currentModule];
    const codeEditor = document.getElementById('code-editor');
    const feedbackArea = document.getElementById('feedback-area');
    
    if (!codeEditor || !feedbackArea) return;
    
    const userCode = codeEditor.value.trim();
    const correctCode = module.correctCode.trim();
    
    // Normalize whitespace for comparison
    const normalizedUserCode = userCode.replace(/\s+/g, ' ').replace(/\s*([{}();,\[\]])\s*/g, '$1');
    const normalizedCorrectCode = correctCode.replace(/\s+/g, ' ').replace(/\s*([{}();,\[\]])\s*/g, '$1');
    
    if (normalizedUserCode === normalizedCorrectCode) {
        // Success
        soundManager.play('success');
        markModuleComplete(gameState.currentModule);
        feedbackArea.textContent = '✅ MÓDULO REPARADO EXITOSAMENTE - Integridad estructural restaurada';
        feedbackArea.className = 'feedback-area feedback-success';
        
        // Check if all modules are complete
        if (gameState.completedModules.size === 5) {
            setTimeout(showCompletionScreen, 1500);
        }
    } else {
        // Error
        soundManager.play('error');
        feedbackArea.textContent = '❌ ERROR DE COMPILACIÓN - Revisa la sintaxis usando el Manual Técnico. Errores detectados: ' + module.errors.join(', ');
        feedbackArea.className = 'feedback-area feedback-error';
    }
}

function markModuleComplete(moduleId) {
    gameState.completedModules.add(moduleId);
    
    // Update module status in UI
    const statusElement = document.getElementById(`status-${moduleId}`);
    if (statusElement) {
        statusElement.textContent = '🟢 REPARADO';
        statusElement.style.color = '#00ff00';
    }
    
    // Update progress counter
    const completedSpan = document.getElementById('completed-modules');
    if (completedSpan) {
        completedSpan.textContent = gameState.completedModules.size;
    }
    
    // Update mission status if all complete
    if (gameState.completedModules.size === 5) {
        const missionStatus = document.getElementById('mission-status');
        if (missionStatus) {
            missionStatus.textContent = 'MISIÓN COMPLETA';
        }
    }
}

// Line Numbers System
function updateLineNumbers() {
    const codeEditor = document.getElementById('code-editor');
    const lineNumbers = document.getElementById('line-numbers');
    
    if (!codeEditor || !lineNumbers) return;
    
    const lines = codeEditor.value.split('\n');
    const lineNumbersHtml = lines.map((_, index) => 
        `<div>${index + 1}</div>`
    ).join('');
    lineNumbers.innerHTML = lineNumbersHtml;
}

// Completion System
function showCompletionScreen() {
    const password = generatePassword();
    const passwordDisplay = document.getElementById('generated-password');
    const completionModal = document.getElementById('completion-modal');
    
    if (passwordDisplay) passwordDisplay.textContent = password;
    if (completionModal) {
        completionModal.classList.remove('hidden');
        completionModal.style.display = 'flex';
    }
    
    soundManager.play('success');
}

function generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-/.';
    const getRandomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
    
    return `AURORA${getRandomChar()}M${getRandomChar()}I${getRandomChar()}S${getRandomChar()}I${getRandomChar()}O${getRandomChar()}N${getRandomChar()}2`;
}

async function copyPassword() {
    soundManager.play('click');
    const passwordDisplay = document.getElementById('generated-password');
    const copyBtn = document.getElementById('copy-password');
    
    if (!passwordDisplay || !copyBtn) return;
    
    const password = passwordDisplay.textContent;
    
    try {
        await navigator.clipboard.writeText(password);
        copyBtn.textContent = '[ ¡COPIADO! ]';
        setTimeout(() => {
            copyBtn.textContent = '[ COPIAR CONTRASEÑA ]';
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = password;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyBtn.textContent = '[ ¡COPIADO! ]';
        setTimeout(() => {
            copyBtn.textContent = '[ COPIAR CONTRASEÑA ]';
        }, 2000);
    }
}

function returnToTerminal() {
    soundManager.play('click');
    window.open('https://gnius-club.github.io/AURORA', '_blank');
}

// Utility functions and event handlers
window.addEventListener('resize', updateLineNumbers);

// Initialize audio context on first user interaction
document.addEventListener('click', () => {
    if (soundManager.audioContext && soundManager.audioContext.state === 'suspended') {
        soundManager.audioContext.resume();
    }
}, { once: true });

// Prevent context menu for immersion
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to verify code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        const verifyBtn = document.getElementById('verify-btn');
        if (verifyBtn && !verifyBtn.disabled && !gameState.tutorialActive) {
            verifyCode();
        }
    }
});