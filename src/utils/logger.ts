import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.colorize(),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
      
    })
  ]
})

logger.log("log", "Logger initialized");
logger.info("info","Logger initialized");
logger.debug("debug","Logger initialized");
logger.error("error","Logger initialized");
logger.warn("warn","Logger initialized");


export default logger;