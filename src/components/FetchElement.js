import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function FetchGet({ title }) {
    const[data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(title)}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            },
          }
        )
          .then((resp) => resp.json())
          .then((data) => {
            setData(data.records.length)
          })
        }, [title])
    return (
        <>
            {data}
        </>
    )
}
FetchGet.propTypes = {
  title: PropTypes.string.isRequired
}

export default FetchGet
 
