import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from "@angular/core";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";
import { CalendarMonthViewStyle, CalendarSelectionEventData, CalendarSelectionShape, CalendarCellAlignment, CalendarFontStyle, DayCellStyle, RadCalendar } from "nativescript-ui-calendar";
import { Color } from "tns-core-modules/color";
import { isAndroid } from "tns-core-modules/platform";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    maxDate: any = new Date();

    @ViewChild('radCalendar', {static: false}) public radCalendar: RadCalendarComponent;
    
    @Input() public date: Date = new Date(2020, 0, 26, 12);
    @Output() public dateChange: EventEmitter<Date> = new EventEmitter();
    public monthStyle: CalendarMonthViewStyle;
  
    private initialized: boolean = false;

    onCalendarLoaded(args) {
      let calender = args.object as RadCalendar;

      /* Date tests on Android */
      // let dt = new Date(2020, 0, 26); // not working (for 26th of January only!!??)
      // let dt = new Date("January 276, 2020 12:00:00") // working OK
      // let dt = new Date(2020, 0, 26, 12) // working OK

      let str = this.date.toLocaleDateString(); // using toLocalDateString so that the date would be converted properly on Android
      let dt = new Date(str);

      calender.selectedDate = dt;
    }
  
    public constructor() {
      this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
    }
  
    public ngOnInit(): void {
      this.monthStyle = this.getMonthViewStyle();
  
      // timeout needed because Android is too slow and will otherwise give an error underwater
      setTimeout(() => {
        this.radCalendar.nativeElement.goToDate(this.date);
      }, 50);
    }
  
    public onDateSelected(event: CalendarSelectionEventData): void {
       this.dateChange.emit(event.date);
    }
  
   
    public getMonthViewStyle(): CalendarMonthViewStyle {
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
  