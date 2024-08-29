declare module '@internal/canonical-builder' {

  export function buildCanonical(canonical: any, payloadDeCarregamento: any, processedData: any): Promise<any>;
  export function synchronizeCanonical(canonical: any, kafkaMessage: any): Promise<void>;
  export function reproccessCanonical(canonical: any, payload: any): Promise<void>;

}