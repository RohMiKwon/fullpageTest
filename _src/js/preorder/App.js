/**
 * App
 */
import Main from './Main';
import Layer from './Layer';

(function($, window) {
  'use strict';

  let namespace = 'helloworld';

  if (!window[namespace])
    window[namespace] = {};

  if (!window[namespace].Main)
    window[namespace].Main = Main;

  if (!window[namespace].Layer)
    window[namespace].Layer = Layer;

}(window.jQuery, window));