import express from 'express';
import {
    obtenerSuperHeroePorIdController,
    obtenerTodosLosSuperHeroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperHeroesMayoresDe30Controller,
    //Requerimientos del sprint 3. tp 1:
    crearSuperHeroeController,
    actualizarSuperHeroeController,
    eliminarSuperHeroexIdController,
    eliminarSuperHeroexNombreController,
    //sprint 3. tp 3. Etapa 3. Requerimiento 2 finaliza aquí en routes. Import la función.
    rutaParaFormularioVistaAddController,
    //sprint 3. tp 3. Etapa 3. Requerimiento 3.
    AgregarSuperHeroeController,
    //sprint 3. tp 3. Etapa 4. Requerimiento 2. 
    editarSuperheroeController,
    //Sprint 3. tp 3 Etapa 5. 
    eliminarSuperheroeController,

   
} from '../controllers/superHeroesController.mjs';

    // sprint 3. Tp 2:
import { validate } from '../validations/validationsMiddlewre.mjs';

import { superheroeValidations } from '../validations/superheroesValidations.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
//Requerimientos del sprint 3. tp 2:
router.post('/heroes', superheroeValidations, validate, crearSuperHeroeController); 
//Requerimientos del sprint 3. tp 1:
router.put('/heroes/id/:id', actualizarSuperHeroeController);
//router.delete('/heroes/id/:id', eliminarSuperHeroexIdController);
router.delete('/heroes/nombre/:nombre', eliminarSuperHeroexNombreController);
//sprint 3. tp 3. Etapa 3. Requerimiento 2 finaliza aquí en routes. Crea el endpoint:
router.get('/heroes/nuevo', rutaParaFormularioVistaAddController);
//sprint 3. tp 3. Etapa 3. Requerimiento 3.
router.post('/heroes', superheroeValidations, validate, AgregarSuperHeroeController); 
//sprint 3. tp 3. Etapa 4. Requerimiento 2.
router.get('/heroes/:id/editar', editarSuperheroeController);
//sprint 3. tp 3. Etapa 4. Requerimiento 3...
router.put('/heroes/actualizar/:id', superheroeValidations, validate, actualizarSuperHeroeController);
//
 //GET  /heroes/id/:id/editar   -> render('editSuperhero', { heroe })
//Sprint 3. tp 3. Etapa 5. Requerimiento 3...
router.delete('/heroes/id/:id', eliminarSuperheroeController);
// Sprint 3. tp 3. Etapa & Requerimiento 1.
router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.put('/heroes/id/:id', actualizarSuperHeroeController);
router.delete('/heroes/id/:id', eliminarSuperheroeController);
//Sprint Sprint 3. tp 3. Etapa & Requerimiento 2.
router.post('/heroes/agregar', superheroeValidations, validate, AgregarSuperHeroeController);
//sprint 3. tp 3. Etapa &. Requerimiento 3.
router.get('/heroes/:id/editar', editarSuperheroeController);
//Requerimientos del sprint 3. tp 3. Etapa &. Requerimiento :
router.put('/heroes/id/:id', superheroeValidations,validate,  actualizarSuperHeroeController);
export default router;