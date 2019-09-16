import { fromNow, format, to, from, add, subtract } from './filters/datetime'
import { search, ats, aots } from './filters/array'
import { truncate, trim, capitalize, uppercase, lowercase, placeholder} from './filters/text'
import { currency, decimal } from './filters/numbers'

export default {

    // Date and time filters
    "formatDate": format,
    "fromNow": fromNow,
    "to": to,
    "from": from,
    "add": add,
    "subtract": subtract,

    // Array filters
    "search": search,
    "implode": ats,
    "implodeObjects": aots,

    // Numbers
    "currency": currency,
    "decimal": decimal,

    // Text filters
    "truncate": truncate,
    "trim": trim,
    "capitalize": capitalize,
    "uppercase": uppercase,
    "lowercase": lowercase,
    "placeholder": placeholder

}