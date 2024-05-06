# Vue 3 + TypeScript + Vite

## Setting Up The Project

create the basic plumbing for a Vue app using the vite and

```shell
create-vite@latest
```

## Your First Component The Items List

create a basic component and consume that from another component/view

## Data Model Interfaces

leverage TypeScript interfaces

## Adding Events To the Items Component

Building Interactive Items: Click Handlers, Reactive State, and Custom Events

## Intro to Unit Testing While Refactoring a Bit

### Add unit tests support to our project

install npm dependencies and some configuration

```shell
npm install --save-dev vitest @testing-library/vue @testing-library/user-event jsdom
```

### Additional Configuration

start using a shortcut like @ and avoid relative paths

```shell
npm install -D @types/node
```

## State Management
* Building a Modular State Manager with Vue Writable Stores
* Creating a Reusable Loader Component

## Api Client
* implement an apiClient that automatically can serve either mock or real data
* invoke our api client from the store

## Enhance the Api Client

Abstract the http client methods into their own implementation that we can then consume from our ItemsApiClient and future API clients implementations that we’ll be adding later.

create a class that wraps our calls done with axios in one place. We’ll call this the HttpClient class and here we’ll implement code that allow us to perform http requests using axios for now. 
If later we have to switch to a different NPM library or use the Fetch API etc, we’ll jsut need to update the code without our HttpClient.

## App Configuration

We need now to add a way to configure our app through configuration files for different environments (i.e. mock, beta, production, etc).

## Localization and Internationalization - Language Localization

present the UI in different languages

leverage plugins that allows us to present labels in different languages (i18next, vue-i18n)

Let’s start by first adding the i18next and vue-i18n NPM packages to our application. In particular, we’ll be installing vue-18n-next which is for Vue 3.

```shell
npm install --save i18next vue-i18n
```
We will be introducing a concept of versioning here to dynamically drive different versions of data, introduce/retire views and components overtime, or expire cached data on the browser.

## Localization and Internationalization - Number and DateTime Formatters

adding Number and DateTime value formatters. 
We’ll leverage the Intl API which is supported by all major web browsers.

Note: this is the same code from a plugin published here and you could use it in other apps in the future without coding it yourself if you prefer: @builtwithjavascript/formatters

## Adding Tailwind CSS

To add TailwindCSS to our existing project execute this command. 
This will install the latest tailwindcss, postcss and autoprefixer npm packages:
```shell
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

The following command will create the preliminary tailwind.config.js and postcss.config.js
```shell
npx tailwindcss init -p
```

## Intro to Primitives

### Conventions

* One of the convention we will follow is to put all our primitive components under the directory src/components/primitives

* We’ll follow also a naming convention where each .vue file that represents a primitive will start with the El prefix. I.e. ElText.vue, ElIcon.vue, etc. In this case El is for “element”.
