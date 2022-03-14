// https://raw.githubusercontent.com/arc6828/banglen/main/backend/json/86m388h17.json
// const url_endpoint = "https://raw.githubusercontent.com/arc6828/banglen/main/backend/json/86m388h17.json";
const url_endpoint = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/banglen-th";
// const url_endpoint = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ckartisan";
const url_endpoint_xml = "https://medium.com/feed/banglen-th";

// const parseString = require('xml2js').parseString;

const getPosts = async ()=>{
    try {
        let response = await fetch(url_endpoint);
        let items = await response.json();
        return items.items;
    } catch (error) {
        console.log(error);
    }
};

const getPostsXML = async ()=>{
    try {
        let response = await fetch(url_endpoint_xml);
        let xml = await response.text();

        // let obj = parseString(xml);

        // console.log("JSON : ", obj);
        let items = [];
        // let items = await response.json();
        return items;
    } catch (error) {
        console.log(error);
    }
};
export default { getPosts , getPostsXML};