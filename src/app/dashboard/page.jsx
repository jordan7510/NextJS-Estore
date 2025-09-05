"use client"
import { useRouter } from 'next/navigation';
import axios from "axios"
import toast from "react-hot-toast";

export  default function  Dashboard() {
  const router = useRouter()

  const handleLogout = async()=>{
    try {
      const response = await axios.get("/api/users/logout");
      console.log("response", response)
      if(response.data.success){
        toast.success(response.data.message)
        router.push("/login")
      }
    } catch (error) {
      console.error(error)
      toast.error(error.response.message)
    }
  }
  
  
  return (
    <div>
      <div>Dashboard</div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>

    </div>
  )
}
