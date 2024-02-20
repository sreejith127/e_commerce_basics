const router = require("express").Router()


router.get("/test",(req,res)=>{
    res.render("Demo")
})

module.exports = router;
