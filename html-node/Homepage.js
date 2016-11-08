
module.exports = function() {
    var fs = require('fs');
    
    this.mount = function(app) {
        app.get("/", function(req, res) {
            renderAppPage(res);
        });
    };
    
    function    renderAppPage(res) {
        fs.readFile('./app.html', function(err, html) {
            if (err)
                throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
    }
};

