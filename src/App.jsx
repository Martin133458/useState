import React from 'react'
import './App.css'

import { useState } from 'react'

const App = () => {

   const [num,setNum]=useState(0)
   const [text,setText]=useState('')
   const [img,setImg]=useState(false)
   const [open,setOpen]=useState('ОТКРЫТЬ')


   const change = () => {
     setImg(!img)
     setOpen(img ? 'ОТКРЫТЬ' : 'ЗАКРЫТЬ')
   }




   console.log(num);
   

  return (
   <>
<div className="box">
  <button onClick={change}>{open} ФОТО</button>
  {img &&  <img src="https://media.npr.org/assets/img/2015/09/23/ap_836720500193-d90a20e2b8d735f74d436f36054eb3dc2bd96696.jpg?s=1100&c=85&f=jpeg" alt="" /> }
 
</div>




   <div className="box">
    <h4>{text}</h4>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
   </div>


   <div className="box">

    <h4>{num}</h4>
    <button onClick={() => setNum(num + 1)}>Добавить число</button>
    <button onClick={() => setNum(num - 1)}>Уменьшить число</button>
    <button onClick={() => setNum(num * 2)}>Удвоить число</button>
    <button onClick={() => setNum(num / 2)}>Уменьшить в 2 раза</button>
    <button onClick={() => setNum(num / 0)}>Oбнулить</button>
    <button onClick={() => setNum(num / num)}>1</button>
   </div>

   
   </>
  )
}

export default App