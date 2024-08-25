export interface AnalizerReturnData {
    errors: number
}

export interface AnalizerInputData {
    path: string
}

export type AnalyzerFunction = (data: AnalizerInputData) => Promise<AnalizerReturnData>