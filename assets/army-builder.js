'use strict';



;define("army-builder/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("army-builder/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "army-builder/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("army-builder/application/route", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationRoute extends _route.default {}

  _exports.default = ApplicationRoute;
});
;define("army-builder/application/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "BDqylyTl",
    "block": "[[[1,[28,[35,0],[\"ArmyBuilder\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\"],[8,[39,2],null,null,null],[1,\"\\n\"],[8,[39,3],null,null,null],[1,\"\\n\"],[46,[28,[37,5],null,null],null,null,null]],[],false,[\"page-title\",\"site-navigation\",\"site-header\",\"site-menu\",\"component\",\"-outlet\"]]",
    "moduleName": "army-builder/application/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/armies/army/route", ["exports", "@ember/routing/route", "jquery"], function (_exports, _route, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ArmiesArmyRoute extends _route.default {
    async model(params) {
      let armyFile = await _jquery.default.getJSON('/armies/' + params._id.toLowerCase() + '.json');
      let army = {
        name: params._id,
        details: armyFile,
        image: '/images/armies/' + params._id.toLowerCase() + '.png'
      };
      return army;
    }

  }

  _exports.default = ArmiesArmyRoute;
});
;define("army-builder/armies/army/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "VOfyGPIq",
    "block": "[[[1,[28,[35,0],[[30,0,[\"army\",\"name\"]]],null]],[1,\"\\n\"],[8,[39,1],[[24,0,\"col-xs-12\"]],[[\"@army\"],[[30,0,[\"model\"]]]],null]],[],false,[\"page-title\",\"components/army-sheet\"]]",
    "moduleName": "army-builder/armies/army/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/armies/index/route", ["exports", "@ember/routing/route", "jquery", "army-builder/config/environment", "@ember/array", "@ember/string"], function (_exports, _route, _jquery, _environment, _array, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ArmiesIndexRoute extends _route.default {
    async model() {
      let armies = (0, _array.A)();
      await _environment.default.armies.forEach(army => {
        let name = army;
        armies.pushObject({
          name: (0, _string.capitalize)(name),
          details: _jquery.default.getJSON('/armies/' + army + '.json'),
          image: '/images/armies/' + army + '.png'
        });
      });
      return armies;
    }

  }

  _exports.default = ArmiesIndexRoute;
});
;define("army-builder/armies/index/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "OViceW23",
    "block": "[[[1,[28,[35,0],[\"Army Selector\"],null]],[1,\"\\n\"],[10,0],[14,0,\"container text-center\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row col-sm-12\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"card primary-background col-sm-4\"],[14,5,\"width: 18rem; margin-left:10px; margin-right:10px; margin-bottom:10px; margin-top:10px;\"],[12],[1,\"\\n            \"],[10,\"h5\"],[14,0,\"card-title\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n            \"],[10,\"img\"],[15,\"src\",[30,1,[\"image\"]]],[14,0,\"card-img-top army-card-logo\"],[12],[13],[1,\"\\n            \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n                \"],[8,[39,3],[[24,5,\"color:white\"]],[[\"@route\",\"@model\"],[\"armies.army\",[30,1,[\"name\"]]]],[[\"default\"],[[[[1,\"View Army Information\"]],[]]]]],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"army\"],false,[\"page-title\",\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "army-builder/armies/index/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/armies/route", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ArmiesRoute extends _route.default {}

  _exports.default = ArmiesRoute;
});
;define("army-builder/armies/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "OlMQ3AIS",
    "block": "[[[1,[28,[35,0],[\"Armies\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "army-builder/armies/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("army-builder/components/army-sheet/component", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ArmySheetComponent = (_class = class ArmySheetComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "showArmyBackground", _descriptor, this);

      _initializerDefineProperty(this, "activeCategory", _descriptor2, this);

      _initializerDefineProperty(this, "activeOptions", _descriptor3, this);

      let currentCategory = this.args.army.details.upgrades.findBy('category', this.activeCategory);
      (0, _object.set)(this, 'activeOptions', currentCategory.options);
    }

    get orderedBackground() {
      let background = this.args.army.details.background;
      background.sortBy('paragraph');
      return background;
    }

    setCategory(category) {
      (0, _object.set)(this, 'activeCategory', category);
      let currentCategory = this.args.army.details.upgrades.findBy('category', this.activeCategory);
      (0, _object.set)(this, 'activeOptions', currentCategory.options);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "showArmyBackground", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "activeCategory", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'A';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "activeOptions", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setCategory", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setCategory"), _class.prototype)), _class);
  _exports.default = ArmySheetComponent;
});
;define("army-builder/components/army-sheet/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "qu4fHCov",
    "block": "[[[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,5,\"margin-bottom:0\"],[12],[10,\"img\"],[15,\"src\",[30,1,[\"image\"]]],[14,0,\"army-icon\"],[12],[13],[1,\" \"],[1,[30,1,[\"name\"]]],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n        \"],[10,3],[14,\"data-bs-toggle\",\"collapse\"],[14,6,\"#collapseDesc\"],[14,\"role\",\"button\"],[14,5,\"padding-left: 64px; margin-bottom:10px\"],[12],[1,\"\\n            Army Description\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"container\"],[14,0,\"collapse\"],[14,1,\"collapseDesc\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"orderedBackground\"]]],null]],null],null,[[[1,\"            \"],[10,0],[14,5,\"margin:10px\"],[12],[1,[30,2,[\"text\"]]],[13],[1,\"\\n\"]],[2]],null],[1,\"        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"table\"],[14,0,\"table table-striped table-dark col-xs-12 \"],[14,5,\"margin-top:20px\"],[12],[1,\"\\n        \"],[10,\"thead\"],[12],[1,\"\\n            \"],[10,\"tr\"],[14,0,\"lead\"],[12],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Name\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Size\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Quality\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Defense\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Equipment\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Special Rules\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Upgrades\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Cost\"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1,[\"details\",\"units\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[12],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,3,[\"name\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,3,[\"size\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,3,[\"quality\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,3,[\"defense\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[42,[28,[37,1],[[28,[37,1],[[30,3,[\"equipment\"]]],null]],null],null,[[[10,0],[12],[1,[30,4]],[13]],[4]],null],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,3,[\"specialRules\"]]],null]],null],null,[[[1,\"                    \"],[10,1],[12],[1,[30,5]],[41,[51,[28,[37,3],[[30,5],[30,3,[\"specialRules\",\"lastObject\"]]],null]],[[[1,\", \"]],[]],null],[13],[1,\"\\n\"]],[5]],null],[1,\"                \"],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"\\n\"],[41,[28,[37,5],[[30,3,[\"upgrades\",\"length\"]],0],null],[[[42,[28,[37,1],[[28,[37,1],[[30,3,[\"upgrades\"]]],null]],null],null,[[[1,\"                    \"],[10,1],[12],[1,[30,6]],[41,[51,[28,[37,3],[[30,6],[30,3,[\"upgrades\",\"lastObject\"]]],null]],[[[1,\", \"]],[]],null],[13],[1,\"\\n\"]],[6]],null]],[]],[[[1,\"                    \"],[10,1],[12],[1,\"-\"],[13],[1,\"\\n\"]],[]]],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,3,[\"cost\"]]],[1,\" Pts\"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[3]],null],[1,\"        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\n        \"],[10,0],[14,0,\"row col-sm-12\"],[12],[1,\"\\n\\n            \"],[10,0],[14,0,\"col-sm-7\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"card text-center\"],[14,5,\"background-color:#2c3034\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"card-header\"],[12],[1,\"\\n                        \"],[10,\"ul\"],[14,0,\"nav nav-tabs card-header-tabs\"],[14,5,\"background-color:#212529;\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1,[\"details\",\"upgrades\"]]],null]],null],null,[[[1,\"                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n\"],[41,[28,[37,3],[[30,0,[\"activeCategory\"]],[30,7,[\"category\"]]],null],[[[1,\"                                \"],[10,\"button\"],[14,0,\"nav-link active\"],[14,5,\"background-color:black; color:#2c3034\"],[14,4,\"button\"],[12],[1,[30,7,[\"category\"]]],[13],[1,\"\\n\"]],[]],[[[1,\"                                \"],[11,\"button\"],[24,0,\"nav-link\"],[24,5,\"color:white\"],[24,4,\"button\"],[4,[38,6],[\"click\",[28,[37,7],[[30,0,[\"setCategory\"]],[30,7,[\"category\"]]],null]],null],[12],[1,[30,7,[\"category\"]]],[13],[1,\"\\n\"]],[]]],[1,\"                            \"],[13],[1,\"\\n\"]],[7]],null],[1,\"                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"card-body\"],[14,5,\"color:white\"],[12],[1,\"\\n                        \"],[10,\"ul\"],[14,0,\"list-group list-group-flush\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"activeOptions\"]]],null]],null],null,[[[1,\"                            \"],[10,\"li\"],[14,0,\"list-group-item\"],[14,5,\"background-color:#212529; color:white\"],[12],[1,\"\\n                                \"],[1,[30,8,[\"subCategory\"]]],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"ul\"],[14,0,\"list-group list-group-flush\"],[14,5,\"color:white\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,8,[\"choices\"]]],null]],null],null,[[[1,\"                                \"],[10,\"li\"],[14,0,\"list-group-item\"],[14,5,\"background-color:#2c3034; color:white\"],[12],[1,\"\\n                                    \"],[1,[30,9,[\"equipment\"]]],[1,\" \"],[1,[30,9,[\"cost\"]]],[1,\" pts\"],[13],[1,\"\\n\"]],[9]],null],[1,\"                            \"],[13],[1,\"\\n\"]],[8]],null],[1,\"                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"col-sm-5\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"card\"],[14,5,\"background-color:#2c3034\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"card-header\"],[14,5,\"background-color:#212529;\"],[12],[1,\"Special Rules\"],[13],[1,\"\\n                    \"],[10,\"ul\"],[14,0,\"list-group list-group-flush\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1,[\"details\",\"specialRules\"]]],null]],null],null,[[[1,\"                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[14,5,\"background-color:#2c3034; color:white\"],[12],[1,\"\\n                            \"],[10,\"h4\"],[12],[1,[30,10,[\"name\"]]],[13],[1,\"\\n                            \"],[10,0],[12],[1,[30,10,[\"rule\"]]],[13],[1,\"\\n                        \"],[13],[1,\"\\n\"]],[10]],null],[1,\"                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"col-sm-7\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"card\"],[14,5,\"background-color:#2c3034\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"card-header\"],[14,5,\"background-color:#212529;\"],[12],[1,\"Wizard Spells\"],[13],[1,\"\\n                    \"],[10,\"ul\"],[14,0,\"list-group list-group-flush\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1,[\"details\",\"wizardSpells\"]]],null]],null],null,[[[1,\"                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[14,5,\"background-color:#2c3034; color:white\"],[12],[1,\"\\n                            \"],[10,\"h4\"],[12],[1,[30,11,[\"name\"]]],[1,\" (\"],[1,[30,11,[\"level\"]]],[1,\"+)\"],[13],[1,\"\\n                            \"],[10,0],[12],[1,[30,11,[\"rule\"]]],[13],[1,\"\\n                        \"],[13],[1,\"\\n\"]],[11]],null],[1,\"                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\\n\\n\"],[13]],[\"@army\",\"paragraph\",\"unit\",\"equip\",\"specialRule\",\"upgrade\",\"upgrade\",\"option\",\"choice\",\"specialRule\",\"spell\"],false,[\"each\",\"-track-array\",\"unless\",\"eq\",\"if\",\"gt\",\"on\",\"fn\"]]",
    "moduleName": "army-builder/components/army-sheet/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/components/site-header/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "LIqlodPT",
    "block": "[[[10,0],[14,0,\"\"],[12],[1,\"\\n    \"],[10,\"svg\"],[14,0,\"header-title\"],[14,\"width\",\"600\"],[14,\"height\",\"120\"],[12],[1,\"\\n        \"],[10,\"rect\"],[14,\"width\",\"600\"],[14,\"height\",\"120\"],[14,5,\"fill:rgb(0,0,0); opacity:60%;\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"header-title\"],[12],[1,\"Bodegi's Army Builder\"],[13],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"/images/header.png\"],[14,5,\"height: 200px; width: 100%;\"],[12],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "army-builder/components/site-header/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/components/site-menu/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "8ZzO3ybe",
    "block": "[[[10,\"nav\"],[14,0,\"navbar navbar-expand-lg navbar-dark bg-dark\"],[14,5,\"margin-bottom:20px\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"navbar-nav mx-auto mb-2 mb-lg-0\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n          \"],[8,[39,0],[[24,0,\"nav-link\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Home\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n          \"],[8,[39,0],[[24,0,\"nav-link\"]],[[\"@route\"],[\"armies\"]],[[\"default\"],[[[[1,\"View Army Info\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"],[1,\"        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n          \"],[8,[39,0],[[24,0,\"nav-link\"]],[[\"@route\"],[\"point-calculators\"]],[[\"default\"],[[[[1,\"Build Army\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"],[1,\"  \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\"]]",
    "moduleName": "army-builder/components/site-menu/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/components/site-navigation/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "zK7wKIa0",
    "block": "[[[10,\"nav\"],[14,0,\"navbar navbar-expand-lg navbar-dark\"],[14,5,\"background-color:green;\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"container-fluid\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"navbar-brand site-name\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"BAB\"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"\"],[14,1,\"navbarSupportedContent\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"navbar-nav me-auto mb-2 mb-lg-0\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n\"],[1,\"        \"],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item dropdown\"],[12],[1,\"\\n          \"],[10,3],[14,0,\"nav-link dropdown-toggle disabled\"],[14,6,\"#\"],[14,1,\"navbarDropdown\"],[14,\"role\",\"button\"],[14,\"data-bs-toggle\",\"dropdown\"],[12],[1,\"\\n            User\\n          \"],[13],[1,\"\\n          \"],[10,\"ul\"],[14,0,\"dropdown-menu primary-background primary-text\"],[12],[1,\"\\n            \"],[10,\"li\"],[12],[10,3],[14,0,\"dropdown-item primary-text\"],[14,6,\"#\"],[12],[1,\"Action\"],[13],[13],[1,\"\\n            \"],[10,\"li\"],[12],[10,3],[14,0,\"dropdown-item primary-text\"],[14,6,\"#\"],[12],[1,\"Another action\"],[13],[13],[1,\"\\n            \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider primary-text\"],[12],[13],[13],[1,\"\\n            \"],[10,\"li\"],[12],[10,3],[14,0,\"dropdown-item primary-text\"],[14,6,\"#\"],[12],[1,\"Log Out\"],[13],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\"]]",
    "moduleName": "army-builder/components/site-navigation/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("army-builder/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("army-builder/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
});
;define("army-builder/helpers/app-version", ["exports", "@ember/component/helper", "army-builder/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("army-builder/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("army-builder/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("army-builder/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("army-builder/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("army-builder/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("army-builder/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("army-builder/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("army-builder/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("army-builder/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("army-builder/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("army-builder/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("army-builder/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("army-builder/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("army-builder/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("army-builder/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("army-builder/index/route", ["exports", "@ember/routing/route", "jquery", "army-builder/config/environment", "@ember/array", "@ember/string"], function (_exports, _route, _jquery, _environment, _array, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexRoute extends _route.default {// async model() {
    //   let armies = A();
    //   await config.armies.forEach((army) => {
    //     armies.pushObject({
    //       name: capitalize(army),
    //       details: $.getJSON('/armies/' + army + '.json'),
    //       image: '/images/armies/' + army + '.png',
    //     });
    //   });
    //   return armies;
    // }
  }

  _exports.default = IndexRoute;
});
;define("army-builder/index/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "7m6M4yuv",
    "block": "[[[1,[28,[35,0],[\"Army Selector\"],null]],[1,\"\\n\"],[10,0],[14,0,\"container text-center\"],[12],[1,\"\\n    Welcome to the in-progress app for building \\\"Age of Fantasy: Regiments\\\" armies!\\n\"],[13]],[],false,[\"page-title\"]]",
    "moduleName": "army-builder/index/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "army-builder/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("army-builder/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("army-builder/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("army-builder/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("army-builder/initializers/export-application-global", ["exports", "ember", "army-builder/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("army-builder/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("army-builder/point-calculators/index/route", ["exports", "@ember/routing/route", "jquery", "army-builder/config/environment", "@ember/array", "@ember/string"], function (_exports, _route, _jquery, _environment, _array, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class PointCalculatorsIndexRoute extends _route.default {
    async model() {
      let armies = (0, _array.A)();
      await _environment.default.armies.forEach(army => {
        let name = army;
        armies.pushObject({
          name: (0, _string.capitalize)(name),
          details: _jquery.default.getJSON('/armies/' + army + '.json'),
          image: '/images/armies/' + army + '.png'
        });
      });
      return armies;
    }

  }

  _exports.default = PointCalculatorsIndexRoute;
});
;define("army-builder/point-calculators/index/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Rw+BD6Im",
    "block": "[[[1,[28,[35,0],[\"Army Selector\"],null]],[1,\"\\n\"],[10,0],[14,0,\"container text-center\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row col-sm-12\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"card primary-background col-sm-4\"],[14,5,\"width: 18rem; margin-left:10px; margin-right:10px; margin-bottom:10px; margin-top:10px;\"],[12],[1,\"\\n            \"],[10,\"h5\"],[14,0,\"card-title\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n            \"],[10,\"img\"],[15,\"src\",[30,1,[\"image\"]]],[14,0,\"card-img-top army-card-logo\"],[12],[13],[1,\"\\n            \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n                \"],[8,[39,3],[[24,5,\"color:white\"]],[[\"@route\",\"@model\"],[\"point-calculators.point-calculator\",[30,1,[\"name\"]]]],[[\"default\"],[[[[1,\"Build Army\"]],[]]]]],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"army\"],false,[\"page-title\",\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "army-builder/point-calculators/index/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/point-calculators/point-calculator/controller", ["exports", "@ember/controller", "@ember/object", "@glimmer/tracking", "@ember/array"], function (_exports, _controller, _object, _tracking, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PointCalculatorsPointCalculatorController = (_class = class PointCalculatorsPointCalculatorController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "points", _descriptor, this);

      _initializerDefineProperty(this, "showAddUnit", _descriptor2, this);

      _initializerDefineProperty(this, "armyList", _descriptor3, this);

      _initializerDefineProperty(this, "selectedUnit", _descriptor4, this);

      _initializerDefineProperty(this, "canAddUnit", _descriptor5, this);

      _initializerDefineProperty(this, "canSeeUpgrade", _descriptor6, this);

      _initializerDefineProperty(this, "selectedUpgrades", _descriptor7, this);

      _initializerDefineProperty(this, "indexCounter", _descriptor8, this);

      _initializerDefineProperty(this, "armyListUnit", _descriptor9, this);

      _initializerDefineProperty(this, "tempPointsRemaining", _descriptor10, this);
    }

    upgradeCostCheck() {
      debugger;
    }

    upgradeCountCheck() {
      debugger;
    }

    upgradeUpdateVisibility() {
      this.upgradeCostCheck();
      this.upgradeCountCheck();
    }

    unitCostCheck() {
      let bool = false;
      this.model.details.units.forEach(unit => {
        if (unit.cost <= this.points.remaining) {
          bool = true;
        }
      });
      (0, _object.set)(this, 'canAddUnit', bool);
    }

    updateCostChecks() {
      this.unitCostCheck();
      this.upgradeCostCheck();
    }

    replaceItem(category, item, unit) {
      switch (category.slot) {
        case 'equipment':
          (0, _object.set)(unit.equipment[0], 'enabled', false);
          unit.equipment.pushObject({
            desc: item.equipment,
            isUpgrade: true,
            enabled: true,
            originalLocation: category,
            cost: item.cost
          });
          break;

        case 'special':
          if (item.equipment === 'Wizard(2)') {
            let special = unit.specialRules.findBy('desc', 'Wizard(1)');
            unit.specialRules.pushObject({
              desc: item.equipment,
              isUpgrade: true,
              enabled: true,
              originalLocation: category,
              cost: item.cost
            });
            (0, _object.set)(special, 'enabled', false);
          }

          break;

        default:
          break;
      }

      return unit;
    }

    addItem(category, item, unit) {
      switch (category.slot) {
        case 'equipment':
          unit.equipment.pushObject({
            desc: item.equipment,
            isUpgrade: true,
            enabled: true,
            originalLocation: category,
            cost: item.cost
          });

          if (category.keyWord === 'add') {
            unit.upgrades.map(upgrade => {
              if (upgrade.choices === category.choices) {
                let t = unit.equipment.filter(equip => item.equipment === equip.desc);

                if (t.length === category.count) {
                  (0, _object.set)(upgrade, 'enabled', false);
                }
              }

              return upgrade;
            });
          }

          if (category.keyWord === 'addEach') {
            let x = category.choices.findBy('equipment', item.equipment);
            (0, _object.set)(x, 'enabled', false);
            let bool = false;
            category.choices.forEach(choice => {
              if (choice.enabled) {
                bool = true;
              }
            });

            if (!bool) {
              unit.upgrades.map(upgrade => {
                if (upgrade.choices === category.choices) {
                  (0, _object.set)(upgrade, 'enabled', false);
                }

                return upgrade;
              });
            }
          }

          break;

        case 'special':
          unit.specialRules.pushObject({
            desc: item.equipment,
            isUpgrade: true,
            enabled: true,
            originalLocation: category,
            cost: item.cost
          });

          if (category.keyWord === 'add') {
            unit.upgrades.map(upgrade => {
              if (upgrade.choices === category.choices) {
                let t = unit.specialRules.filter(special => item.equipment === special.desc);

                if (t.length === category.count) {
                  (0, _object.set)(upgrade, 'enabled', false);
                }
              }

              return upgrade;
            });
          }

          if (category.keyWord === 'addEach') {
            let x = category.choices.findBy('equipment', item.equipment);
            (0, _object.set)(x, 'enabled', false);
            let bool = false;
            category.choices.forEach(choice => {
              if (choice.enabled) {
                bool = true;
              }
            });

            if (!bool) {
              unit.upgrades.map(upgrade => {
                if (upgrade.choices === category.choices) {
                  (0, _object.set)(upgrade, 'enabled', false);
                }

                return upgrade;
              });
            }
          }

          break;

        default:
          break;
      }

      return unit;
    }

    removeItem(upgrade, unit) {
      let category = upgrade.originalLocation;
      unit.upgrades.map(upgrade => {
        if (upgrade.subCategory === category.subCategory) {
          (0, _object.set)(upgrade, 'enabled', true);
        }

        return upgrade;
      });

      switch (upgrade.originalLocation.slot) {
        case 'equipment':
          unit.equipment.removeAt(unit.equipment.indexOf(upgrade));
          break;

        case 'special':
          unit.specialRules.removeAt(unit.specialRules.indexOf(upgrade));
          break;

        default:
          break;
      }
    }

    findUnitIndex(unit) {
      return this.armyList.findIndex(armyUnit => armyUnit.index === unit.index);
    }

    addUnit(sourceUnit) {
      let unit = {
        name: sourceUnit.name,
        baseCost: sourceUnit.cost,
        adjustedCost: sourceUnit.cost,
        defense: sourceUnit.defense,
        equipment: JSON.parse(JSON.stringify(sourceUnit.equipment)).map(item => {
          return {
            desc: item,
            isUpgrade: false,
            enabled: true
          };
        }),
        quality: sourceUnit.quality,
        size: sourceUnit.size,
        specialRules: JSON.parse(JSON.stringify(sourceUnit.specialRules)).map(item => {
          return {
            desc: item,
            isUpgrade: false,
            enabled: true
          };
        }),
        upgrades: JSON.parse(JSON.stringify(sourceUnit.upgrades)).flat().map(upgrade => {
          upgrade.enabled = true;
          upgrade.choices.map(choice => {
            choice.enabled = true;
          });
          return upgrade;
        }),
        index: sourceUnit.index
      };
      const currentIndex = this.indexCounter;
      unit.index = currentIndex;
      this.armyList.pushObject(unit);
      let increment = this.indexCounter;
      increment++;
      (0, _object.set)(this, 'indexCounter', increment);
      (0, _object.set)(this.points, 'remaining', this.points.remaining - unit.baseCost);
      this.unitCostCheck();
    }

    removeUnit(unit) {
      let index = this.findUnitIndex(unit);
      let modifiedArmyList = this.armyList.removeAt(index);
      (0, _object.set)(this, 'armyList', modifiedArmyList);
      (0, _object.set)(this.points, 'remaining', this.points.remaining + unit.adjustedCost);
      this.unitCostCheck();
    }

    cancelUpgradeUnit() {
      (0, _object.set)(this, 'selectedUnit', null);
      (0, _object.set)(this, 'armyListUnit', null);
      (0, _object.set)(this, 'tempPointsRemaining', null);
    }

    initUpgrade(unit) {
      (0, _object.set)(this, 'selectedUnit', JSON.parse(JSON.stringify(unit)));
      (0, _object.set)(this, 'armyListUnit', JSON.parse(JSON.stringify(unit)));
      (0, _object.set)(this, 'tempPointsRemaining', this.points.remaining);
    }

    selectUpgrade(category, upgrade) {
      let unit = this.selectedUnit;

      switch (category.keyWord) {
        case 'replace':
          unit = this.replaceItem(category, upgrade, unit);
          unit.upgrades.map(upgrade => {
            if (upgrade.subCategory === category.subCategory) {
              (0, _object.set)(upgrade, 'enabled', false);
            }

            return upgrade;
          });
          break;

        case 'add':
          unit = this.addItem(category, upgrade, unit);
          break;

        case 'addEach':
          unit = this.addItem(category, upgrade, unit);
          break;

        default:
          break;
      }

      unit.adjustedCost = unit.adjustedCost + upgrade.cost;
      (0, _object.set)(this, 'tempPointsRemaining', this.tempPointsRemaining - upgrade.cost);
      (0, _object.set)(this, 'selectedUnit', unit);
    }

    updateUnit() {
      let unit = this.selectedUnit;
      unit.modified = true;
      let index = this.findUnitIndex(unit);
      let modifiedArmyList = this.armyList;
      modifiedArmyList[index] = unit;
      (0, _object.set)(this, 'armyList', modifiedArmyList);
      (0, _object.set)(this, 'selectedUnit', null);
      (0, _object.set)(this, 'armyListUnit', null);
      (0, _object.set)(this.points, 'remaining', this.tempPointsRemaining);
      (0, _object.set)(this, 'tempPointsRemaining', null);
    }

    removeUpgrade(upgrade) {
      let controller = this;
      let unit = controller.selectedUnit;

      if (upgrade.originalLocation.keyWord === 'replace') {
        if (upgrade.originalLocation.slot === 'equipment') {
          (0, _object.set)(unit.equipment[0], 'enabled', true);
        }

        if (upgrade.originalLocation.slot === 'special') {
          let special = unit.specialRules.findBy('desc', 'Wizard(1)');
          (0, _object.set)(special, 'enabled', true);
        }
      }

      if (upgrade.originalLocation.keyWord === 'addEach') {
        let x = unit.upgrades.find(unitUpgrade => unitUpgrade.choices[0].equipment === upgrade.originalLocation.choices[0].equipment);
        x.choices.map(choice => {
          if (choice.equipment === upgrade.desc) {
            (0, _object.set)(choice, 'enabled', true);
          }
        });
      }

      controller.removeItem(upgrade, unit);
      (0, _object.set)(unit, 'adjustedCost', unit.adjustedCost - upgrade.cost);
      (0, _object.set)(controller, 'tempPointsRemaining', controller.tempPointsRemaining + upgrade.cost);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "points", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {
        total: 500,
        remaining: 500
      };
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "showAddUnit", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "armyList", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)();
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "selectedUnit", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "canAddUnit", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "canSeeUpgrade", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "selectedUpgrades", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)();
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "indexCounter", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "armyListUnit", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "tempPointsRemaining", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addUnit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addUnit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeUnit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeUnit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelUpgradeUnit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cancelUpgradeUnit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initUpgrade", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initUpgrade"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectUpgrade", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectUpgrade"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateUnit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateUnit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeUpgrade", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeUpgrade"), _class.prototype)), _class);
  _exports.default = PointCalculatorsPointCalculatorController;
});
;define("army-builder/point-calculators/point-calculator/route", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class PointCalculatorsPointCalculatorRoute extends _route.default {
    async model(params) {
      // const params = { _id: 'beastmen' };
      // const params = { _id: 'humans' };s
      let armyFile = await $.getJSON('/armies/' + params._id + '.json');
      let army = {
        name: params._id,
        details: armyFile,
        image: '/images/armies/' + params._id + '.png'
      };
      army.details = this.upgradeMapper(army.details);
      return army;
    }

    upgradeMapper(army) {
      army.units = army.units.map(unit => {
        if (unit.upgrades) {
          unit.upgrades = unit.upgrades.map(upgrade => {
            let upgradeChoice = army.upgrades.findBy('category', upgrade);
            return upgradeChoice.options;
          });
        }

        return unit;
      });
      return army;
    }

  }

  _exports.default = PointCalculatorsPointCalculatorRoute;
});
;define("army-builder/point-calculators/point-calculator/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "oXZ7o72T",
    "block": "[[[1,[28,[35,0],[\"Point Calculator\"],null]],[1,\"\\n\"],[10,0],[14,0,\"container text-center\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,0,\"primary-text\"],[12],[1,[30,0,[\"points\",\"total\"]]],[1,\" Points Total\"],[13],[1,\"\\n    \"],[10,\"h3\"],[14,0,\"primary-text\"],[12],[1,[30,0,[\"points\",\"remaining\"]]],[1,\" Points Remaining\"],[13],[1,\"\\n\"],[41,[30,0,[\"canAddUnit\"]],[[[1,\"    \"],[10,\"button\"],[14,0,\"btn primary-background primary-text\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#addUnitModal\"],[14,4,\"button\"],[12],[1,\"\\n        Add New Unit\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"modal fade\"],[14,1,\"addUnitModal\"],[14,\"tabindex\",\"-1\"],[14,\"data-bs-backdrop\",\"static\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"modal-dialog modal-xl\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"modal-content primary-background\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n                    \"],[10,\"h5\"],[14,0,\"modal-title\"],[12],[1,\"Add Unit\"],[13],[1,\"\\n                    \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n                    \"],[10,\"table\"],[14,0,\"table table-striped table-dark table-hover col-xs-12\"],[12],[1,\"\\n                        \"],[10,\"thead\"],[12],[1,\"\\n                            \"],[10,\"tr\"],[14,0,\"lead\"],[12],[1,\"\\n                                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Name\"],[13],[1,\"\\n                                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Size\"],[13],[1,\"\\n                                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Quality\"],[13],[1,\"\\n                                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Defense\"],[13],[1,\"\\n                                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Equipment\"],[13],[1,\"\\n                                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Special Rules\"],[13],[1,\"\\n                                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Cost\"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"model\",\"details\",\"units\"]]],null]],null],null,[[[41,[28,[37,4],[[30,1,[\"cost\"]],[30,0,[\"points\",\"remaining\"]]],null],[[[1,\"                            \"],[11,\"tr\"],[24,5,\"cursor: pointer;\"],[24,\"data-bs-dismiss\",\"modal\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"addUnit\"]],[30,1]],null]],null],[12],[1,\"\\n                                \"],[10,\"td\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n                                \"],[10,\"td\"],[12],[1,[30,1,[\"size\"]]],[13],[1,\"\\n                                \"],[10,\"td\"],[12],[1,[30,1,[\"quality\"]]],[13],[1,\"\\n                                \"],[10,\"td\"],[12],[1,[30,1,[\"defense\"]]],[13],[1,\"\\n                                \"],[10,\"td\"],[12],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"equipment\"]]],null]],null],null,[[[10,0],[12],[1,[30,2]],[13]],[2]],null],[13],[1,\"\\n                                \"],[10,\"td\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"specialRules\"]]],null]],null],null,[[[1,\"\\n                                    \"],[10,1],[12],[1,[30,3]],[41,[51,[28,[37,8],[[30,3],[30,1,[\"specialRules\",\"lastObject\"]]],null]],[[[1,\",\\n                                        \"]],[]],null],[13],[1,\"\\n\"]],[3]],null],[1,\"                                \"],[13],[1,\"\\n                                \"],[10,\"td\"],[12],[1,[30,1,[\"cost\"]]],[1,\" Pts\"],[13],[1,\"\\n                            \"],[13],[1,\"\\n\"]],[]],null]],[1]],null],[1,\"                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n                    \"],[10,\"button\"],[14,0,\"btn btn-secondary primary-text\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Cancel\"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\\n\"],[41,[30,0,[\"armyList\",\"length\"]],[[[1,\"    \"],[10,\"table\"],[14,0,\"table table-striped table-dark col-xs-12 \"],[14,5,\"margin-top:20px\"],[12],[1,\"\\n        \"],[10,\"thead\"],[12],[1,\"\\n            \"],[10,\"tr\"],[14,0,\"lead\"],[12],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Name\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Size\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Quality\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Defense\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Equipment\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Special Rules\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Upgrades\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Cost\"],[13],[1,\"\\n                \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Remove\"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"armyList\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[12],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,4,[\"name\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,4,[\"size\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,4,[\"quality\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,4,[\"defense\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[42,[28,[37,3],[[28,[37,3],[[30,4,[\"equipment\"]]],null]],null],null,[[[1,\"\\n\"],[41,[30,5,[\"enabled\"]],[[[1,\"                    \"],[10,0],[12],[1,[30,5,[\"desc\"]]],[13],[1,\"\\n\"]],[]],null]],[5]],null],[1,\"                \"],[13],[1,\"\\n\\n                \"],[10,\"td\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,4,[\"specialRules\"]]],null]],null],null,[[[41,[30,6,[\"enabled\"]],[[[1,\"                    \"],[10,1],[12],[1,[30,6,[\"desc\"]]],[41,[51,[28,[37,8],[[30,6],[30,4,[\"specialRules\",\"lastObject\"]]],null]],[[[1,\",\\n                        \"]],[]],null],[13],[1,\"\\n\"]],[]],null]],[6]],null],[1,\"                \"],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"\\n\"],[41,[28,[37,9],[[30,4,[\"upgrades\",\"length\"]],0],null],[[[1,\"                    \"],[11,1],[24,\"role\",\"button\"],[24,\"data-bs-toggle\",\"modal\"],[24,\"data-bs-target\",\"#upgradeModal\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"initUpgrade\"]],[30,4]],null]],null],[12],[1,\"Select Upgrades\"],[13],[1,\"\\n\"]],[]],[[[1,\"                    \"],[10,1],[12],[1,\"-\"],[13],[1,\"\\n\"]],[]]],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,4,[\"adjustedCost\"]]],[1,\" Pts\"],[13],[1,\"\\n                \"],[11,\"td\"],[24,\"role\",\"button\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"removeUnit\"]],[30,4]],null]],null],[12],[1,\"X\"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[4]],null],[1,\"        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13],[1,\"\\n\\n\"],[1,\"\\n\"],[10,0],[14,0,\"modal fade\"],[14,1,\"upgradeModal\"],[14,\"tabindex\",\"-1\"],[14,\"data-bs-backdrop\",\"static\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-dialog modal-xl\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"modal-content primary-background\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n                \"],[10,\"h5\"],[14,0,\"modal-title\"],[12],[1,[30,0,[\"selectedUnit\",\"name\"]]],[1,\" Upgrades\"],[13],[1,\"\\n                \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n                \"],[10,\"table\"],[14,0,\"table table-striped table-dark col-md-12\"],[12],[1,\"\\n                    \"],[10,\"thead\"],[12],[1,\"\\n                        \"],[10,\"tr\"],[14,0,\"lead\"],[12],[1,\"\\n                            \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Name\"],[13],[1,\"\\n                            \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Size\"],[13],[1,\"\\n                            \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Quality\"],[13],[1,\"\\n                            \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Defense\"],[13],[1,\"\\n                            \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Equipment\"],[13],[1,\"\\n                            \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Special Rules\"],[13],[1,\"\\n                            \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"Cost\"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,\"tbody\"],[12],[1,\"\\n                        \"],[10,\"tr\"],[12],[1,\"\\n                            \"],[10,\"td\"],[12],[1,[30,0,[\"selectedUnit\",\"name\"]]],[13],[1,\"\\n                            \"],[10,\"td\"],[12],[1,[30,0,[\"selectedUnit\",\"size\"]]],[13],[1,\"\\n                            \"],[10,\"td\"],[12],[1,[30,0,[\"selectedUnit\",\"quality\"]]],[13],[1,\"\\n                            \"],[10,\"td\"],[12],[1,[30,0,[\"selectedUnit\",\"defense\"]]],[13],[1,\"\\n                            \"],[10,\"td\"],[12],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"selectedUnit\",\"equipment\"]]],null]],null],null,[[[1,\"\\n\"],[41,[30,7,[\"enabled\"]],[[[41,[30,7,[\"isUpgrade\"]],[[[1,\"                                \"],[10,0],[12],[1,[30,7,[\"desc\"]]],[1,\" \"],[11,1],[24,\"role\",\"button\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"removeUpgrade\"]],[30,7]],null]],null],[12],[1,\"X\"],[13],[13],[1,\"\\n\"]],[]],[[[1,\"                                \"],[10,0],[12],[1,[30,7,[\"desc\"]]],[13],[1,\"\\n\"]],[]]]],[]],null]],[7]],null],[1,\"                            \"],[13],[1,\"\\n                            \"],[10,\"td\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"selectedUnit\",\"specialRules\"]]],null]],null],null,[[[41,[30,8,[\"enabled\"]],[[[41,[30,8,[\"isUpgrade\"]],[[[1,\"                                \"],[10,0],[12],[1,[30,8,[\"desc\"]]],[1,\" \"],[11,1],[24,\"role\",\"button\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"removeUpgrade\"]],[30,8]],null]],null],[12],[1,\"X\"],[13],[13],[1,\"\\n\"]],[]],[[[1,\"                                \"],[10,0],[12],[1,[30,8,[\"desc\"]]],[13],[1,\"\\n\"]],[]]]],[]],null]],[8]],null],[1,\"                            \"],[13],[1,\"\\n                            \"],[10,\"td\"],[12],[1,[30,0,[\"selectedUnit\",\"adjustedCost\"]]],[1,\" Pts\"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"text-center container-fluid col-md-12\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"selectedUnit\",\"upgrades\"]]],null]],null],null,[[[1,\"                        \"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n                            \"],[10,\"h4\"],[12],[1,[30,9,[\"subCategory\"]]],[13],[1,\"\\n\"],[41,[30,9,[\"enabled\"]],[[[42,[28,[37,3],[[28,[37,3],[[30,9,[\"choices\"]]],null]],null],null,[[[41,[30,10,[\"enabled\"]],[[[41,[28,[37,4],[[30,10,[\"cost\"]],[30,0,[\"tempPointsRemaining\"]]],null],[[[1,\"                            \"],[11,0],[24,\"role\",\"button\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"selectUpgrade\"]],[30,9],[30,10]],null]],null],[12],[1,\"\\n                                \"],[1,[30,10,[\"equipment\"]]],[1,\"\\n                                \"],[1,[30,10,[\"cost\"]]],[1,\" Pts\"],[13],[1,\"\\n\"]],[]],null]],[]],null]],[10]],null]],[]],[[[1,\"                            \"],[10,1],[12],[1,\"Upgrade(s) already selected\"],[13],[1,\"\\n\"]],[]]],[1,\"                        \"],[13],[1,\"\\n\\n\"]],[9]],null],[1,\"                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n                \"],[11,\"button\"],[24,0,\"btn btn-secondary\"],[24,\"data-bs-dismiss\",\"modal\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"cancelUpgradeUnit\"]]],null],[12],[1,\"Cancel\"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,\"data-bs-dismiss\",\"modal\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"updateUnit\"]]],null],[12],[1,\"Update Unit\"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"unit\",\"equip\",\"specialRule\",\"armyUnit\",\"equip\",\"specialRule\",\"equip\",\"specialRule\",\"upgrade\",\"choice\"],false,[\"page-title\",\"if\",\"each\",\"-track-array\",\"lte\",\"on\",\"fn\",\"unless\",\"eq\",\"gt\"]]",
    "moduleName": "army-builder/point-calculators/point-calculator/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/point-calculators/route", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class PointCalculatorsRoute extends _route.default {}

  _exports.default = PointCalculatorsRoute;
});
;define("army-builder/point-calculators/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "/B6+pdeM",
    "block": "[[[1,[28,[35,0],[\"PointCalculators\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "army-builder/point-calculators/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("army-builder/router", ["exports", "@ember/routing/router", "army-builder/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('armies', function () {
      this.route('army', {
        path: '/:_id'
      }, function () {});
    });
    this.route('point-calculators', function () {
      this.route('point-calculator', {
        path: '/:_id'
      }, function () {});
    });
  });
});
;define("army-builder/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("army-builder/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("army-builder/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("army-builder/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("army-builder/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("army-builder/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("army-builder/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("army-builder/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("army-builder/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("army-builder/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('army-builder/config/environment', [], function() {
  var prefix = 'army-builder';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("army-builder/app")["default"].create({"name":"army-builder","version":"0.0.0+c1e89676"});
          }
        
//# sourceMappingURL=army-builder.map
