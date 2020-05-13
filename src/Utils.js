const { baseURL, defaults } = require('./Constants.json');

const fetch = require('node-fetch');

module.exports = class Utils {
    static async request(route, options) {      
        const params = new URLSearchParams(options);
            
        const request = await fetch(baseURL + route, {
            method: 'post',
            body: params
        });

        return request.text();
    };
  
    static getAverage(rating, votes) {
        let a = 10;
        let b = 2.5;
        let c = 0;

        if(votes > 0)
            c = (rating - b * a / (votes + a)) / (votes / (votes + a));

        return Math.min(5, Math.max(c, 0));
    };

    static formatOptions(options, query) {
        let params = { query, ...options };
      
        if(typeof options === 'string')
            params.sortBy = options;
      
        if(typeof query === 'object')
            params = query;
      
        options = { ...defaults, ...params };
      
        return {
            searchBy: options.searchBy,
            sortby: options.sortBy,
            uploaded: options.uploaded,
            sterm: options.query,
            limit: options.limit,
            page: options.page,
            level_id: options.levelID,
            user_id: options.userID,
            replay_id: options.replayID
        };
    };
};