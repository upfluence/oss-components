import Ember from 'ember';

const {
  Component,
  isBlank
} = Ember;

/*
---
name: Stat
category: Components
---

Providing numbered insights to users.

```stat.html
<div class="upf-stat">
  <span class="upf-stat__name">Stat Name</span>
  <span class="upf-stat__data">30</span>
</div>
```

```types.handlebars
{{upf-stat name='Lorem' data=30}}
```

### Options
-------
Use any of the available stats types to quickly create a styled stat.

#### Custom Data Class

```custom-data-class.html
<div class="upf-stat">
  <span class="upf-stat__name">Stat Name</span>
  <span class="upf-stat__data text-color-success">30</span>
</div>
```

```types.handlebars
{{upf-stat name='Lorem' data=12 dataClass='text-color-feedback-success'}}
```

```types.less
.text-color-success {
  color: @upf-feedback-success;
}
```

### Available Sizes
-----
Need different sizes to fit your design. Add `small=true` or `xsmall=true`
for additional sizes.

```sizes.html
<div class="col-xs-4">
  <div class="upf-stat">
    <span class="upf-stat__name">Standard</span>
    <span class="upf-stat__data">30</span>
  </div>
</div>

<div class="col-xs-4">
  <div class="upf-stat upf-stat--small">
    <span class="upf-stat__name">Small</span>
    <span class="upf-stat__data">30</span>
  </div>
</div>

<div class="col-xs-4">
  <div class="upf-stat upf-stat--x-small">
    <span class="upf-stat__name">Extra Small</span>
    <span class="upf-stat__data">30</span>
  </div>
</div>
```

```types.handlebars
<!-- Standard size stat -->
{{upf-stat name="Extra Small" data=30}}

<!-- Small stat -->
{{upf-stat name="Small" data=30 small=true}}

<!-- Extra Small stat -->
{{upf-stat name="Extra Small" data=30 xsmall=true}}
```
*/

export default Component.extend({
  classNames: ['upf-stat'],
  classNameBindings: [
    'small:upf-stat--small', 'xsmall:upf-stat--x-small'
  ],

  small: null,
  xsmall: null,
  name: null,
  data: null,
  dataClass: null,
  label: null,

  icon: null,
  iconPlacement: 'top',
  iconClass: '',
  iconUrl: null,
  iconLabel: null,

  didRender() {
    if (!isBlank(this.get('iconLabel'))) {
      this.$('[title]')
        .tooltip({ placement: 'bottom' })
        .attr('title', this.get('iconLabel'))
        .tooltip('fixTitle');
    }
  }
});
