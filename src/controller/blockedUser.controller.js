
import { getData, setData } from "../helpers/fileData.js"

class BlockedUsercontroller{

    async getAll(req, res){
        try{
            const blockedUser = await getData("blockedUser.json")

            return res.status(200).json({
                success: true,
                data: blockedUser
            })
        }catch(err){
            console.log(`getAll da error: ${err.message}`)

            return res.status(500).json({
                success: false,
                message: "serverda error bor"
            })
        }
    }

    async getId(req, res){
        try{
            const id = +req.params.id;
            const blockedUser = await getData("blockedUser.json")
            const item = blockedUser.find(el => el.id === id)

            if (!item) {
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
                message: "serverda error bor"
            })
        }
    }

    async create(req, res){
        try{
            const blockedUser = await getData("blockedUser.json")

            const newItem = {
                ...req.body,
                id: blockedUser.length ? blockedUser.at(-1).id + 1 : 1
            }

            blockedUser.push(newItem)
            await setData("blockedUser.json", blockedUser)

            return res.status(201).json({
                success: true,
                message: "Blocked user yaratildi",
                data: newItem
            });
        }catch(err){
            console.log(`create da error: ${err.message}`)

            return res.status(500).json({
                success: false,
                message: "serverda error bor"
            })
        }
    }

    async update(req, res){
        try {
            const id = +req.params.id;
            const blockedUser = await getData("blockedUser.json")
            const index = blockedUser.findIndex(el => el.id === id)

            if (index===-1){
                return res.status(404).json({
                    success: false,
                    message: "ma'lumot topilmadi"
                })
            }

            blockedUser[index]={
                ...req.body,
                id: id
            }

            await setData("blockedUser.json", blockedUser)

            return res.status(200).json({
                success: true,
                message: "Blocked user yangilandi",
                data: blockedUser[index]
            });
        }catch(err){
            console.log(`update da error: ${err.message}`)

            return res.status(500).json({
                success: false,
                message: "serverda error bor"
            })
        }
    }

    async deleteItem(req, res) {
        try {
            const id = +req.params.id;
            const blockedUser = await getData("blockedUser.json")
            const index = blockedUser.findIndex(el => el.id === id)

            if (index === -1) {
                return res.status(404).json({
                    success: false,
                    message: "ma'lumot topilmadi"
                })
            }

            blockedUser.splice(index, 1)
            await setData("blockedUser.json", blockedUser)

            return res.status(200).json({
                success: true,
                message: "Blocked user o'chirildi"
            })
        }catch(err){
            console.log(`deleteItem da error: ${err.message}`)

            return res.status(500).json({
                success: false,
                message: "serverda error bor"
            })
        }
    }
}

export default new BlockedUsercontroller()
