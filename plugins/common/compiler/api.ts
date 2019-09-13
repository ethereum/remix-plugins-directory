import { CompilationFileSources, CompilationResult } from './type';

export interface CompilerApi {
  events: {
    compilationFinished: (
      fileName: string,
      source: CompilationFileSources,
      languageVersion: string,
      data: CompilationResult
    ) => void
  }
  methods: {
    getCompilationResult(): CompilationResult
    compile(fileName: string): void
  }
}