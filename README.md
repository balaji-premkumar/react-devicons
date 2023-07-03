# React Devicons Components [![Node.js Package](https://github.com/balaji-premkumar/react-devicons-components/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/balaji-premkumar/react-devicons-components/actions/workflows/npm-publish.yml)

React Devicons is a package that allows you to easily use Devicons, a collection of icons representing programming
languages, development tools, and more, in your React projects.

# Table of Contents

## Installation

You can install React Devicons using npm:

```bash
npm install react-devicons-components
```

Or with yarn:

```
yarn add react-devicons-components
```

# Usage

To use a Devicon in your React component, first import the Devicon component from react-devicons. Then, use it in your
JSX, passing the name of the icon you want to use to the name prop:

```
import React from 'react';
import Devicon from 'react-devicons-components';

function Index() {
  return (
    <div>
      <Devicon name="react" svg={false}/>
    </div>
  );
}

export default Index;
```

In this example, the Devicon component will render the icon for React.

# Available Props

| Prop      | Value      | Usage                                                                             |
|-----------|------------|-----------------------------------------------------------------------------------|
| svg       | true/false | To use the SVG images instead of font icons                                       |
| original  | true/false | To use the original font/svg of the devicons (check for the site for availability |
| plain     | true/false | To use the Plain font/svg of the devicons (check for the site for availability    |
| wordmark  | true/false | To use the Wordmark font/svg of the devicons (check for the site for availability |
| fontSize  | string     | used to mention the fontsize in pixels (ex: 72px)                                 |
| className | string     | Use the any css classes to manipulate the svg/font view                           |

# **Available Icons**

For a list of available icons, please see the [Devicon](https://devicon.dev/) project and
their [GitHub](https://github.com/devicons/devicon) repository.

# Contributing

We welcome contributions! Please see our contributing guide for details.

# License

**React Devicons Components** is licensed under the **MIT License**.

This README provides a brief description of the package, installation instructions, usage instructions, and a link to a
list of available icons. It also invites contributions and provides information about the license.
When writing a README, remember to keep it succinct and to the point, while providing all the information a developer
would need to understand what your package does and how to use it. And don't forget to keep it up to date as your
package evolves!
If your package has additional requirements or complexity, you may need to provide more detailed instructions or
examples. For example, if your `Devicon` component accepted additional props for size or color, you would want to
document those.

