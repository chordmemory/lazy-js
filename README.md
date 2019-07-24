*Probably the most unnecessary package on NPM*

# What

Lazy Load (i.e. initialise) arbitrary variables when it's actually needed, once and only once.

```bash
npm i lazy-init -s
yarn add lazy-init
```

## Why?

Because I am too lazy to write the same bit of lazy wrapping code over and over again.

It's an especially useful abstraction when dealing with classes, as they are constructed synchronously, but you might want to setup up something async in the constructor.

In the spirit of laziness, no tests were harmed in the making of this package.

# Usage

Lazy is simply a class which is constructed with a function that returns a value are interested in.

The first time that value is read, it is initialised to whatever the getter returns. 

All subsequent references will return the result of the intialisation, rather than initialise again.

You can use it for synchronous values...

```js
import { Lazy } from 'lazy-init';

const foo = new Lazy(() => {
    console.log('loaded!');
    return 'foo'
});
console.log(foo.value); 
// loaded!
// foo
console.log(foo.value);
// foo
```

or Async...

```js
const asyncFoo = new lazy(() => new Promise(resolve => setTimeout(
    () => {
        console.log('loaded!');
        return 'foo'
    }, 
    500
)));

console.log(await asyncFoo.value);
// loaded!
// foo
console.log(await asyncFoo.value);
// foo
```