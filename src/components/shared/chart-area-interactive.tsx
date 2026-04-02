"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card,CardDescription,CardHeader,CardTitle,CardContent } from "../ui/card";
import { ChartContainer,ChartLegend,ChartLegendContent,ChartTooltip,ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "../ui/select";
import useTranslations from "@/hooks/useTranslations";
import usePeriodStore, {type Period} from "@/stores/Period";

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
  { date: "2024-07-01", desktop: 289, mobile: 320 },
  { date: "2024-07-02", desktop: 156, mobile: 210 },
  { date: "2024-07-03", desktop: 423, mobile: 370 },
  { date: "2024-07-04", desktop: 198, mobile: 250 },
  { date: "2024-07-05", desktop: 367, mobile: 410 },
  { date: "2024-07-06", desktop: 134, mobile: 180 },
  { date: "2024-07-07", desktop: 478, mobile: 430 },
  { date: "2024-07-08", desktop: 215, mobile: 270 },
  { date: "2024-07-09", desktop: 389, mobile: 340 },
  { date: "2024-07-10", desktop: 142, mobile: 190 },
  { date: "2024-07-11", desktop: 456, mobile: 500 },
  { date: "2024-07-12", desktop: 178, mobile: 230 },
  { date: "2024-07-13", desktop: 324, mobile: 280 },
  { date: "2024-07-14", desktop: 467, mobile: 520 },
  { date: "2024-07-15", desktop: 193, mobile: 240 },
  { date: "2024-07-16", desktop: 412, mobile: 360 },
  { date: "2024-07-17", desktop: 157, mobile: 200 },
  { date: "2024-07-18", desktop: 489, mobile: 440 },
  { date: "2024-07-19", desktop: 226, mobile: 280 },
  { date: "2024-07-20", desktop: 378, mobile: 330 },
  { date: "2024-07-21", desktop: 145, mobile: 190 },
  { date: "2024-07-22", desktop: 498, mobile: 450 },
  { date: "2024-07-23", desktop: 167, mobile: 220 },
  { date: "2024-07-24", desktop: 432, mobile: 380 },
  { date: "2024-07-25", desktop: 189, mobile: 240 },
  { date: "2024-07-26", desktop: 354, mobile: 400 },
  { date: "2024-07-27", desktop: 123, mobile: 170 },
  { date: "2024-07-28", desktop: 476, mobile: 430 },
  { date: "2024-07-29", desktop: 234, mobile: 290 },
  { date: "2024-07-30", desktop: 398, mobile: 350 },
  { date: "2024-07-31", desktop: 156, mobile: 200 },
  { date: "2024-08-01", desktop: 412, mobile: 460 },
  { date: "2024-08-02", desktop: 178, mobile: 230 },
  { date: "2024-08-03", desktop: 345, mobile: 300 },
  { date: "2024-08-04", desktop: 467, mobile: 520 },
  { date: "2024-08-05", desktop: 198, mobile: 250 },
  { date: "2024-08-06", desktop: 423, mobile: 380 },
  { date: "2024-08-07", desktop: 167, mobile: 210 },
  { date: "2024-08-08", desktop: 489, mobile: 440 },
  { date: "2024-08-09", desktop: 215, mobile: 270 },
  { date: "2024-08-10", desktop: 367, mobile: 320 },
  { date: "2024-08-11", desktop: 134, mobile: 180 },
  { date: "2024-08-12", desktop: 478, mobile: 430 },
  { date: "2024-08-13", desktop: 189, mobile: 240 },
  { date: "2024-08-14", desktop: 432, mobile: 390 },
  { date: "2024-08-15", desktop: 156, mobile: 200 },
  { date: "2024-08-16", desktop: 498, mobile: 450 },
  { date: "2024-08-17", desktop: 223, mobile: 280 },
  { date: "2024-08-18", desktop: 378, mobile: 330 },
  { date: "2024-08-19", desktop: 145, mobile: 190 },
  { date: "2024-08-20", desktop: 456, mobile: 500 },
  { date: "2024-08-21", desktop: 178, mobile: 230 },
  { date: "2024-08-22", desktop: 412, mobile: 370 },
  { date: "2024-08-23", desktop: 198, mobile: 250 },
  { date: "2024-08-24", desktop: 467, mobile: 420 },
  { date: "2024-08-25", desktop: 134, mobile: 180 },
  { date: "2024-08-26", desktop: 489, mobile: 440 },
  { date: "2024-08-27", desktop: 215, mobile: 270 },
  { date: "2024-08-28", desktop: 354, mobile: 310 },
  { date: "2024-08-29", desktop: 167, mobile: 220 },
  { date: "2024-08-30", desktop: 432, mobile: 480 },
  { date: "2024-08-31", desktop: 189, mobile: 240 },
  { date: "2024-09-01", desktop: 398, mobile: 350 },
  { date: "2024-09-02", desktop: 156, mobile: 200 },
  { date: "2024-09-03", desktop: 476, mobile: 430 },
  { date: "2024-09-04", desktop: 223, mobile: 280 },
  { date: "2024-09-05", desktop: 367, mobile: 320 },
  { date: "2024-09-06", desktop: 134, mobile: 180 },
  { date: "2024-09-07", desktop: 498, mobile: 450 },
  { date: "2024-09-08", desktop: 189, mobile: 240 },
  { date: "2024-09-09", desktop: 432, mobile: 390 },
  { date: "2024-09-10", desktop: 167, mobile: 220 },
  { date: "2024-09-11", desktop: 456, mobile: 500 },
  { date: "2024-09-12", desktop: 198, mobile: 250 },
  { date: "2024-09-13", desktop: 412, mobile: 370 },
  { date: "2024-09-14", desktop: 145, mobile: 190 },
  { date: "2024-09-15", desktop: 489, mobile: 440 },
  { date: "2024-09-16", desktop: 215, mobile: 270 },
  { date: "2024-09-17", desktop: 378, mobile: 330 },
  { date: "2024-09-18", desktop: 156, mobile: 200 },
  { date: "2024-09-19", desktop: 467, mobile: 420 },
  { date: "2024-09-20", desktop: 189, mobile: 240 },
  { date: "2024-09-21", desktop: 432, mobile: 480 },
  { date: "2024-09-22", desktop: 167, mobile: 220 },
  { date: "2024-09-23", desktop: 498, mobile: 450 },
  { date: "2024-09-24", desktop: 223, mobile: 280 },
  { date: "2024-09-25", desktop: 354, mobile: 310 },
  { date: "2024-09-26", desktop: 134, mobile: 180 },
  { date: "2024-09-27", desktop: 476, mobile: 430 },
  { date: "2024-09-28", desktop: 198, mobile: 250 },
  { date: "2024-09-29", desktop: 412, mobile: 370 },
  { date: "2024-09-30", desktop: 156, mobile: 200 },
  { date: "2024-10-01", desktop: 489, mobile: 440 },
  { date: "2024-10-02", desktop: 215, mobile: 270 },
  { date: "2024-10-03", desktop: 367, mobile: 320 },
  { date: "2024-10-04", desktop: 145, mobile: 190 },
  { date: "2024-10-05", desktop: 498, mobile: 450 },
  { date: "2024-10-06", desktop: 189, mobile: 240 },
  { date: "2024-10-07", desktop: 432, mobile: 390 },
  { date: "2024-10-08", desktop: 167, mobile: 220 },
  { date: "2024-10-09", desktop: 456, mobile: 500 },
  { date: "2024-10-10", desktop: 198, mobile: 250 },
  { date: "2024-10-11", desktop: 412, mobile: 370 },
  { date: "2024-10-12", desktop: 134, mobile: 180 },
  { date: "2024-10-13", desktop: 489, mobile: 440 },
  { date: "2024-10-14", desktop: 223, mobile: 280 },
  { date: "2024-10-15", desktop: 378, mobile: 330 },
  { date: "2024-10-16", desktop: 156, mobile: 200 },
  { date: "2024-10-17", desktop: 467, mobile: 420 },
  { date: "2024-10-18", desktop: 189, mobile: 240 },
  { date: "2024-10-19", desktop: 432, mobile: 480 },
  { date: "2024-10-20", desktop: 167, mobile: 220 },
  { date: "2024-10-21", desktop: 498, mobile: 450 },
  { date: "2024-10-22", desktop: 215, mobile: 270 },
  { date: "2024-10-23", desktop: 354, mobile: 310 },
  { date: "2024-10-24", desktop: 145, mobile: 190 },
  { date: "2024-10-25", desktop: 476, mobile: 430 },
  { date: "2024-10-26", desktop: 198, mobile: 250 },
  { date: "2024-10-27", desktop: 412, mobile: 370 },
  { date: "2024-10-28", desktop: 156, mobile: 200 },
  { date: "2024-10-29", desktop: 489, mobile: 440 },
  { date: "2024-10-30", desktop: 223, mobile: 280 },
  { date: "2024-10-31", desktop: 367, mobile: 320 },
  { date: "2024-11-01", desktop: 134, mobile: 180 },
  { date: "2024-11-02", desktop: 498, mobile: 450 },
  { date: "2024-11-03", desktop: 189, mobile: 240 },
  { date: "2024-11-04", desktop: 432, mobile: 390 },
  { date: "2024-11-05", desktop: 167, mobile: 220 },
  { date: "2024-11-06", desktop: 456, mobile: 500 },
  { date: "2024-11-07", desktop: 198, mobile: 250 },
  { date: "2024-11-08", desktop: 412, mobile: 370 },
  { date: "2024-11-09", desktop: 145, mobile: 190 },
  { date: "2024-11-10", desktop: 489, mobile: 440 },
  { date: "2024-11-11", desktop: 215, mobile: 270 },
  { date: "2024-11-12", desktop: 378, mobile: 330 },
  { date: "2024-11-13", desktop: 156, mobile: 200 },
  { date: "2024-11-14", desktop: 467, mobile: 420 },
  { date: "2024-11-15", desktop: 189, mobile: 240 },
  { date: "2024-11-16", desktop: 432, mobile: 480 },
  { date: "2024-11-17", desktop: 167, mobile: 220 },
  { date: "2024-11-18", desktop: 498, mobile: 450 },
  { date: "2024-11-19", desktop: 223, mobile: 280 },
  { date: "2024-11-20", desktop: 354, mobile: 310 },
  { date: "2024-11-21", desktop: 134, mobile: 180 },
  { date: "2024-11-22", desktop: 476, mobile: 430 },
  { date: "2024-11-23", desktop: 198, mobile: 250 },
  { date: "2024-11-24", desktop: 412, mobile: 370 },
  { date: "2024-11-25", desktop: 156, mobile: 200 },
  { date: "2024-11-26", desktop: 489, mobile: 440 },
  { date: "2024-11-27", desktop: 215, mobile: 270 },
  { date: "2024-11-28", desktop: 367, mobile: 320 },
  { date: "2024-11-29", desktop: 145, mobile: 190 },
  { date: "2024-11-30", desktop: 498, mobile: 450 },
  { date: "2024-12-01", desktop: 189, mobile: 240 },
  { date: "2024-12-02", desktop: 432, mobile: 390 },
  { date: "2024-12-03", desktop: 167, mobile: 220 },
  { date: "2024-12-04", desktop: 456, mobile: 500 },
  { date: "2024-12-05", desktop: 198, mobile: 250 },
  { date: "2024-12-06", desktop: 412, mobile: 370 },
  { date: "2024-12-07", desktop: 134, mobile: 180 },
  { date: "2024-12-08", desktop: 489, mobile: 440 },
  { date: "2024-12-09", desktop: 223, mobile: 280 },
  { date: "2024-12-10", desktop: 378, mobile: 330 },
  { date: "2024-12-11", desktop: 156, mobile: 200 },
  { date: "2024-12-12", desktop: 467, mobile: 420 },
  { date: "2024-12-13", desktop: 189, mobile: 240 },
  { date: "2024-12-14", desktop: 432, mobile: 480 },
  { date: "2024-12-15", desktop: 167, mobile: 220 },
  { date: "2024-12-16", desktop: 498, mobile: 450 },
  { date: "2024-12-17", desktop: 215, mobile: 270 },
  { date: "2024-12-18", desktop: 354, mobile: 310 },
  { date: "2024-12-19", desktop: 145, mobile: 190 },
  { date: "2024-12-20", desktop: 476, mobile: 430 },
  { date: "2024-12-21", desktop: 198, mobile: 250 },
  { date: "2024-12-22", desktop: 412, mobile: 370 },
  { date: "2024-12-23", desktop: 156, mobile: 200 },
  { date: "2024-12-24", desktop: 489, mobile: 440 },
  { date: "2024-12-25", desktop: 223, mobile: 280 },
  { date: "2024-12-26", desktop: 367, mobile: 320 },
  { date: "2024-12-27", desktop: 134, mobile: 180 },
  { date: "2024-12-28", desktop: 498, mobile: 450 },
  { date: "2024-12-29", desktop: 189, mobile: 240 },
  { date: "2024-12-30", desktop: 432, mobile: 390 },
  { date: "2024-12-31", desktop: 167, mobile: 220 },
  { date: "2025-01-01", desktop: 456, mobile: 500 },
  { date: "2025-01-02", desktop: 198, mobile: 250 },
  { date: "2025-01-03", desktop: 412, mobile: 370 },
  { date: "2025-01-04", desktop: 145, mobile: 190 },
  { date: "2025-01-05", desktop: 489, mobile: 440 },
  { date: "2025-01-06", desktop: 215, mobile: 270 },
  { date: "2025-01-07", desktop: 378, mobile: 330 },
  { date: "2025-01-08", desktop: 156, mobile: 200 },
  { date: "2025-01-09", desktop: 467, mobile: 420 },
  { date: "2025-01-10", desktop: 189, mobile: 240 },
  { date: "2025-01-11", desktop: 432, mobile: 480 },
  { date: "2025-01-12", desktop: 167, mobile: 220 },
  { date: "2025-01-13", desktop: 498, mobile: 450 },
  { date: "2025-01-14", desktop: 223, mobile: 280 },
  { date: "2025-01-15", desktop: 354, mobile: 310 },
  { date: "2025-01-16", desktop: 134, mobile: 180 },
  { date: "2025-01-17", desktop: 476, mobile: 430 },
  { date: "2025-01-18", desktop: 198, mobile: 250 },
  { date: "2025-01-19", desktop: 412, mobile: 370 },
  { date: "2025-01-20", desktop: 156, mobile: 200 },
  { date: "2025-01-21", desktop: 489, mobile: 440 },
  { date: "2025-01-22", desktop: 215, mobile: 270 },
  { date: "2025-01-23", desktop: 367, mobile: 320 },
  { date: "2025-01-24", desktop: 145, mobile: 190 },
  { date: "2025-01-25", desktop: 498, mobile: 450 },
  { date: "2025-01-26", desktop: 189, mobile: 240 },
  { date: "2025-01-27", desktop: 432, mobile: 390 },
  { date: "2025-01-28", desktop: 167, mobile: 220 },
  { date: "2025-01-29", desktop: 456, mobile: 500 },
  { date: "2025-01-30", desktop: 198, mobile: 250 },
  { date: "2025-01-31", desktop: 412, mobile: 370 },
  { date: "2025-02-01", desktop: 134, mobile: 180 },
  { date: "2025-02-02", desktop: 489, mobile: 440 },
  { date: "2025-02-03", desktop: 223, mobile: 280 },
  { date: "2025-02-04", desktop: 378, mobile: 330 },
  { date: "2025-02-05", desktop: 156, mobile: 200 },
  { date: "2025-02-06", desktop: 467, mobile: 420 },
  { date: "2025-02-07", desktop: 189, mobile: 240 },
  { date: "2025-02-08", desktop: 432, mobile: 480 },
  { date: "2025-02-09", desktop: 167, mobile: 220 },
  { date: "2025-02-10", desktop: 498, mobile: 450 },
  { date: "2025-02-11", desktop: 215, mobile: 270 },
  { date: "2025-02-12", desktop: 354, mobile: 310 },
  { date: "2025-02-13", desktop: 145, mobile: 190 },
  { date: "2025-02-14", desktop: 476, mobile: 430 },
  { date: "2025-02-15", desktop: 198, mobile: 250 },
  { date: "2025-02-16", desktop: 412, mobile: 370 },
  { date: "2025-02-17", desktop: 156, mobile: 200 },
  { date: "2025-02-18", desktop: 489, mobile: 440 },
  { date: "2025-02-19", desktop: 223, mobile: 280 },
  { date: "2025-02-20", desktop: 367, mobile: 320 },
  { date: "2025-02-21", desktop: 134, mobile: 180 },
  { date: "2025-02-22", desktop: 498, mobile: 450 },
  { date: "2025-02-23", desktop: 189, mobile: 240 },
  { date: "2025-02-24", desktop: 432, mobile: 390 },
  { date: "2025-02-25", desktop: 167, mobile: 220 },
  { date: "2025-02-26", desktop: 456, mobile: 500 },
  { date: "2025-02-27", desktop: 198, mobile: 250 },
  { date: "2025-02-28", desktop: 412, mobile: 370 },
  { date: "2025-03-01", desktop: 145, mobile: 190 },
  { date: "2025-03-02", desktop: 489, mobile: 440 },
  { date: "2025-03-03", desktop: 215, mobile: 270 },
  { date: "2025-03-04", desktop: 378, mobile: 330 },
  { date: "2025-03-05", desktop: 156, mobile: 200 },
  { date: "2025-03-06", desktop: 467, mobile: 420 },
  { date: "2025-03-07", desktop: 189, mobile: 240 },
  { date: "2025-03-08", desktop: 432, mobile: 480 },
  { date: "2025-03-09", desktop: 167, mobile: 220 },
  { date: "2025-03-10", desktop: 498, mobile: 450 },
  { date: "2025-03-11", desktop: 223, mobile: 280 },
  { date: "2025-03-12", desktop: 354, mobile: 310 },
  { date: "2025-03-13", desktop: 134, mobile: 180 },
  { date: "2025-03-14", desktop: 476, mobile: 430 },
  { date: "2025-03-15", desktop: 198, mobile: 250 },
  { date: "2025-03-16", desktop: 412, mobile: 370 },
  { date: "2025-03-17", desktop: 156, mobile: 200 },
  { date: "2025-03-18", desktop: 489, mobile: 440 },
  { date: "2025-03-19", desktop: 215, mobile: 270 },
  { date: "2025-03-20", desktop: 367, mobile: 320 },
  { date: "2025-03-21", desktop: 145, mobile: 190 },
  { date: "2025-03-22", desktop: 498, mobile: 450 },
  { date: "2025-03-23", desktop: 189, mobile: 240 },
  { date: "2025-03-24", desktop: 432, mobile: 390 },
  { date: "2025-03-25", desktop: 167, mobile: 220 },
  { date: "2025-03-26", desktop: 456, mobile: 500 },
  { date: "2025-03-27", desktop: 198, mobile: 250 },
  { date: "2025-03-28", desktop: 412, mobile: 370 },
  { date: "2025-03-29", desktop: 134, mobile: 180 },
  { date: "2025-03-30", desktop: 489, mobile: 440 },
  { date: "2025-03-31", desktop: 223, mobile: 280 }
];

