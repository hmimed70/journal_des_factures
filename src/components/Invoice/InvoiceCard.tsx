import Link from "next/link";

const InvoiceCard = ({ invoice }: any) => {
    const totalAmount = invoice.InvoiceItems.reduce(
      (acc: any, item: any) => acc + item.ItemPrice * item.ItemQuantity+ item.ItemTax * item.ItemQuantity,
      0
    );
  
    return (
      <tr className="hover:bg-gray-100">
        <td className="py-2 px-4 border">{invoice.InvoiceID}</td>
        <td className="py-2 px-4 border">{invoice.InvoiceDate}</td>
        <td className="py-2 px-4 border">{invoice.ClientName}</td>
        <td className="py-2 px-4 border">{invoice.SupplierName}</td>
        <td className="py-2 px-4 border">{totalAmount.toFixed(2)}</td>
        <td className="py-2 px-4 border">
            <Link className='text-red-500   hover:text-red-600' href={`/facture_details/${invoice.InvoiceID}`}>
              Afficher
            </Link>
          </td>
      </tr>
    );
  };
  export default InvoiceCard ;