var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

/**
 * Route to verify username / password
 */
function router () {
    
    var routes = new express.Router();
    routes.use(cors());
    routes.use(bodyParser());
    routes.post('/',  (req, res) => {
        console.log('In items POST');
        var items = [
            {label:'Item 1', description: 'Description for Item 1'},
            {label:'Item 2', description: 'Description for Item 2'},
            {label:'Item 3', description: 'Description for Item 3'},
            {label:'Item 4', description: 'Description for Item 4'},
            {label:'Item 5', description: 'Description for Item 5'},
            {label:'Item 6', description: 'Description for Item 6'}
        ]
        console.log('Returning ', items)
        res.json(items);
    });
    return routes;
}

module.exports = router;