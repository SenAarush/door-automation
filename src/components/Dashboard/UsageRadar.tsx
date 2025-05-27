// components/UsageRadar.tsx
'use client';

import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';

export interface RadarDataPoint {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
}

interface UsageRadarProps {
  /** Data points to plot; defaults to built-in sampleData */
  data?: RadarDataPoint[];
  /** Chart container width (px or %); defaults to '100%' */
  width?: string | number;
  /** Chart container height in px; defaults to 300 */
  height?: number;
}

const sampleData: RadarDataPoint[] = [
  { subject: 'Math',      A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese',   A: 98,  B: 130, fullMark: 150 },
  { subject: 'English',   A: 86,  B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99,  B: 100, fullMark: 150 },
  { subject: 'Physics',   A: 85,  B:  90, fullMark: 150 },
  { subject: 'History',   A: 65,  B:  85, fullMark: 150 },
];

export const UsageRadar: React.FC<UsageRadarProps> = ({
  data = sampleData,
  width = '100%',
  height = 300,
}) => {
  return (
    <div
      className="overflow-hidden w-full rounded border border-stone-300"
      style={{ width, height }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageRadar;
