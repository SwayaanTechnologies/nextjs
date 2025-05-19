// import LineChart from './LineChart';

// // app/dashboard/page.tsx

// export default function Dashboard() {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <LineChart />
//         </div>
//     );
// }

// app/dashboard/page.tsx
"use client";

import { useState } from 'react';

export default function DashboardPage() {
    const [name, setName] = useState('');
    console.log("Dashboard Client Component");

    return (
        <div>
            <h1>Dashboard</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <p>Hello, {name}</p>
        </div>
    );
}