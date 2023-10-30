var config = {
    "map": {
      "*": {
        "main": "Practice_ecomm/js/main",
        uiElement: "Magento_Ui/js/lib/core/element/element",
        uiCollection: "Magento_Ui/js/lib/core/collection",   
        uiComponent: "Magento_Ui/js/lib/core/collection",   
        uiClass: "Magento_Ui/js/lib/core/class",   
        uiEvents: "Magento_Ui/js/lib/core/events",   
        uiRegistry: "Magento_Ui/js/lib/registry/registry",   
        consoleLogger: "Magento_Ui/js/lib/logger/console-logger",   
        uiLayout: "Magento_Ui/js/core/renderer/layout",   
        buttonAdapter: "Magento_Ui/js/button-adapter",   
        chartJs: "chartjs/Chart.min",   
        "chart.js": "chartjs/Chart.min",   
        tinymce: "tiny_mce_5/tinymice.min",   
        wysiwygAdapter: "mage/adminhtml/wysiwg/tiny_mce/tinymce5Adapter",    
      }
    },
    "shim": {
        "main": {
        "deps": ["jquery", "slick"]
        }
    },
    paths: {
      'Magento_Theme/custom-component-tpl': 'Magento_Theme::html/custom-component-tpl'
    }
  };
  