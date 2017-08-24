module.exports = {
    me: function(req, res, next) {
        if (!req.user) {
        res.status(200).json(null);
        console.log("hello")
        }
        res.status(200).send(req.user);

    },
    getAll: function(req, res, next) {
        const dbInstance = req.app.get('db');
        dbInstance.get_all_users().then( users => {
            res.status(200).send(users)
        }).catch( (errr) => {
            res.status(500).send(errr)
        })
    },
    getOneUser: function(req, res) {
        const dbInstance = req.app.get('db');
        const {params} = req;
        dbInstance.getUser([params.id])
        .then( user => res.status(200).send(user[0] ) )
        .catch( () => res.status(500).send() );
    }
}