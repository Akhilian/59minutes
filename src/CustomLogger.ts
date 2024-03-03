import winston = require('winston');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const LokiTransport = require('winston-loki');

export class CustomLogger {
  static createLoggerConfig() {
    return {
      transports: [
        new winston.transports.Console({
          format: winston.format.json(),
        }),
        new LokiTransport({
          host: 'http://127.0.0.1:3100',
          json: true,
          labels: { job: 'retour-de-loki', service: 'flight-service' },
        }),
      ],
    };
  }
}
