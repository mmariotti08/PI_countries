const {Country, Activity}= require('../db.js')


const getActivities = async (req, res)=>{
    try {
        const activities = await Activity.findAll();
    
        res.json(activities);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las actividades' });
      }    
}

const createActivity =  async (req,res)=>{
    const{ name, difficulty, duration, season, countriesId} = req.body;

    
    try {
       let activity = await Activity.create({ name, difficulty, duration, season})
       await activity.setCountries(countriesId);
       
       let activityWithCountry = await Activity.findAll({
        where: { name: name },
        attributes: {
            exclude: ['updatedAt', 'createdAt'],
        },
        include: {
            model: Country,
            through: {
                attributes: []
            }
        }
    })

       res.json(activityWithCountry)

    } catch (error) {
    
        console.error(error)
        res.status(500).json({ error: 'Error when creating the tourist activity' });
    }
}

module.exports = {
    getActivities,
    createActivity
}