const { Router } = require("express"); // requiere el objeto Router del paquete express/ el Router es una clase proporcionada por Express que permite crear una nueva instancia de router para definir rutas
const { Country, Activity } = require("../../db")
const router = Router(); // exporta la instancia del router como un módulo, lo que permite que sea accesible en otros archivos cuando se requiere este módulo / al exportar el router, otros archivos pueden utilizar este enrutador para registrar las rutas definidas
const { Op } = require('sequelize');


// GET /countries, cada obj es un país con su información
// GET | /countries/name?="...", debe obtener todos aquellos países que coinciden con el nombre recibido por query, debe poder buscarlo independientemente de mayúsculas o minúsculas, si no existe el país, debe mostrar un mensaje adecuado.
router.get("/", async (req, res) => {

  const { name } = req.query; // 3

    try {
      let countries;
      if (name) {
        countries = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name.toLowerCase()}%` 
            }
          },
          include: Activity
        });
        if(countries.length === 0){
        res.status(404).send({ 'msg': 'No existe' })
        }
      } else {
        countries = await Country.findAll();
      }
      res.json(countries)
    }
    catch(error){
        console.log(error)
    }
})

// GET | /countries/:idPais, detalle de cada país específico / país recibido por ID / debe incluir datos de actividades turísticas asociadas al país
router.get("/:id", async (req, res) => {
  const { id } = req.params;
    try {
      const country = await Country.findByPk(id, {
        attributes: ['id', 'name', 'image', 'continent', 'capital', 'subregion', 'area', 'population'],
        include: Activity
      },
      );
      res.json(country)
    }
    catch(error){
        console.log(error)
    }
})




module.exports = router;




      // const getCountryById = await Country.findByPk(id);
      // const country = {
      //   id: getCountryById.id,
      //   name: getCountryById.name,
      //   image: getCountryById.image,
      //   continent: getCountryById.continent,
      //   capital: getCountryById.capital,
      //   subregion: getCountryById.subregion,
      //   area: getCountryById.area,
      //   population: getCountryById.population
      // }