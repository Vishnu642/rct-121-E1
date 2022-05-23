import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";


function App() {
  const [loading,setLoading] = useState(true)
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [salarySort,setSalarySort] = useState("ASC")

  useEffect(()=>{
      axios({
        method:"GET",
        url:"https://json-server-mocker-masai.herokuapp.com/candidates",
        params:{
          _page:page,
          _limit:5,
          _sort:"salary",
          _order:`${salarySort}`

        }
      })
      .then((res)=>{
          setData(res.data)
          setLoading(false)
      })
      .catch((err)=>{
        console.log("error")
      })
  },[page,salarySort])

  return (
    <div className="App">
      <div>
       {loading && <div  id="loading-container">...Loading</div>}
         <Button id="SORT_BUTTON" handleclick={setSalarySort("DESC")}  title={`Sort by Ascending Salary`} />
        <Button title="PREV" onClick={()=>setPage(page-1)}  id="PREV" />
        <Button id="NEXT" onClick={()=>setPage(page+1)} title="NEXT" /> 
        
  
      </div>
      {data.map((item) => (
        <CandidateCard key={item.id} {...item} />
      ))}
    </div>
    
  )
}

export default App
