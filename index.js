const { faker } = require('@faker-js/faker');

class HumanReadableID {
    constructor(options = {}) {
        this.wordType = options.wordType || "adjective-noun";
        this.separator = options.separator || "-";
        this.includeNumbers = options.includeNumbers || true;
    }

    generateWord(type) {
        switch (type) {
            case "adjective":
                return faker.word.adjective();
            case "noun":
                return faker.word.noun();
            case "verb":
                return faker.word.verb();
            case "color":
                return faker.color.human();
            default:
                return faker.word.sample();
        }
    }

    generate(length = 2) {
        const idParts = [];
        const wordTypes = this.wordType.split("-");
        const cycleTypes = wordTypes.length;

        for (let i = 0; i < length; i++) {
            const type = wordTypes[i % cycleTypes];
            const word = this.generateWord(type);
            idParts.push(word);
        }

        if (this.includeNumbers) {
            idParts.push(faker.number.int({ min: 100, max: 999 }));
        }

        return idParts.join(this.separator);
    }

    generateBulk(count = 5, length = 2) {
        const ids = [];
        for (let i = 0; i < count; i++) {
            ids.push(this.generate(length));
        }
        return ids;
    }
}

module.exports = HumanReadableID;

if (require.main === module) {
    const idGenerator = new HumanReadableID({
        wordType: "adjective-noun",
        separator: "-",
        includeNumbers: true
    });

    console.log("Single ID:", idGenerator.generate());
    console.log("Bulk IDs:", idGenerator.generateBulk(10));
}

