# 🌐 Proyecto Presentación Desarrollo Web - Grupo 3

Este proyecto es una aplicación web estática diseñada para una presentación sobre los fundamentos del desarrollo web. Utiliza una estética **Cyber-Pixel** con efectos de _Glassmorphism_ y está optimizada para ser desplegada mediante contenedores.

---

## 🚀 Estructura del Proyecto

El proyecto sigue una organización modular para separar el contenido de la configuración de despliegue:

```text
.
├── src/                    # Código fuente de la aplicación
│   ├── assets/             # Recursos estáticos (Imágenes, CSS, Fuentes)
│   │   ├── diapositivas/   # Imágenes de la presentación
│   │   ├── monday/         # Capturas de flujo de trabajo
│   │   └── styles.css      # Estilos personalizados (Glassmorphism + Jersey 10)
│   └── index.html          # Estructura principal y Bootstrap 5.3
├── compose.yml             # Orquestación de Docker
├── nginx.conf              # Configuración optimizada de Nginx
└── README.md               # Documentación del proyecto
```

---

🛠️ Tecnologías Utilizadas

    Frontend: HTML5, CSS3 (Custom Properties & Pseudo-elements).

    Framework UI: Bootstrap 5.3 (vía CDN).

    Tipografía: Jersey 10 vía Google Fonts.

    Servidor Web: Nginx Alpine (Ligero y seguro).

    Despliegue: Docker & Docker Compose.

---

⚙️ Configuración y Despliegue
Requisitos Previos

    Tener instalado Docker y Docker Compose.

Instrucciones de Ejecución

    Clona este repositorio o posicionate en la carpeta raíz del proyecto.

    Levanta el contenedor con el siguiente comando:

    ```bash
    docker compose up -d
    ```

    Abre tu navegador y accede a:
    Plaintext

    ```bash
    http://localhost:8080
    ```

---

👥 Integrantes - Grupo 3

    - VILLEGAS ELIAS
    - QUEZADA YESICA
    - ROMERO ISAIAS
    - IBAÑEZ MARIO
