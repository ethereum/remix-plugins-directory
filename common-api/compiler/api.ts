import { CompilationFileSources, CompilationResult, CondensedCompilationInput, SourcesInput } from './type';

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
    setCompilerConfig(settings: CondensedCompilationInput): void
    compileWithParameters(targets: SourcesInput, settings: CondensedCompilationInput): CompilationResult
  }
}