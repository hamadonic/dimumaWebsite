import type { ComponentType, SVGProps } from "react";
import {
  BarChart,
  Bolt,
  Droplet,
  FuelPump,
  Leaf,
  Recycle,
  Trash,
} from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ------------------------------------------------------------------ *
 * ILLUSTRATIVE sample data for the Insights dashboard showcase.
 * These are demonstration figures (mirroring the product's own demo
 * workspace) shown to depict the dashboards — NOT a real customer's
 * audited results. The showcase is labelled "Sample workspace".
 * ------------------------------------------------------------------ */

export type Stat = {
  label: string;
  value: string;
  unit: string;
  icon: Icon;
  delta?: { dir: "up" | "down"; pct: string; note: string };
  note?: string;
};

export const stats: Stat[] = [
  { label: "Electricity", value: "47.61", unit: "MWh", icon: Bolt, delta: { dir: "up", pct: "5%", note: "vs 2024" } },
  { label: "Withdrawn water", value: "2,057", unit: "m³", icon: Droplet, delta: { dir: "down", pct: "3.7%", note: "vs 2024" } },
  { label: "Waste generated", value: "2,499", unit: "kg", icon: Trash, delta: { dir: "up", pct: "5.3%", note: "vs 2024" } },
  { label: "Fuel consumed", value: "4,396", unit: "L", icon: FuelPump, delta: { dir: "up", pct: "5.2%", note: "vs 2024" } },
  { label: "Total emissions", value: "44.2", unit: "t CO₂e", icon: Leaf, delta: { dir: "up", pct: "3.3%", note: "vs 2024" } },
  { label: "Renewable energy", value: "0", unit: "%", icon: Bolt, note: "no comparison" },
  { label: "Waste diverted", value: "0", unit: "%", icon: Recycle, note: "no comparison" },
];

/* Water: Consumed vs Recycled — monthly stacked bars (m³). */
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const water = {
  recycled: [123, 129, 135, 141, 147, 153, 159, 165, 171, 177, 183, 189],
  consumed: [8, 10, 12, 14, 16, 18, 8, 10, 12, 14, 16, 18],
};

/* Emissions by Source — donut (MT CO₂e). Percentages sum to 100. */
export const emissions = [
  { label: "Electricity", value: 51, color: "var(--chart-amber)" },
  { label: "Water", value: 23, color: "var(--chart-teal)" },
  { label: "Petrol", value: 16, color: "var(--chart-green)" },
  { label: "Diesel", value: 8, color: "var(--chart-blue)" },
  { label: "Waste", value: 2, color: "var(--chart-violet)" },
];

/* Workforce by Age Group — monthly stacked bars (employees). */
export const workforce = {
  below30: [29, 29, 30, 29, 30, 29, 29, 30, 29, 29, 29, 29],
  mid: [68, 69, 70, 68, 69, 70, 68, 69, 70, 68, 69, 70],
  over50: [18, 18, 19, 18, 17, 18, 18, 19, 18, 17, 18, 19],
};

/* Injuries: Employee vs Contractor — donut (count). */
export const injuries = [
  { label: "Employees", value: 7, color: "var(--chart-green)" },
  { label: "Contractors", value: 6, color: "var(--chart-blue)" },
];

export const chartMeta = {
  water: { title: "Water: Consumed vs Recycled", unit: "m³ · monthly · 2025", icon: Droplet },
  emissions: { title: "Emissions by Source", unit: "MT CO₂e · 2025", icon: Leaf },
  workforce: { title: "Workforce by Age Group", unit: "Employees · monthly · 2025", icon: BarChart },
  injuries: { title: "Injuries: Employee vs Contractor", unit: "count · 2025", icon: BarChart },
};
