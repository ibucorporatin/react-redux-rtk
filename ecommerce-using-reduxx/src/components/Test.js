import React, { useEffect, useState } from 'react'

const Test = () => {
   const [arr, setarr] = useState([]);

    useEffect(() => {
        setArray(5)
    }, []);

   console.log(arr)
    const setArray=(n)=>{
        let parent=[]
        for (let i = 0; i < n.length; i++) {
            const chaild=[]
            for (let i = 0; i < n.length; i++) {
                        chaild.push(i)
            }
            parent.push(chaild)
            
        }
        
        setarr(parent)
           
    }
  return (
    <div>Test</div>
  )
}

export default Test