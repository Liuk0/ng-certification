import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
  name: "customDate",
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  transform(value: any): any {
    return super.transform(value, "EEEE, MMMM d");
  }
}
