# react-medium-profile

> Display any Medium profile as a widget in your React App!

[![NPM](https://img.shields.io/npm/v/react-medium-profile.svg)](https://www.npmjs.com/package/react-medium-profile) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-medium-profile
```

[Demo](https://deeayeen.github.io/react-medium-profile)
<br />
![Demo Gif](https://i.imgur.com/RNYCDub.gif)

## Usage

```jsx
import React, { Component } from "react";

import MediumProfile from "react-medium-profile";

class Example extends Component {
  render() {
    return <MediumProfile username={"dee.aye.en"} />;
  }
}
```

## Props

**username: string** (required) <br /> <br />
**size: number** (optional - size of widget)

## License

MIT © [deeayeen](https://github.com/deeayeen)
