class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  
  // Insert a word into the trie
  insert(word, userData) {
    let current = this.root;
    
    for (const char of word.toLowerCase()) {
      if (!current[char]) {
        current[char] = {};
      }
      current = current[char];
    }
    
    // Mark the end of the word and store the user data
    if (!current[this.endSymbol]) {
      current[this.endSymbol] = [];
    }
    current[this.endSymbol].push(userData);
  }
  
  // Search for words with the given prefix
  search(prefix) {
    let current = this.root;
    const results = [];
    
    // Navigate to the node representing the prefix
    for (const char of prefix.toLowerCase()) {
      if (!current[char]) {
        return results; // Prefix not found
      }
      current = current[char];
    }
    
    // Collect all words with the given prefix
    this._collectWords(current, results);
    
    return results;
  }
  
  // Helper method to collect all words from a given node
  _collectWords(node, results) {
    if (node[this.endSymbol]) {
      results.push(...node[this.endSymbol]);
    }
    
    for (const char in node) {
      if (char !== this.endSymbol) {
        this._collectWords(node[char], results);
      }
    }
  }
}
