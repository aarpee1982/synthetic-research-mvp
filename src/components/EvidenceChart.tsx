"use client";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export type EvidenceSeries = {
  key: string;
  label: string;
  color: string;
  dashed?: boolean;
};
export type EvidenceDatum = { year: string; [key: string]: string | number };
export default function EvidenceChart({
  data,
  series,
  unit,
  label,
  domain,
  ticks,
}: {
  data: EvidenceDatum[];
  series: EvidenceSeries[];
  unit: string;
  label: string;
  domain?: [number | "auto", number | "auto"];
  ticks?: number[];
}) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <div className="smr-evidence-chart" role="img" aria-label={label}>
      <span className="smr-chart-unit">{unit}</span>
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <LineChart
          data={data}
          margin={{ top: 28, right: 24, left: 0, bottom: 5 }}
          accessibilityLayer
        >
          <CartesianGrid vertical={false} stroke="#d9dfe4" />
          <XAxis
            dataKey="year"
            axisLine={{ stroke: "#8b949c" }}
            tickLine={false}
            tick={{ fill: "#52606c", fontSize: 12 }}
            tickMargin={14}
          />
          <YAxis
            domain={domain ?? ["auto", "auto"]}
            ticks={ticks}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#52606c", fontSize: 12 }}
            width={40}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 0,
              border: "1px solid #bbc5cf",
              fontSize: 13,
              boxShadow: "0 6px 20px #00000012",
            }}
            formatter={(value, name) => [`${Number(value).toFixed(1)}`, name]}
            labelFormatter={(value) => `Year ${value}`}
          />
          {series.map((s) => (
            <Line
              key={s.key}
              dataKey={s.key}
              name={s.label}
              stroke={s.color}
              strokeWidth={s.key === "base" ? 3.5 : 2.5}
              strokeDasharray={s.dashed ? "6 5" : undefined}
              dot={{ r: 3, fill: s.color, strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              type="linear"
              isAnimationActive={animate}
              animationDuration={900}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
