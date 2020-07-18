import Reaction from "../models/reaction.model";

exports.update = function(req, res) {
    Reaction.update(req.params.id, req.body, function(err, result) {
        if (err) res.send(err);
        else {
            res.json({result: result});
        }
    })
}