

(<any>global).allElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
import {Component} from '@angular/core';

declare let java: any;

@Component({
    selector: 'ns-app',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styles: [`
        .mat-list-item {
            background-color: yellow;
            height: 40;
            margin: 10;
        }

        .mat-list-item-active {
            background-color: red;
        }
    `],
})
export class HomeComponent  {
    public elements: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //(<any>global).allElements;
    public currentElement: number | null = null;

    public setCurrentElement(element: number): void {
        this.currentElement = element;

        setTimeout((): void => {
            // (<any>global).gc(); //
            (<any>java).lang.System.gc();
            console.log('cleared');
        });
    }

    public getContentParts(i: number): number[] {
        return Array.from(Array(1000).keys());
    }
}
