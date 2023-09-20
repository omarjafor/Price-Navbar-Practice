import './App.css'
// import Card from './Card'
import Navbar from './Navbar/Navbar'
import Phones from './Phones/Phones'
import PriceOption from './PriceOption/PriceOptions'
import Recharts from './Recharts/Recharts'

function App() {

  return (
    <>
      <h1 className="text-3xl text-black font-bold rounded-lg py-2 bg-lime-600">
        Navbar Price Style with Reacts
      </h1>
      <Navbar></Navbar>
      <PriceOption></PriceOption>
      <Recharts></Recharts>
      <Phones></Phones>
      {/* <div className='grid grid-cols-3'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div> */}
    </>
  )
}

export default App