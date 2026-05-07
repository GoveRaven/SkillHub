import { TFilters } from "@/types/filters";

export function mapFiltersToApi(filters: TFilters) {
  return {
    level: filters.skillLevel,
    category: filters.category
  };
}
