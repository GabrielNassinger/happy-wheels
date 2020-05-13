const Utils = require('./src/Utils.js');
const Parser = require('./src/Parser.js');

const { Level, Replay, User } = require('./src/Models.js');

module.exports = class HappyWheels {
    static async searchLevels(query, options) {
        const params = Utils.formatOptions(options, query);
      
        if(!params.sterm)
            throw new Error('You must provide a query.');
      
        if(params.sterm.length < 4 || params.sterm.length > 12)
            throw new Error('The query length must be between 4 and 12 characters.');
        
        params.action = 'search_by_' + params.searchBy;
      
        const xml = await Utils.request('get_level.hw', params);
      
        const levels = Parser.getLevels(xml);
                           
        return levels.slice(0, params.limit).map((data) => new Level(data));
    };

    static async getFeatured(options) {
        const params = Utils.formatOptions(options);
      
        params.action = 'get_all';

        const xml = await Utils.request('get_level.hw', params);
      
        const levels = Parser.getLevels(xml);
      
        return levels.slice(0, params.limit).map((data) => new Level(data));
    };

    static async getLevel(id) {
        if(!id)
            throw new Error('You must provide a level ID.');
      
        const xml = await Utils.request('get_level.hw', {
            action: 'get_level',
            level_id: id
        });
      
        const data = Parser.getLevels(xml);
      
        return new Level(data[0]);
    };

    static async getReplay(id) {
        if(!id)
            throw new Error('You must provide a replay ID.');
      
        const xml = await Utils.request('replay.hw', {
            action: 'get_combined',
            replay_id: id
        });
                  
        const data = Parser.getReplays(xml);
      
        return new Replay(data);
    };

    static async getUser(id) {
        if(!id)
            throw new Error('You must provide a user ID.');
      
        const user = new User(id);
      
        return user.getProfile();
    };
};