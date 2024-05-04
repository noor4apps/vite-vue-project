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