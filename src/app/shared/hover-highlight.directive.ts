import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') color = '#f2f7ff';

  @HostBinding('style.backgroundColor') bg = '';
  @HostBinding('style.transition') transition = 'background-color .2s ease';

  @HostListener('mouseenter') onEnter() { this.bg = this.color; }
  @HostListener('mouseleave') onLeave() { this.bg = ''; }
}
