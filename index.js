import filters from 'src/filters'

export default {
    install(vue) {
        // Register filters globally
        for(filters in filters){
            vue.filter(filter, filters[filter]);
        }
    }
};