---
title: Introduction
---

[React Reveal](https://www.npmjs.com/package/react-reveal) is a dead simple way to add some cool reveal on scroll animations to your React app. Don't forget to star the [Github repository](https://github.com/rnosov/react-reveal) if you liked this package!

## Installation

In the command prompt run:

```sh
npm install react-reveal --save
```

Alternatively you may use `yarn`:

```sh
yarn add react-reveal
```

## Quick Start

Import effects from [React Reveal](https://www.npmjs.com/package/react-reveal) to your project. Lets try `Zoom` effect first.

```javascript
import Zoom from 'react-reveal/Zoom';
```

Place the following code somewhere in your `render` method: 

```jsx
<Zoom>
  <p>Markup that will be revealed on scroll</p>
</Zoom>
```

You should see zooming animation that reveals text inside the tag. You can change this text to any JSX you want. If you place this code further down the page you'll see that it'd appear as you scroll down.

## Revealing React Components

If you want to reveal custom React component then the easiest way would be to wrap it in a `div` tag:

```jsx
<Zoom>
  <div>
    <CustomComponent /> 
  </div>
</Zoom>
```


## Revealing Images

If you want to reveal an image you can wrap `img` tag with with the desired `react-reveal` effect:

```jsx
<Zoom>
  <img height="300" width="400" src="https://source.unsplash.com/random/300x400" />
</Zoom>
```

It would be a very good idea to specify width and height of any image you wish to reveal.

## Children

Please be aware that `react-reveal` components ( such as `Fade`, `Zoom`, etc ) can only have a single child. If you want to reveal several elements at once you'd need to wrap them in a container tag such as `div`.

## Examples

Have a look at [demos](/examples/) to see what kind of effects are possible.

## Server Side Rendering

`react-reveal` will try to autodetect server side rendering (SSR) and apply gentle fade out effect on the initial render. 