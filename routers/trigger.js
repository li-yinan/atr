import {renderEjs} from '../util';

let routers = [{
    path: '/trigger',
    callback: function (req, res) {
        res.send('trigger');
    }
},{
    path: '/trigger/:id',
    callback: function (req, res) {
        const id = req.params.id;
        let param = {
            id: req.params.id,
            param: JSON.stringify(req.query)
        }
        var html = renderEjs('trigger.ejs', param);
        res.send(html);
    }
}]

export default routers;
