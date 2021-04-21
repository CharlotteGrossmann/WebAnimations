const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Server is connected'
    });
};

module.exports.saySomething = saySomething;