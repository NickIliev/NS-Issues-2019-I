import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styles: [`
        .mat-list-item {
            background-color: #ffffff;
        }

        .mat-list-item-active {
            background-color: #ffeeee;
        }
    `],
})
export class AppComponent implements OnInit {
    public static readonly MAX = 21;
    public elementsGrid: boolean[][] = [];
    public rows: string = '*,'.repeat(AppComponent.MAX);

    protected indexes = Array.from(Array(AppComponent.MAX).keys());

    public constructor() {
        let elementValue = true;
        for (let i in this.indexes) {
            const elementRow: boolean[] = [];
            for (let j in this.indexes) {
                elementRow.push(elementValue);
                elementValue = !elementValue;
            }
            this.elementsGrid.push(elementRow);
        }
    }

    public ngOnInit(): void {
        setInterval((): void => {
            this.update();
        }, 100);
    }

    protected update(): void {
        for (let i in this.indexes) {
            for (let j in this.indexes) {
                this.elementsGrid[i][j] = !this.elementsGrid[i][j];
            }
        }
    }
}
