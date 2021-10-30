const { parse } = require('rss-to-json');
const fs = require("fs");

const MongoClient = require("mongodb").MongoClient;
const mongoParams = { useNewUrlParser: true, useUnifiedTopology: true };
const url_db = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const client = new MongoClient(url_db, mongoParams);

const RssToJson = async () => {
  let rss = await parse('https://medium.com/feed/@chavalit.kow?fbclid=IwAR1skA_p5M-PB3Uw7wMkleQ-FPRlILnkyAXGNNNW2La__t0GVThX0GC-HXo');
  const items = rss.items.map((item) => {
    const dataArray = item.content;
    const dataSprilt = dataArray.split(/[ \(,\,<>,\,)]+/);

    const items = dataSprilt.filter(item => item.length > 50)
    const itemFirst = items.shift();
    const subString = itemFirst.substring(5, itemFirst.length - 1)
    const data = {
      image_author: rss.image,
      title: item.title,
      link: item.link,
      author: item.author,
      published: item.published,
      created: item.created,
      image: subString,
      category: item.category,
      content: item.content,
      enclosures: item.enclosures,
      content_encoded: item.content_encoded
    }
    return data
  })
  return items
}
const writeFileJson = async () => {
  const data = await RssToJson();
  const jsonRss = await JSON.stringify(data, null, 3);
  const id = await Math.random().toString(36).substr(2, 9)

  const removeHtml = await jsonRss.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');
  fs.writeFileSync("json/" + id + ".json", removeHtml);
  return removeHtml;
}
writeFileJson();

// const dataToMongoDb = async () => {
//   const jsons = await writeFileJson();

//   client.connect(async (err) => {
//     if (err) {
//       console.log(err.message);
//       throw new Error("failed to connect");
//     }
//     let datab = client.db("banglen");

//     try {
//       datab.collection("post").insertOne(jsons);
//       console.log("insert succeeded");
//     } catch (err) {
//       console.log("insert failed");
//       console.log(err.message);
//     }

//   });



