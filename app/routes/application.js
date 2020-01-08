import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service router;

  beforeModel() {
    console.log('BEFORE MODEL: here you are:', this.router.currentURL);
  }

  model() {
    console.log('MODEL: here you are:', this.router.currentURL);
  }

  afterModel() {
    console.log('AFTER MODEL: here you are:', this.router.currentURL);
  }

  activate() {
    super.activate(...arguments);

    console.log('ACTIVATE: here you are:', this.router.currentURL);
  }

  @action
  didTransition() {
    console.log('DID TRANSITION: here you are:', this.router.currentURL);
  }

  @action
  willTransition() {
    console.log('WILL TRANSITION: here you are:', this.router.currentURL);
  }
}
