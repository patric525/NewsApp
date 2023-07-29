import React, { useEffect, useState } from 'react'
import '../css/Home.css'

const Health = () => {
  document.title='NoteApp | Health'
  const d = new Date()
  const date = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  const [data, setData] = useState([])
  const getdata = async () => {
    const data = await fetch(`https://newsapi.org/v2/everything?q=health&from=${year}-0${month}-${date}&sortBy=publishedAt&apiKey=2a80159030004d04aa1d1d77f09fce1f`)
    const res = await data.json()
    if (res) {
      console.log(res.articles);
      setData(res.articles);
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div className='mainhomcon'>
      <div className="homecard">
        {
          data.map((val, key) => {
            return (
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

export default Health
