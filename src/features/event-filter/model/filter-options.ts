import { EventFilterOption } from "./types";

export const filterTypes: EventFilterOption[] = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Success",
    value: "SUCCESS",
  },
  {
    label: "Error",
    value: "ERROR",
  },
  {
      label: "Debug",
      value: "DEBUG",
  },
  {
      label: "Info",
      value: "INFO",
  },
   
] as const
  