import { Component,  ViewChild, EventEmitter, Input, Output } from "@angular/core";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";
import { CalendarMonthViewStyle, CalendarSelectionEventData, CalendarSelectionShape, CalendarCellAlignment, CalendarFontStyle, DayCellStyle, RadCalendar } from "nativescript-ui-calendar";
import { Color } from "tns-core-modules/color";
import { isAndroid } from "tns-core-modules/platform";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "ns-calendar",
    templateUrl: "./calendar.component.html"
})
export class CalendarModalComponent {
    maxDate: any = new Date();

    @ViewChild('radCalendar', { static: false }) public radCalendar: RadCalendarComponent;

    @Input() public date: Date = new Date(2020, 0, 26, 12);
    @Output() public dateChange: EventEmitter<Date> = new EventEmitter();

    public monthStyle: CalendarMonthViewStyle;

    constructor(private _params: ModalDialogParams) {
        this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
    }

    ngOnInit(): void {
        this.monthStyle = this.getMonthViewStyle();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.radCalendar.nativeElement.goToDate(this.date);
        }, 1);
    }

    onCalendarLoaded(args) {
        let dt = this._params.context.selectedDateResult; // Getting the previosly chosen selected date ( locale string)
        this.radCalendar.nativeElement.selectedDate = dt;

        console.log(`>> onCalendarLoaded <<`);
        this.radCalendar.nativeElement.on("dateSelected", (event: CalendarSelectionEventData) => {
            this.dateChange.emit(event.date);
            console.log(`onDateSelected: ${event.date}`)

            this._params.closeCallback(this.radCalendar.nativeElement.selectedDate.toLocaleDateString());
        })
    }

    ngOnDestroy() {
        console.log(`>> ngOnDestroy <<`);
        this.radCalendar.nativeElement.off("dateSelected");
    }

    onClose(): void {
        this._params.closeCallback(this.radCalendar.nativeElement.selectedDate.toLocaleDateString());
    }

    getMonthViewStyle(): CalendarMonthViewStyle {
        const monthViewStyle: CalendarMonthViewStyle = this.createBasicStyle(new CalendarMonthViewStyle());
        monthViewStyle.selectionShape = CalendarSelectionShape.None;

        monthViewStyle.dayCellStyle = this.getDayStyle();
        monthViewStyle.selectedDayCellStyle = this.getSelectedStyle();
        return monthViewStyle;
    }
    
    private createBasicStyle(style: any): any {
        style.backgroundColor = new Color("#ffffff");
        style.showTitle = false;
        style.showDayNames = true;
        return style;
    }

    private getDayStyle(): DayCellStyle {
        const dayCellStyle: DayCellStyle = new DayCellStyle();
        dayCellStyle.eventTextColor = new Color("#00006b");
        //   dayCellStyle.eventFontName = FONTFAMILY;
        dayCellStyle.showEventsText = false;
        dayCellStyle.cellBackgroundColor = new Color("#ffffff");
        dayCellStyle.cellTextColor = new Color("#00006b");
        dayCellStyle.cellTextFontName = "Arial";
        dayCellStyle.cellTextSize = 14;
        dayCellStyle.cellAlignment = CalendarCellAlignment.Center;

        if (isAndroid) {
            dayCellStyle.cellBorderColor = new Color("orangered");
        }

        return dayCellStyle;
    }

    private getSelectedStyle(): DayCellStyle {
        const selectedCellStyle: DayCellStyle = new DayCellStyle();
        selectedCellStyle.eventTextColor = new Color("#ffffff");
        selectedCellStyle.cellBackgroundColor = new Color("#00006b");
        selectedCellStyle.cellTextColor = new Color("#ffffff");
        selectedCellStyle.cellTextFontName = "Arial";
        selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        selectedCellStyle.cellTextSize = 15;
        return selectedCellStyle;
    }

}
