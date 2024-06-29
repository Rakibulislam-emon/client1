import { getDb } from "@/app/utils/connectDB"

export const GET = async( request, {params}) =>{
    const db = await getDb()
    const getBlogDetails = db.collection('blog')
    
    try {
        const blog = await getBlogDetails.findOne({_id : params.id})
        return Response.json(blog)
    } catch (error) {
        console.log('error:', error)
        return Response.json('error :', error)
        
    }
}

// delete blog

export const DELETE = async(request, {params}) =>{
    console.log('params:', params)
    const db = await getDb()
    const deleteBlog = db.collection('blog')
    
    try {
        const find = await deleteBlog.findOne({_id : params.id})
        // problem
      const dlt =  await deleteBlog.deleteOne(find)
        return Response.json('Blog deleted successfully')
    } catch (error) {
        console.log('error:', error)
        return Response.json('error :', error)
        
    }
  }

//   delete problem 