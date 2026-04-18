import { CATEGORY, LEVEL } from '@/consts/filters';

interface IFilters {
  filters: {
    level: string;
    category: string;
  };
  onFilterChanges: {
    setLevel: (filter: string) => void;
    setCategory: (filter: string) => void;
  };
  onPageReset: () => void;
}

export function Filters({ filters, onFilterChanges, onPageReset }: IFilters) {
  const { level, category } = filters;
  const { setLevel, setCategory } = onFilterChanges;

  return (
    <div className='mb-16 rounded-2xl border border-gray-200 bg-white p-4'>
      <div className='grid gap-4 md:grid-cols-2'>
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-gray-600'>
            Уровень
          </span>
          <select
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
              onPageReset();
            }}
            className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none'
          >
            {Object.values(LEVEL).map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>

        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-gray-600'>
            Категория
          </span>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              onPageReset();
            }}
            className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none'
          >
            {Object.values(CATEGORY).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
