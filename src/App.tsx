import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Collections from './pages/Collections';
import UserShoppingCart from './pages/UserShoppingCart';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<LandingPage/>} />

        {/* Other pages */}
        <Route path="/collections" element={<Collections/>} />
        <Route path="/shoppingcart" element={<UserShoppingCart/>} />
      </Routes>
    </>
  )
}

export default App
