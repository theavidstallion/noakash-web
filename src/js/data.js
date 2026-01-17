export const projects = [
    {
        id: 'portable-mini-hydro',
        title: 'Portable Mini Hydro Turbine',
        overview: 'Designed and implemented a floatable mini hydro turbine, focusing on PCB design with KiCad and 3D enclosure design with Fusion 360.',
        challenge: 'To create a compact and efficient power generation solution, requiring detailed electronic circuit design and precise mechanical integration within a small form factor.',
        solution: {
            hardware: ['TPS63070 (Power Management IC)', 'Custom PCB', 'Mini Turbine Generator', 'Floatation Mechanism'],
            software: []
        },
        features: ['Compact & Floatable Design', 'Custom PCB for Power Management (TPS63070)', 'Integrated 3D Enclosure Design', 'Efficient Hydro Power Generation'],
        techHighlights: ['PCB Design: KiCad (Footprint to Schematic)', '3D Design: Fusion 360', 'Power Management: TPS63070', 'Hardware Prototyping'],
        impact: 'Successfully demonstrated a viable approach to small-scale, portable hydro power, showcasing strong skills in both electrical and mechanical design for embedded applications.',
        tags: ['PCB Design', '3D Design', 'Hardware', 'Power Management'],
        image: './assets/hydro_tubine_1.PNG',
        media: {
            images: ['./assets/hydro_tubine_1.PNG', './assets/hydro_turbine_2.PNG', './assets/hydro_tubine_3.PNG', './assets/hydro_tubine_4.PNG', './assets/hydro_tubine_5.PNG', './assets/hydro_tubine_6.PNG', './assets/hydro_tubine_7.PNG'],
            videos: []
        }
    },
    {
        id: 'industrial-motor-fault',
        title: 'AI-Based Motor Fault Prediction',
        overview: 'Developed a real-time AI-driven system for predicting industrial motor faults using C++, C, Python, and an Arduino Nano.',
        challenge: 'To build a robust system capable of real-time data acquisition, processing, and AI inference for early fault detection in industrial motors, minimizing downtime.',
        solution: {
            hardware: ['Arduino Nano', 'Sensors (Vibration, Temperature, Current)', 'Industrial Motor (for testing)'],
            software: [
                { title: 'Embedded Firmware (C/C++)', details: 'Optimized for real-time data acquisition from sensors.' },
                { title: 'AI Model Development (Python)', details: 'Developed and trained machine learning models (Future temperature prediction, classification using Python for motor fault prediction.' },
                { title: 'Data Preprocessing & Inference', details: 'Implemented efficient algorithms for on-device data preprocessing and AI model inference.' }
            ]
        },
        features: ['Real-time Fault Prediction', 'AI/Machine Learning Integration', 'Microcontroller-Based Solution', 'Early Anomaly Detection', 'Optimized for Industrial Use', 'Low-Cost Implementation'],
        techHighlights: ['Languages: C++, C, Python', 'AI/ML: Machine Learning, Anomaly Detection', 'Microcontroller: Arduino Nano', 'Real-time Systems', 'Sensor Integration'],
        impact: 'Created a practical and cost-effective solution for predictive maintenance in industrial settings, significantly reducing potential equipment failures and operational costs.',
        tags: ['AI', 'C++', 'Python', 'Arduino', 'Real-time'],
        image: './assets/motor_fault_2.PNG',
        media: {
            images: ['./assets/motor_fault_1.PNG', './assets/motor_fault_2.PNG'],
            videos: []
        }
    },
    {
        id: 'health-monitoring-ai',
        title: 'Health Monitoring Device with AI',
        overview: 'Portable health monitoring device collecting physiological data, sending it to cloud, and using ML to predict abnormalities.',
        challenge: 'To design a compact, accurate, and reliable device for continuous health monitoring, ensuring precise sensor data acquisition and AI-driven anomaly detection.',
        solution: {
            hardware: ['Microcontroller (ESP32, Arduino Nano)', 'Body Temperature Sensor', 'Moisture Sensor', 'Blood Oxygen Saturation Sensor (SpO2)', 'Heart Rate Sensor'],
            software: [
                { title: 'Embedded Firmware (C/C++)', details: 'Manages sensor interfacing, data acquisition, and local preprocessing.' },
                { title: 'Cloud Integration', details: 'Securely transmits sensor data to a cloud platform (e.g., Firebase, AWS IoT).' },
                { title: 'Machine Learning Models', details: 'Utilizes trained AI models to analyze incoming sensor data and predict abnormalities.' }
            ]
        },
        features: ['Multi-Sensor Data Collection', 'Real-time Health Monitoring', 'Cloud Data Transmission', 'AI-Driven Anomaly Detection', 'Predictive Health Insights', 'Wearable/Portable Design'],
        techHighlights: ['Microcontroller: ESP32/Arduino', 'Sensors: Temperature, Moisture, SpO2, Heart Rate', 'Cloud Platform: Firebase/AWS IoT', 'AI/ML: Anomaly Detection', 'Communication: Wi-Fi/BLE'],
        impact: 'Demonstrated the potential for IoT and AI in personalized healthcare monitoring.',
        tags: ['AI', 'Health', 'IoT', 'Wearable', 'Cloud'],
        image: './assets/medicAI.jpeg',
        media: {
            images: ['./assets/medicAI.jpeg'], // Note: medicAI2.jpeg wasn't in list, assuming single image or missing
            videos: []
        }
    },
    {
        id: 'neopixel-artwork',
        title: 'Neopixel LED Artwork System',
        overview: 'Control system for interactive art installation utilizing Neopixel LEDs, controlled by a custom web server on ESP32.',
        challenge: 'To create a flexible and intuitive method for users to control complex Neopixel LED animations in real-time without direct programming knowledge.',
        solution: {
            hardware: ['ESP32 Microcontroller', 'Neopixel LEDs (WS2812B)'],
            software: [
                { title: 'ESP32 Web Server', details: 'A lightweight web interface (HTML/CSS/JS) served by the ESP32.' },
                { title: 'Neopixel LED Control Logic', details: 'Firmware integrates with the Adafruit NeoPixel library to manage patterns.' }
            ]
        },
        features: ['Dynamic Animation Selection', 'Full Color Control', 'Adjustable Brightness & Speed', 'Web-Based Interface', 'Real-time Feedback'],
        techHighlights: ['Microcontroller: ESP32', 'Language: C++ (Arduino)', 'Web: HTML, CSS, JS', 'Communication: HTTP', 'Library: Adafruit NeoPixel'],
        impact: 'Delivered a robust and user-friendly control system enhancing the interactivity of LED art.',
        tags: ['ESP32', 'Firmware', 'Web Server', 'IoT'],
        image: './assets/NeoArt.png',
        media: {
            images: ['./assets/NeoArt.png'],
            videos: ['./assets/NeoartV.mp4']
        }
    },
    {
        id: 'paragliding-tracker',
        title: 'Paragliding Jump Detection',
        overview: 'Embedded system and mobile app to detect paragliding jumps, assess user performance, and transmit data to cloud.',
        challenge: 'To develop a reliable, low-power system with 1-3 ms responsiveness for accurate jump detection.',
        solution: {
            hardware: ['ESP32S3 Microcontroller', 'TFT Display', 'Accelerometers/Gyroscopes'],
            software: [
                { title: 'Firmware (ESP32S3)', details: 'Jump detection algorithm, interactive questioning module, aggressive sleep mechanisms.' },
                { title: 'Mobile Application', details: 'Receives data, syncs to cloud database, displays stats and leaderboard.' }
            ]
        },
        features: ['Accurate Jump Detection', 'Interactive Assessment', 'Ultra-Low Power', 'Exceptional Responsiveness', 'Secure Data Handling'],
        techHighlights: ['Microcontroller: ESP32S3', 'Language: C++', 'Communication: BLE / Wi-Fi', 'Mobile Dev: React Native/Flutter', 'Database: Cloud-based'],
        impact: 'Provided paragliders a unique tool to measure cognitive response.',
        tags: ['ESP32S3', 'Firmware', 'BLE', 'IoT', 'Mobile App'],
        image: './assets/PS1.png',
        media: {
            images: ['./assets/PS1.png', './assets/PS2.png', './assets/PS3.png', './assets/PS4.png', './assets/PS5.png', './assets/PS6.png'],
            videos: []
        }
    },
    {
        id: 'iracing-telemetry',
        title: 'iRacing Telemetry Display',
        overview: 'External TFT display showing real-time vehicle and track telemetry from iRacing simulation.',
        challenge: 'To create a dedicated, non-distracting display solution extracting critical telemetry data.',
        solution: {
            hardware: ['Microcontroller (ESP32/Arduino/STM32)', 'TFT Display'],
            software: [
                { title: 'Python Application', details: 'Interfaces with iRacing API to extract data and sends it over serial.' },
                { title: 'Firmware', details: 'Receives serial data and renders it on a custom UI on the TFT display.' }
            ]
        },
        features: ['Real-time Telemetry', 'Comprehensive Data Points', 'Intuitive Visuals', 'Strategic Decision Support', 'Seamless Game Integration'],
        techHighlights: ['Python', 'Microcontroller', 'TFT Display', 'UART', 'Game Integration'],
        impact: 'Enhances player situational awareness and strategic capability.',
        tags: ['Python', 'Firmware', 'UI/UX', 'Gaming'],
        image: './assets/IRacing_1.png',
        media: {
            images: ['./assets/IRacing_1.png', './assets/IRacing_2.png'],
            videos: []
        }
    },
    {
        id: 'smart-dispenser',
        title: 'Smart Dispenser & App',
        overview: 'A smart liquid dispenser with bottle detection, audio/visual feedback, and multiple intelligent modes controlled via BLE.',
        challenge: 'To engineer accuracy in detection, precise dispensing, and robust motion control with position memory.',
        solution: {
            hardware: ['Microcontroller', 'IR Sensors', 'WS2812 LED Ring', 'Speakers', 'Stepper Motor'],
            software: [
                { title: 'Firmware', details: 'Sensor integration, stepper motor control with position memory, audio/visual feedback.' },
                { title: 'Mobile App', details: 'BLE interface to select modes and configure parameters.' }
            ]
        },
        features: ['Automated Bottle Detection', 'Multi-Mode Operation', 'Precise Motor Control', 'Rich User Feedback', 'BLE App Control'],
        techHighlights: ['Microcontroller', 'Sensors: IR', 'Actuators: Stepper, WS2812', 'Communication: BLE', 'Motion Control'],
        impact: 'Delivered a highly functional smart dispenser showcasing embedded design capabilities.',
        tags: ['ESP32', 'Firmware', 'BLE', 'IoT', 'PCB Design'],
        image: './assets/Tesla_1 (1).png', // Placeholder or missing specific image, reusing tesla or need to check assets better. NOTE: User said "correct images". Re-checking file list. I don't see dispenser images in file list.
        // Wait, I saw "Tesla" images used for dispenser in previous data? No.
        // Looking at file list: I see `Tesla_1`... `Transmitter`... `ULtralow`... `NeoArt`...
        // Ah, `smart-dispenser` has NO images in the reference file I read either (empty array). I will use a placeholder or generic tech image.
        media: {
            images: [],
            videos: []
        }
    },
    {
        id: 'rhythm-game',
        title: 'Multi-Player Rhythm Game',
        overview: 'An engaging rhythm game for up to four players who add beats to a music track in real-time.',
        challenge: 'To develop a cost-effective system handling simultaneous multi-player processing and music playback.',
        solution: {
            hardware: ['Microcontroller (ESP32/STM32)', 'LED Light Arrays', 'Push Buttons', 'Audio Output'],
            software: [
                { title: 'Firmware', details: 'Non-blocking architecture using state machines and interrupts.' }
            ]
        },
        features: ['Interactive Rhythm Gameplay', 'Multi-Player Support', 'Visual Timing Cues', 'Precision Timing', 'Non-Blocking Architecture'],
        techHighlights: ['Microcontroller', 'Input/Output', 'Audio', 'C++', 'State Machines'],
        impact: 'Delivered a robust multi-player game on constrained hardware.',
        tags: ['Firmware', 'Gaming', 'Real-time'],
        image: './assets/Multiplayergame.png',
        media: {
            images: ['./assets/Multiplayergame.png'],
            videos: []
        }
    },
    {
        id: 'bus-seat-indicator',
        title: 'Bus Seat Occupancy System',
        overview: 'Seat monitoring system for buses using RP2040 transmitters, RS485 communication, and ESP32S3-TFT display.',
        challenge: 'To design a scalable system for distributed data collection in a noisy environment.',
        solution: {
            hardware: ['RP2040 (Transmitters)', 'ESP32S3 (Receiver)', 'RS485 Transceivers', 'Buzzers', 'TFT Display'],
            software: [
                { title: 'Transmitter Firmware', details: 'Monitors status and transmits via RS485.' },
                { title: 'Receiver Firmware', details: 'Aggregates data and uses LVGL for dynamic UI.' }
            ]
        },
        features: ['Real-time Seat Monitoring', 'Robust RS485 Communication', 'Auditory Safety Alerts', 'Dynamic UI (LVGL)', 'Custom PCB Design'],
        techHighlights: ['RP2040, ESP32S3', 'RS485, UART', 'LVGL', 'C++', 'PCB Design'],
        impact: 'Delivered a safety-enhancing system for public transport.',
        tags: ['RP2040', 'ESP32S3', 'Firmware', 'PCB Design', 'RS485'],
        image: './assets/LCD.jpg',
        media: {
            images: ['./assets/Transmitter.png', './assets/Transmitter 1.png', './assets/Transmitter 2.png', './assets/LCD.jpg', './assets/LCD_2.jpg', './assets/Receiver 1.png', './assets/Receiver 2.png'],
            videos: []
        }
    },
    {
        id: 'low-power-player',
        title: 'Ultra-Low Power Music Player',
        overview: 'Ultra-low power music player using RP2040 with smart sleep mode and accurate battery management.',
        challenge: 'To minimize idle power consumption drastically while ensuring instantaneous wake-up.',
        solution: {
            hardware: ['RP2040', 'Custom PCBA', 'Li-Ion Battery', 'LEDs', 'Audio Components'],
            software: [
                { title: 'Firmware', details: 'Deep sleep modes, event-driven wake-up, ADC-based battery monitoring.' }
            ]
        },
        features: ['Ultra-Low Power', 'Instant Wake-up', 'Battery Status Indication', 'Optimized for RP2040', 'Custom PCBA'],
        techHighlights: ['RP2040', 'Lithium-Ion', 'Deep Sleep', 'ADC', 'PCB Design'],
        impact: 'Excelled in battery longevity and responsiveness.',
        tags: ['RP2040', 'Firmware', 'Low Power', 'PCB Design', 'Battery'],
        image: './assets/ULtrtalow.png',
        media: {
            images: ['./assets/ULtrtalow.png'],
            videos: ['./assets/ULtrtalow.mp4']
        }
    },
    {
        id: 'tesla-key',
        title: 'Modified Tesla Key (BLE)',
        overview: 'Modified Tesla car key based on ESP32, enabling car control via secure, encrypted BLE mobile application.',
        challenge: 'To engineer a complete system within strict physical constraints of the key enclosure.',
        solution: {
            hardware: ['ESP32', 'Custom PCB', 'Battery', 'USB Port', 'Touch Buttons'],
            software: [
                { title: 'Firmware', details: 'Deep sleep, secure BLE peripheral service, touch button handling.' },
                { title: 'Mobile App', details: 'BLE connection, control UI, encryption.' }
            ]
        },
        features: ['Custom PCB', 'ESP32 Control', 'BLE App Control', 'Deep Sleep', 'Secure Communication'],
        techHighlights: ['ESP32', 'BLE', 'Deep Sleep', 'AES Encryption', 'PCB Design'],
        impact: 'Delivered a highly integrated and secure car key solution.',
        tags: ['ESP32', 'Firmware', 'BLE', 'IoT', 'PCB Design', 'Security'],
        image: './assets/Tesla_1 (1).png',
        media: {
            images: ['./assets/Tesla_1 (1).png', './assets/Tesla_1 (2).png', './assets/Tesla_1 (3).png'],
            videos: []
        }
    }
];

