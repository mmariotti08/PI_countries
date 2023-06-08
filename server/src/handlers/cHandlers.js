const {Country, Activity}= require('../db.js')
const {Op} = require('sequelize')


const getCountries = async (req,res)=>{
const {name} = req.query;
 try {
  let countries;
  if(name){
    countries = await Country.findAll({
        where:{
            name:{
                [Op.iLike]: `%${name}%`
            }
        }
    });

    if(countries.length===0){
        return res.status(404).json({error:'the country you are looking for was not found'});
    }
    }else{
        countries = await Country.findAll();
    }
    
    res.status(200).json(countries);
} catch (error) {
    res.status(500).json({error: "Error getting all countries"})
 }
};


///////////////////////////////////////////////////////////////////


const getIdCountries = async (req, res) => {
  const { id } = req.params;

  try {
    const country = await Country.findByPk(id, {
      include: {
        model: Activity,
        through: { attributes: [] }, // Excluye los atributos de la tabla de unión
      },
    });

    if (!country) {
      return res.status(404).json({ error: 'The country was not found' });
    }

    res.json(country);
  } catch (error) {
    res.status(500).json({ error: `Error getting country from ID:${id}` });
  }
};
module.exports = {
    getCountries,
    getIdCountries
}