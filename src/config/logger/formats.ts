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

// Formatos específicos para cada tipo de log
export const createBuildFormat = () => combine(baseFormat, createCustomFormat('BUILDER-BUILD'));
export const createExtractFormat = () => combine(baseFormat, createCustomFormat('BUILDER-EXTRACT'));
export const createMergeFormat = () => combine(baseFormat, createCustomFormat('BUILDER-MERGE'));
export const createReprocessFormat = () => combine(baseFormat, createCustomFormat('BUILDER-REPROCESS'));
export const createSynchronizeFormat = () => combine(baseFormat, createCustomFormat('BUILDER-SYNCHRONIZE'));
export const createDefaultFormat = () => combine(baseFormat, createCustomFormat('BUILDER'));
