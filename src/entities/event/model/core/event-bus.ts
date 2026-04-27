import { Event } from "./types"

type Listener = (event: Event) => void
type Middleware = (event: Event) => Event | null;


class EventBus {
    private listeners: Listener[] = []
    private middlewares: Middleware[] = [];

    use(mw: Middleware) {
        this.middlewares.push(mw);
      }

    emit (event: Event) { 
        let processed: Event | null = event
        for (const mw of this.middlewares){
            if (!processed) return
            processed = mw(processed)
        }

        if (!processed) return 

        this.listeners.forEach(l => l(processed))
    }

    subscribe (listener: Listener) {
        this.listeners.push(listener)

        return () => {
            this.listeners = this.listeners.filter(l => l !== listener)
        }
    }
}


export const eventBus = new EventBus()