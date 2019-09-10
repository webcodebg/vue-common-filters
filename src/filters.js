import { fromNow, format } from './filters/datetime'
import { search, ats, aots } from './filters/array'
import { truncate, trim} from './filters/text'

export default {
    // Date and time filters
    "formatDate": format,
    "fromNow": fromNow,

    // Array filters
    "search": search,
    "ats": ats,
    "aots": aots,

    // Text filters
    "truncate": truncate,
    "trim": trim

}