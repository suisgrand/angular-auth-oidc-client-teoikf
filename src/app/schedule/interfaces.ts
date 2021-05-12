export interface ISchedule {
  "from": string,
  "till": string,
  "days": {
    "monday": IDaySchedule,
    "tuesday": IDaySchedule,
    "wednesday": IDaySchedule,
    "thursday": IDaySchedule,
    "friday": IDaySchedule,
    "saturday": IDaySchedule,
    "sunday": IDaySchedule
  }
}

export interface IDaySchedule {
  "start": string,
  "end": string,
  "notes": string
}