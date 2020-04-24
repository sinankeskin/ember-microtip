ember-microtip
==============================================================================

Ember addon for pure css [Microtip](https://microtip.now.sh/) tooltip library.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-microtip
```


Usage
------------------------------------------------------------------------------

microtip is an element modifier. Simply add to an element like;

```handlebars
<button type="button" {{microtip 'Hey there!' 'right' 'small'}}>
  Tooltip
</button>
```

First parameter is for label. Required.
Second parameter is for position. Optional. Default: top
Third parameter is for size. Optional. Default: fit

For parameter and other details [click](https://github.com/ghosh/microtip#usage).


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
