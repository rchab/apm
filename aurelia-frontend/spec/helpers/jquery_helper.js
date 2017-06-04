// Generated by CoffeeScript 1.10.0
(function() {
  this.element_has_class = function(element, klass) {
    var class_string, classes, i, k, len;
    class_string = $("#" + element).attr("class");
    classes = class_string.split(" ");
    for (i = 0, len = classes.length; i < len; i++) {
      k = classes[i];
      if (k === klass) {
        return true;
      }
    }
    return false;
  };

  this.random_css_suffix = function(prefix) {
    var r;
    r = Math.random() * 10000;
    return "" + prefix + (Math.round(r));
  };

}).call(this);