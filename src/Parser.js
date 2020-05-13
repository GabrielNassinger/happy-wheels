const { parse: parseXML } = require('fast-xml-parser');
const { parse: parseHTML } = require('node-html-parser');

const options = { ignoreAttributes: false };

module.exports = class Parser {
    static getLevels(xml) {
        const data = parseXML(xml, options);
      
        if(!data || !data.lvs || !data.lvs.lv) return [];
            
        if(!data.lvs.lv[0]) return [ data.lvs.lv ];
      
        return data.lvs.lv;
    };
  
    static getReplays(xml) {
        const data = parseXML(xml, options);
            
        if(!data) return [];
      
        return data.combined_data ?
            data.combined_data :
            data.rps.rp || [];
    };
  
    static getUser(html) {
        const document = parseHTML(html);
      
        const header = document.querySelector('.header');
        
        if(!header) return {};
        
        const items = document.querySelectorAll('tr');  
        const clean = ({ text }) => text.replace(/\r|\n| {2,}|:$/g, '');
      
        const username = header.text.split('\'s Profile')[0];
        const result = { username };

        for(const item of items) {
            let key = clean(item.childNodes[1]).toLowerCase();
            let value = clean(item.childNodes[3]);
          
            if(key === 'date joined') {
                key = 'createdAt';
              
                value = new Date(value);
            };
          
            result[key] = value;
        };
      
        if(!result.createdAt) return {};
      
        return result;
    };
};