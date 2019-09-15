import { fromNow, format, to, from, add, substract } from './filters/datetime'
import { search, ats, aots } from './filters/array'
import { truncate, trim, capitalize, uppercase, lowercase} from './filters/text'
import { currency, decimal } from './filters/numbers'

export default {
    // Date and time filters
    "formatDate": format,
    "fromNow": fromNow,
    "to": to,
    "from": from,
    "add": add,
    "substract": substract,

    // Array filters
    "search": search,
    "ats": ats,
    "aots": aots,

    // Numbers
    "currency": currency,
    "decimal": decimal,

    // Text filters
    "truncate": truncate,
    "trim": trim,
    "capitalize": capitalize,
    "uppercase": uppercase,
    "lowercast": lowercase

}