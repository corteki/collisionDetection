import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config';
import open from 'open';
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html')); // alle requests krijgen index.html -> SPA
});

app.listen(port, function(err) { // express starten op de port 3000 en opent op localhost:3000
    if(err) {
        console.log(err); 
    } else {
        open(`http://localhost:${port}`);  
    }
});