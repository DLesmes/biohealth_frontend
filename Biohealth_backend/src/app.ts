import express from 'express';
import medicosRoutes from './routes/medicos';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

medicosRoutes(app);


app.listen(port, () => {
return console.log(`servidor corriendo sobre el puerto ${port}`)
});
