import app from './app';
import { PORT } from './config/env';

app.listen(PORT, () => {
    console.log(`Servidor en el puerto: ${PORT}`)
})