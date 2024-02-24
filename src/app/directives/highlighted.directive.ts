import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true,
  exportAs: 'hl'
})
export class HighlightedDirective {
  @Input('highlighted') isHighLighted = false;
  @Output() toggleHighlight = new EventEmitter();

  constructor() { 
    console.log("Directive created...");
  }

  @HostBinding('attr.disabled') get attrDisabled(){
    return false;
  }
  @HostBinding('class.highlighted') get cssHighlighted(){
    return this.isHighLighted;
  }
  // @HostBinding('className') get cssHighlighted(){
  //   return "highlighted";
  // }
  // @HostBinding('style.border') get cssBorder(){
  //   return '1px solid red';
  // }

  @HostListener('mouseover', ['$event']) mouseOver(event){
    // console.log(event);
    this.isHighLighted = true;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener('mouseleave') mouseLeave(){
    this.isHighLighted = false;
  }

  toggle(){
    this.isHighLighted = !this.isHighLighted;
    this.toggleHighlight.emit(this.isHighLighted);
  }
}
