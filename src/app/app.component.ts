import { AfterViewChecked, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1> Zone Parent </h1>
    <button (click)="increment()"> Increment </button>
    <app-child *zoneLess [counter]="suscriptions"></app-child>
  `,
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  public counter = 0;
  public subject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public suscriptions: Observable<any> = this.subject.asObservable();

  constructor(private _dc: ChangeDetectorRef) { }



  increment() {
    this.counter += 1;
    this.subject.next(this.counter);
  }
}
