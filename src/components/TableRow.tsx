import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 12,
    borderBottom:1,
    paddingVertical:4,
    marginHorizontal:16,
    borderRight:1,
    borderLeft:1
  },
  lib: {
    width: "30%",
  },
  other: {
    width: "15%"
  },
  num: {
    width: "10%",
  },
});

const TableRow = ({ items }: any) => {
  const rows = items.map((item: any) => (
    <View style={styles.row} key={item.ItemID}>
      <Text style={styles.num}>{item.ItemID}</Text>
      <Text style={styles.lib}>{item.ItemLibelle}</Text>
      <Text style={styles.num}>{item.ItemQuantity}</Text>
      <Text style={styles.lib}>{item.ItemPrice}</Text>
      <Text style={styles.num}>{item.ItemPrice * item.ItemQuantity }</Text>
      <Text style={styles.lib}>{item.ItemPrice * item.ItemQuantity +   item.ItemQuantity*item.ItemTax}</Text>
    </View>
  ));
  return <Fragment>
     <View style={[styles.row,{backgroundColor: 'orange', fontWeight: 'bold',color: 'dark',borderTop:1, paddingVertical:2}]}>
<Text style={styles.num}>Num</Text>
  <Text style={styles.lib}>Libelle</Text>
  <Text style={styles.num}>Quantité</Text>
  <Text style={styles.lib}>Prix</Text>
  <Text style={styles.num}>HT</Text>
  <Text style={styles.lib}>TTC</Text>
</View>
    {rows}</Fragment>;
};

export default TableRow;