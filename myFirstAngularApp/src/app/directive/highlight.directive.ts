import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  colors: Array<string> = [
    "red",
    "yellow",
    "purple",
    "blue",
    "pink",
    "seagreen"
  ];

  @HostListener('click') onMouseClick() {                     // HostListener, hogy mire történjenek a dolgok
    let index = Math.floor(Math.random() * this.colors.length);
    this.el.nativeElement.style.backgroundColor = this.colors[index];
  }

  constructor(
    private el: ElementRef    // ez kell neki
  ) {
    this.changeColor("yellow");
  }

  changeColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;      // az el Elementnek még kell a nativeElement gyermeke, aminek már van style eleme

  }

  @Input() set appHighlight(color: string) {
    this.changeColor(color);
  }

}
