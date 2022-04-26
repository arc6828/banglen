const url_endpoint = "https://api-v3.thaiwater.net/api/v1/thaiwater30/analyst/dam";
const url_endpoint_detail = "https://api-v3.thaiwater.net/api/v1/thaiwater30/analyst/dam_daily_graph";
// https://api-v3.thaiwater.net/api/v1/thaiwater30/analyst/dam
// https://api-v3.thaiwater.net/api/v1/thaiwater30/analyst/dam_daily_graph?data_type=dam_storage&dam_id=14&day=9&month=3&year=2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012

const dam_whitelist = ["วชิราลงกรณ", "สิริกิติ์", "ภูมิพล", "ป่าสักชลสิทธิ์", "ศรีนครินทร์"];
const dam_status = ["ต่ำ","ปานกลาง","สูง","ล้น"];
const getItems = async ()=>{
    try {
        let response = await fetch(url_endpoint);
        // let items = await response.json();
        // return items;
        let item = await response.json();
        //FILTER WITH WHITELIST
        let ds = item.data.dam_daily;
        ds = ds.filter((item,index)=>( (dam_whitelist.indexOf(item.dam.dam_name.th) !== -1) ));
        ds = ds.reduce((prev, item) => {
            const index = prev.findIndex(v => v.dam.dam_name.th === item.dam.dam_name.th);
            if (index === -1) {
                // console.log(item.dam.dam_name.th,item.dam_date);
                let i = parseInt(""+item.dam_storage_percent/33)
                item.status = dam_status[i];
                prev.push(item);
            } else {
                // prev[index].elements.push(...cur.elements);
            }
            return prev;
        }, []);
        return ds;
    } catch (error) {
        console.log(error);
    }
};

const getItemDetail = async (id,month)=>{
    try {
        // https://rtfloodbma.com/json/rice/R13001.json
        let url = `${url_endpoint_detail}?data_type=dam_storage&dam_id=${id}&day=1&month=${month}&year=2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012`;
        console.log(url);
        let response = await fetch(url);
        // let items = await response.json();
        // return items;
        let item = await response.json();
        // console.log(item);
        return item.data;
    } catch (error) {
        console.log(error);
    }

};

export default { getItems, getItemDetail };