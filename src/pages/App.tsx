import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Detect from './Detect'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detect" element={<Detect/>} />
      </Routes>
    </BrowserRouter>
  )
}
