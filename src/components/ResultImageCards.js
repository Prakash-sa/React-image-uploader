import React, { useEffect, useState } from 'react'
import { ResultImageCard } from './ResultImageCard'
import { useStateValue } from "./StateProvider";

export const ResultImageCards = () => {
    const [{ images }, dispatch] = useStateValue();
    const [imageProperties,setImageProperties]=useState([])
    useEffect(()=>{
        setImageProperties(images[0]);
        console.log("Result Card Images:-",images[0])
    },[images])
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {imageProperties.length>0 ?
        imageProperties.map((imagePropertie, idx) => {
                return <ResultImageCard image={imagePropertie} key={idx}/>
            })
            :null
        }
      </div>
    </div>
  )
}

export default ResultImageCards