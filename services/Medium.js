// https://raw.githubusercontent.com/arc6828/banglen/main/backend/json/86m388h17.json
const url_endpoint = "https://raw.githubusercontent.com/arc6828/banglen/main/backend/json/86m388h17.json";

const getPosts = async ()=>{
    try {
        let response = await fetch(url_endpoint);
        let items = await response.json();
        return items;
    } catch (error) {
        console.log(error);
    }

};
export default { getPosts };