# 🎉 Human Readable ID Generator

Generate human-readable, memorable IDs with customizable word patterns, separators, and optional numbers! Perfect for creating unique identifiers for your applications. 🚀

---

## ✨ Features

- 🛠️ **Customizable Word Patterns**: Choose from adjectives, nouns, verbs, colors, or random words.
- 🔗 **Custom Separators**: Use any character to separate words and numbers.
- 🔢 **Optional Numbers**: Add a random number for extra uniqueness.
- 📦 **Bulk ID Generation**: Generate multiple IDs at once!

---

## 📥 Installation

### NPM

```bash
npm install human-readable-id  
```

### Yarn

```bash
yarn add human-readable-id  
```

### pnpm

```bash
pnpm add human-readable-id  
```

---

## 📚 Usage

### 👇 Import the Library

```javascript
const HumanReadableID = require('human-readable-id');  
```

### ⚙️ Create an Instance

Customize the generator with options:

```javascript
const idGenerator = new HumanReadableID({  
    wordType: "adjective-noun", // Word pattern (e.g., adjective + noun)  
    separator: "-",            // Separator between words and numbers  
    includeNumbers: true       // Whether to include random numbers  
});  
```

### 🔖 Generate a Single ID

```javascript
const singleID = idGenerator.generate();  
console.log(singleID); // Example: "happy-cat-123"  
```

### 🌀 Generate Bulk IDs

Generate multiple IDs in one call:

```javascript
const bulkIDs = idGenerator.generateBulk(5, 3);  
console.log(bulkIDs);  
// Example Output:  
// [  
//   "bright-sun-red-456",  
//   "fast-fox-sky-789",  
//   "calm-rain-bird-123",  
//   "funny-moon-star-654",  
//   "sharp-tree-leaf-987"  
// ]  
```

### ✂️ Customize ID Length

Control how many words are in the ID:

```javascript
const customLengthID = idGenerator.generate(3); // Three words  
console.log(customLengthID); // Example: "blue-dog-run-234"  
```

---

### 🎯 Advanced Usage

#### 🔄 Change Word Types Dynamically
You can generate IDs with different word types by modifying the `wordType` property dynamically:

```javascript
idGenerator.wordType = "verb-color"; // Update to verb and color pattern
const dynamicID = idGenerator.generate(2);
console.log(dynamicID); // Example: "run-blue-789"
```

#### 🚀 Exclude Numbers
If you prefer IDs without numbers, set `includeNumbers` to `false`:

```javascript
idGenerator.includeNumbers = false;
const noNumberID = idGenerator.generate(2);
console.log(noNumberID); // Example: "happy-cat"
```

#### 🔗 Use Custom Separators
You can change the separator at any time:

```javascript
idGenerator.separator = "_"; // Use an underscore as separator
const customSeparatorID = idGenerator.generate(2);
console.log(customSeparatorID); // Example: "bright_sky"
```

---

## 🧪 Testing

Run the following commands to test the library in your project:

### Node.js Script
```javascript
const HumanReadableID = require('human-readable-id');

const idGenerator = new HumanReadableID({
    wordType: "color-noun",
    separator: "-",
    includeNumbers: true
});

console.log("Test ID:", idGenerator.generate());
console.log("Bulk Test IDs:", idGenerator.generateBulk(3));
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/milan-rath0d/human-readable-id.git).

