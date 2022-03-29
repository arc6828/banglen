import ArrayStorage from "./ArrayStorage";
const STORAGE_KEY = "@outcomes"; //เปลี่ยนแค่ KEY 
//ดึงข้อมูลทั้งหมดขึ้นมาแสดง
const readItems = async (token) => {
  return ArrayStorage.readItems(STORAGE_KEY+"-"+token);
};
//ดึงข้อมูลแค่ 1 ชื้นขึ้นมาแสดงตาม item ที่ระบุไว้
const readItemDetail = async (token,item) => {
  return ArrayStorage.readItemDetail(STORAGE_KEY+"-"+token, item);
};
//ลบข้อมูล item ที่ระบุไว้
const removeItem = async (token,item) => {
  ArrayStorage.removeItem(STORAGE_KEY+"-"+token, item);
};
//เพิ่มข้อมูลและอัพเดทข้อมูล ตาม item ที่ระบุไว้
const writeItem = async (token,item) => {
  ArrayStorage.writeItem(STORAGE_KEY+"-"+token,item);
};

export default { readItems, readItemDetail, removeItem, writeItem };