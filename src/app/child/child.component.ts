import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <h1>Child Zoneless</h1>
    <p>
      counter padre</p>
      <p>
       {{ counter | asyncZoneless }}
    </p>
    <p> counter propio {{ counterPropio }}</p>
    <button (Zclick)="increment()">Increment</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent{
  @Input() counter?: Observable<number>;
  public counterPropio: number = 1;
  
  constructor(){
    
  }


  increment = () => {
    this.counterPropio += 1;
  };


}
