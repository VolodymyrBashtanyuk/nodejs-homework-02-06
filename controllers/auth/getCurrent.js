const getCurrent = (req, res) => {
    const { email, subscription } = req.user;

    res.json({
            status: "ok",
            code: 200,
            user: {
                email,
                subscription,
            }
        })
}

module.exports = getCurrent;