export function ChartAreaInteractive() {
  const {t} = useTranslations()
  const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: `${t("dashboard.Desktop")}`,
    color: "var(--chart-6)",
  },
  mobile: {
    label: `${t("dashboard.Mobile")}`,
    color: "var(--chart-7)",
  },
} satisfies ChartConfig
  const {period, setPeriod} = usePeriodStore()
  const MaxDate = new Date(Math.max(...chartData.map(item => new Date(item.date).getTime())))
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    let daysToSubtract = 90
    if (period === "All") {
      return true
    }
    if (period === "360d") {
      daysToSubtract = 360
    } else if (period === "30d") {
      daysToSubtract = 30
    } else if (period === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(MaxDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })
  return (
    <Card className="bg-card pt-0 m-2 hover:border-accent">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>{t("dashboard.Total visitors")}</CardTitle>
          <CardDescription>
            {t("dashboard.Showing total visitors")}
          </CardDescription>
        </div>
        <Select value={period} onValueChange={(value : Period) => setPeriod(value)}>
                <SelectTrigger
                    className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                    aria-label="Select a value"
                    >
                    <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                    <SelectItem value="7d" className="rounded-lg">
                        {t("dashboard.Last 7 days")}
                    </SelectItem>
                    <SelectItem value="30d" className="rounded-lg">
                        {t("dashboard.Last 30 days")}
                    </SelectItem>
                    <SelectItem value="90d" className="rounded-lg">
                        {t("dashboard.Last 3 months")}
                    </SelectItem>
                    <SelectItem value="360d" className="rounded-lg">
                        {t("dashboard.Last Year")}
                    </SelectItem>
                    <SelectItem value="All" className="rounded-lg">
                        {t("dashboard.All Time")}
                    </SelectItem>
                </SelectContent>
          </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] sm:h-[300px] lg:h-[400px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}