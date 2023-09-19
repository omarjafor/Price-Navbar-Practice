import Feature from "./Feature";

const PriceOption = ({ option }) => {
    const {name, price, features} = option;
    return (
        <div className="bg-lime-800 text-white rounded-lg py-4 relative">
            <h2 className="font-bold mb-3">
                <span className="text-4xl"> {price} </span>
            </h2>
            <h4 className="text-2xl font-bold"> {name} </h4>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}
                ></Feature>)
            }
            <button className="bg-fuchsia-600 w-2/4 rounded-xl p-3 font-bold">Subscribe Now</button>
        </div>
    );
};

export default PriceOption;