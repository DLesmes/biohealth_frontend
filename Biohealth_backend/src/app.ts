import express from 'express';
import medicosRoutes from './routes/medicos';
import errorHandler from './middlerwares/erros';
import validarRol from './middlerwares/validarRol';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(validarRol);
medicosRoutes(app);

app.use(errorHandler);


app.listen(port, () => {
return console.log(`servidor corriendo sobre el puerto ${port}`)
});
