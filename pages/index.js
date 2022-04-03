import {useState, useEffect} from "react"
import {PageTitle} from "../components/PageTitle"
import {Button} from "../components/Button"
import {User} from '../components/User'

// CRA version of data loading (assesment 4)

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState([])
  useEffect(()=> {
    
    async function loadExternalDataWithCRA() {
      // const res = await get(firebase data) - assignment 4
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUserData(data)
    }
    loadExternalDataWithCRA()
  },[])
  
  return (
    <>
      <PageTitle title="storefront" tagline="featured products"/>
      <div style={{textAlign:"center"}}>
        <Button
        style={{margin:"2rem 0 0"}}
        onClick={()=>setIsLoading(!isLoading)}
        >Get Some Data</Button>
        {
          // LHS = false || RHS = true
          isLoading && <p style={{padding:"1rem"}}>This Is My Output</p>
        }
      </div>
      <main>
        {
          userData.map(({id, name, email, username}) => <User key={id} name={name} email={email} username={username}/>)
        }
      </main>
    </>
  )
}
