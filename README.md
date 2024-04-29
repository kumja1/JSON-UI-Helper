# JSON-UI-Helper

Welcome. Here i made a converter that converts
your JS Code to JSON-UI(*My biggest project yet*)! Well, i don't really know how
to make an interpreter so you can just fork or download
the zip file at the bottom of this page. You can also
contribute if you want. And also test things on ```test.js```.
That's all and enjoy tinkering around!

# Documentation:

### Layout

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

### Div

| Property | Default Value | Description |
| :------: | :-----------: | :---------: |
| ```scissor(boolean)``` | false | Should elements get cut-out if goes outside parent? |

### Stacker

| Property | Default Value | Description |
| :------: | :-----------: | :---------: |
| ```direction(direction)``` | vertical | Which direction should it stack |
| ```collection(string)``` | none | Which collection does it belong to |

### Grid

| Property | Default Value | Description |
| :------: | :-----------: | :---------: |
| ```gridDimension(x, y)``` | (0, 0) | Dimension on which it would grid-out |
| ```gridDirection(direction)``` | vertical | Which direction should it scale and fill |
| ```collection(string)``` | none | Which collection does it belong to |

### Label

| Property | Default Value | Description |
| :------: | :-----------: | :---------: |
| ```text(string)``` | none | The content/text of the label |
| ```censor(boolean)``` | false | Should bad words be censored? |
| ```breakWord(boolean)``` | true | Should be hypen be visible? |
| ```font(string)``` | "normal" | The font of the label |
| ```fontScale(float)``` | 1.0 | The size/scale of the font |
| ```textColor(rgb)``` | (255, 255, 255) | The color of the label |

### Image

| Property | Default Value | Description |
| :------: | :-----------: | :---------: |
| ```imageSource(string)``` | none | The path of the image |
| ```fileSystem(string)``` | none | Path system it should follow to |

### Render

| Property | Default Value | Description |
| :------: | :-----------: | :---------: |
| ```renderer(string)``` | none | What should it render? |

# Enumerations:

| Key | Value |
| :-: | :---: |
| ```Renderers``` | LivePlayer |
|                 | PlayerSkinOnly |
|                 | Gradient |
| ```FileSystems``` | AppPackage |
|                   | UserPackage |
|                   | RawPath |
| ```GlobalVariables``` | IsUsingClassic |
|                       | IsUsingPocket |
|                       | IsUsingConsole |
|                       | IfMouseAttached |
|                       | UsingTouch |
|                       | IsNotInGame |
| ```Directions``` | Vertical |
|                  | Horizontal |
| ```Position``` | TopStart |
|                | Top |
|                | TopEnd |
|                | MiddleStart |
|                | Middle |
|                | MiddleEnd |
|                | BottomStart |
|                | Bottom |
|                | BottomEnd |
| ```Fonts``` | Default |
|             | Smooth |
|             | Ten |
|             | Small |
|             | EnchantingTableFont |

# Functions:

| Function | Description |
| :------: | :---------: |
| ```CombineJSON([array], namespace: Optional)``` | Combines your JSON-UI elements into one |
| ```Bindings()``` | Class |
| ```visibilityBinding(propertyName, controlName: Optional)``` | A binding that controls the visibility of your element |
| ```collectionBinding(bindingName, collectionName, overrideName: string: Optional)``` | Gets a property binding from a collection |