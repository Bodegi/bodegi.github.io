'use strict';

define("army-builder/tests/integration/components/army-sheet/component-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | army-sheet', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ArmySheet />
      */
      {
        "id": "X1b9RGAH",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"army-sheet\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ArmySheet>
              template block text
            </ArmySheet>
          
      */
      {
        "id": "I2tawP14",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"army-sheet\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("army-builder/tests/integration/components/site-header/component-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | site-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SiteHeader />
      */
      {
        "id": "vy0bBJ2x",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"site-header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SiteHeader>
              template block text
            </SiteHeader>
          
      */
      {
        "id": "l31f8uEr",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"site-header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("army-builder/tests/integration/components/site-menu/component-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | site-menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SiteMenu />
      */
      {
        "id": "/zJpZIyV",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"site-menu\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SiteMenu>
              template block text
            </SiteMenu>
          
      */
      {
        "id": "ZXia9vL5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"site-menu\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("army-builder/tests/integration/components/site-navigation/component-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | site-navigation', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SiteNavigation />
      */
      {
        "id": "hd2yIYem",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"site-navigation\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SiteNavigation>
              template block text
            </SiteNavigation>
          
      */
      {
        "id": "o3zOc0Uq",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"site-navigation\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("army-builder/tests/test-helper", ["army-builder/app", "army-builder/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("army-builder/tests/unit/application/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("army-builder/tests/unit/armies/army/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | armies/army', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:armies/army');
      assert.ok(route);
    });
  });
});
define("army-builder/tests/unit/armies/index/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | armies/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:armies/index');
      assert.ok(route);
    });
  });
});
define("army-builder/tests/unit/armies/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | armies', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:armies');
      assert.ok(route);
    });
  });
});
define("army-builder/tests/unit/index/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("army-builder/tests/unit/point-calculators/index/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | point-calculators/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:point-calculators/index');
      assert.ok(route);
    });
  });
});
define("army-builder/tests/unit/point-calculators/point-calculator/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | point-calculators/point-calculator', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:point-calculators/point-calculator');
      assert.ok(controller);
    });
  });
});
define("army-builder/tests/unit/point-calculators/point-calculator/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | point-calculators/point-calculator', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:point-calculators/point-calculator');
      assert.ok(route);
    });
  });
});
define("army-builder/tests/unit/point-calculators/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | point-calculators', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:point-calculators');
      assert.ok(route);
    });
  });
});
define('army-builder/config/environment', [], function() {
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

require('army-builder/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
