module.exports = {
    getAllPosts: async (req,res) => {
        const db = req.app.get('db');
        const {searchBox,postList,checkBox} = req.query
        const userPost = await db.all_posts([searchBox, postList, checkBox])
        if (userPost && searchBox){
            return searchBox
        }
    }
}