import React, { createContext } from 'react'
import ComA from './ComponentA';

const FirstName=createContext()

const App=()=>{
   return (<>
   <FirstName.provider  value={'robin islam'}>
<ComA/>
    </FirstName.provider>
    </>
   )
}

export default App;
export {FirstName}