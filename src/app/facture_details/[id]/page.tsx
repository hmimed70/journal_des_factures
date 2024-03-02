import InvoiceDetails from '@/components/InvoiceDetails'
import React from 'react'

interface FactureShowPageProps {
  params: {
    id: string
  }
}

export default function page(props: FactureShowPageProps) {
  return (
    <>
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center py-3 my-8">Détail de Facture : {props.params.id} </h1>
    <InvoiceDetails invoiceId={props.params.id} />
  </div>
    </>
  )
}