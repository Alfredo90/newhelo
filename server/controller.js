const bcrypt = require('bcryptjs');

module.exports = {
    

    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, password} = req.body;
        const [foundUser] = await db.check_user(username);
        if(foundUser){
            return res.status(400).send("Username already registered")    
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    let profile_pic = 'pic';
    const [newUser] = await db.add_users([ username, hash, profile_pic]);
    req.session.user = {
        id: newUser.user_id,
        username: newUser.username,
        profile_pic: newUser.profile_pic
    }
    res.status(200).send(req.session.user);
},

login: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    const [foundUser] = await db.check_user(username);
    if(!foundUser){
        return res.status(401).send("Incorrect login information")
    }
    const authenticated = bcrypt.compareSync(password, foundUser.password);
    if( authenticated ){
        req.session.user = {
            id: foundUser.user_id,
            username: foundUser.username,
            profile_pic: foundUser.profile_pic
        }
        res.status(200).send(req.session.user);
    } else {
        res.status(403).send('Incorrect login information')
    }
},


}