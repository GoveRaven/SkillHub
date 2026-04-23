import { CATEGORY, LEVEL } from '@/consts/filters';

type TFilters = {
  filters: {
    level: LEVEL;
    category: CATEGORY;
  };
  onFilterChanges: {
    setLevel: (filter: LEVEL) => void;
    setCategory: (filter: CATEGORY) => void;
  };
  onPageReset: () => void;
};

export function Filters({ filters, onFilterChanges, onPageReset }: TFilters) {
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
              setLevel(e.target.value as LEVEL);
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
              setCategory(e.target.value as CATEGORY);
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
