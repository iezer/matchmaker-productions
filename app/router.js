import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('masks');
  this.route('shakespeare');
  this.route('videos');
  this.route('past');
  this.route('media');
  this.route('contact');
});
