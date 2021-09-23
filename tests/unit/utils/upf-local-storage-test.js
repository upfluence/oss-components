import UPFLocalStorage from 'dummy/utils/upf-local-storage';
import { module, test } from 'qunit';

const TEST_KEY = 'testKey';
const DEFAULT_PREFIX = '_upf.';
const CUSTOM_PREFIX = 'workflow';
const TEST_VALUE = 'testValue';
const TEST_OBJECT = {
  attr: TEST_VALUE
};
const TEST_OBJECT_UPDATE = {
  attr2: TEST_VALUE
};

const ERROR_TYPE_STRING = '[value] parameter MUST be of type :string';
const ERROR_TYPE_OBJECT = '[object] parameter MUST be of type :object';

module('Unit | Utility | UPFLocalStorage', function (hooks) {
  hooks.beforeEach(function () {
    localStorage.clear();
  });

  test('it can be instanciated', function (assert) {
    let upfStorage = new UPFLocalStorage();
    assert.ok(upfStorage);
  });

  module('Prefix', function (hooks) {
    test('Saving content without specifying a prefix will use the default ".upf_" prefix', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.equal(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
    });

    test('Setting a custom prefix on the Ctor will save content with the set prefix', function (assert) {
      let upfStorage = new UPFLocalStorage(CUSTOM_PREFIX);
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.equal(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
    });
  });

  module('Method: saveObject', function (hooks) {
    test('saveObject() sets the default prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
      const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      assert.deepEqual(TEST_OBJECT, localStorageParsedObject);
    });

    test('saveObject() sets the custom prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage(CUSTOM_PREFIX);
      upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
      const localStorageParsedObject = JSON.parse(localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      assert.deepEqual(TEST_OBJECT, localStorageParsedObject);
    });

    test('saveObject() throws an error if the object parameter is not an object', function (assert) {
      let upfStorage = new UPFLocalStorage();
      assert.throws(() => {
        upfStorage.saveObject(TEST_KEY, TEST_VALUE);
      }, ERROR_TYPE_OBJECT);
    });

    test('saveObject() saves an object in the localStorage as a stringified JSON', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
      const localStorageStringifiedObject = localStorage.getItem(DEFAULT_PREFIX + TEST_KEY);
      assert.deepEqual(JSON.stringify(TEST_OBJECT), localStorageStringifiedObject);
    });
  });

  module('Method: updateObject', function (hooks) {
    test('updateObject() sets the default prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
      const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
    });

    test('updateObject() sets the custom prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage(CUSTOM_PREFIX);
      upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
      const localStorageParsedObject = JSON.parse(localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
    });

    test('updateObject() throws an error if the object parameter is not an object', function (assert) {
      let upfStorage = new UPFLocalStorage();
      assert.throws(() => {
        upfStorage.updateObject(TEST_KEY, TEST_VALUE);
      }, ERROR_TYPE_OBJECT);
    });

    test('updateObject() adds content to the existing object', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
      upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
      const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      assert.deepEqual({ ...TEST_OBJECT, ...TEST_OBJECT_UPDATE }, localStorageParsedObject);
    });

    test('updateObject() creates the Object if there is no previous value', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
      const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
    });
  });

  module('Method: getObject', function (hooks) {
    test('getObject() returns an empty object if the key is not found', function (assert) {
      let upfStorage = new UPFLocalStorage();
      assert.deepEqual({}, upfStorage.getObject(TEST_KEY));
    });

    test('getObject() returns an object with the proper contents', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
      assert.deepEqual(TEST_OBJECT, upfStorage.getObject(TEST_KEY));
    });
  });

  module('Method: saveItem', function (hooks) {
    test('saveItem() throws an error if the object parameter is not a string', function (assert) {
      let upfStorage = new UPFLocalStorage();
      assert.throws(() => {
        upfStorage.saveItem(TEST_KEY, 1337);
      }, ERROR_TYPE_STRING);
    });

    test('saveItem() sets the default prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
    });

    test('saveItem() sets the custom prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage(CUSTOM_PREFIX);
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
    });

    test('saveItem() saves the proper value in the localStorage', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
    });
  });

  module('Method: updateItem', function (hooks) {
    test('updateItem() throws an error if the object parameter is not a string', function (assert) {
      let upfStorage = new UPFLocalStorage();
      assert.throws(() => {
        upfStorage.updateItem(TEST_KEY, 1337);
      }, ERROR_TYPE_STRING);
    });

    test('updateItem() sets the default prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.updateItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
    });

    test('updateItem() sets the custom prefix key', function (assert) {
      let upfStorage = new UPFLocalStorage(CUSTOM_PREFIX);
      upfStorage.updateItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
    });

    test('updateItem() overwrites any previous key and saves the value', function (assert) {
      let upfStorage = new UPFLocalStorage(CUSTOM_PREFIX);
      upfStorage.updateItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      upfStorage.updateItem(TEST_KEY, TEST_VALUE + TEST_VALUE);
      assert.deepEqual(TEST_VALUE + TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
    });
  });

  module('Method: getItem', function (hooks) {
    test('getItem() returns null if no key is found', function (assert) {
      let upfStorage = new UPFLocalStorage();
      assert.equal(null, upfStorage.getItem(TEST_KEY));
    });

    test('getItem() returns the proper value if the key is found', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.equal(TEST_VALUE, upfStorage.getItem(TEST_KEY));
    });
  });

  module('Method: delete', function (hooks) {
    test('delete() uses the default prefix when removing a key', function (assert) {
      let upfStorage = new UPFLocalStorage();
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      upfStorage.delete(TEST_KEY);
      assert.equal(null, upfStorage.getItem(TEST_KEY));
    });

    test('delete() uses the custom prefix when removing a key', function (assert) {
      let upfStorage = new UPFLocalStorage(CUSTOM_PREFIX);
      upfStorage.saveItem(TEST_KEY, TEST_VALUE);
      assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      upfStorage.delete(TEST_KEY);
      assert.equal(null, upfStorage.getItem(TEST_KEY));
    });
  });
});
