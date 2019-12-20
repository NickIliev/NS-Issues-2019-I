import { Component, ElementRef, Renderer2 } from '@angular/core';
import { async } from '@angular/core/testing';
import {
  nsTestBedAfterEach,
  nsTestBedBeforeEach
} from 'nativescript-angular/testing';
import * as frameModule from "tns-core-modules/ui/frame";
@Component({
  template: `
        <StackLayout><Label text="Layout"></Label></StackLayout>
    `
})
export class ZonedRenderer {
  constructor(public elementRef: ElementRef, public renderer: Renderer2) { }
}
describe('Renderer E2E', () => {
  beforeEach(nsTestBedBeforeEach([ZonedRenderer]));
  afterEach(nsTestBedAfterEach(false));
  it('frame topmost test', async(() => {

    console.log(`>>>>>>>>>>>>>>>>>>>>>>> frameModule.topmost(): ${frameModule.topmost()}`);
    console.log(`>>>>>>>>>>>>>>>>>>>>>>> frameModule.Frame.topmost(): ${frameModule.Frame.topmost()}`);
    expect(frameModule.topmost()).toBeDefined(); // deprecatred
    expect(frameModule.Frame.topmost()).toBeDefined(); // the latest supported call to topmost

  }));
});