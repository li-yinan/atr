import {renderEjs} from '../util';

let routers = [{
    path: '/config',
    callback: function (req, res) {
       res.send('/config');
    }
},{
    path: '/config/:id',
    callback: function (req, res) {
        var html = renderEjs('config.ejs');
        res.send(html);
    }
}]

export default routers;
