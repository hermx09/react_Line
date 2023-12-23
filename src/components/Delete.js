import { Button } from '@mui/material'
import React from 'react'


const Delete = (props) => {
//const text = props.id;
 const handleDelete =() =>  {
   props.deleteFlg = true;
 }
  return (
    <div>
        <Button onClick={handleDelete()}>削除</Button>
    </div>
  )

}

export default Delete