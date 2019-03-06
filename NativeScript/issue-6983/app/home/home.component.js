"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
global.allElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //(<any>global).allElements;
        this.currentElement = null;
    }
    HomeComponent.prototype.setCurrentElement = function (element) {
        this.currentElement = element;
        setTimeout(function () {
            // (<any>global).gc(); //
            java.lang.System.gc();
            console.log('cleared');
        });
    };
    HomeComponent.prototype.getContentParts = function (i) {
        return Array.from(Array(1000).keys());
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styles: ["\n        .mat-list-item {\n            background-color: yellow;\n            height: 40;\n            margin: 10;\n        }\n\n        .mat-list-item-active {\n            background-color: red;\n        }\n    "],
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVNLE1BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hELHNDQUF3QztBQW9CeEM7SUFoQkE7UUFpQlcsYUFBUSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUNwSSxtQkFBYyxHQUFrQixJQUFJLENBQUM7SUFlaEQsQ0FBQztJQWJVLHlDQUFpQixHQUF4QixVQUF5QixPQUFlO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBRTlCLFVBQVUsQ0FBQztZQUNQLHlCQUF5QjtZQUNuQixJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHVDQUFlLEdBQXRCLFVBQXVCLENBQVM7UUFDNUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFoQlEsYUFBYTtRQWhCekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLHdOQVVSLENBQUM7U0FDTCxDQUFDO09BQ1csYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbig8YW55Pmdsb2JhbCkuYWxsRWxlbWVudHMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgbGV0IGphdmE6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hcHAnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDtcbiAgICAgICAgICAgIG1hcmdpbjogMTA7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWxpc3QtaXRlbS1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgIHtcbiAgICBwdWJsaWMgZWxlbWVudHM6IG51bWJlcltdID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldOyAvLyg8YW55Pmdsb2JhbCkuYWxsRWxlbWVudHM7XG4gICAgcHVibGljIGN1cnJlbnRFbGVtZW50OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzZXRDdXJyZW50RWxlbWVudChlbGVtZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyAoPGFueT5nbG9iYWwpLmdjKCk7IC8vXG4gICAgICAgICAgICAoPGFueT5qYXZhKS5sYW5nLlN5c3RlbS5nYygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbnRlbnRQYXJ0cyhpOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KDEwMDApLmtleXMoKSk7XG4gICAgfVxufVxuIl19