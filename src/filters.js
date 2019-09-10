import { fromNow, format } from './filters/datetime'
import { search, att, aott  } from './filters/array'
import { truncate} from './filters/text'

export default {
    // Date and time filters
    "formatDate": format,
    "fromNow": fromNow,

    // Array filters
    "search": search,

    // Text filters
    "truncate": truncate,
    "att": att,
    "aott": aott,

}