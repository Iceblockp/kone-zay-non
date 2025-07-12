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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["baseProducts"] });
    },
  });
}

export function useUpdateBaseProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateBaseProduct(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["baseProducts"] });
      queryClient.invalidateQueries({ queryKey: ["baseProduct", data.id] });
    },
  });
}

export function useDeleteBaseProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBaseProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["baseProducts"] });
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
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["variants"] });
      queryClient.invalidateQueries({
        queryKey: ["baseProduct", data.baseProductId],
      });
    },
  });
}

export function useUpdateVariant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateVariant(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["variants"] });
      queryClient.invalidateQueries({ queryKey: ["variant", data.id] });
      queryClient.invalidateQueries({
        queryKey: ["baseProduct", data.baseProductId],
      });
    },
  });
}

export function useDeleteVariant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteVariant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["variants"] });
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
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["priceReports"] });
      queryClient.invalidateQueries({ queryKey: ["variant", data.variantId] });
    },
  });
}

export function useUpdatePriceReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updatePriceReport(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["priceReports"] });
      queryClient.invalidateQueries({ queryKey: ["priceReport", data.id] });
      queryClient.invalidateQueries({ queryKey: ["variant", data.variantId] });
    },
  });
}

export function useDeletePriceReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePriceReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["priceReports"] });
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
