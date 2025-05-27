'use client';

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { UserProfileIcon } from '../icons/UserProfileIcon';

const data = [
    {
        name: "7 PM", // Sat 7 PM - 8 PM
        successful: 25,
        failed: 2,
    },
    {
        name: "8 PM", // Sat 8 PM - 9 PM
        successful: 30,
        failed: 1,
    },
    {
        name: "9 PM", // Sat 9 PM - 10 PM
        successful: 18,
        failed: 0,
    },
    {
        name: "10 PM", // Sat 10 PM - 11 PM
        successful: 12,
        failed: 3,
    },
    {
        name: "11 PM", // Sat 11 PM - 12 AM
        successful: 8,
        failed: 1,
    },
    {
        name: "12 AM", // Sun 12 AM - 1 AM
        successful: 4,
        failed: 0,
    },
    {
        name: "1 AM", // Sun 1 AM - 2 AM
        successful: 2,
        failed: 1,
    },
];

export function ActivityChart() {
    return (
        <div className='overflow-hidden w-full h-full rounded border border-stone-300'>
            <div className='flex items-center px-4 pt-4 gap-2'>
                <UserProfileIcon className='w-4 h-4' />
                <span className='text-sm font-medium'>
                    Activity
                </span>
            </div>
            <div className='h-64 p-4'>
                <ResponsiveContainer
                    width={'100%'}
                    height={`100%`}
                >
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                        <XAxis dataKey="name" padding={{ left: 20, right: 20 }} stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255,255,255,0.8)',
                                borderRadius: '5px',
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="successful"
                            name="Successful Access"
                            stroke="#8884d8"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="failed"
                            name="Failed Attempts"
                            stroke="#82ca9d"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
export default ActivityChart;
