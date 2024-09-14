import winston, {
	createLogger
} from 'winston';

import WinstonCloudwatch from 'winston-cloudwatch';
import { format } from 'winston';

const { combine, timestamp, printf, errors } = format;

// Formato básico com timestamp e tratamento de erros
const baseFormat = combine(timestamp({ format: 'DD/MM/YYYY HH:mm:ss:ssS' }), errors({ stack: true }));

// Função que gera o formato customizado para o nível especificado
const createCustomFormat = (label: string) => {
	return printf(({ level, message, timestamp, stack }) => {
		const lb = label ? `[${label}]` : '';
		return `${timestamp} ${lb} ${level}: ${stack || message}`;
	});
};

// Aplicar cores para cada nível
winston.addColors({
	info: 'green',
	warn: 'yellow',
	error: 'red',
});

// Formato para o LOG
const createFormat = (label: string) => combine(baseFormat, createCustomFormat(label));

const logGroupName = '/ecs/MetascaleAPI';
const awsRegion = 'us-east-2';

const transports = [];
// Modo produção - logs enviados para o AWS CloudWatch
transports.push(
	new WinstonCloudwatch({
		logGroupName,
		logStreamName: 'synchronize-logs',
		level: 'synchronize',
		awsRegion,
		jsonMessage: true,
	}),
	new WinstonCloudwatch({
		logGroupName,
		logStreamName: 'load-logs',
		level: 'load',
		awsRegion,
		jsonMessage: true,
	}),
	new WinstonCloudwatch({
		logGroupName,
		logStreamName: 'reprocess-logs',
		level: 'reprocess',
		awsRegion,
		jsonMessage: true,
	}),
	new WinstonCloudwatch({
		logGroupName,
		logStreamName: 'default-logs',
		level: 'info',
		awsRegion,
		jsonMessage: true,
	}),
	new WinstonCloudwatch({
		logGroupName,
		logStreamName: 'error-logs',
		level: 'error',
		awsRegion,
		jsonMessage: true,
	}),
);

// Criar o logger com os transportes e formatação padrão
export const logger = createLogger({
	format: createFormat(''),
	transports,
	exitOnError: false,
});

export const loggerReprocess = createLogger({
	format: createFormat('REPROCESS'),
	transports: [new winston.transports.File({
		filename: 'logs/reprocess.log'
	})],
	exitOnError: false,
});

export const loggerSyncronize = createLogger({
	format: createFormat('SYNCHRONIZE'),
	transports: [new winston.transports.File({
		filename: 'logs/syncronize.log'
	})],
	exitOnError: false,
});

export const loggerBuild = createLogger({
	format: createFormat('BUILD'),
	transports: [new winston.transports.File({
		filename: 'logs/build.log'
	})],
	exitOnError: false,
});

export const loggerMerge = createLogger({
	format: createFormat('MERGE'),
	transports: [new winston.transports.File({
		filename: 'logs/merge.log'
	})],
	exitOnError: false,
});

export const loggerExtract = createLogger({
	format: createFormat('EXTRACT'),
	transports: [new winston.transports.File({
		filename: 'logs/extract.log'
	})],
	exitOnError: false,
});
