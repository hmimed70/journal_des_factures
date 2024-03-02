'use client';
import ItemsTable from '@/components/ItemsTable';
import data from '@/data/db.json';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    
  } from "@react-pdf/renderer";
import { notFound } from 'next/navigation';

  function BasicDocument(props: any) {
    const invoiceDetails = data.find((el) => el.InvoiceID === props.params.id)
    if (!invoiceDetails) {
        return notFound();
      }
  const total = invoiceDetails.InvoiceItems.reduce(
    (acc, item) => acc + item.ItemPrice * item.ItemQuantity,
    0
  );
  const tva = invoiceDetails.InvoiceItems.reduce(
    (acc, item) => acc + item.ItemTax * item.ItemQuantity,0); 
  const totalTTC = total + tva;
    return (
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.TextFacture}>Facture N  {invoiceDetails.InvoiceID} </Text>
              <Text style={styles.dateFacture}>date de facture: {invoiceDetails.InvoiceDate}</Text>
            </View>
            <View style={styles.details}>
               <View>
                 <Text style={{fontSize:12}} >Fournisseur</Text>
                 <View style={{width:'100%', height:0.8,backgroundColor:'black'}}></View>
                 <Text style={styles.infoName}>{invoiceDetails.SupplierName}</Text>
                 <Text style={styles.info}>{invoiceDetails.SupplierAddress}</Text>
                 <Text style={styles.info}>{invoiceDetails.SupplierPhone}</Text>
               </View>
               <View>
                 <Text style={{fontSize:12}}>Client</Text>
                 <View style={{width:'100%', height:0.5,backgroundColor:'black'}}></View>
                 <Text style={styles.infoName}>{invoiceDetails.ClientName}</Text>
                 <Text style={styles.info}>{invoiceDetails.ClientAddress}</Text>
                 <Text style={styles.info}>{invoiceDetails.ClientPhone}</Text>
               </View>
            </View>
            <ItemsTable data={invoiceDetails.InvoiceItems} />
            <View style={{textAlign: 'right',marginTop:16, display:'flex', flexDirection:'column'}}>
            <View style={styles.montant}>
              <Text style={styles.montantDetails}>Total</Text>
              <Text style={styles.montantDetails}>{total.toFixed(2)}</Text>
            </View>
            <View style={styles.montant}>
              <Text style={styles.montantDetails}>TVA</Text>
              <Text style={styles.montantDetails}>{tva.toFixed(2)}</Text>
            </View>
            <View style={styles.montant}>
              <Text style={styles.montantDetails}>Total TTC</Text>
              <Text style={styles.montantDetails}>{totalTTC.toFixed(2)}</Text>
            </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "dark",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    TextFacture: {
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop:22,
     fontSize: 22,
     fontStyle: 'italic',
    },
    montant: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
    alignItems:'center', 
    marginRight:20,
    },  
    montantDetails: {
        width:120,
        textAlign: 'left',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderBottom: 1,
        fontWeight: 'bold'

    },
    details: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical:16
    },
    dateFacture: {
      textAlign: 'right',
      fontSize: 12,
      marginTop: 12,
      marginRight:16,
      fontWeight: 'normal'
    },
    viewer: {
      width: window.innerWidth, 
      height: window.innerHeight,
    },
    info : {
        fontSize: 12,
        marginTop:4,
    },
    infoName : {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop:4,
    }

  });
  

  export default BasicDocument;

