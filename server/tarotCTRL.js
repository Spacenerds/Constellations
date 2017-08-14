module.exports = {
    getTarot: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_tarots()
        .then( tarots => res.status(200).send(tarots) )
        .catch( () => res.status(500).send() );
    }
}