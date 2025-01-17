# OpenAI Chat Angular Project

Este proyecto es una implementación de prueba que utiliza la API de OpenAI para integrar un chatbot funcional. La aplicación combina un frontend desarrollado en Angular 19 con un backend en Node.js para manejar las solicitudes a la API de OpenAI. El propósito principal es proporcionar una base para la creación de aplicaciones personalizadas que interactúan con OpenAI de manera eficiente y segura.

## Características

- **Frontend en Angular 19**:
  - Una interfaz de usuario interactiva que permite a los usuarios escribir preguntas y recibir respuestas.
  - Arquitectura moderna utilizando componentes independientes (standalone components).
  - Comunicación con el backend a través de un servicio HTTP.

- **Backend en Node.js**:
  - Manejo de solicitudes y respuestas hacia la API de OpenAI.
  - Configuración segura de la clave API mediante variables de entorno.
  - Soporte para CORS y manejo de errores personalizados.

## Tecnologías Utilizadas

### Frontend

- Angular 19
- TypeScript

### Backend

- Node.js
- Express.js
- OpenAI Node.js SDK
- dotenv para manejo de variables de entorno (para no hacer pública la apiKey)

## Instalación

### Prerrequisitos

- Node.js instalado (v16 o superior recomendado)
- Angular CLI instalado

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/openai_test.git
cd openai_test
```

### Configuración del Backend

1. Ve al directorio `src/app`:

   ```bash
   cd src/app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` y agrega tu clave de API de OpenAI:

   ```env
   OPENAI_API_KEY=tu-clave-api
   ```

4. Inicia el servidor:

   ```bash
   node server.js
   ```

### Configuración del Frontend

1. Regresa al directorio raíz del proyecto:

   ```bash
   cd ../../
   ```

2. Instala las dependencias:

   ```bash
   npm install
   npm install express cors body-parser
   npm install dotenv
   npm install openai@latest
   ```

3. Inicia la aplicación Angular:

   ```bash
   ng serve
   ```

4. Abre tu navegador en [http://localhost:4200](http://localhost:4200).

## Uso

1. Escribe una pregunta en el campo de entrada del chatbot.
2. Presiona **Enter** o el botón **Enviar**.
3. Observa la respuesta generada por OpenAI en el área de chat.

## Arquitectura

### Frontend

- **Componentes**:
  - `chat.component`: El componente principal para la interfaz del chatbot.
- **Servicios**:
  - `chatgpt.service`: Servicio que se comunica con el backend para enviar las preguntas y recibir las respuestas.

### Backend

- **Rutas**:
  - `POST /api/chat`: Endpoint para manejar las solicitudes hacia la API de OpenAI.
- **Middleware**:
  - `cors`: Permite solicitudes desde dominios cruzados.
  - `body-parser`: Procesa las solicitudes JSON.
- **Seguridad**:
  - Uso de variables de entorno para ocultar claves API.

## Ejemplo de Solicitud Backend

### Solicitud

```json
{
  "prompt": "¿Cuál es la capital de Francia?"
}
```

### Respuesta

```json
{
  "response": "La capital de Francia es París."
}
```

## Mejoras Futuras

- Agregar autenticación para proteger el acceso al backend.
- Optimizar la interfaz de usuario con características avanzadas como sugerencias automáticas.
- Implementar almacenamiento de conversaciones en una base de datos.

## Contribuciones

Si deseas contribuir a este proyecto, crea un fork, realiza tus cambios y abre un Pull Request. ¡Todas las contribuciones son bienvenidas!

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
