'use client';
import React, { useState } from 'react';
import invoices from '@/data/db.json'; 
import Pagination from '@/components/Pagination/Pagination';
import InvoiceCard from '@/components/Invoice/InvoiceCard';

const ITEMS_PER_PAGE = 8;

export default function InvoiceList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvoices = invoices.filter((item: any) =>
  item.InvoiceItems.some((myit: any) => 
  myit.ItemLibelle.toLowerCase().includes(searchTerm.toLowerCase())));
  const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentInvoices = filteredInvoices.slice(indexOfFirstItem, indexOfLastItem);
  if(filteredInvoices.length===0) {

  }
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  let disp = (
   <>
   <table className="min-w-full border border-red-300">
   <thead>
            <tr className="bg-red-400 text-gray-900">
              <th className="py-2 px-4 border">Facture ID</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Nom Client</th>
              <th className="py-2 px-4 border">Nom Fournisseur</th>
              <th className="py-2 px-4 border">Montant TTC </th>
              <th className='py-2 px-4 border'>Actions</th>
            </tr>
          </thead>
  <tbody>
    {currentInvoices.map((invoice) => (
      <InvoiceCard key={invoice.InvoiceID} invoice={invoice} />
    ))}
  </tbody>
</table>
      <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
    </>);
 if(filteredInvoices.length === 0) {
  disp = (<h1 className='pt-10 mx-auto text-3xl font-bold text-center text-red-500'>Ops ! Aucune Facture trouvé</h1>)
 }
  return (
    <>
    <div className="container mx-auto">
      <h1 className="text-3xl  py-8 text-center font-bold">Liste des Factures </h1>
      <form className='flex justify-end items-center mb-3 '>
  <label className='mr-4 text-lg font-bold'>Rechercher par Libelle</label>
  <input type='text' placeholder='entrer libelle...' className='border-2 border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:border-red-400' onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);  }} />
</form>
      <div className="overflow-x-auto">
         {disp}
  
      </div>
    </div>
  </>
  );
}
