import PriceOption from "./PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99 per month",
            "features": [
                "Access to cardio equipment",
                "Limited access to weightlifting area",
                "Locker rental available"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99 per month",
            "features": [
                "Full access to all gym areas",
                "Unlimited group fitness classes",
                "Personal trainer consultation",
                "Sauna and steam room access"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "price": "$19.99 per month",
            "features": [
                "Access to cardio equipment",
                "Limited access to weightlifting area",
                "Valid student ID required",
                "Locker rental available"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": "$79.99 per month",
            "features": [
                "Access for two adults and two children",
                "Full access to all gym areas",
                "Unlimited group fitness classes",
                "Childcare services available"
            ]
        }
    ]

    return (
        <div className="m-10">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-2 gap-6">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;