# Layout

This covers the properties that control the layout of UI elements.

## Properties

- **sizes(width, height)**: *Default: Varies*. Sets the width and height of an element based on the size of its parent container.
- **offsets(x, y)**: *Default: (0, 0)*. Adjusts the position of an element by the specified x and y offsets.
- **anchor(position)**: *Default: center*. Anchors the element at the specified position within its parent.
- **opacity(float)**: *Default: 1.0*. Sets the opacity level of the element, with 1.0 representing full opacity.
- **propagateAlpha(boolean)**: *Default: true*. Determines whether an element's opacity is influenced by its parent's opacity.
- **addControls([array])**: *Default: undefined*. Adds child elements to the current element.
- **addBindings([array])**: *Default: undefined*. Associates data bindings with the current element.
- **addVariables({object})**: *Default: undefined*. Introduces variables to the current element, which are not part of the variables array.
- **generate()**: *Default: none*. Triggers the generation of the element.

## Examples