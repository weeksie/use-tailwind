import serialized from './serialized';
import { deserialize, runLengthDecode } from './trie';
export default deserialize(runLengthDecode(serialized));
