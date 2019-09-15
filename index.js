import filters from './src/filters'
import config from './config.json'
import {merge} from './src/helpers/helper.js'

export default {
    install(vue, settings = {}) {

        // overwrite config props to settings props
        window.__vcf_settings = merge(config, settings)
        
        // Register filters globally
        for(let filter in filters){
            vue.filter(filter, filters[filter]);
        }
    },

    get config(){
        return window.__vcf_settings
    },

    set config(settings){
        window.__vcf_settings = merge(window.__vcf_settings, settings)
    }
};