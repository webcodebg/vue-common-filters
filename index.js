import filters from './src/filters'

export default {
    install(vue) {
        // Register filters globally
        for(let filter in filters){
            vue.filter(filter, filters[filter]);
        }
    }
};