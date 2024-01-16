const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/user', async (req, res) => {
    const user = new User(req.body)
    const token = await user.generateAuthToken()
    try {
        await user.save()
        res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/user/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send()
    }
})

router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/user/logout', auth, async (req, res) => {
    try {
        console.log('req =>>>>>>>>>>>>', req)
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()

        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

router.post('/user/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router