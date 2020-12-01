class HashStorage {

    constructor(key, value){
        this.key = key;
        this.value = value;
    }

    storage = {};

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        if (key in this.storage) {
            return this.storage[key];
        } else {
            return undefined;
        }
    }

    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    }

    getKeys() {
        var keys = [];
        for (var key in this.storage) {
            keys.push(key);
        }
        return keys;
    }

}