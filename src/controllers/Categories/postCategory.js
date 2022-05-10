const postCategory = async (req, res, next) => {
    const { name } = req.body;

    try {
        let newCategory = await Category.findOrCreate({
            where: {
                name,
            }
        })
        if (newCategory[1]) {
            types.push(newCategory[0].name)
            return res.status(200).send(newCategory[0])
        } else {
            return res.status(200).send("Category already exists.")
        }
    } catch (error) {
        next(error);
    }
}


module.exports = postCategory;
