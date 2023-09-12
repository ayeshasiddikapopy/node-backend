const express = require("express")
const router = express.Router()
const{ categoriController , categoriStatusController , subCategoriController ,subcategoriStatusController }= require("../../controller/categoriController")


router.post("/createCategory",categoriController)
router.post("/categoryStatus",categoriStatusController)
router.post("/subCategory",subCategoriController)
router.post("/subCategoryStatus",subcategoriStatusController)


module.exports = router