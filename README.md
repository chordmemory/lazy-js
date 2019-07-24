*Probably the most unnecessary package on NPM*
# What

Load (i.e. initialise) arbitrary variables once it's actually needed. And only once.

You can use it for synchronous values...

```js
import { Lazy } from 'lazy-js';

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

## Why?

Because I was tired of writing the same bit of code over and over again.

It's an especially useful abstraction when dealing with classes, as they are constructed synchronously, but you might want to setup up something async in the constructor.