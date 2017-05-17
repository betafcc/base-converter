# base-converter

An any-base integer converter

Install
-------

    npm install @betafcc/base-converter

Usage
-----

Chosse any `from` and `to` base alphabet

```js
import bc from '@betafcc/base-converter';

const decToBin = bc
    .from('0123456789')
    .to('01')

decToBin('2'); // '10'
```

Really, any base

```js
const toAlpha = bc.to('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

toAlpha.from('0123456789')('100'); // 'DW'
toAlpha.from('0123456789abcdef')('-100'); // '-JW'

```

Non integers and more options support soon
