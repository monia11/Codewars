// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;

  
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount()/this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  
  if(pageIndex+1 > this.pageCount()){

    return -1
  }else {
    if(this.pageCount()==1){
      return this.itemCount();
    }else if(pageIndex+1 ==this.pageCount()){
      return this.itemCount()-pageIndex*this.itemsPerPage;
}else{
  return this.itemsPerPage;

}}
}
// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {

  if(itemIndex +1 > this.itemCount() || itemIndex <0){
    return -1;
  }else {
    return Math.ceil(((itemIndex+1)/this.itemsPerPage)-1);
  }
}
var helper = new PaginationHelper(['a','b','c','d','e','f','b','c','d','e','f'], 5);
console.log(helper);
console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
console.log(helper.pageIndex(5));