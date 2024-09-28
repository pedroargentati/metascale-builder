import winston, { createLogger } from 'winston';
import {
	createBuildFormat,
	createDefaultFormat,
	createExtractFormat,
	createMergeFormat,
	createReprocessFormat,
	createSynchronizeFormat,
} from './formats.js';
import { createTransports } from './transports.js';

// Aplicar cores para cada nível
winston.addColors({
	info: 'green',
	warn: 'yellow',
	error: 'red',
});

// Criar o logger com os transportes e formatação padrão
export const logger = createLogger({
	format: createDefaultFormat(),
	transports: createTransports(),
	exitOnError: false,
});

export const loggerReprocess = createLogger({
	format: createReprocessFormat(),
	transports: createTransports(),
	exitOnError: false,
});

export const loggerSyncronize = createLogger({
	format: createSynchronizeFormat(),
	transports: createTransports(),
	exitOnError: false,
});

export const loggerBuild = createLogger({
	format: createBuildFormat(),
	transports: createTransports(),
	exitOnError: false,
});

export const loggerMerge = createLogger({
	format: createMergeFormat(),
	transports: createTransports(),
	exitOnError: false,
});

export const loggerExtract = createLogger({
	format: createExtractFormat(),
	transports: createTransports(),
	exitOnError: false,
});
