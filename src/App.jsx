import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl text-black font-bold rounded-lg py-2 bg-lime-600">
        React Navbar Price 
      </h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw0e2e3398/Category-Landing/Category-Desktop/Mens/Desktop_Men_Walking_Shoes.jpg?sw=780" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App