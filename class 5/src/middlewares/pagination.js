const pagination = (req, res, next) => {
    const { page, size } = req.query;
    req.pagination = {
        limit: parseInt(size) || 5,
        offset: parseInt(page - 1) * size || 0
    }
    next()
}
module.exports = pagination