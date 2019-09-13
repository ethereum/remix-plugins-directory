import { Position, Annotation } from "./type";

export interface EditorApi {
  methods: {
    highlight(
      position: Position,
      filePath: string,
      hexColor: string,
    ): void
    discardHighlight(): void
    addAnnotation(annotation: Annotation): void;
    clearAnnotations(): void
  }
}