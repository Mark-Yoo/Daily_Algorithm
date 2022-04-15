class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    console.log("current Node", currentNode);

    for (const letter of string) {
      if (!currentNode.children.has(letter)) {
        currentNode.children.set(letter, new Node(currentNode.value + letter));
        console.log("currentNode value", currentNode.value);
        console.log("letter", letter);
      }

      currentNode = currentNode.children.get(letter);
    }
  }

  exist(string) {
    let currentNode = this.root;

    for (const letter of string) {
      if (!currentNode.children.has(letter)) {
        return false;
      }

      currentNode = currentNode.children.get(letter);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert("application");
trie.insert("apple");
console.log(trie.exist("apple"));
console.log(trie.exist("app"));
