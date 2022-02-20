const express = require('express'); 
const server = express();
const routes = express.Router()
port = 5000

server.set('view engine', 'ejs')

routes.get('/', (req, res) => {
    res.render('index')
})

server.use(express.static('public'))
server.use(routes)



server.listen(port, () => {
    console.log('Server is running')
});


