import { TApiFilters, TFilters } from '@/types/filters';

export function mapFiltersToApi(filters: TFilters): TApiFilters {
  return {
    level: filters.skillLevel,
    category: filters.category,
  };
}
