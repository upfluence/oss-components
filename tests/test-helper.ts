// @ts-nocheck
import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import 'qunit-dom';

setup(QUnit.assert);
setApplication(Application.create(config.APP));

start();

declare module 'ember-test-helpers' {
  interface TestContext {
    [key: string]: any;
  }
}
