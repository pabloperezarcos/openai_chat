require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const app = express();
const port = 3000;

// Configurar OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Toma la clave de la variable de entorno
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para manejar solicitudes a OpenAI
app.post('/api/chat', async (req, res) => {
    console.log('Request Body:', req.body);
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ message: "El campo 'prompt' debe ser una cadena válida." });
    }

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
        });

        res.json({ response: response.choices[0].message.content });
    } catch (error) {
        if (error.code === 'insufficient_quota') {
            res.status(429).json({
                message: 'Has alcanzado tu límite de uso. Por favor, revisa tu plan y detalles de facturación.',
            });
        } else {
            console.error('Error al comunicarse con OpenAI:', error);
            res.status(500).send('Error interno del servidor.');
        }
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});
