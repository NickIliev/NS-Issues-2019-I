import '@nativescript/angular/zone-js/testing.jasmine';
import { nsTestBedInit } from '@nativescript/angular/testing';
nsTestBedInit();
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);