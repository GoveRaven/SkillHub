import { CATEGORY, SKILL_LEVEL } from '@/consts/filters';
import { TCATEGORY, TFilters, TSKILL_LEVEL } from '@/types/filters';

// TODO: поменять имя (?)
type TFiltersComponent = {
  filters: TFilters;
  setLevel: (skillLevel: TSKILL_LEVEL) => void;
  setCategory: (category: TCATEGORY) => void;
  resetPage: () => void;
};

export function Filters({
  filters,
  setLevel,
  setCategory,
  resetPage,
}: TFiltersComponent) {
  const { skillLevel, category } = filters;

  return (
    <div className='mb-16 rounded-2xl border border-gray-200 bg-white p-4'>
      <div className='grid gap-4 md:grid-cols-2'>
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-gray-600'>
            Уровень
          </span>
          <select
            value={skillLevel}
            onChange={(e) => {
              setLevel(e.target.value as TSKILL_LEVEL);
              resetPage();
            }}
            className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none'
          >
            {Object.values(SKILL_LEVEL).map((skillLevel) => (
              <option key={skillLevel} value={skillLevel}>
                {skillLevel}
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
              setCategory(e.target.value as TCATEGORY);
              resetPage();
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
