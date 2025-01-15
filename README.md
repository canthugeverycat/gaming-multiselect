# Gaming Multiselect

[🟢 Live Demo](https://gaming-multiselect-75ccb2ee191e.herokuapp.com)

- [✏️ Project Description](#-project-description)
- [💻 Development Environment](#-development-environment)
- [📄 Available Scripts](#-available-scripts)
- [📜 Project Overview](#-project-overview)
- [🧱 Structure & organization](#-structure--organization)
  - [Assets](#-assets)
  - [Globals](#-globals)
  - [Hooks](#-hooks)
  - [Components](#-components)
  - [Styles](#-styles)
    - [Theming](#-theming)
  - [Store](#-store)
    - [Properties](#-properties)
    - [Methods](#-methods)
  - [Mocks](#-mocks)

## ✏️ Project Description

This technical challenge involves implementing a widget that allows for selection of up to 3 elements. It features search and range filters as well.

## 💻 Development Environment

This project was developed with the following environment:

- **Node** v21.7.3
- **npm** v10.5.0
- **Create React App** v5.0.1

## 📄 Available Scripts

To start the app run:

#### `npm install`

To install the required dependencies for the project. Once installed run:

#### `npm start`

This will start both the app and the express server in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

After running this command press `a` to run all tests for the app.


## 📜 Project Overview

## 🧱 Structure & organization

- `assets`
  - [file].(svg|webp|jpeg|ttf)
- `components`
  - [`component`]
    - index.scss
    - index.tsx
    - index.test.tsx
- `hooks`
  - [file].ts
- `globals`
  - [file].ts
- `mocks`
  - `api`
    - [file].js
  - [file].js
- `styles`
  - [file].scss
- `store`
  - [entity].ts
  - [entity].test.ts
  - stores.ts

## 🌠 Assets

A folder containing visual assets for the app. This is usually a home to **fonts** and **images**.

## 🌍 Globals

Houses .ts files which are used globally thoughout the app. Currently we have:

- `const`.ts
- `http`.ts

All the constants are placed in **const.ts** and used from here. This enables easy changes to urls, property names, etc.

HTTP functions are also defined in **http.ts**.

## 🪝 Hooks

Custom hooks used throughout the app.

## 🧊 Components

This folder houses the components as the building blocks of the app.

Each component has:

- `index.tsx` - A TypeScript JSX file
- `index.scss` - Local styles
- `index.test.tsx` - Unit tests

## 🎨 Styles

Holds base global styles for the app. The files are split as following:

- `animations`.scss - _contains custom animations_
- `mixins`.scss - _contains utility mixins_
- `variables`.scss _all the global scss variables are stored here_

### 🎠 Theming

Each component has its' own _.scss_ file. At the very top, variables local to the component are defined which allows for easy changes without going through the entire code. For example:

#### Buttons/index.scss

<img src="https://i.ibb.co/k2DVmm5/Screenshot-2024-06-19-at-20-08-34.png" width="300px" />

Furthermore, if you go over to **variables.scss** you will find a **Theme** section which defines theming properties for the entire app. Feel free to change these to your liking.

_Default theme_

<img src="https://i.ibb.co/bvcRg0p/Screenshot-2024-06-19-at-20-10-51.png" width="370px" />
<img src="https://i.ibb.co/z8G1hL5/Screenshot-2024-06-19-at-20-22-48.png" width="500px" />

_Example of pink/teal theme_

<img src="https://i.ibb.co/z7RFkRK/Screenshot-2024-06-19-at-20-19-50.png" width="370px" />
<img src="https://i.ibb.co/y8Wy7Qp/Screenshot-2024-06-19-at-20-19-35.png" width="500px" />

_Example of green/purple theme_

<img src="https://i.ibb.co/nk0hLMp/Screenshot-2024-06-19-at-20-27-15.png" width="370px" />
<img src="https://i.ibb.co/qMXygxh/Screenshot-2024-06-19-at-20-26-42.png" width="500px" />

## 📦 Store

A **MobX** store is used to persist the data to the app.

### 🏡 Properties:

`isFetching` **bool** Default: _false_

A flag signifying when data is being fetched from the API.

<br>

`elements` **string[]** Default: _[]_

Data obtained from the API is stored here.

<br>

`savedSelected` **string[]** Default: _[]_

Holds selected elements that are saved.

<br>

`selected` **string[]** Default: _[]_

Holds a temporary selection of elements.

<br>

`searchValue` **string** Default: _''_

A search string that filters the elements.

<br>

`filter` **[number, number]** Default: _[0, length]_

A min/max filter. Filters the elements by minimum and maximum **${index + 1}**.

<br>

_get_ `filtered` **string[]** Default: _[]_

List of elements from **this.elements** filtered by **this.searchValue** and **this.filter**.

<br>

_get_ `isMaxSelected` **bool** Default: _false_

Checks whether a maximum allowed number of elements (3) has been selected.

### ⛓️ Methods:

`getData`

Params:

- none

_Fetches the elements from the API._

<br>

`toggleElement`

Params:

- element `(string)` - _The element to select/deselect_
- persist (optional) `(bool)` - _If false stores in temporary selection, if true stores in permanent_

Deselects or selects (if limit allows) an element.

<br>

`setSearch`

Params:

- value `(string)` - _Search string_

Sets the search string.

<br>

`setFilter`

Params:

- filter `([number, number])` - _First number is the min value, second is the max value_

Sets the filter.

<br>

`resetFilters`

Params:

- none

Resets filter and search.

<br>

`saveSelection`

Params:

- none

Saves temporary selection as permanent.

<br>

`cancelSelection`

Params:

- none

Cancels temporary selection.

## 🃏 Mocks

Contains a simple **Express** server that exposes an API to fetch the data.
