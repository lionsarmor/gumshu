const express = require('express');
const mongodb = require('mongodb')
const router = express.Router();


// GET Posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
});

// ADD Post
router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// DELETE Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});


async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    // change mongodb database address for new project
    ('mongodb+srv://admin1:@Urimeshi90@cluster0-mk3hl.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return client.db('vue_express').collection('posts')
}

module.exports = router;
