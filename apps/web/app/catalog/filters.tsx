interface IFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onPageReset: (filter: number) => void;
}

export default function Filters({
  currentFilter,
  onFilterChange,
  onPageReset: onPageChange,
}: IFiltersProps) {
  const levels = ['Все', 'Новичок', 'Средний', 'Продвинутый'];

  return (
    <div className='flex justify-center mb-16 gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200'>
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => {
            onFilterChange(level);
            onPageChange(1);
          }}
          className={`px-8 py-4 rounded-xl font-semibold whitespace-nowrap transition-colors duration-200 hover:shadow-lg ${
            currentFilter === level
              ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-700 border border-gray-200'
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}
