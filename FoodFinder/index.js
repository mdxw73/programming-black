var recipes = require('./potato_recipes.json')
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.get('/', function(req, resp){
    resp.send('Hello world')
})
app.get('/ingredient/:id(\\d+)', function(req, resp){
    resp.send(req.params.id)
})
app.get('/potato', function(req, resp){
    let search = req.query.search
    let results = []
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i]
        if (recipes[i].title.includes(search)) {
            results.push(recipe.href)
        }
    }
    resp.send(results)
})
app.post('/new', function(req, res){
    let recipe = {"title": req.body.title, "href": req.body.href, "ingredients": req.body.ingredients, "title": req.body.thumbnail}
    recipes.push(recipe)
    res.send(recipes)
})
app.listen(8090)