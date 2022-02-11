import React from "react";
import { DataTable } from 'react-native-paper';
import MyNumber from "../../helpers/MyNumber";



export default function LandUseDataTable(props) {
    const { order , soils, setOrder } = props;

    return (
        <DataTable style={{}}>
            <DataTable.Header>
                <DataTable.Title>Code</DataTable.Title>
                <DataTable.Title>คำอธิบาย</DataTable.Title>
                <DataTable.Title
                    numeric
                    sortDirection={order ? 'descending' : 'ascending'}
                    onPress={() => { setOrder(!order) }}
                >
                    พื้นที่ (ไร่)
                </DataTable.Title>
            </DataTable.Header>
            {soils.map((item, index) => {
                return (
                    <DataTable.Row key={index.toString()}>
                        <DataTable.Cell>{item.code}</DataTable.Cell>
                        <DataTable.Cell >{item.description}</DataTable.Cell>
                        <DataTable.Cell numeric>{MyNumber.number_format(item.area_in_rai)}</DataTable.Cell>
                    </DataTable.Row>
                );
            })}
        </DataTable>
    );
}