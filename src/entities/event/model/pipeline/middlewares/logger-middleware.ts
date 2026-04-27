import { Event } from "@/entities/event"

export const loggerMiddleware = (event: Event) => {
    console.log(event)

    return event
}