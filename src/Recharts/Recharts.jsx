import { LineChart, Line } from 'recharts';

const Recharts = () => {

    const studentData = [
        { id: 1, Math: 85, Science: 92, English: 78 },
        { id: 2, Math: 78, Science: 85, English: 90 },
        { id: 3, Math: 92, Science: 78, English: 86 },
        { id: 4, Math: 88, Science: 88, English: 89 },
        { id: 5, Math: 76, Science: 91, English: 84 },
        { id: 6, Math: 90, Science: 86, English: 87 },
        { id: 7, Math: 84, Science: 90, English: 92 },
        { id: 8, Math: 89, Science: 84, English: 80 },
        { id: 9, Math: 93, Science: 89, English: 91 },
        { id: 10, Math: 87, Science: 87, English: 85 }
    ];


    return (
        <div>
            <LineChart width={400} height={400} data={studentData}>
                <Line type="monotone" dataKey="Math" stroke="green" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="Science" stroke="green" strokeDasharray="3 4 5 2" />
                <Line type="monotone" dataKey="English" stroke="green" />
            </LineChart>
        </div>
    );
};

export default Recharts;