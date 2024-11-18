import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "../../config"

interface Blog {
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}

export const useBlogs = () => {

    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)


    const fetchBlogs = async () => {
        const res = await axios.get(`${SERVER_URL}/api/v1/blog/bulk`, {
            headers : {
                Authorization : localStorage.getItem("token")
            }})
            console.log(res.data.blogs);
            setBlogs(res.data.blogs)
            setLoading(false)
    }

    useEffect(()=>{
       fetchBlogs()
    },[])

    return {
        loading, 
        blogs
    }

}