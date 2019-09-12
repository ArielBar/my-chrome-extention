import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LiveMockService } from './live-mock.service';
import { HighlightTag } from 'angular-text-input-highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit {
  text: string = 'Hello @[גדשגדגש] how are you @[גשדגשגש] today?\n\nLook I have a #different background color!\n\n@angular is pretty awesome!';

  tags: HighlightTag[] = [];

  tagClicked: HighlightTag;

  ngOnInit(): void {
    this.addTags();
  }

  addTags() {
    this.tags = [];
    // const matchMentions = /(@\w+) ?/g;
    const matchMentions = /(@\[[\u0590-\u05fe ]+\]) ?/g;
    let mention;
    // tslint:disable-next-line
    while ((mention = matchMentions.exec(this.text))) {
      this.tags.push({
        indices: {
          start: mention.index,
          end: mention.index + mention[1].length
        },
        data: mention[1]
      });
    }

    const matchHashtags = /(#\w+) ?/g;
    let hashtag;
    // tslint:disable-next-line
    while ((hashtag = matchHashtags.exec(this.text))) {
      this.tags.push({
        indices: {
          start: hashtag.index,
          end: hashtag.index + hashtag[1].length
        },
        cssClass: 'bg-pink',
        data: hashtag[1]
      });
    }
  }

  addDarkClass(elm: HTMLElement) {
    if (elm.classList.contains('bg-blue')) {
      elm.classList.add('bg-blue-dark');
    } else if (elm.classList.contains('bg-pink')) {
      elm.classList.add('bg-pink-dark');
    }
  }

  removeDarkClass(elm: HTMLElement) {
    elm.classList.remove('bg-blue-dark');
    elm.classList.remove('bg-pink-dark');
  }
}


// @Effect()
// add$: Observable<Action> = this.actions$
//   .pipe(
//     ofType(fromDataActions.DataActionTypes.Add),
//     withLatestFrom(this.store, (action, state) => {
//       return { state: state, action: action }
//     }),
//     switchMap((fromData) => {
//       return this.service.addCustomer(fromData.action['payload']).pipe(
//         map((addedCustomer: Customer) => {
//           let customers: Array<Customer> = this.newMethod(fromData, addedCustomer);
//           return new fromDataActions.AddSuccess(customers);
//         }),
//         catchError(error => of(new fromDataActions.LoadFail(error)))
//       );
//     })
//   );
// private newMethod(fromData: { state: CustomerState; action: never; }, addedCustomer: Customer) {
//   let customers: Array<Customer> = cloneDeep(fromData.state.customers['data']['customers']);
//   debugger;
//   customers.push(addedCustomer);
//   return customers;
// }