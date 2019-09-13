import { CompilationFileSources, CompilationResult } from './type';

export interface EVMCompilerApi {
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