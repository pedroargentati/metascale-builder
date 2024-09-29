import winston from 'winston';
import WinstonCloudWatch from 'winston-cloudwatch';
import { createDefaultFormat } from './formats.js';
import { IS_DEV } from '../../utils/constants.js';

const awsRegion = process.env.AWS_REGION;
const logGroupName = process.env.AWS_LOG_GROUP_NAME || '/app/Metascale';

export const createTransports = () => {
	let transports = [];

	if (IS_DEV) {
		transports.push(
			new winston.transports.Console({
				format: winston.format.combine(winston.format.colorize(), createDefaultFormat()),
				level: 'debug',
			}),
			new winston.transports.File({
				filename: `logs/builder/error.log`,
				level: 'error',
			}),
		);
	} else {
		transports = [
			new WinstonCloudWatch({
				logGroupName: `${logGroupName}/builder/error.log`,
				logStreamName: 'error.log',
				level: 'error',
				awsRegion,
				jsonMessage: true,
			}),
		];
	}

	return transports;
};

export const createCanonicalTransports = () => {
	let transports = [];

	if (IS_DEV) {
		transports.push(
			new winston.transports.File({
				filename: `logs/canonical.log`,
				level: 'info',
			}),
		);
	} else {
		transports = [
			new WinstonCloudWatch({
				logGroupName: `${logGroupName}/canonical.log`,
				logStreamName: `canonical.log`,
				level: 'info',
				awsRegion,
				jsonMessage: true,
			}),
		];
	}

	return transports;
};
