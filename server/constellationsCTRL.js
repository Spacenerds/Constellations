module.exports = {
    getZodiac: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_zConstel(req.params.id)
        .then((response) =>  res.status(200).send(response))
        .catch(error => res.status(500).send(error))
        
    },
    getConstel: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_constel(req.params.id)
        .then((response) =>  res.status(200).send(response))
        .catch(error => res.status(500).send(error))  
          
        
    }
}

