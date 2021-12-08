const express = require("express");
const router = express.Router();
const Campus = require("./models/campus");

router.get('/', (req, res) => {
    console.log('/ route called');
    res.send("<h1>welcome to my api </h1>");
})

router.get('/campus', async (req, res) => {
    console.log('/ route called');
    try{
        console.log(await Campus.find())
        res.json(await Campus.find());
    }
    catch(e){console.log(e); res.sendStatus(500);}
   
});

router.get('/campus/:id', async (req, res) => {
    console.log('/ route called');
    try{
       
        res.json(await Campus.findById(req.params.id));
    }
    catch(e){console.log(e); res.sendStatus(500);}
   
});

router.post('/campus/create', async (req, res) => {
    console.log('/ route called');
    try{
       
        res.json(await Campus.create(req.body));
    }
    catch(e){console.log(e); res.sendStatus(500);}
   
});


router.put('/campus/update/:id', async (req, res) => {
    console.log('/ route called');
    try{
       
        res.json(await Campus.findByIdAndUpdate(req.params.id, { $set: req.body}));
    }
    catch(e){console.log(e); res.sendStatus(500);}
   
});

router.delete('/campus/delete/:id', async (req, res) => {
    console.log('/ route called');
    try{
       
        res.json(await Campus.findByIdAndDelete(req.params.id));
    }
    catch(e){console.log(e); res.sendStatus(500);}
   
});


module.exports = router