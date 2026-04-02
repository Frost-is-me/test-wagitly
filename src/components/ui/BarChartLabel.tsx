"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import usePeriodStore from "@/stores/Period"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

export const description = "A bar chart with a label"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, date: "2025-01-31" },
  { month: "February", desktop: 305, mobile: 200, date: "2025-02-29" },
  { month: "March", desktop: 237, mobile: 120, date: "2025-03-31" },
  { month: "April", desktop: 73, mobile: 190, date: "2025-04-30" },
  { month: "May", desktop: 209, mobile: 130, date: "2025-05-31" },
  { month: "June", desktop: 214, mobile: 140, date: "2025-06-30" },
  { month: "July", desktop: 198, mobile: 160, date: "2025-07-31" },
  { month: "August", desktop: 267, mobile: 180, date: "2025-08-31" },
  { month: "September", desktop: 312, mobile: 210, date: "2025-09-30" },
  { month: "October", desktop: 278, mobile: 170, date: "2025-10-31" },
  { month: "November", desktop: 245, mobile: 190, date: "2025-11-30" },
  { month: "December", desktop: 329, mobile: 220, date: "2025-12-31" }
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarLabel() {
  const {period} = usePeriodStore()
  const MaxDate = new Date(Math.max(...chartData.map(item => new Date(item.date).getTime())))
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    let daysToSubtract = 7
    if (period === "All") {
      return true
    }
    if (period === "360d") {
      daysToSubtract = 360
    } else if (period === "90d") {
      daysToSubtract = 90
    } else if (period === "30d") {
      daysToSubtract = 30
    }
    const startDate = new Date(MaxDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })
  return (
    <Card className="h-full flex-1 hover:border-accent">
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-[300px]">
        <ChartContainer className="h-full w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={filteredData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} barSize={64}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
