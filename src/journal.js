export function Entry(date, entry) {
  this.date = date;
  this.entry = entry;
}

Entry.prototype.words = function(){
  let count = 0;
  for(i = 0; i <=entry.length; i++){
    count ++;
  }
  return count;
};

