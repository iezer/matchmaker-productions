import Route from '@ember/routing/route';
import reviews from '../utils/marlow-reviews';

export default class ShakespearsRoute extends Route {
  model() {
    return reviews.map(([source, rating, quote, href]) => ({source, rating, quote, href}));
  }
}
