// hooks/use-api.ts
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import type { BaseProduct, ProductVariant, PriceReport } from "@/types/product";

// API Response Types
type PaginationMeta = {
  total: number;
  page: number;
  limit: number;
  pageCount: number;
};

type ApiResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};

type SingleApiResponse<T> = T;

// Types
type PaginationParams = {
  page?: number;
  limit?: number;
};

type BaseProductFilters = PaginationParams & {
  search?: string;
  category?: string;
};

type VariantFilters = PaginationParams & {
  search?: string;
  baseProductId?: string;
  barcode?: string;
};

type PriceReportFilters = PaginationParams & {
  variantId?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  startDate?: Date;
  endDate?: Date;
};

// API client functions
// Add a simple request cache
const requestCache = new Map();

async function fetchBaseProducts(
  filters: BaseProductFilters = {}
): Promise<ApiResponse<BaseProduct>> {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.limit) params.append("limit", filters.limit.toString());
  if (filters.search) params.append("search", filters.search);
  if (filters.category) params.append("category", filters.category);

  const url = `/api/base-products?${params.toString()}`;
  const cacheKey = url;

  // Check if we have a cached response that's less than 10 seconds old
  const cached = requestCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < 10000) {
    return cached.data;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch base products");
  const data = await response.json();

  // Cache the response
  requestCache.set(cacheKey, {
    timestamp: Date.now(),
    data,
  });

  return data;
}

