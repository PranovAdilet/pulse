import { eventBus } from "@/entities/event";
import { loggerMiddleware } from "./middlewares/logger-middleware";

export const initEventSystem = () => {
  // eventBus.use(pauseMiddleware);
  eventBus.use(loggerMiddleware);
};