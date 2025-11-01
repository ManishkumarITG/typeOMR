const defaultErrorHandle = () => {
    if (err) {
        return res.json({
            "data": "something gonna wrong",
            error: err
        })
    }
}

module.exports = defaultErrorHandle