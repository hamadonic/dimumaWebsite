import { cn } from "@/lib/cn";
import { Sparkles } from "@/components/ui/icons";
import { StatCards } from "./stat-cards";
import { ChartCard, DonutChart, Legend, StackedBarChart } from "./chart-primitives";
import {
  chartMeta,
  emissions,
  injuries,
  months,
  water,
  workforce,
} from "./data";

/**
 * Insights dashboard showcase — a product-UI depiction built from illustrative
 * sample data (see data.ts). Framed as a "Sample workspace" so it's never read
 * as a real customer's audited numbers.
 */
export function InsightsShowcase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "shadow-premium overflow-hidden rounded-2xl border border-subtle bg-elevated",
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-subtle bg-surface px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-strong" />
        </span>
        <span className="ms-2 text-xs font-medium text-muted">
          Susmatic ESG · Insights
        </span>
        <div className="ms-auto flex items-center gap-2">
          {/* AI Studio — depicted generating a board pack from this live data. */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[0.7rem] font-semibold text-accent">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            AI Studio
            <span className="hidden sm:inline">&nbsp;· Generate board pack</span>
          </span>
          <span className="hidden rounded-full border border-subtle px-2.5 py-0.5 text-[0.7rem] font-medium text-muted sm:inline">
            Sample workspace
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 bg-background p-4 sm:p-5">
        <StatCards />

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Water */}
          <ChartCard
            title={chartMeta.water.title}
            unit={chartMeta.water.unit}
            valuesOn
          >
            <Legend
              className="mb-4"
              items={[
                { label: "Consumed", color: "var(--chart-blue)" },
                { label: "Recycled", color: "var(--chart-green)" },
              ]}
            />
            <StackedBarChart
              ariaLabel="Water consumed versus recycled by month, cubic metres, 2025"
              categories={months}
              yMax={220}
              yStep={55}
              showValues
              series={[
                { label: "Recycled", color: "var(--chart-green)", values: water.recycled },
                { label: "Consumed", color: "var(--chart-blue)", values: water.consumed },
              ]}
            />
          </ChartCard>

          {/* Emissions donut */}
          <ChartCard title={chartMeta.emissions.title} unit={chartMeta.emissions.unit}>
            <Legend
              className="mb-4"
              items={emissions.map((e) => ({ label: e.label, color: e.color }))}
            />
            <DonutChart
              ariaLabel="Emissions by source, 2025: electricity 51 percent, water 23 percent, petrol 16 percent, diesel 8 percent, waste 2 percent"
              slices={emissions}
            />
          </ChartCard>

          {/* Workforce */}
          <ChartCard title={chartMeta.workforce.title} unit={chartMeta.workforce.unit}>
            <Legend
              className="mb-4"
              items={[
                { label: "Below 30", color: "var(--chart-green)" },
                { label: "30–50", color: "var(--chart-blue)" },
                { label: "Over 50", color: "var(--chart-amber)" },
              ]}
            />
            <StackedBarChart
              ariaLabel="Workforce by age group by month, 2025"
              categories={months}
              yMax={120}
              yStep={30}
              series={[
                { label: "Below 30", color: "var(--chart-green)", values: workforce.below30 },
                { label: "30–50", color: "var(--chart-blue)", values: workforce.mid },
                { label: "Over 50", color: "var(--chart-amber)", values: workforce.over50 },
              ]}
            />
          </ChartCard>

          {/* Injuries donut */}
          <ChartCard title={chartMeta.injuries.title} unit={chartMeta.injuries.unit}>
            <Legend
              className="mb-4"
              items={injuries.map((i) => ({ label: i.label, color: i.color }))}
            />
            <DonutChart
              ariaLabel="Injuries by employee versus contractor, 2025"
              slices={injuries}
              labelThreshold={0.15}
            />
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
