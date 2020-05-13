class Group {
    constructor() {
        this.group = [];
    }
  
    add(val) {
        if(!this.group.includes(val)) {
            this.group.push(val);
        }
    }
  
    delete(val) {
        let newGroup = this.group.filter(item => {
            return item !== val
        });

        this.group = newGroup;
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
  }
  
  let foo = Group.from([10,20]);
  // foo.add(10);
  // foo.add(20);
  // foo.has(30);
  foo.delete('10');
//   foo.add(10);
  foo.has(10) // true because deep val check
  // foo