const router = require("express").Router()

router.get("/add",(req,res)=>{
    res.render("page")
})

router.get("/about",(req,res)=>{
    res.render("About")
})

router.get ("/register",(req,res)=>{
    res.render("register")
})

router.get ("/print",(req,res)=>{
    res.render("examble")
})
router.get ("/figure",(req,res)=>{
    res.render("table")
})


module.exports = router;

// router.get ("/add",(req,res)=>{
//     res.render("register")
// })