// Apply similar pattern to other fetch functions
async function fetchBaseProduct(
  id: string
): Promise<SingleApiResponse<BaseProduct>> {
  const response = await fetch(`/api/base-products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch base product");
  return response.json();
}

async function createBaseProduct(data: any) {
  const response = await fetch("/api/base-products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create base product");
  return response.json();
}

async function updateBaseProduct(id: string, data: any) {
  const response = await fetch(`/api/base-products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update base product");
  return response.json();
}

async function deleteBaseProduct(id: string) {
  const response = await fetch(`/api/base-products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete base product");
  return true;
}

async function fetchVariants(filters: VariantFilters = {}) {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.limit) params.append("limit", filters.limit.toString());
  if (filters.search) params.append("search", filters.search);
  if (filters.baseProductId)
    params.append("baseProductId", filters.baseProductId);
  if (filters.barcode) params.append("barcode", filters.barcode);

  const response = await fetch(`/api/variants?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch variants");
  return response.json();
}

async function fetchVariant(id: string) {
  const response = await fetch(`/api/variants/${id}`);
  if (!response.ok) throw new Error("Failed to fetch variant");
  return response.json();
}

async function createVariant(data: any) {
  const response = await fetch("/api/variants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create variant");
  return response.json();
}

async function updateVariant(id: string, data: any) {
  const response = await fetch(`/api/variants/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update variant");
  return response.json();
}

async function deleteVariant(id: string) {
  const response = await fetch(`/api/variants/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete variant");
  return true;
}

async function fetchPriceReports(filters: PriceReportFilters = {}) {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.limit) params.append("limit", filters.limit.toString());
  if (filters.variantId) params.append("variantId", filters.variantId);
  if (filters.location) params.append("location", filters.location);
  if (filters.minPrice) params.append("minPrice", filters.minPrice.toString());
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice.toString());
  if (filters.startDate)
    params.append("startDate", filters.startDate.toISOString());
  if (filters.endDate) params.append("endDate", filters.endDate.toISOString());

  const response = await fetch(`/api/price-reports?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch price reports");
  return response.json();
}

async function fetchPriceReport(id: string) {
  const response = await fetch(`/api/price-reports/${id}`);
  if (!response.ok) throw new Error("Failed to fetch price report");
  return response.json();
}

async function createPriceReport(data: any) {
  const response = await fetch("/api/price-reports", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create price report");
  return response.json();
}

async function updatePriceReport(id: string, data: any) {
  const response = await fetch(`/api/price-reports/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update price report");
  return response.json();
}

async function deletePriceReport(id: string) {
  const response = await fetch(`/api/price-reports/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete price report");
  return true;
}

// React Query Hooks
export function useBaseProducts(filters: BaseProductFilters = {}) {
  return useQuery<ApiResponse<BaseProduct>, Error>({
    queryKey: ["baseProducts", filters],
    queryFn: () => fetchBaseProducts(filters),
  });
}

export function useBaseProduct(id: string) {
  return useQuery<SingleApiResponse<BaseProduct>, Error>({
    queryKey: ["baseProduct", id],
    queryFn: () => fetchBaseProduct(id),
    enabled: !!id,
  });
}

export function useCreateBaseProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBaseProduct,
    onSuccess: (newBaseProduct) => {
      // Update baseProducts queries
      queryClient.setQueriesData(
        { queryKey: ["baseProducts"] },
        (old: ApiResponse<BaseProduct> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: [newBaseProduct, ...old.data],
            meta: {
              ...old.meta,
              total: old.meta.total + 1,
            },
          };
        }
      );

      // Update infiniteBaseProducts queries
      queryClient.setQueriesData(
        { queryKey: ["infiniteBaseProducts"] },
        (old: any) => {
          if (!old) return old;
          // Add to the first page if it exists
          if (old.pages && old.pages.length > 0) {
            const firstPage = old.pages[0];
            return {
              ...old,
              pages: [
                {
                  ...firstPage,
                  data: [newBaseProduct, ...firstPage.data],
                  meta: {
                    ...firstPage.meta,
                    total: firstPage.meta.total + 1,
                  },
                },
                ...old.pages.slice(1),
              ],
            };
          }
          return old;
        }
      );
    },
  });
}

export function useUpdateBaseProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateBaseProduct(id, data),
    onSuccess: (updatedBaseProduct) => {
      // Update baseProducts queries
      queryClient.setQueriesData(
        { queryKey: ["baseProducts"] },
        (old: ApiResponse<BaseProduct> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: old.data.map((bp) =>
              bp.id === updatedBaseProduct.id ? updatedBaseProduct : bp
            ),
          };
        }
      );

      // Update infiniteBaseProducts queries
      queryClient.setQueriesData(
        { queryKey: ["infiniteBaseProducts"] },
        (old: any) => {
          if (!old || !old.pages) return old;
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              data: page.data.map((bp: BaseProduct) =>
                bp.id === updatedBaseProduct.id ? updatedBaseProduct : bp
              ),
            })),
          };
        }
      );

      // Update specific baseProduct query
      queryClient.setQueryData(
        ["baseProduct", updatedBaseProduct.id],
        updatedBaseProduct
      );
    },
  });
}

export function useDeleteBaseProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBaseProduct,
    onMutate: async (id) => {
      // Get the base product before deleting it
      const baseProduct = queryClient.getQueryData([
        "baseProduct",
        id,
      ]) as BaseProduct;
      return { baseProduct };
    },
    onSuccess: (_, id, context) => {
      const baseProduct = context?.baseProduct;

      // Update baseProducts queries
      queryClient.setQueriesData(
        { queryKey: ["baseProducts"] },
        (old: ApiResponse<BaseProduct> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: old.data.filter((bp) => bp.id !== id),
            meta: {
              ...old.meta,
              total: Math.max(0, old.meta.total - 1),
            },
          };
        }
      );

      // Update infiniteBaseProducts queries
      queryClient.setQueriesData(
        { queryKey: ["infiniteBaseProducts"] },
        (old: any) => {
          if (!old || !old.pages) return old;
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              data: page.data.filter((bp: BaseProduct) => bp.id !== id),
              meta: {
                ...page.meta,
                total: Math.max(0, page.meta.total - 1),
              },
            })),
          };
        }
      );

      // Remove specific baseProduct query
      queryClient.removeQueries({ queryKey: ["baseProduct", id] });

      // If we have variants associated with this base product, we should invalidate them
      // Since we don't have direct access to the variants, we'll invalidate all variant queries
      queryClient.invalidateQueries({ queryKey: ["variants"] });
      queryClient.invalidateQueries({ queryKey: ["infiniteVariants"] });
    },
  });
}

export function useVariants(filters: VariantFilters = {}) {
  return useQuery<ApiResponse<ProductVariant>, Error>({
    queryKey: ["variants", filters],
    queryFn: () => fetchVariants(filters),
  });
}

export function useVariant(id: string) {
  return useQuery<SingleApiResponse<ProductVariant>, Error>({
    queryKey: ["variant", id],
    queryFn: () => fetchVariant(id),
    enabled: !!id,
  });
}

export function useCreateVariant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createVariant,
    onSuccess: (newVariant) => {
      // Update variants queries
      queryClient.setQueriesData(
        { queryKey: ["variants"] },
        (old: ApiResponse<ProductVariant> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: [newVariant, ...old.data],
            meta: {
              ...old.meta,
              total: old.meta.total + 1,
            },
          };
        }
      );

      // Update infiniteVariants queries
      queryClient.setQueriesData(
        { queryKey: ["infiniteVariants"] },
        (old: any) => {
          if (!old || !old.pages || old.pages.length === 0) return old;

          // Add to the first page if it exists
          const firstPage = old.pages[0];
          return {
            ...old,
            pages: [
              {
                ...firstPage,
                data: [newVariant, ...firstPage.data],
                meta: {
                  ...firstPage.meta,
                  total: firstPage.meta.total + 1,
                },
              },
              ...old.pages.slice(1),
            ],
          };
        }
      );

      // Update baseProduct query to include the new variant
      queryClient.setQueriesData(
        { queryKey: ["baseProduct", newVariant.baseProductId] },
        (old: BaseProduct | undefined) => {
          if (!old) return old;
          return {
            ...old,
            variants: old.variants
              ? [newVariant, ...old.variants]
              : [newVariant],
          };
        }
      );
    },
  });
}

export function useUpdateVariant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateVariant(id, data),
    onSuccess: (updatedVariant) => {
      // Update variants queries
      queryClient.setQueriesData(
        { queryKey: ["variants"] },
        (old: ApiResponse<ProductVariant> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: old.data.map((variant) =>
              variant.id === updatedVariant.id ? updatedVariant : variant
            ),
          };
        }
      );

      // Update infiniteVariants queries
      queryClient.setQueriesData(
        { queryKey: ["infiniteVariants"] },
        (old: any) => {
          if (!old || !old.pages) return old;
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              data: page.data.map((variant: ProductVariant) =>
                variant.id === updatedVariant.id ? updatedVariant : variant
              ),
            })),
          };
        }
      );

      // Update specific variant query
      queryClient.setQueryData(["variant", updatedVariant.id], updatedVariant);

      // Update baseProduct query if the variant's baseProductId changed
      queryClient.setQueriesData(
        { queryKey: ["baseProduct", updatedVariant.baseProductId] },
        (old: BaseProduct | undefined) => {
          if (!old) return old;
          return {
            ...old,
            variants: old.variants
              ? old.variants.map((variant) =>
                  variant.id === updatedVariant.id ? updatedVariant : variant
                )
              : old.variants,
          };
        }
      );
    },
  });
}

export function useDeleteVariant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteVariant,
    onMutate: async (id) => {
      // Get the variant before deleting it
      const variant = queryClient.getQueryData([
        "variant",
        id,
      ]) as ProductVariant;
      return { variant };
    },
    onSuccess: (_, id, context) => {
      const variant = context?.variant;

      if (variant) {
        // Update variants queries
        queryClient.setQueriesData(
          { queryKey: ["variants"] },
          (old: ApiResponse<ProductVariant> | undefined) => {
            if (!old) return old;
            return {
              ...old,
              data: old.data.filter((v) => v.id !== id),
              meta: {
                ...old.meta,
                total: old.meta.total - 1,
              },
            };
          }
        );

        // Update infiniteVariants queries
        queryClient.setQueriesData(
          { queryKey: ["infiniteVariants"] },
          (old: any) => {
            if (!old || !old.pages) return old;
            return {
              ...old,
              pages: old.pages.map((page: any) => ({
                ...page,
                data: page.data.filter((v: ProductVariant) => v.id !== id),
                meta: {
                  ...page.meta,
                  total: page.meta.total - 1,
                },
              })),
            };
          }
        );

        // Remove the specific variant query
        queryClient.removeQueries({ queryKey: ["variant", id] });

        // Update baseProduct query to remove the variant
        if (variant.baseProductId) {
          queryClient.setQueriesData(
            { queryKey: ["baseProduct", variant.baseProductId] },
            (old: BaseProduct | undefined) => {
              if (!old) return old;
              return {
                ...old,
                variants: old.variants
                  ? old.variants.filter((v) => v.id !== id)
                  : old.variants,
              };
            }
          );
        }

        // Invalidate priceReports queries related to this variant
        queryClient.invalidateQueries({
          queryKey: ["priceReports", { variantId: id }],
        });
        queryClient.invalidateQueries({
          queryKey: ["infinitePriceReports", { variantId: id }],
        });
      } else {
        // If we couldn't get the variant context, fall back to invalidating queries
        queryClient.invalidateQueries({ queryKey: ["variants"] });
        queryClient.invalidateQueries({ queryKey: ["infiniteVariants"] });
      }
    },
  });
}

export function usePriceReports(filters: PriceReportFilters = {}) {
  return useQuery<ApiResponse<PriceReport>, Error>({
    queryKey: ["priceReports", filters],
    queryFn: () => fetchPriceReports(filters),
  });
}

export function usePriceReport(id: string) {
  return useQuery<SingleApiResponse<PriceReport>, Error>({
    queryKey: ["priceReport", id],
    queryFn: () => fetchPriceReport(id),
    enabled: !!id,
  });
}

export function useCreatePriceReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPriceReport,
    onSuccess: (newPriceReport) => {
      // Update priceReports queries
      queryClient.setQueriesData(
        { queryKey: ["priceReports"] },
        (old: ApiResponse<PriceReport> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: [newPriceReport, ...old.data],
            meta: {
              ...old.meta,
              total: old.meta.total + 1,
            },
          };
        }
      );

      // Update infinitePriceReports queries
      queryClient.setQueriesData(
        { queryKey: ["infinitePriceReports"] },
        (old: any) => {
          if (!old) return old;
          // Add to the first page if it exists
          if (old.pages && old.pages.length > 0) {
            const firstPage = old.pages[0];
            return {
              ...old,
              pages: [
                {
                  ...firstPage,
                  data: [newPriceReport, ...firstPage.data],
                  meta: {
                    ...firstPage.meta,
                    total: firstPage.meta.total + 1,
                  },
                },
                ...old.pages.slice(1),
              ],
            };
          }
          return old;
        }
      );

      // Update variant query to include the latest price report
      queryClient.setQueriesData(
        { queryKey: ["variant", newPriceReport.variantId] },
        (old: ProductVariant | undefined) => {
          if (!old) return old;
          return {
            ...old,
            latestPriceReport: newPriceReport,
            priceReports: old.priceReports
              ? [newPriceReport, ...old.priceReports]
              : [newPriceReport],
          };
        }
      );

      // Update latestPriceReports queries
      queryClient.setQueriesData(
        { queryKey: ["latestPriceReports"] },
        (old: { data: PriceReport[] } | undefined) => {
          if (!old) return old;
          // Replace the price report for this variant if it exists
          const existingIndex = old.data.findIndex(
            (pr) => pr.variantId === newPriceReport.variantId
          );
          if (existingIndex >= 0) {
            return {
              ...old,
              data: [
                ...old.data.slice(0, existingIndex),
                newPriceReport,
                ...old.data.slice(existingIndex + 1),
              ],
            };
          } else {
            // Add the new price report
            return {
              ...old,
              data: [...old.data, newPriceReport],
            };
          }
        }
      );
    },
  });
}

export function useUpdatePriceReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updatePriceReport(id, data),
    onSuccess: (updatedPriceReport) => {
      // Update priceReports queries
      queryClient.setQueriesData(
        { queryKey: ["priceReports"] },
        (old: ApiResponse<PriceReport> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: old.data.map((pr) =>
              pr.id === updatedPriceReport.id ? updatedPriceReport : pr
            ),
          };
        }
      );

      // Update infinitePriceReports queries
      queryClient.setQueriesData(
        { queryKey: ["infinitePriceReports"] },
        (old: any) => {
          if (!old || !old.pages) return old;
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              data: page.data.map((pr: PriceReport) =>
                pr.id === updatedPriceReport.id ? updatedPriceReport : pr
              ),
            })),
          };
        }
      );

      // Update specific priceReport query
      queryClient.setQueryData(
        ["priceReport", updatedPriceReport.id],
        updatedPriceReport
      );

      // Update variant query if this is the latest price report
      queryClient.setQueriesData(
        { queryKey: ["variant", updatedPriceReport.variantId] },
        (old: ProductVariant | undefined) => {
          if (!old) return old;
          // Check if this is the latest price report
          const isLatest = old.latestPriceReport?.id === updatedPriceReport.id;
          return {
            ...old,
            latestPriceReport: isLatest
              ? updatedPriceReport
              : old.latestPriceReport,
            priceReports: old.priceReports
              ? old.priceReports.map((pr) =>
                  pr.id === updatedPriceReport.id ? updatedPriceReport : pr
                )
              : old.priceReports,
          };
        }
      );

      // Update latestPriceReports queries
      queryClient.setQueriesData(
        { queryKey: ["latestPriceReports"] },
        (old: { data: PriceReport[] } | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: old.data.map((pr) =>
              pr.id === updatedPriceReport.id ? updatedPriceReport : pr
            ),
          };
        }
      );
    },
  });
}

export function useDeletePriceReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePriceReport,
    onMutate: async (id) => {
      // Get the price report before deleting it
      const priceReport = queryClient.getQueryData([
        "priceReport",
        id,
      ]) as PriceReport;
      return { priceReport };
    },
    onSuccess: (_, id, context) => {
      const priceReport = context?.priceReport;

      // Update priceReports queries
      queryClient.setQueriesData(
        { queryKey: ["priceReports"] },
        (old: ApiResponse<PriceReport> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: old.data.filter((pr) => pr.id !== id),
            meta: {
              ...old.meta,
              total: Math.max(0, old.meta.total - 1),
            },
          };
        }
      );

      // Update infinitePriceReports queries
      queryClient.setQueriesData(
        { queryKey: ["infinitePriceReports"] },
        (old: any) => {
          if (!old || !old.pages) return old;
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              data: page.data.filter((pr: PriceReport) => pr.id !== id),
              meta: {
                ...page.meta,
                total: Math.max(0, page.meta.total - 1),
              },
            })),
          };
        }
      );

      // Remove specific priceReport query
      queryClient.removeQueries({ queryKey: ["priceReport", id] });

      // If we have the price report context, update the variant
      if (priceReport) {
        // Update variant query
        queryClient.setQueriesData(
          { queryKey: ["variant", priceReport.variantId] },
          (old: ProductVariant | undefined) => {
            if (!old) return old;
            // Check if this was the latest price report
            const wasLatest = old.latestPriceReport?.id === id;
            // Get the next latest price report if needed
            let newLatest = old.latestPriceReport;
            if (wasLatest && old.priceReports && old.priceReports.length > 1) {
              // Find the next latest price report (excluding the one being deleted)
              newLatest = old.priceReports
                .filter((pr) => pr.id !== id)
                .sort(
                  (a, b) =>
                    new Date(b.reportedAt).getTime() -
                    new Date(a.reportedAt).getTime()
                )[0];
            } else if (wasLatest) {
              newLatest = undefined;
            }

            return {
              ...old,
              latestPriceReport: wasLatest ? newLatest : old.latestPriceReport,
              priceReports: old.priceReports
                ? old.priceReports.filter((pr) => pr.id !== id)
                : old.priceReports,
            };
          }
        );

        // Update latestPriceReports queries
        queryClient.setQueriesData(
          { queryKey: ["latestPriceReports"] },
          (old: { data: PriceReport[] } | undefined) => {
            if (!old) return old;
            return {
              ...old,
              data: old.data.filter((pr) => pr.id !== id),
            };
          }
        );
      }
    },
  });
}

// Infinite Query Hooks
export function useInfiniteBaseProducts(
  filters: Omit<BaseProductFilters, "page"> = {}
) {
  return useInfiniteQuery<ApiResponse<BaseProduct>, Error>({
    queryKey: ["infiniteBaseProducts", filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchBaseProducts({ ...filters, page: Number(pageParam) }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.page >= lastPage.meta.pageCount) {
        return undefined;
      }
      return lastPage.meta.page + 1;
    },
  });
}

export function useInfiniteVariants(
  filters: Omit<VariantFilters, "page"> = {}
) {
  return useInfiniteQuery({
    queryKey: ["infiniteVariants", filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchVariants({ ...filters, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.page >= lastPage.meta.pageCount) {
        return undefined;
      }
      return lastPage.meta.page + 1;
    },
  });
}

export function useInfinitePriceReports(
  filters: Omit<PriceReportFilters, "page"> = {}
) {
  return useInfiniteQuery({
    queryKey: ["infinitePriceReports", filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchPriceReports({ ...filters, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.page >= lastPage.meta.pageCount) {
        return undefined;
      }
      return lastPage.meta.page + 1;
    },
  });
}

// Add this function with the other fetch functions
async function fetchLatestPriceReports(params: {
  variantIds?: string[];
  baseProductId?: string;
}) {
  const searchParams = new URLSearchParams();

  if (params.variantIds && params.variantIds.length > 0) {
    searchParams.append("variantIds", params.variantIds.join(","));
  }

  if (params.baseProductId) {
    searchParams.append("baseProductId", params.baseProductId);
  }

  const response = await fetch(
    `/api/price-reports/latest?${searchParams.toString()}`
  );
  if (!response.ok) throw new Error("Failed to fetch latest price reports");
  return response.json();
}

// Add this hook with the other hooks (it's already there, but let's make sure it's being used)
export function useLatestPriceReports(
  params: { variantIds?: string[]; baseProductId?: string } = {}
) {
  return useQuery<{ data: PriceReport[] }, Error>({
    queryKey: ["latestPriceReports", params],
    queryFn: () => fetchLatestPriceReports(params),
  });
}
