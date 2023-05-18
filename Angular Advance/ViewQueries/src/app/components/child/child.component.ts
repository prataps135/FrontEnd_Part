import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() user: { name: string };

  constructor(private cdRef:ChangeDetectorRef){  }

  ngOnInit(){
    this.cdRef.detectChanges();
  }
}
