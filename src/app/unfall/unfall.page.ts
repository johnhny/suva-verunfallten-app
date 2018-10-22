import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unfall',
  templateUrl: 'unfall.page.html',
  styleUrls: ['unfall.page.scss']
})
export class UnfallPage {

  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
          console.log('Routerparams: ', params);
      });
  }
}
