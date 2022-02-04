const url_endpoint = "https://www.rtfloodbma.com/api/banglen/weather-now";

const now = async ()=>{
    try {
        let response = await fetch(url_endpoint);
        let items = await response.json();
        return items;
    } catch (error) {
        console.log(error);
    }

};
export default { now };