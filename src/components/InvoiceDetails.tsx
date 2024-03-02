'use client';
import React, { useRef, useState, } from 'react'
import data from '@/data/db.json';
import { notFound } from 'next/navigation';
import BasicDocument from './Facture';
import Link from 'next/link';
function InvoiceDetails({ invoiceId }: any) {
  
  const invoiceDetails = data.find((el) => el.InvoiceID === invoiceId)
  if (!invoiceDetails) {
    return notFound();
  }

  const InvoiceItmes = invoiceDetails.InvoiceItems;

  const totalAmount = InvoiceItmes.reduce(
    (acc, item) => acc + item.ItemPrice + item.ItemTax,
    0
  );

  return (
    <div className="bg-white border rounded p-4 shadow-md w-100">
      <table className="min-w-full border border-red-300 mb-4">
        <thead>
          <tr className="bg-red-400">
            <th className="py-2 px-4 border">Item Libelle</th>
            <th className="py-2 px-4 border">Unité d'Item</th>
            <th className="py-2 px-4 border">Quantité d'item</th>
            <th className="py-2 px-4 border">Prix d'item</th>
            <th className="py-2 px-4 border">Taxe d'item</th>
            <th className="py-2 px-4 border">Montant d'item TTC</th>
          </tr>
        </thead>
        <tbody>
          {invoiceDetails.InvoiceItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{item.ItemLibelle}</td>
              <td className="py-2 px-4 border">{item.ItemUnit}</td>
              <td className="py-2 px-4 border">{item.ItemQuantity}</td>
              <td className="py-2 px-4 border">{item.ItemPrice.toFixed(2)}</td>
              <td className="py-2 px-4 border">{item.ItemTax.toFixed(2)}</td>
              <td className="py-2 px-4 border">{(item.ItemPrice *item.ItemQuantity + item.ItemTax * item.ItemQuantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center items-center'>
      <Link className="bg-red-500 text-white py-3 px-6 rounded-xl " href={`/Print_facture/${invoiceId}`} >Imprimer</Link>
      </div>
    </div>
  );
};

export default InvoiceDetails;
