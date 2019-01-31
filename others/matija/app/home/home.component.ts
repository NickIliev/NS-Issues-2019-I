import { Component, OnInit } from "@angular/core";
import * as calendarModule from "nativescript-ui-calendar";
import { Color } from "color";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    items: Array<any> = [];
    currentPagerIndex: number = 1;

    categoricalSource: { Country: string, Amount: number }[] = [
        { Country: "7", Amount: 3 },
        { Country: "8", Amount: 2 },
        { Country: "9", Amount: 6 },
        { Country: "10", Amount: 8, },
        { Country: "11", Amount: 5, },
        { Country: "12", Amount: 0, },
        { Country: "13", Amount: 9, }
    ];

    categoricalSourceNew: { Country: string, Amount: number }[] = [
        { Country: "111", Amount: 4 },
        { Country: "118", Amount: 0 },
        { Country: "220", Amount: 7 },
        { Country: "152", Amount: 2, },
        { Country: "77", Amount: 1, },
        { Country: "66", Amount: 9, },
        { Country: "67", Amount: 9, },
        { Country: "152", Amount: 2, },
        { Country: "25", Amount: 1, },
        { Country: "33", Amount: 4, },
        { Country: "88", Amount: 9, }
    ];


    categoricalSourceThird: { Country: string, Amount: number }[] = [
        { Country: "111", Amount: 2 },
        { Country: "118", Amount: 6 },
        { Country: "220", Amount: 6 },
        { Country: "152", Amount: 6, },
    ];

    calendarEvents = [];

    constructor() {
        // Creating dummy events
        this.calendarEvents = this.createDummyEvents();

        this.items = [{ 
            myTitle: "First Slide", 
            source: this.categoricalSource 
        },{ 
            myTitle: "Second Slide", 
            source: this.categoricalSourceNew 
        },{ 
            myTitle: "Third Slide", 
            source: this.categoricalSourceThird 
        },{ 
            myTitle: "Forth Slide", 
            source: this.categoricalSourceNew 
        },{ 
            myTitle: "Fifth Slide", 
            source: this.categoricalSource 
        }];
    }

    ngOnInit(): void {
    }

    onIndexChanged(args) {
        // console.log(args);    
    }

    createDummyEvents() {
        let events = [];
        let now = new Date();
        let startDate;
        let endDate;
        let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            let event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }

        return events;
    }
}
