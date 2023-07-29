import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import { useParams } from 'react-router-dom'

const Search = () => {
  const d= new Date()
  const date = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  const {query}=useParams()
  const [data, setData] = useState([])
  const[error, setError]=useState()
  const getdata = async (query) => {
    const data = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${year}-0${month}-${date}&sortBy=publishedAt&apiKey=2a80159030004d04aa1d1d77f09fce1f`)
    const res = await data.json()
    if (res.articles.length===0) {
      setError(0)
    }
    else{
      console.log(res.articles);
      setData(res.articles)
    }
  }
  useEffect(() => {
    setError(1)
    console.log(query);
    getdata(query)
  }, [query])
  if(error===0){
    return(
      <h1 className='h1'>Sorry, no data found</h1>
    )
  }
  else{
    return (
      <div className='mainhomcon'>
      <div className="homecard">
        {
          data.map((val)=>{
            return(
              <div>
          <div>
            <img src={val.urlToImage} alt={val.source.name} />
          </div>
          <div className='title'>
            <p>{val.title}</p>
          </div>
          <div className="description">
            <p>{val.description}</p>
          </div>
        </div> 
            )
          })
        }
      </div>
    </div>
    )
  }
 
}

export default Search
