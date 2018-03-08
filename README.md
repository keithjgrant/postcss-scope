# PostCSS Scope

## Add scoped styles to CSS.

Styles in an inner scope will override those from an outer scope, *regardless of selector specificity*

```css
@scope .foo-module {
  p {
    color: blue;
  }
}

@scope .bar-module {
  p {
    color: red;
  }
}
```

This compiles to… something very ugly. But it makes this work:

```html
<div class="foo-module">
  <div class="bar-module">
    <p>This will be red.</p>
  </div>
</div>

<div class="bar-module">
  <div class="foo-module">
    <p>This will be blue.</p>
  </div>
</div>
```
