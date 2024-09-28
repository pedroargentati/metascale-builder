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
