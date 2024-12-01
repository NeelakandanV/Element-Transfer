import React, { useEffect, useState } from 'react'

function TransferElement() {
    let Items_Array = ["Item-1","Item-2","Item-3","Item-4","Item-5","Item-6","Item-7","Item-8"]
    const[bucket1,setBucket1] = useState(Items_Array)
    const[bucket2,setBucket2] = useState([])
    const[items,setitems] = useState([])

    //handle Selected Items
    const handleSelect=(val)=>{
        const select = document.querySelector(`.${val}`)
        select.classList.add("SelectedItem")
        if(items.includes(val)){
            select.classList.remove("SelectedItem")
            setitems(items.filter(text=>text!=val))
        }
        else{
            setitems([...items,val])
        }
    }
    // console.log(items)

    //handle Add function
    const handleAdd =()=>{
        for(let check of items){
            if(!bucket1.includes(check)){
                alert("No Adding allowed from bucket2")
                return false
            }
        }

        let newArr =[];
        for(let data of bucket1){
            if(!items.includes(data)) newArr.push(data)
        }
        setBucket1(newArr)
        setBucket2([...bucket2,...items])
        setitems([])
    }

    //handle Remove function
    const handleRemove = ()=>{
        for(let check of items){
            if(!bucket2.includes(check)){
                alert("Removing not allowed from bucket1")
                return false
            }
        }

        let newArr =[];
        for(let data of bucket2){
            if(!items.includes(data)) newArr.push(data)
        }
        setBucket1([...bucket1,...items])
        setBucket2(newArr)
        setitems([])
    }

    //handle Add all function
    const handleAddAll = ()=>{
        setBucket1([])
        setBucket2(Items_Array)
    }

    //handle Remove all function
    const handleRemoveAll = ()=>{
        setBucket2([])
        setBucket1(Items_Array)
    }


  return (
    <div className='App'>
        <h2>Element Transfer</h2>
        <div className='MainParent'>
            <div className="Bucket1">
              {bucket1.map((item,idx)=>(
                <p key={idx} className={`Bucket_Items ${item}`} onClick={()=>{handleSelect(item)}}>{item}</p>
              ))}
            </div>
            <div className="Btn_Bucket">
              <button className='Add Btn' onClick={()=>handleAdd()}>Add</button>
              <button className='Remove Btn' onClick={()=>handleRemove()}>Remove</button>
              <button className='AddAll Btn' onClick={()=>handleAddAll()}>Add All</button>
              <button className='RemoveAll Btn' onClick={()=>handleRemoveAll()}>Remove All</button>
            </div>
            <div className="Bucket2">
                {bucket2.map((item,idx)=>(
                    <p key={idx} className={`Bucket_Items ${item}`} onClick={()=>{handleSelect(item)}}>{item}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TransferElement