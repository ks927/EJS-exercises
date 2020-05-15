class Group {
    constructor() {
        this.group = [];
    }
  
    add(val) {
        if(!this.has(val)) {
            this.group.push(val);
        }
    }
  
    delete(val) {
        this.group = this.group.filter(item => {
            return item !== val
        });
    }
  
    has(val) {
        return this.group.includes(val);
    }
  
    static from(iterable) {
        var newGroup = new Group();

        for (let i in iterable) {
            newGroup.add(iterable[i]);
        }

        return newGroup;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this.group);
    }
  }
  
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        this.position++;

        if (this.position <= this.group.length) {
            return {
                value: this.group[this.position-1],
                done: false
            }
        } else {
            return {
                value: undefined,
                done: true
            }
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
console.log(value);
}