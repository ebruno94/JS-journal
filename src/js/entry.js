export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.getTitle = function(){
  return this.title;
};

Entry.prototype.getBody = function(){
  return this.body;
};

Entry.prototype.countVowels = function(){
  var tempText = this.title + this.body;
  var tempLower = (tempText.toLowerCase()).split("");
  var vowelCount = 0;
  tempLower.forEach(function(character){
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
      vowelCount ++;
    }
  });
  return "There are " + vowelCount + " vowels in your entry.";
};

Entry.prototype.countConsonants = function(){
  var tempText = this.title + this.body;
  var tempLower = (tempText.toLowerCase()).split("");
  var consonantCount = 0;
  tempLower.forEach(function(character){
    if (!(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u')){
      consonantCount ++;
    }
  });
  return "There are " + consonantCount + " consonants in your entry.";
};

Entry.prototype.getTeaser = function(){
  var re = new RegExp('[.?!]');
  var tempText = this.title + this.body;
  var tempLower = tempText.toLowerCase();
  var index = tempLower.search(re);
  return tempLower.slice(0, index + 1);
};
