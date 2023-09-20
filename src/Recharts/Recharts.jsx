import { LineChart, Line } from 'recharts';

const Recharts = () => {

    const studentData = [
        { id: 1, subject: "Math", marks: 85 },
        { id: 2, subject: "Math", marks: 78 },
        { id: 3, subject: "Math", marks: 92 },
        { id: 4, subject: "Math", marks: 88 },
        { id: 5, subject: "Math", marks: 76 },
        { id: 6, subject: "Math", marks: 90 },
        { id: 7, subject: "Math", marks: 84 },
        { id: 8, subject: "Math", marks: 89 },
        { id: 9, subject: "Math", marks: 93 },
        { id: 10, subject: "Math", marks: 87 }
    ];


    return (
        <div>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Recharts;