import { UnitTestResult } from "./type";

export interface TestingApi {
  methods: {
    testFromPath(path: string): UnitTestResult
    testFromSource(sourceCode: string): UnitTestResult
  }
}