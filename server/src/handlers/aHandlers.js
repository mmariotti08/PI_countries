const getActivities = (req, res)=>{
    res.send("activities array")
}

const createActivity = (req,res)=>{
    res.send('this route crates an activity')
}

module.exports = {
    getActivities,
    createActivity
}