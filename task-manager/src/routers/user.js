const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router()
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token})
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) =>{
    console.log(req)
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        res.send({user, token})
    } catch(e){
        console.log(e)
res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) =>{
    console.log(req)
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        })
        await req.user.save();
        res.send();
    } catch(e){
        console.log(e)
res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) =>{
    console.log(req)
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch(e){
        console.log(e)
res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})



router.patch('/users/me', auth, async (req, res)=>{
    const updates = Object.keys(req.body)
    const alllowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOPeration = updates.every((update) => alllowedUpdates.includes(update))
    if(!isValidOPeration){
        return res.status(400).send({error: 'Invalid updates'})
    }
    try{
updates.forEach((update) => req.user[update]=req.body[update])
await req.user.save()  
res.send(req.user)
} catch(e){
res.send(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res)=>{
    try {
       await req.user.deleteOne()
        res.send(req.user)
    } catch(e) {
        console.log(e)
        res.status(500).send(e);
    }
})


module.exports = router 