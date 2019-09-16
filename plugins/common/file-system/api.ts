import { Folder } from "./type";

/** @deprecated: current version in Remix IDE. To improve to match Node API  */
export interface FileSystemApi {
  events: {
    currentFileChanged: (file: string) => void
  }
  methods: {
    getFolder(path: string): Folder
    getCurrentFile(): string
    getFile(path: string): string
    setFile(path: string, content: string): void
    switchFile(path: string): void
  }
}

/** API based on node fs */
export interface NextFileSystemApi {
  methods: {
    /** Open the content of the file in the context (eg: Editor) */
    open(path: string): void;
    /** Set the content of a specific file */
    writeFile(path: string, data: string): void;
    /** Return the content of a specific file */
    readFile(path: string): string;
    /** Change the path of a file */
    rename(oldPath: string, newPath: string): void;
    /** Upsert a file with the content of the source file */
    copyFile(src: string, dest: string): void;
    /** Create a directory */
    mkdir(path: string): void;
    /** Get the list of files in the directory */
    readdir(path: string): string[];
  }
}