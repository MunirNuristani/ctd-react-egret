import { useState } from 'react'

function FetchGet({ title }) {
    const[data, setData] = useState([])
    
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(title)}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            },
          }
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setData(data.records.length)
          })
    return (
        <>
            {data}
        </>
    )
}

export default FetchGet
 
