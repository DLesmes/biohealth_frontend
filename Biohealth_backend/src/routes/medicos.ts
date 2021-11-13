import { Router } from "express";
import { addMedico, deleteMedico, getMedico, getMedicos, updateMedico } from "../controllers/medicosController";

const medicosRoutes = (app) =>{
    const router = Router();
    app.use('/', router);

    router.get('/getMedicos', getMedicos);
    router.get('/getMedico/:id', getMedico);
    router.post('/addMedico', addMedico);
    router.put('/updateMedico/:id', updateMedico);
    router.delete('/deleteMedico/:id', deleteMedico);
}

export default medicosRoutes;