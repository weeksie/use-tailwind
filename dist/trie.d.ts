interface TrieNode {
    terminal: boolean;
    children: {
        [char: string]: TrieNode;
    };
}
export default class Trie {
    root: TrieNode;
    constructor();
    insert(value: string): void;
    has(value: string): boolean;
    serialize(): string;
}
export declare const deserialize: (serialized: string) => Trie;
export declare const runLengthEncode: (serialized: string) => string;
export declare const runLengthDecode: (encoded: string) => string;
export {};
