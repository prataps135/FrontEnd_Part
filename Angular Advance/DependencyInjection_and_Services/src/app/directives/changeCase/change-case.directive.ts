import { Directive, ElementRef, OnInit, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective implements OnInit {
  @Input('appChangeCase') case: string;

  @HostListener('blur') onblur() {
    // this.elRef.nativeElement.value = this.elRef.nativeElement.value.toUpperCase();


    let changedValue = this.case === 'upper' ? this.elRef.nativeElement.value.toUpperCase()
      : this.elRef.nativeElement.value.toLowerCase();
    this.rendered.setProperty(this.elRef.nativeElement, 'value', changedValue);
  }

  constructor(private elRef: ElementRef, private rendered: Renderer2) {

  }
  ngOnInit(): void {

  }

}
