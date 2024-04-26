import express from "express";
import cors from "cors";
// import ProvinceRouter from "./controllers/province-controller.js"
import {Province, provinciasArray} from "./src/entities/province.js"

const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.
//
// Endpoints (todos los Routers)
//
// app.use("/api/province", ProvinceRouter);

app.get('/api/province', (req, res) => {

    res.status(200).send(provinciasArray);
})

app.get('/api/province/:id', (req, res) => {

    let province = provinciasArray.find(p => p.id = req.params)
    if (province != null) {
        res.status(200).send(province);
    } else {
        res.status(404).send("Not found");
    }

})

app.post('/api/province', (req, res) => {

    provinciasArray.push(new Province (req.query.id, req.query.name, req.query.full_name, req.query.latitude, req.query.longitude, req.query.display_order));
    let nuevaProvince = provinciasArray.find(p => p.id == req.query.id)
    res.status(201).send(nuevaProvince);

})

app.put('/api/province/', (req, res) => {

    let provinceModified = req.body;
    let province = provinciasArray.find(p => p.id == req.body.id)
    console.log(province);
    console.log(req.body.id);

    if (province != undefined) { 
        if ('id' in provinceModified && 'name' in provinceModified && 'full_name' in provinceModified && 'latitude' in provinceModified && 'longitude' in provinceModified && 'display_order' in provinceModified && provinceModified.name.length > 3) {
            if (provinceModified.id != null) {
                province.id = req.body.id
            }
            if (provinceModified.name != null) {
                province.name = req.body.name
            }
            if (provinceModified.full_name != null) {
                province.full_name = req.body.full_name
            }
            if (provinceModified.latitude != null) {
                province.latitude = req.body.latitude
            }
            if (provinceModified.longitude != null) {
                province.longitude = req.body.longitude
            }
            if (provinceModified.display_order != null) {
                province.display_order = req.body.display_order
            }
            res.status(201).send(province)
        } else {
            res.status(400).send("Alguno de los campos enviados no cumple con las condiciones")
        }

    }
    else {
        res.status(404);
    }

})

app.delete('/api/province/:id', (req, res) => {

    let provinciaAborrarIndex = provinciasArray.findIndex(p => p.id == req.params.id);
    if (provinciaAborrarIndex === -1) {
        res.status(404).send("Not Found");
    } else {
        let provinciaEliminada = provinciasArray.splice(provinciaAborrarIndex, 1)[0];
        res.status(200).send(`La provincia ${provinciaEliminada.name} con id ${provinciaEliminada.id} se eliminó con éxito.`);
    }

});

//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
