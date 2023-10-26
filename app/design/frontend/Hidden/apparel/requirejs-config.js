// var config = {
//     deps: [
//         "js/main",
//         "js/simple",
//     ],
// }


var config = {
    "map": {
      "*": {
        "custom": "js/custom",
        // 'Hidden_apparel/cart-updater': 'Hidden_apparel/cart-updater',
        // 'Hidden_apparel/customCartUpdater': 'Hidden/apparel/web/js/customCartUpdater',
        "abc": "Hidden_apparel/js/abc"
      }
    },
    "shim": {
        "custom": {
        "deps": ["jquery"]
        },
        "abc": {
          "deps": ["jquery"]
        }
    }
  };
  