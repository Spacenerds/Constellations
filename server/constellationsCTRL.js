module.exports = {
    getZConstellations: (req, res) => {
        const db = req.app.get('db');
        db.get_all_zConstel().then(function(response){
            res.status(200).send(response)
        })
        
    }
}

