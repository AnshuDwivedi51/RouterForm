import React from 'react'
import RoutingForm from './component/Form/RoutingForm'
import Preview from './component/Preview/Preview'
import { Route, Routes } from 'react-router'
import Header from './component/Header/Header'
import Edit from './component/Edit/Edit'

function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/Add' element ={<RoutingForm/>} />
        <Route path='/preview' element ={<Preview/>} />
        <Route path='/edit' element ={<Edit/>} />

      </Routes>
    </div>
  )
}

export default App