export async function GET() {
  let interval: NodeJS.Timeout;

  const stream = new ReadableStream({
    start(controller) {
      const sendEvent = () => {
        try {
          const event = {
            id: crypto.randomUUID(),
            type: "INFO",
            message: "Random event " + Math.random(),
            timestamp: Date.now(),
            source: "SYSTEM",
          };

          controller.enqueue(
            `data: ${JSON.stringify(event)}\n\n`
          );
        } catch (e) {
          clearInterval(interval);
        }
      };

      interval = setInterval(sendEvent, 2000);
    },

    cancel() {
      clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}