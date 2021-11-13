
import executeQuery from "../services/mysql.service"

const getMedicos = async (req, res) => {
    try{
        const response = await executeQuery('SELECT * FROM medico');
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null
        }
        res.json(data);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

const getMedico = (req, res) => {
    const {id} = req.params;
    executeQuery(`SELECT * FROM medico WHERE idMedico = ${id}`).then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0] : null
        }
        res.json(data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
}

const addMedico = async(req, res) => {
    const {primerNombre, segundoNombre, primerApellido, segundoApellido, usuario, contraseña, fotoUsuario, firma} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO medico (primerNombre, segundoNombre, primerApellido, segundoApellido, usuario, contraseña, fotoUsuario, firma) VALUES ('${primerNombre}', '${segundoNombre}', '${primerApellido}', '${segundoApellido}', '${usuario}', '${contraseña}', '${fotoUsuario}', '${firma}')`);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

const updateMedico = async(req, res) => {
    const {primerNombre, segundoNombre, primerApellido, segundoApellido, usuario, contraseña, fotoUsuario, firma} = req.body;
    try{
        const response = await executeQuery(`UPDATE medico SET primerNombre = '${primerNombre}', segundoNombre = '${segundoNombre}', primerApellido = '${primerApellido}', segundoApellido = '${segundoApellido}', usuario = '${usuario}', contraseña = '${contraseña}', fotoUsuario = '${fotoUsuario}', firma = '${firma}' WHERE idMedico = ${req.params.id}`);
        console.log(response);
        if(response.affectedRows > 0){
            res.json({message: 'updated'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`})
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteMedico = async(req, res) => {
    try{
        const response = await executeQuery(`DELETE FROM medico WHERE idMedico = ${req.params.id}`);
        console.log(response);
        if(response.affectedRows > 0){
            res.json({message: 'deleted'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`})
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

export {getMedicos, getMedico, addMedico, updateMedico, deleteMedico}