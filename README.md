# React Devicons

React Devicons is a package that allows you to easily use Devicons, a collection of icons representing programming languages, development tools, and more, in your React projects.

# Table of Contents
<!-- TOC -->
* [React Devicons](#react-devicons)
    * [Installation](#installation)
* [Usage](#usage)
* [**Available Icons**](#available-icons)
* [Contributing](#contributing)
* [License](#license)
<!-- TOC -->


## Installation

You can install React Devicons using npm:

```bash
npm install react-devicons
```
Or with yarn:
```
yarn add react-devicons
```

# Usage

To use a Devicon in your React component, first import the Devicon component from react-devicons. Then, use it in your JSX, passing the name of the icon you want to use to the name prop:
```
import React from 'react';
import Devicon from 'react-devicons';

function MyComponent() {
  return (
    <div>
      <Devicon name="react" />
    </div>
  );
}

export default MyComponent;
```
In this example, the Devicon component will render the icon for React.

# **Available Icons**

For a list of available icons, please see the [Devicon](https://devicon.dev/) project and their [GitHub](https://github.com/devicons/devicon) repository.

# Contributing

We welcome contributions! Please see our contributing guide for details.

# License

**React Devicons** is licensed under the **MIT License**.

This README provides a brief description of the package, installation instructions, usage instructions, and a link to a list of available icons. It also invites contributions and provides information about the license.
When writing a README, remember to keep it succinct and to the point, while providing all the information a developer would need to understand what your package does and how to use it. And don't forget to keep it up to date as your package evolves!
If your package has additional requirements or complexity, you may need to provide more detailed instructions or examples. For example, if your `Devicon` component accepted additional props for size or color, you would want to document those.

