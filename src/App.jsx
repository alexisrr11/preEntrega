import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

function App() {

  return (
    <>
     <Header/>
     <main>
        <Routes>
          <Route path='/' element={ <ItemListContainer/>} />
          <Route path='/product/:id' element={ <ItemDetailContainer/>} />
          <Route path='/carrito' element={ <h1>Carrito</h1>} />
        </Routes>
     </main>
     <Footer/>
    </>
  )
}

export default App
