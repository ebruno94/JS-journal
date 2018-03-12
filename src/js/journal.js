export var journal = {
  entries: [],

  addEntry: function (entry){
    this.entries.push(entry);
  }
};

console.log(journal.entries);
