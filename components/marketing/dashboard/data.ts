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
 * These are demonstration figures for a placeholder company ("Acme
 * Industries") shown to depict the dashboards — NOT a real customer's
 * audited results. The showcase window chrome names the sample company
 * directly so it's never read as a real client's data.
 * ------------------------------------------------------------------ */

export const sampleWorkspace = "Acme Industries";

export type Stat = {
  label: string;
  value: string;
  unit: string;
  icon: Icon;
  delta?: { dir: "up" | "down"; pct: string; note: string };
  note?: string;
};

export const stats: Stat[] = [
  { label: "Electricity", value: "52.84", unit: "MWh", icon: Bolt, delta: { dir: "up", pct: "4%", note: "vs 2024" } },
  { label: "Withdrawn water", value: "1,842", unit: "m³", icon: Droplet, delta: { dir: "down", pct: "6.1%", note: "vs 2024" } },
  { label: "Waste generated", value: "2,910", unit: "kg", icon: Trash, delta: { dir: "up", pct: "2.8%", note: "vs 2024" } },
  { label: "Fuel consumed", value: "5,120", unit: "L", icon: FuelPump, delta: { dir: "up", pct: "7.4%", note: "vs 2024" } },
  { label: "Total emissions", value: "39.6", unit: "t CO₂e", icon: Leaf, delta: { dir: "down", pct: "1.9%", note: "vs 2024" } },
  { label: "Renewable energy", value: "12", unit: "%", icon: Bolt, note: "no comparison" },
  { label: "Waste diverted", value: "34", unit: "%", icon: Recycle, note: "no comparison" },
];

/* Water: Consumed vs Recycled — monthly stacked bars (m³). */
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const water = {
  recycled: [95, 102, 109, 116, 123, 130, 137, 144, 151, 158, 165, 172],
  consumed: [12, 15, 9, 18, 11, 20, 8, 16, 10, 19, 13, 17],
};

/* Emissions by Source — donut (MT CO₂e). Percentages sum to 100. */
export const emissions = [
  { label: "Electricity", value: 46, color: "var(--chart-amber)" },
  { label: "Petrol", value: 21, color: "var(--chart-green)" },
  { label: "Water", value: 19, color: "var(--chart-teal)" },
  { label: "Diesel", value: 11, color: "var(--chart-blue)" },
  { label: "Waste", value: 3, color: "var(--chart-violet)" },
];

/* Workforce by Age Group — monthly stacked bars (employees). */
export const workforce = {
  below30: [31, 31, 32, 31, 32, 31, 31, 32, 31, 31, 31, 32],
  mid: [64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65],
  over50: [19, 19, 19, 19, 18, 19, 19, 19, 19, 18, 19, 19],
};

/* Injuries: Employee vs Contractor — donut (count). */
export const injuries = [
  { label: "Employees", value: 5, color: "var(--chart-green)" },
  { label: "Contractors", value: 9, color: "var(--chart-blue)" },
];

export const chartMeta = {
  water: { title: "Water: Consumed vs Recycled", unit: "m³ · monthly · 2025", icon: Droplet },
  emissions: { title: "Emissions by Source", unit: "MT CO₂e · 2025", icon: Leaf },
  workforce: { title: "Workforce by Age Group", unit: "Employees · monthly · 2025", icon: BarChart },
  injuries: { title: "Injuries: Employee vs Contractor", unit: "count · 2025", icon: BarChart },
};
