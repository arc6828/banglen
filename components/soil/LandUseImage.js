import React, { useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import MyFile from "../../helpers/MyFile";
import ImageViewer from 'react-native-image-zoom-viewer';
export default function LandUseImage() {
    const images = [
        require('../../assets/images/soil/landuse-2562.png'),
        require('../../assets/images/soil/landuse-2550.png')
    ];    
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <View style={{ flexDirection: "row", marginVertical: 10, justifyContent: "center" }}>
                {images.map((item) => {
                    return (
                        <TouchableOpacity onPress={()=>{ setModalVisible(true) }}>
                            <Image source={item} style={{ width: 100, height: 100, marginHorizontal: 20 }} />
                        </TouchableOpacity>
                    );
                })}
            </View>
            <Modal visible={modalVisible} transparent={true} onRequestClose={() => { setModalVisible(false); }} >
                <ImageViewer 
                    imageUrls={ images.map((item)=>{
                        return {
                            url : '',
                            props : {
                                source : item
                            }
                        }
                    })}
                    enableSwipeDown={true}
                    onCancel={()=>{ console.log("SwipeDown"); setModalVisible(false); }}
                    //onSave={(uri)=>{ MyFile.download(uri); }}
                    />
            </Modal>
        </View>
    );
}