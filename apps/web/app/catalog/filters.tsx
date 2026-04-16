import { CATEGORY, LEVEL } from '@/consts/filters';

interface IFiltersProps {
  currentFilters: string[];
  onFilterChanges: ((filter: string) => void)[];
  onPageReset: (filter: number) => void;
}

export default function Filters({
  currentFilters,
  onFilterChanges,
  onPageReset,
}: IFiltersProps) {
  const [currentLevel, currentCategory] = currentFilters;
  const [setLevel, setCategory] = onFilterChanges;
  return (
    <div className='mb-16 rounded-2xl border border-gray-200 bg-white p-4'>
      <div className='grid gap-4 md:grid-cols-2'>
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-gray-600'>
            Уровень
          </span>
          <select
            value={currentLevel}
            onChange={(e) => {
              setLevel(e.target.value);
              onPageReset(1);
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
            value={currentCategory}
            onChange={(e) => {
              setCategory(e.target.value);
              onPageReset(1);
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
