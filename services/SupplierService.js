// const url_endpoint = "https://rtfloodbma.com/json/product-rice.json";
const url_endpoint = "https://raw.githubusercontent.com/arc6828/banglen/main/assets/jsons/supplier.json";

const getItems = async ()=>{
    try {
        let response = await fetch(url_endpoint);
        let items = await response.json();
        return items;
    } catch (error) {
        console.log(error);
    }

};

const getItemDetail = async (product_id)=>{
    try {
        // https://rtfloodbma.com/json/rice/R13001.json
        let url_endpoint = "https://rtfloodbma.com/json/rice/"+product_id+".json";
        console.log(url_endpoint);
        let response = await fetch(url_endpoint);
        let items = await response.json();
        return items;
    } catch (error) {
        console.log(error);
    }

};
export default { getItems, getItemDetail };