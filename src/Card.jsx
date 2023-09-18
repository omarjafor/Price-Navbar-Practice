const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw0e2e3398/Category-Landing/Category-Desktop/Mens/Desktop_Men_Walking_Shoes.jpg?sw=780" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New Shoes!</h2>
                    <p>If You like this shoes, Please buy Now! Other person is clicking...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;