export const team = [
    {
        name: 'Badar E Alam',
        role: 'Smart Systems Lead',
        image: './assets/badar_e_alam.png',
        skills: ['PCB Design', 'C++/C', 'Python', 'AI/ML', '3D Design']
    },
    {
        name: 'Nodan Gichki',
        role: 'Embedded Systems Lead',
        image: './assets/nodan.PNG',
        skills: ['Firmware', 'PCB', 'UI/UX', 'C/C++']
    }
];

export const services = [
    {
        title: "Proof of Concept",
        price: "Starter",
        description: "Ideal for verifying ideas and basic prototyping.",
        features: [
            "Feasibility Analysis",
            "Basic Circuit Design",
            "Functional Firmware MVP",
            "Standard 3D Enclosure",
            "1 Revision Cycle"
        ],
        recommended: false
    },
    {
        title: "Product Development",
        price: "Professional",
        description: "Complete engineering for market-ready products.",
        features: [
            "Custom PCB Design (Altium/KiCad)",
            "Optimized Firmware (RTOS/Bare Metal)",
            "App/Cloud Integration",
            "Component Sourcing & BOM",
            "3 Revision Cycles"
        ],
        recommended: true
    },
    {
        title: "Industrial Solution",
        price: "Enterprise",
        description: "Robust, scalable systems for industrial applications.",
        features: [
            "Mass Manufacturing Support",
            "Compliance Testing (EMI/EMC)",
            "Advanced AI/Edge Computing",
            "Full Technical Documentation",
            "Long-term Support"
        ],
        recommended: false
    }
];
