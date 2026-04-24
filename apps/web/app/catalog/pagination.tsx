type TPagination = {
  countPages: number;
  curentPage: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  countPages,
  curentPage,
  onPageChange,
}: TPagination) {
  return (
    <div className='flex justify-center items-center space-x-2 mt-12'>
      {Array.from({ length: countPages }, (_, i) => i).map((number) => {
        const pageNumber = number + 1;
        const isActive = curentPage === pageNumber;

        return (
          <button
            key={number}
            onClick={() => onPageChange(pageNumber)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700'
                : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
            } min-w-[44px] h-[44px] flex items-center justify-center`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}
