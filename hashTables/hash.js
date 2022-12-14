class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    for(let i = 0; i < currentBucket.length; i++) {
      if(currentBucket[i][0] === key) {
        currentBucket.splice(i, 1);
        return "Eliminado";
      }
    }
    return "No existe";
  }
  listKeys() {
    this.data.forEach((values, index) => {
      const chainValues = values.map(
        ([key, value]) => `[ ${key} ${value} ]`
      );
      console.log(`${index}: ${chainValues}`);
    });
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Adriana", 2000);
myHashTable.set("Luis", 1994);