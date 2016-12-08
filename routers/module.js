import {renderEjs} from '../util';

let routers = [{
    path: '/module',
    callback: function (req, res) {
        var html = renderEjs('module.ejs');
        res.send(html);
    }
}]

export default routers;
