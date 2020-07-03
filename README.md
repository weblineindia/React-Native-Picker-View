# rn-weblineindia-picker-view

A lightweight plugin and pure JavaScript React-Native component for custom picker that provides the same UI for both Android and IOS.

## Getting started

- [Installation](#installation)
- [Supported versions](#supported-versions)
- [Usage](#usage)
- [Method](#method)
- [Want to Contribute?](#want-to-contribute?)
- [Need Help?](#need-help?)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#keywords)

## Installation

`$ npm install rn-weblineindia-picker-view --save`

## Supported versions

ReactNative 0.60 - 0.62.5 is supported for v1.0.0

## Usage

```js
  showPicker() {
    // Options put here...     
    let object = {
      title: 'Year',
      data: [2020, 2021, 2022, 2023, 2024, 2025],
      defaultSelection: this.state.year
    }
    this.props.showPicker(object, (index) => {
    // callback actions here and set state here after selecting the value
      this.setState({ year: index })
    })
  }
```

```javascript
<TouchableOpacity onPress={() => this.showPicker()}>
  <Text>Show picker</Text>
</TouchableOpacity>
```

## Using Higher-Order Component

Enabling any component to be picker view is very easy. Take a look at the code:

```js

import PickerView from 'rn-weblineindia-picker-view';

class App extends Component{
        // code here...
}

export default PickerView(App)
```

## Method

Use `this.props.showPicker` to access this method.

| **Method**    | **Parameter**        |
|---------------|----------------------|
| showPicker    | \(Object,Callback\)  |

### Options of Object

| **Options**        | **Type**           | **Required** | **Description**                                           |
|--------------------|--------------------|--------------|-----------------------------------------------------------|
| data               | `array`            | yes          | List of data to be displayed in the picker view           |
| title              | `string`           | yes          | title to be displayed in the picker view                  |
| defaultSelection   | `string`, `number` | yes          | default selected value to be displayed in the picker view |
| themePrimary       | `string`           | no           | default selected value to be displayed in the picker view |
| separatorColor     | `string`           | no           | Color to be displayed for Separator                       |
| titleStyle         | `object`           | no           | Styles is passed to the title                             |
| selectedValueStyle | `object`           | no           | Styles is passed to the selected value                    |
| defaultValueStyle  | `object`           | no           | Styles is passed to the default value \(Not selected\)    |
| cancelBtnStyle     | `object`           | no           | Styles is passed to the cancel option                     |


### Callback

```javascript
this.props.showPicker(object, (index) => {
      if (index === 0) {
        // callback actions here...
      } 
    })
```

-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this ReactNative Picker View in their software project. In case you want to customize this Picker View to suit your development needs, then feel free to contact our [ReactNative developers](https://www.weblineindia.com/hire-react-native-developers.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/React-Native-Picker-View/blob/master/LICENSE

### Keywords

 rn-weblineindia-picker-view, react-native-pickerview, pickerview, picker-view, react-native, ios, android