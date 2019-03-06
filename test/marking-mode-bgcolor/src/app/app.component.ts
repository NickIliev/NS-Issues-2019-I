import {Component, OnInit} from '@angular/core';

(<any>global).booleans = [];
(<any>global).arrays = [];
(<any>global).indexes = Array.from(Array(21).keys());

@Component({
    selector: 'ns-app',
    moduleId: module.id,
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public static readonly MAX = 21;
    public elementsGrid: boolean[][] = [];
    public rows: string = '*,'.repeat(AppComponent.MAX);

    public constructor() {
        let elementValue = true;
        for (let i in (<any>global).indexes) {
            (<any>global).booleans.push(elementValue);
            const elementRow: boolean[] = [];
            for (let j in (<any>global).indexes) {
                elementRow.push(elementValue);
                elementValue = !elementValue;
            }

            (<any>global).arrays.push(elementRow);
            this.elementsGrid.push(elementRow);
            (<any>global).elementsGrid = this.elementsGrid;
        }
    }

    public ngOnInit(): void {
        setInterval((): void => {
            this.update();
        }, 100);
    }

    protected update(): void {
        for (let i in (<any>global).indexes) {
            for (let j in (<any>global).indexes) {
                this.elementsGrid[i][j] = !this.elementsGrid[i][j];
                // console.log(this.elementsGrid[i][j]);
            }
        }
    }
}
