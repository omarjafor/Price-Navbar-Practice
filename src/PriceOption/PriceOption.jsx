const PriceOption = ({ option }) => {
    const {name, price, feature} = option;
    return (
        <div>
            <h2>
                <span className="text-7xl"> {price} </span>
                <span className="text-2xl"> /month </span>
            </h2>
            <h4 className="text-3xl"> {name} </h4>
        </div>
    );
};

export default PriceOption;