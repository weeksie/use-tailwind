interface TrieNode {
  terminal: boolean;
  children: {
    [char: string]: TrieNode;
  }
}

const StartMarker = '@';
const TerminalMarker = '$'
const PopMarker = '#'

const initNode = () => {
  return {
    terminal: false,
    children: {},
  };
};

export default class Trie {
  root: TrieNode;
  constructor() {
    this.root = initNode();
  }


  insert(value: string) {
      let node: TrieNode = this.root;

      for (let i = 0; i < value.length; i++) {
        const char = value.charAt(i);
        if (!node.children[char]) {
          node.children[char] = initNode();
        }
        node = node.children[char];
      }

      node.terminal = true;
    }

  has(value: string) {
    let node: TrieNode = this.root;
    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.terminal;
  }


  serialize() {
    const _serialize = (node: TrieNode | undefined, buffer: string[], char: string) => {
      if (!node) {
        return;
      }

      buffer.push(char);

      if (node.terminal) {
        buffer.push(TerminalMarker);
      }

      for (let char in node.children) {
        _serialize(node.children[char], buffer, char);
      }

      buffer.push(PopMarker);
    }

    const buffer = [];
    _serialize(this.root, buffer, StartMarker);
    return buffer.join('');
  }
};

export const deserialize = (serialized: string) => {
  const buffer = serialized.split('');
  const length = buffer.length;
  const chars: string[] = [];
  const trie = new Trie();
  let index = 0;
  while (index < length) {
    const char = buffer[index];
    switch (char) {
      case StartMarker:
        break;
      case TerminalMarker:
        trie.insert(chars.join(''));
        break;
      case PopMarker:
        chars.pop();
        break;
      default:
        chars.push(char);
        break;
    }
    index++;
  }
  return trie;
}

export const runLengthEncode = (serialized: string) => {
  const buffer: string[] = [];
  let run: number = 0;
  for (let char of serialized) {
    switch (char) {
      case TerminalMarker:
        run = 0;
        buffer.push(char);
        break;
      case PopMarker:
        run++;
        break;
      default:
        if (run > 0) {
          buffer.push(run.toString());
          buffer.push(PopMarker);
          run = 0;
        }

        buffer.push(char);
        break;
    }
  }
  if (run > 0) {
    buffer.push(run.toString());
    buffer.push(PopMarker);
  }
  return buffer.join('');
}

const NumberRegex = /[0-9]/;
export const runLengthDecode = (encoded: string) => {
  const buffer: string[] = [];
  let index = 0;
  while (index < encoded.length) {
    const char = encoded[index];

    if (char !== TerminalMarker) {
      buffer.push(char)
      index++;
      continue;
    }

    // push terminal marker
    buffer.push(char);

    // parse run length with look ahead
    let run: string[] = [];
    let depth: number | undefined;

    for (let i = (index + 1); i < encoded.length; i++) {
      const peek = encoded[i];
      // eat up numbers
      if (NumberRegex.test(peek)) {
        run.push(peek);
        continue;
      }

      // until we hit a pop marker
      if (peek === PopMarker) {
        // expand our run length onto the buffer
        depth = parseInt(run.join(''));
        buffer.push(new Array(depth).fill(PopMarker).join(''));

        // skip the cursor ahead
        index = i;
        break;
      }

      // if we hit something else, then this wasn't a run length encode
      break;
    }

    index++;
  }

  return buffer.join('');
}
