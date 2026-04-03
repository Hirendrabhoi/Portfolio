import { useEffect, useState } from "react"
import Contacts from "./pages/components/Contacts"
import Layout from "./pages/Layout"
import Loader from "./pages/components/common/loader"

function App() {

  const [Loading,setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },2000)

    return ()=>clearTimeout(timer)
  },[])

  if(Loading){
    return <Loader/>
  }
  return <Layout/>
}

export default App
