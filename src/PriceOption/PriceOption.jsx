const PriceOption = ({ option }) => {
    const {name, price, feature} = option;
    return (
        <div>
            <h2>
                <span className="text-4xl"> {price} </span>
            </h2>
            <h4 className="text-3xl"> {name} </h4>
        </div>
    );
};

export default PriceOption;