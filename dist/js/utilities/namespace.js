var MyApp = MyApp || {};

MyApp.namespace = function() {
  var ln = arguments.length, i, value, split, x, xln, parts, object;
  
  for (i = 0; i < ln; i++) {
    value = arguments[i];
    parts = value.split(".");
    object = window[parts[0]] = Object(window[parts[0]]);
    
    for (x = 1, xln = parts.length; x < xln; x++) {
      object = object[parts[x]] = Object(object[parts[x]]);
    }
  }
  return object;
};

// Shortcut alias
MyApp.ns = MyApp.namespace;
