# vue-common-filters
Collection of most used filter  in projects.

# Contribution
If you found a bug, want to request a feature or want to contribute, create <a href="https://github.com/epicbg/vue-common-filters/issues">issue</a> or submit <a href="https://github.com/epicbg/vue-common-filters/pulls">pull request</a>

# Installation

Install via npm
`npm install vue-common-filters`

Download repo
`git clone https://github.com/epicbg/vue-common-filters.git`


```javascript
import Vue from 'vue'
import VueCommonFilters from 'vue-common-filters'

// THESE ARE ALL OPTIONS YOU CAN CUSTOMIZE
// YOU ARE NOT REQUIRED TO COPY ALL THESE OPTIONS
// YOU CAN PASS EMPTY OR NO OPTIONS AT ALL

let config = {
    "currency": {
        "symbol": "$",
        "decimalDigits": 2,
        "symbolOnLeft": true,
        "spaceBetweenAmountAndSymbol": false
    },

    "text": {
        "truncateClamp": "..."
    },

    "numbers": {
        "decimalDigits": 2
    },

    "array": {
        "implodeDelimiter": ", "
    },

    "dates": {
        "defaultFormat": "YYYY-MM-DD HH:mm:ss",
        "filterConvertFormat": "DD MMMM YYYY"
    }
}

Vue.use(VueCommonFilters, config)
```

# Usage

## Text filters

### truncate

Arguments:

{Number} [length]
{string} [clamp] - default: '...'

Example:

```javascript
{{ string | truncate(3) }} // 'hello world' => 'hel...'
```

### trim

Example:

```javascript
{{ string | trim }} // removes spaces from string
```
### capitalize

Example:

```javascript
{{ string | capitalize }} // 'george' => 'George'
```
### uppercase / lowercase

Example:

```javascript
{{ string | uppercase }} // 'hey' => 'HEY'
```

```javascript
{{ string | lowercase }} // 'HEY' => 'hey'
```

### placeholder

Example:

```javascript
{{ string | placeholder('no data yet') }} // null || false => 'no data yet'
```

## Array / object filters

### implode

Arguments:

{string} [delimiter] - default: ', ' 

Example:

```javascript
{{ array | implode }} // ['Danny', 'Bobby', 'Mima'] => Danny, Boby, Mima
{{ array | implode('and') }} // ['Danny', 'Bobby', 'Mima'] => Danny and Boby and Mima
```
### implodeObjects

Arguments:

{string} [key] 
{string} [delimiter] - default: ', ' 

Example:

```javascript
{{ users | implode('name') }} // [{id: 1, name:'Danny'}, {id: 2, name:'Bobby'}] => Danny, Bobby
{{ users | implode('name', ' and ') }} // [{id: 1, name:'Danny'}, {id: 2, name:'Bobby'}] => Danny and Bobby
```

### search
Searches all fields (inside array of objects) for a match with passed [key]

Arguments:

{string} [key]

Example:

```javascript
{{ users | search('Danny') | implodeObjects('name') }} 
// [{name:'Danny Miller'}, {name:'Danny Grande'}, {name:'Bobby Miller'}]
//  => Danny Miller, Bobby Miller 
```

## Date filters

Examples are shown in default `YYYY-MM-DD HH:mm:ss`. If you have different format you can change it from the config as shown in installation section

This packages uses moment and if you want to change the locale you can do it like so:

```javascript
moment.locale('en')
```

### format

Arguments:

{string} [format] - default: DD MMMM YYYY 

Example:

```javascript
{{ date | format('DD MMMM') }} // '2018-02-01' => '1 February'
{{ date | format }} // '2018-02-01' => '1 February 2019'
```

### fromNow

```javascript
{{ date | fromNow }} // '2019-02-01' => '8 months ago'
```

### from

Arguments:

{string} [from] 

Example:

```javascript
{{ date | from('2019-07-02') }} // '2019-07-01' => '1 year ago'
```

### to

Arguments:

{string} [to] 

Example:

```javascript
{{ date | to('2019-07-01') }} // '2019-06-01' => 'in 1 month'
```

### add / substract

Arguments:

{number} [number] 
{string} [type] 

Example:

```javascript
{{ date | add(2, 'days') }} // '2019-06-01' => '2019-06-03'
{{ date | substract(2, 'days') }} // '2019-06-03' => '2019-06-01'
```

## Number filters

### decimal

Arguments:

{Number} [length] - default: 2

Example:

```javascript
// '1' => '1.00'
// '1.2' => '1.20'
{{ coefficient | decimal }} 
```

### currency

Arguments:

{string} [symbol] - default: $
{Number} [decimalDigits] - default: 2
{Boolean} [symbolOnLeft] - default: true
{Number} [spaceBetweenAmountAndSymbol] - default: true

Example:

```javascript
{{ amount | currency }} // 12 => '$ 12.00'
{{ amount | currency('EUR', 2, false) }} // 12 => 12.00 EUR
```

You can change the defaults from settings, as shown in installation section

# Programatic Usage

## using functions
```javascript
this.$options.filters.filterName(value)
```
```javascript
this.$options.filters.currency(10) => '$ 10.00'
this.$options.filters.search([{}, {}..])
```

## changing settings
```javascript
import vueCommonFilters from 'vue-common-filters'

// Pass options which u want to customize, no need to pass the whole settings object
vueCommonFilters.config = {
    currency: {
        symbol: 'EUR'
    }
}
```


# License
MIT License

Copyright (c) 2019 EpicWeb

