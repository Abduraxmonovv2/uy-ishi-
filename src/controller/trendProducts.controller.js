import { getData, setData } from "../helpers/fileData.js";

class TrendProductscontroller{

   async getAll(req, res){
    try{
        const trendItems=await getData ("trendProducts.json")

        return res.status(200).json({
            success:true,
            data:trendItems
        })
    }catch(err){
        console.log(`getAll da error : ${err.message}`);
        
        return res.status(500).json({
            success:false,
            message:`serverda error bor`
        })
    }
}
async getId(req, res){
    try{
        const id = +req.params.id
        const trendItems = await getData("trendProducts.json")
        const item = trendItems.find(el => el.id === id)

        if(!item){
            return res.status(404).json({
                success: false,
                message: "ma'lumot topilmadi"
            })
        }

        return res.status(200).json({
            success: true,
            data: item
        })
    }catch(err){
        console.log(`getId da error: ${err.message}`)

        return res.status(500).json({
            success: false,
            message: "Serverda xatolik bor"
        })
    }
}

async create(req, res){
    try{
        const trendItems= await getData("trendProducts.json")

        const newItem={
            ...req.body,
            id: trendItems.length ? trendItems.at(-1).id + 1 : 1
        }
        trendItems.push(newItem)
        await setData("trendProducts.json", trendItems)

        return res.status(201).json({
            success:true,
            message:`new trend item qoshildi`,
            data:newItem
        })
    }catch(err){
        console.log(`createda error bor : ${err.message}`);
        return res.status(500).json({
            success:false,
            message:`serverda error bor`
        })
    }
}

async update(req, res){
    try{
        const id=+req.params.id
        const items=await getData("trendProducts.json")

        const index=items.findIndex(el=>el.id===id)

        if(index===-1){
            return res.status(404).json({
                success:false,
                message:`mahsulot topilmadi`
            })
        }


            items[index]={
                ...req.body,
                id:id
            }
            await setData("trendProducts.json", items)

            return res.status(200).json({
                success:true,
                message:`trend mahsulot ozgartirildi`,
                data: items[index]
            })
}catch(err){
        console.log(`update da error bor : ${err.message}`);
    return res.status(500).json({
        success:false,
        message:`serverda xatoli bor`
    })    
    }
}

async deleteItem(req, res){
    try{
        const id=+req.params.id
     const deleted=await getData("trendProducts.json")

     const index=deleted.findIndex(el=>el.id===id)

     if(index===-1){
        return res.status(404).json({
            success:false,
            message:`mahsulot topilmadi`
        })
     }

     deleted.splice(index, 1)
     await setData("trendProducts.json", deleted)

     return res.status(200).json({
        success: true,
        message:"trend mahsulot ochirildi"
     })
    }catch(err){
        console.log(`deleteItemda error : ${err.message}`);
        return res.status(500).json({
            success:false,
            message:`serverda error bor`
      })
    }
  }
}

export default new TrendProductscontroller()