module.exports = {
    getAllPosts: async (req,res) => {
        const db = req.app.get('db');
        const {userPosts, searchString} = req.query
        const {userId} = req.params
        console.log(checkBox)
        let userPost
        if (userPosts && searchString){
             userPost = await db.all_user_posts([userId, searchString])
       
        }else if (userPosts === false && searchString === undefined) {
             userPost = await db.all_other_posts([userId])
        }else if (userPost === false && searchString){
             userPost = await db.all_post_search([userId, searchString])
        }else if (userPost && searchString === undefined){
            userPost = await db.all_posts()
        }
          res.status(200).send(userPost)      
    },
   
}