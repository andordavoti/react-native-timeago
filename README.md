# @andordavoti/react-native-timeago

A simple React Native timeago Component using [date-fns](https://date-fns.org/).

Supports iOS, Android and Web.

## Installation

Run:

```sh
npm i @andordavoti/react-native-timeago
```

Import the module:

```js
import TimeAgo from '@andordavoti/react-native-timeago';
```

## Usage

Use it as a regular React Native Text component and pass it a Date. Other optional props can be passed which are specified bellow.

```js
import React from 'react';
import TimeAgo from '@andordavoti/react-native-timeago';

const App: React.FC = () => {
  return <TimeAgo dateTo={new Date(1536484369695)} />;
};

export default App;
```

## Props

| Name     |   Type    | Required | Description                                                                |
| :------- | :-------: | :------: | :------------------------------------------------------------------------- |
| dateTo   |  `Date`   |   yes    | date you want the component to count to (uses the current date as a start).|
| dateFrom |  `Date`   | optional | Overwrite the current Date as a starting point.                            |
| hideAgo  | `boolean` | optional | Hides the "ago" text.                                                      |
| style    |  `bool`   | optional | Style passed to the Text component.                                        |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
