import { getDb } from "@/app/utils/connectDB"

export const GET = async( request, {params}) =>{
    const db = await getDb()
    const getBlogDetails = db.collection('blog')
    
    try {
        const blog = await getBlogDetails.findOne({_id : params.id})
        return Response.json(blog)
    } catch (error) {
        console.log('error:', error)
        
    }
}