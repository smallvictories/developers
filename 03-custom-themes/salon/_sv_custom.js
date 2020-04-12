// v1.0

let offsetX = 25;               // this is the amount of vertical offset your images will have (a larger number is more space)
let offsetY = 25;               // this is the amount of horizontal offset your images will have (a larger number is more space)
let units = "vw";               // this is the unit you want to use to size your offest – px, &, vw, etc. (default: "px")
let container = "body";         // this is the container that holds your images (default: "body")
let object = ".sv-feed-item";    // this is the object that you want to apply offsets to (default: ".sv-feed-item")
let randomizerClass = ".sizer";  // this is the class you can use to size objects randomly

// randomize the offset of an image
randomizeOffset = function(parent,x,y,unit) {
  $(object).each(function() {

    // prevent horizontal scrolling on parent object
    $(parent).css("overflow-x", "hidden");

    // generate offsets
    var marginTop = Math.ceil(Math.random() * y);
    var marginRight = Math.ceil(Math.random() * x);
    var marginBottom = Math.ceil(Math.random() * y);
    var marginLeft = Math.ceil(Math.random() * x);
    console.log("offset-top: " + marginTop + unit + ", offset-right: " + marginRight + unit + ", offset-bottom: " + marginBottom + unit + ", offset-left: " + marginLeft + unit);

    // apply offsets
    $(this).css({
      "margin-top": marginTop + unit,
      "margin-right": marginRight + unit,
      "margin-bottom": marginBottom + unit,
      "margin-left": marginLeft + unit
    });
  });
};

// if an image has class .sizer, randomize its size class
// this lets you skip manually adding classes to your images
let sizeOptions = ['xs','sm', 'md', 'lg', 'xl']; // these are the class names you can use for sizing your images
console.log(sizeOptions);
$(randomizerClass).each(function(){
  var sizeOption = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
  // console.log(sizeOption);
  $(this).addClass(sizeOption);
});


$(document).ready(function() {

  randomizeOffset(container,offsetX,offsetY,units);

});
