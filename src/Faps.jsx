import React, { useState } from 'react'
import { faqs } from './faqs';
const Faps = () => {
    let [fetchValue,setfetchValue] = useState(faqs[0].id)
    let items = faqs.map((values,i)=>{
        let details = {
            values,
            fetchValue,
            setfetchValue
        }
        return(
            <AskQuestion allDetails = {details} key={i}/>
        )
    })
  return (
    <div>
        <h1>FAQS(Frequently ask question)</h1>
      <div className="faqouter">
      {items}
      </div>
    </div>
  ) 
}

export default Faps

function AskQuestion({allDetails}){
    let {values,fetchValue,setfetchValue} = allDetails
    return (
        <>
        <div className="faqitems" >
        <h2 onClick={()=>setfetchValue(allDetails.values.id)}>{allDetails.values.question}</h2>
        <p className={fetchValue == allDetails.values.id?'activeAns':''}>{allDetails.values.ans}</p>
        </div>
      </>
    )
}