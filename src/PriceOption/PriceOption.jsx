import Feature from "./Feature";

const PriceOption = ({ option }) => {
    const {name, price, features} = option;
    return (
        <div className="bg-lime-800 text-white rounded-lg py-4">
            <h2 className="font-bold mb-3">
                <span className="text-4xl"> {price} </span>
            </h2>
            <h4 className="text-2xl font-bold"> {name} </h4>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}
                ></Feature>)
            }
        </div>
    );
};

export default PriceOption;