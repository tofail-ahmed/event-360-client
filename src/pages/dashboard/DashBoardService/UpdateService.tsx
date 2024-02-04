import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateService = () => {
      const {_id,service,description,features,image}=useLoaderData()
      // console.log(_id)
  return (
    <div>
<form >

      <input type="text" name='service' defaultValue={service}/>
</form>
    </div>
  )
}

export default UpdateService