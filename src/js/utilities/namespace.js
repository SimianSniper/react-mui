const MyApp = {};

MyApp.namespace = function namespace(...args) {
  const ln = args.length;
  let object;

  for (let i = 0; i < ln; i += 1) {
    const value = args[i];
    const parts = value.split('.');

    window[parts[0]] = Object(window[parts[0]]);
    object = window[parts[0]];

    for (let x = 1, xln = parts.length; x < xln; x += 1) {
      object[parts[x]] = Object(object[parts[x]]);
      object = object[parts[x]];
    }
  }
  return object;
};

MyApp.ns = MyApp.namespace; // Shortcut alias
window.MyApp = MyApp;
