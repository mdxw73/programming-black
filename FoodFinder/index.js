const express = require('express')
var recipes = require('./potato_recipes.json')
const app = express()
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
app.listen(8090)