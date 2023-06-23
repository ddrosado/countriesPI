const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../../db")


// GET | /activities, obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
router.get("/", async(req, res) => {
try {
    const activities = await Activity.findAll();
    console.log(activities);
    res.json(activities);
  } catch (error) {
    console.log(error);
  }
})


// POST | /activities, recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados / toda la información debe ser recibida por body / debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados(al menos uno)
router.post("/", async (req, res) => {

    const { name, difficulty, duration, season, country } = req.body;

    try {
        let activity = await Activity.create({ name, difficulty, duration, season })
        await activity.setCountries(country)

        const activityWithCountry = await Activity.findOne({
          where: { name },
          attributes: { exclude: ['timestamps'] },
          include: [
            {
              model: Country,
              through: { attributes: [] },
            },
          ],
        });
        

        res.json(activityWithCountry)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
        
    }

});


module.exports = router;