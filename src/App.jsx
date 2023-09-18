import './App.css'
import Card from './Card'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <h1 className="text-3xl text-black font-bold rounded-lg py-2 bg-lime-600">
        Navbar Price Style with React
      </h1>
      <Navbar></Navbar>
      <Card></Card>
    </>
  )
}

export default App