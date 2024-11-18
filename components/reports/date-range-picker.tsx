"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateRangePicker({
  value = [new Date(), new Date()],
  onChange,
}: {
  value: [Date | undefined, Date | undefined];
  onChange: (value: [Date | undefined, Date | undefined]) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value?.length === 2 ? (
            value[0] && value[1] ? (
              <>
                {format(value[0], "LLL dd, y")} -{" "}
                {format(value[1], "LLL dd, y")}
              </>
            ) : (
              "Pick a date range"
            )
          ) : (
            "Pick a date range"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={value?.[0]}
          selected={{ from: value?.[0], to: value?.[1] }}
          onSelect={(range) => {
            onChange([range?.from, range?.to]);
          }}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}