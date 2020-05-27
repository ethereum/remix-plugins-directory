import { Position, Annotation } from "./type";

/** @deprecated: current version in Remix IDE based on Ace. To improve for better interoperability  */
export interface EditorApi {
  methods: {
    highlight(
      position: Position,
      filePath: string,
      hexColor: string,
    ): void
    discardHighlight(): void
    discardHighlightAt(line: number, filePath: string): void
    addAnnotation(annotation: Annotation): void;
    clearAnnotations(): void
  }
}
