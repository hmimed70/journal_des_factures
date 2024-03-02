const Pagination = ({ totalPages, currentPage, onPageChange }: any) => {
    return (
      <div className="flex justify-center items-center mt-4">
        <button
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-red-500 text-white'
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          précédent
        </button>
  
        <span className="mx-4 text-gray-700">
          Page {currentPage} de {totalPages}
        </span>
  
        <button
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === totalPages ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-red-500 text-white'
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    );
  };

  export default Pagination;