import {renderEjs} from '../util';

let routers = [{
    path: '/',
    callback: function (req, res) {
        var html = renderEjs('root.ejs');
        res.send(html);
    }
}]

export default routers;
