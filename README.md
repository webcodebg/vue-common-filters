# vue-common-filters
Collection of common filters used in projects

# Installation

Install via npm
`npm install vue-common-filters`

Download repo
`git clone https://github.com/epicbg/vue-common-filters.git`

# Filters and usage

### truncate
Set string max length
` {{ 'hello world' | truncate('2', '..') }} ` result `hel...`

### trim
Remove spaces from start and end of string
` {{ '  hello world   ' | trim }} ` result `hello world`

### ats (array to string)
Convert array of strings to single string with delimiter
` {{ ['h', 'e', 'l', 'o'] | ats(' ') }} ` result `h e l l o`

### aots (array of objects to string)
Reduce array of objects to string. First param key and second param delimiter
` {{ [{name: 'Boby'}, {name: 'Jonny'}] | aots('name', ', ') }} ` result `Boby, Jonny`

### search
Searches and filters array of object for matching keyword.
`<div v-for"product in products | search('tshirt')"></div>`

### fromNow
` {{ '1970-01-01 00:59:59' | fromNow }} ` result `40 years ago`

### format (format datetime)
` {{ '1970-01-01 00:59:59' | format('d MMMM') }} ` result `1 january`
