import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from 'expo-media-library';
import * as mime from "mime";

const requestPermission = async() => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Sorry, we need camera roll permissions to make this work!");
    }
    const { status2 } = await ImagePicker.requestCameraPermissionsAsync();
    if (status2 !== "granted") {
      console.log("Sorry, we need camera permissions to make this work!");
    }
};

const getFromCamera = async()=>{
   return await ImagePicker.launchCameraAsync();
};

const getFromGallery = async()=>{
    return await ImagePicker.launchImageLibraryAsync();
};

const save = async(uri)=>{
    //console.log(FileSystem.documentDirectory);
    //console.log(FileSystem.cacheDirectory);
    //CREATE FOLDER
    try {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+"ImagePicker");        
        console.log("Folder Created!!!");
    } catch (error) {
        console.log("Folder already Exist!!!");
    }
    //SAVE FILE TO LOCAL
    try {        
        //console.log("URI : ", uri);
        let filename = uri.split("/").pop();
        //console.log(filename);
        let new_uri = FileSystem.documentDirectory+"ImagePicker/"+filename;
        //console.log(new_uri);
        await FileSystem.copyAsync({ from : uri, to : new_uri});
        console.log("File Created!!!");
        return new_uri;
    } catch (error) {
        console.log(error);
        return uri;
    }    
};

const download = async(uri)=>{
    //console.log(Math.random().toString(36).substring(2, 9),mime.getExtension(mime.getType(uri)));   
    try{
        let random_name = Math.random().toString(36).substring(2, 9);
        let extension = mime.getExtension(mime.getType(uri));
        let filename = random_name+"."+extension;
        const response = await FileSystem.downloadAsync(
            uri,
            FileSystem.cacheDirectory + filename
        );
        //console.log("response : ", response);
        //await saveToLibraryAsync(localUri);
        const asset = await MediaLibrary.createAssetAsync(response.uri);
        await MediaLibrary.createAlbumAsync("banglen", asset, false);
        // alert(Download);
    }catch(error){
        console.error(error);
    }        
};

export default { requestPermission, getFromCamera, getFromGallery, save,download };
