const Category = require ("../model/categoryModel")
const SubCategory = require ("../model/subcategoryModel")

let categoriController = async (req, res) => {
    const { name, description} = req.body
    
    let duplicateCategory = await Category.find ({name})

    if (duplicateCategory.length > 0) {
        return res.send ( {
            error : " Category already exist. Try another"
        })
    }

    let category = new Category ({
        name,
        description,
    })

    category.save()
    res.send({succes : " Categoricreated succesfully "})

}

let categoriStatusController = async (req, res) => {
    let { name, status} = req.body
    console.log(name, status)

    if (status == "rejected" || status == "waiting") {

        let updateCategory = await Category.findOneAndUpdate({name},{$set:{isActive:false, status:status}},{new:true})
        return res.send ({succes: "status Updated"})

    }
    
    else if (status == "approved") {

        let updateCategory = await Category.findOneAndUpdate({name},{$set:{isActive:true, status:status}},{new:true})
        return res.send ({succes : "status approved"})

    }
}

// ======sub Category==== //
let subCategoriController = async (req, res) => {
    const { name, description, category} = req.body
    
    let duplicateSubCategory = await SubCategory.find ({name})

    if (duplicateSubCategory.length > 0) {
        return res.send ( {
            error : " Category already exist. Try another"
        })
    }

    let subCategory = new SubCategory ({
        name,
        description,
        category
    })

    subCategory.save()
    console.log(subCategory._id)

    await Category.findOneAndUpdate({_id: subCategory.category},{$push:{subCategory: subCategory._id}},{new:true})

    res.send({succes : " sub Category is Created succesfully "})

}
let subcategoriStatusController = async (req, res) => {
    let { name, status} = req.body
    console.log(name, status)

    if (status == "rejected" || status == "waiting") {

        let updateCategory = await SubCategory.findOneAndUpdate({name},{$set:{isActive:false, status:status}},{new:true})
        return res.send ({succes: "status Updated"})

    }
    
    else if (status == "approved") {

        let updateCategory = await SubCategory.findOneAndUpdate({name},{$set:{isActive:true, status:status}},{new:true})
        return res.send ({succes : "status approved"})

    }
}


module.exports = {categoriController ,categoriStatusController, subCategoriController, subcategoriStatusController}