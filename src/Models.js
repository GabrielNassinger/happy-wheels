const { baseURL, characters } = require('./Constants.json');

const Utils = require('./Utils.js');
const Parser = require('./Parser.js');

class Level {
    constructor(data) {      
        this.name = data['@_ln'];
        this.id = data['@_id'];
        this.description = data.uc;
        this.character = characters[data['@_pc']];
        this.createdAt = new Date(data['@_dp']);
        this.author = new User(data['@_ui'], data['@_un']);
        this.playCount = parseInt(data['@_ps']);
        this.votes = parseInt(data['@_vs']);
        this.weightedRating = parseFloat(data['@_rg']);
    };
  
    async getReplays(sortBy = 'completion_time') {
        const xml = await Utils.request('replay.hw', {
            action: 'get_all_by_level',
            level_id: this.id,
            sortby: sortBy,
            page: 1
        });
      
        const replays = Parser.getReplays(xml);
      
        return this.replays = replays.map((data) => new Replay(data, this.id));
    };
  
    toString() {
        return `[${this.name}](${this.url})`;
    };

    get url() {
        return `${baseURL}happy_wheels.tjf?level_id=${this.id}`;
    };

    get averageRating() {
        return Utils.getAverage(this.weightedRating, this.votes);
    };
};

class Replay {
    constructor(data, levelID = null) {      
        if(data.lv) {          
            levelID = data.lv['@_id'];
            data = data.rp;
        };

        this.levelID = levelID;
        this.level = null;
        this.id = data['@_id'];
        this.description = data.uc;
        this.character = characters[data['@_pc']];
        this.createdAt = new Date(data['@_dc']);
        this.author = new User(data['@_ui'], data['@_un']);
        this.votes = data['@_vs'];
        this.weightedRating = data['@_rg'];
    };

    async getLevel() {
        if(!this.levelID || this.level) return this.level;
            
        const xml = await Utils.request('get_level.hw', {
            action: 'get_level',
            level_id: this.levelID
        });
      
        delete this.levelID;

        const data = Parser.getLevels(xml);
            
        return this.level = new Level(data[0]);
    };
  
    toString() {
        return `[replay ${this.id}](${this.url})`;
    };

    get url() {
        return `${baseURL}happy_wheels.tjf?replay_id=${this.id}`;
    };

    get averageRating() {
        return Utils.getAverage(this.weightedRating, this.votes);
    };
};

class User {
    constructor(id, name) {
        this.username = name;
        this.id = id;
    };

    async getLevels() {
        const xml = await Utils.request('get_level.hw', {
            action: 'get_pub_by_user',
            user_id: this.id
        });
      
        const levels = Parser.getLevels(xml);
                     
        return this.levels = levels.map((data) => new Level(data));
    };
  
    async getProfile() {
        const route = 'profile.tjf?uid=' + this.id;
      
        const html = await Utils.request(route);
        const profile = Parser.getUser(html);
      
        for(const key in profile)
            this[key] = profile[key];
      
        return this;
    };
  
    toString() {
        return `[${this.username || `user ${this.id}`}](${this.profileURL})`;
    };
  
    get profileURL() {
        return `${baseURL}profile.tjf?uid=${this.id}`;
    };
};

module.exports = {
    Level,
    Replay,
    User
};