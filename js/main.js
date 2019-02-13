/** 
 * Main animation javascript for animations.
 */


// Navigation Animations 
var navItemAnimations = function(nav_items, num_nav_items){
  for (i = 0; i < num_nav_items; i++){
    nav_item = nav_items[i];

    (function(nav_item, index){
      var button = nav_item.getElementsByClassName("nav-item-button")[0];
      var hover_label = nav_item.getElementsByClassName("nav-item-hover-label")[0];
      var nav_line = nav_item.getElementsByClassName("nav-item-line")[0];
      // console.log(hover_label.innerHTML);
      // console.log(nav_item);

      button.addEventListener("mouseenter", function(event){
        nav_line.style.width = "50px";
        hover_label.style.opacity = 1;
        nav_item.style.marginBottom = "10px";
      });

      button.addEventListener("mouseleave", function(event){
        nav_line.style.width = "30px";
        hover_label.style.opacity = 0;
        nav_item.style.marginBottom = "0px";
      });

    }(nav_item, i));
  }
}


/**
 * 
 */
window.onload = function() {

  var nav_items = document.getElementsByClassName("nav-item");
  var num_nav_items = nav_items.length;
  
  navItemAnimations(nav_items, num_nav_items)

};


