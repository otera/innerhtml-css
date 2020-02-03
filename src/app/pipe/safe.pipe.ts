import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

// 参考: https://link.medium.com/JORshURSL3
@Pipe({
  name: "safeHtml"
})
export class SafePipe implements PipeTransform {
  constructor(protected _sanitizer: DomSanitizer) {}
  /**
   * 信頼済みマークを付与
   * @param  {any} value
   * @returns SafeHtml
   */
  transform(value: any): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
