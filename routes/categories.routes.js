const {Router} = require('express')
const Category = require('../models/Category')
const {check, validationResult} = require('express-validator')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find()
        return categories.length ? res.json(categories) : res.json({message: 'Нет категорий'})
    } catch(e) {
        return res.status(500).json({message: 'Что-то пошло не так'})
    }
})

router.post('/', [
    check('title').exists(),
    check('category').exists()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при добавлении категории'
            });
        }
        const {title, category} = req.body
        const candidate = await Category.findOne({category})
        if (candidate) {
            return res.status(400).json({message: 'Категория уже создана'})
        }
        const currentCategory = new Category({title, category})
        await currentCategory.save()
        return res.status(201).json({message: 'Категория создана'})
    } catch (e) {
        return res.status(500).json({message: 'Что-то пошло не так'})
    }
})

module.exports = router
