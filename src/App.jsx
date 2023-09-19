import './App.css'
// import Card from './Card'
import Navbar from './Navbar/Navbar'
import PriceOption from './PriceOption/PriceOption'

function App() {

  return (
    <>
      <h1 className="text-3xl text-black font-bold rounded-lg py-2 bg-lime-600">
        Navbar Price Style with React
      </h1>
      <Navbar></Navbar>
      <PriceOption></PriceOption>
      {/* <div className='grid grid-cols-3'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div> */}
    </>
  )
}

export default App