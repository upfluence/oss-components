import { assert } from '@ember/debug';

const UPF_PREFIX: string = '_upf.';
const ERROR_TYPE_STRING = '[value] parameter MUST be of type :string';
const ERROR_TYPE_OBJECT = '[object] parameter MUST be of type :object';

export default class UPFLocalStorage {
  private prefix: string;

  constructor(prefix: string = UPF_PREFIX) {
    this.prefix = prefix;
  }

  saveObject(key: string, object: object) {
    assert(ERROR_TYPE_OBJECT, typeof object === 'object');
    localStorage.setItem(this.prefix + key, JSON.stringify(object));
  }

  updateObject(key: string, object: object) {
    assert(ERROR_TYPE_OBJECT, typeof object === 'object');
    let previousObjectState = JSON.parse(localStorage.getItem(this.prefix + key) || '{}');
    previousObjectState = { ...previousObjectState, ...object };
    localStorage.setItem(this.prefix + key, JSON.stringify(previousObjectState));
  }

  getObject(key: string): string {
    return JSON.parse(localStorage.getItem(this.prefix + key) || '{}');
  }

  saveItem(key: string, value: string) {
    assert(ERROR_TYPE_STRING, typeof value === 'string');
    localStorage.setItem(this.prefix + key, value);
  }

  updateItem(key: string, value: string) {
    assert(ERROR_TYPE_STRING, typeof value === 'string');
    localStorage.setItem(this.prefix + key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(this.prefix + key);
  }

  delete(key: string) {
    localStorage.removeItem(this.prefix + key);
  }
}
