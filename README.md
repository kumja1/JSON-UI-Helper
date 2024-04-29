# JSON-UI-Helper

## Layout

| Property | Default Value | Description |
| :------: | :-----------: | :---------: |
| ```sizes(width, height)``` | Depends on parent size | Controls height and width of an element |
| ```offsets(x, y)``` | (0, 0) | Offsets the element |
| ```anchor(position)``` | center | Control the position of the element |
| ```opacity(float)``` | 1.0 | Opacity of the element, max is 1.0 |
| ```propagateAlpha(boolean)``` | true | Should the opacity of parent affect child elements? |
| ```addControls([array])``` | undefined | Add child elements to your element |
| ```addBindings([array])``` | undefined | Add bindings to your element |
| ```addVariables({object})``` | undefined | Add variables to your element. **Not variables array** |
| ```generate()``` | none | Generate the element |