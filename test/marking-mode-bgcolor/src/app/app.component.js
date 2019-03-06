"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.elementsGrid = [];
        this.rows = '*,'.repeat(AppComponent_1.MAX);
        this.indexes = Array.from(Array(AppComponent_1.MAX).keys());
        var elementValue = true;
        for (var i in this.indexes) {
            var elementRow = [];
            for (var j in this.indexes) {
                elementRow.push(elementValue);
                elementValue = !elementValue;
            }
            this.elementsGrid.push(elementRow);
        }
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.update();
        }, 100);
    };
    AppComponent.prototype.update = function () {
        for (var i in this.indexes) {
            for (var j in this.indexes) {
                this.elementsGrid[i][j] = !this.elementsGrid[i][j];
            }
        }
    };
    var AppComponent_1;
    AppComponent.MAX = 21;
    AppComponent = AppComponent_1 = __decorate([
        core_1.Component({
            selector: 'ns-app',
            moduleId: module.id,
            templateUrl: './app.component.html',
            styles: ["\n        .mat-list-item {\n            background-color: #ffffff;\n        }\n\n        .mat-list-item-active {\n            background-color: #ffeeee;\n        }\n    "],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFnQmhEO0lBT0k7UUFMTyxpQkFBWSxHQUFnQixFQUFFLENBQUM7UUFDL0IsU0FBSSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLFlBQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUczRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQU0sVUFBVSxHQUFjLEVBQUUsQ0FBQztZQUNqQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlCLFlBQVksR0FBRyxDQUFDLFlBQVksQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztxQkFqQlEsWUFBWTtJQW1CZCwrQkFBUSxHQUFmO1FBQUEsaUJBSUM7UUFIRyxXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVTLDZCQUFNLEdBQWhCO1FBQ0ksS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3hCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7U0FDSjtJQUNMLENBQUM7O0lBOUJzQixnQkFBRyxHQUFHLEVBQUUsQ0FBQztJQUR2QixZQUFZO1FBZHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxNQUFNLEVBQUUsQ0FBQywyS0FRUixDQUFDO1NBQ0wsQ0FBQzs7T0FDVyxZQUFZLENBZ0N4QjtJQUFELG1CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hcHAnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1saXN0LWl0ZW0tYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZWU7XG4gICAgICAgIH1cbiAgICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1BWCA9IDIxO1xuICAgIHB1YmxpYyBlbGVtZW50c0dyaWQ6IGJvb2xlYW5bXVtdID0gW107XG4gICAgcHVibGljIHJvd3M6IHN0cmluZyA9ICcqLCcucmVwZWF0KEFwcENvbXBvbmVudC5NQVgpO1xuXG4gICAgcHJvdGVjdGVkIGluZGV4ZXMgPSBBcnJheS5mcm9tKEFycmF5KEFwcENvbXBvbmVudC5NQVgpLmtleXMoKSk7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBlbGVtZW50VmFsdWUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFJvdzogYm9vbGVhbltdID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRSb3cucHVzaChlbGVtZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRWYWx1ZSA9ICFlbGVtZW50VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzR3JpZC5wdXNoKGVsZW1lbnRSb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNHcmlkW2ldW2pdID0gIXRoaXMuZWxlbWVudHNHcmlkW2ldW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19