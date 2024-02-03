import React from 'react'

export const Index = (props) => {
  return (
    <div id='d1'>
       {
        props.b.map((item)=>{
            return <h2>Name = {item.Name}, Id = {item.Id}</h2>
        })
       }
    </div>
  )
}

export default Index;
