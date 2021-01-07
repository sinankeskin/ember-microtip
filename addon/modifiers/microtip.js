import { isPresent } from '@ember/utils';
import { modifier } from 'ember-modifier';

export default modifier(function microtip(
  element,
  [label, position, size] /*, hash*/
) {
  if (isPresent(label)) {
    element.setAttribute('aria-label', label);

    if (isPresent(position)) {
      element.setAttribute('data-microtip-position', position);
    } else {
      element.setAttribute('data-microtip-position', 'top');
    }

    if (isPresent(size)) {
      element.setAttribute('data-microtip-size', size);
    } else {
      element.setAttribute('data-microtip-size', 'fit');
    }

    element.setAttribute('role', 'tooltip');
  }
});
