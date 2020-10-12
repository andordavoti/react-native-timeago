# @andordavoti/react-native-timeago

A simple auto-updating React Native timeago Component using [date-fns](https://date-fns.org/).

Inspired by: [react-native-timeago](https://www.npmjs.com/package/react-native-timeago) (replaced momentjs with date-fns due to momentjs now being legacy, and switched from class-based to functional).

Supports iOS, Android and Web. Written in Typescript.

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

Use it as a regular React Native Text component and pass it a Date. Other optional props can be passed which are specified bellow. There is also an Expo app example in the repo under the example folder.

```js
import React from 'react';
import TimeAgo from '@andordavoti/react-native-timeago';

const App: React.FC = () => {
  return <TimeAgo dateTo={new Date(1536484369695)} />;
};

export default App;
```

## Props

| Name           |   Type    | Required | Description                                                                |
| :------------- | :-------: | :------: | :------------------------------------------------------------------------- |
| dateTo         |  `Date`   |   yes    | date you want the component to count to (uses the current date as a start).|
| dateFrom       |  `Date`   | optional | Overwrite the current Date as a starting point.                            |
| hideAgo        | `boolean` | optional | Hides the "ago" text.                                                      |
| updateInterval | `number`  | optional | How often the current date should update (only when using the "dateFrom" prop). Default is 60000 milliseconds                                                      |
| style    |  `bool`   | optional | Style passed to the Text component.                                        |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
