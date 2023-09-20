import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Recharts = () => {

    const studentData = [
        { id: 1, name: "Student 1", Math: 85, Science: 92, English: 25 },
        { id: 2, name: "Student 2", Math: 55, Science: 25, English: 90 },
        { id: 3, name: "Student 3", Math: 92, Science: 78, English: 35 },
        { id: 4, name: "Student 4", Math: 30, Science: 45, English: 89 },
        { id: 5, name: "Student 5", Math: 76, Science: 91, English: 84 },
        { id: 6, name: "Student 6", Math: 67, Science: 86, English: 50 },
        { id: 7, name: "Student 7", Math: 84, Science: 50, English: 92 },
        { id: 8, name: "Student 8", Math: 45, Science: 84, English: 65 },
        { id: 9, name: "Student 9", Math: 93, Science: 95, English: 91 },
        { id: 10, name: "Student 10", Math: 87, Science: 87, English: 85 }
    ];


    return (
        <div>
            <LineChart width={800} height={400} data={studentData}>
                <XAxis dataKey='id'></XAxis>
                <YAxis ></YAxis>
                <Line type="monotone" dataKey="Math" stroke="green" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="Science" stroke="green" strokeDasharray="3 4 5 2" />
                <Line type="monotone" dataKey="English" stroke="green" />
            </LineChart>
        </div>
    );
};

export default Recharts;