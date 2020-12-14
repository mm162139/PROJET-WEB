const router = require('express').Router();
let Widget = require('../models/widget.model');

router.route('/').get((req, res) => {
    Widget.find()
        .then(widgets => res.json(widgets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newWidget = new Widget({
        username,
        description,
        duration,
        date,
    });

    newWidget.save()
        .then(() => res.json('Widget added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Widget.findById(req.params.id)
        .then(widget => res.json(widget))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Widget.findByIdAndDelete(req.params.id)
        .then(() => res.json('Widget deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Widget.findById(req.params.id)
        .then(widget => {
            widget.username = req.body.username;
            widget.description = req.body.description;
            widget.duration = Number(req.body.duration);
            widget.date = Date.parse(req.body.date);

            widget.save()
                .then(() => res.json('Widget updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;