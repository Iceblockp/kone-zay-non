"use client";

import { useInfiniteBaseProducts } from "./use-api";
import { useCallback, useMemo } from "react";
import type { BaseProduct, ProductVariant, PriceReport } from "@/types/product";

export function useHomeData(searchTerm: string = "") {
  // Fetch base products with infinite query (includes variants with latest price reports)
  const baseProductsQuery = useInfiniteBaseProducts({
    search: searchTerm || undefined,
    limit: 20,
  });

  // Combine data from all pages
  const baseProducts = useMemo(() => {
    if (!baseProductsQuery.data) return [];
    return baseProductsQuery.data.pages.flatMap((page) => page.data);
  }, [baseProductsQuery.data]);

  // Extract variants from base products
  const productVariants = useMemo(() => {
    if (!baseProducts.length) return [];
    return baseProducts.flatMap((product) => product.variants || []);
  }, [baseProducts]);

  // Extract price reports from variants
  const priceReports = useMemo(() => {
    if (!productVariants.length) return [];
    return productVariants
      .map((variant) => variant.latestPriceReport)
      .filter((report): report is PriceReport => report !== null);
  }, [productVariants]);

  // Filter base products by search term
  const filteredBaseProducts = useMemo(() => {
    if (!searchTerm) return baseProducts;

    return baseProducts.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryMatch = product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Check if any variant of this product has a matching barcode
      const variantMatch =
        product.variants?.some((variant) =>
          variant.barcode?.toLowerCase().includes(searchTerm.toLowerCase())
        ) || false;

      return nameMatch || categoryMatch || variantMatch;
    });
  }, [baseProducts, searchTerm]);

  // Get the latest price report for a base product
  const getLatestPriceForBaseProduct = useCallback(
    (baseProductId: string) => {
      // Find all variants for this base product
      const variants = productVariants.filter(
        (v) => v.baseProductId === baseProductId
      );

      // Find the latest price report among all variants
      let latestReport: PriceReport | null = null;
      let latestDate = new Date(0);

      for (const variant of variants) {
        if (variant.latestPriceReport) {
          const reportDate = new Date(variant.latestPriceReport.reportedAt);
          if (reportDate > latestDate) {
            latestDate = reportDate;
            latestReport = variant.latestPriceReport;
          }
        }
      }

      return latestReport;
    },
    [productVariants]
  );

  // Get recent base products
  const getRecentBaseProducts = useCallback(() => {
    return baseProducts
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 10);
  }, [baseProducts]);

  // Loading and error states
  const isLoading = baseProductsQuery.isLoading;
  const isError = baseProductsQuery.isError;
  const error = baseProductsQuery.error;

  // Load more data
  const loadMoreBaseProducts = useCallback(() => {
    if (
      baseProductsQuery.hasNextPage &&
      !baseProductsQuery.isFetchingNextPage
    ) {
      baseProductsQuery.fetchNextPage();
    }
  }, [baseProductsQuery]);

  return {
    baseProducts,
    productVariants,
    priceReports,
    filteredBaseProducts,
    getLatestPriceForBaseProduct,
    getRecentBaseProducts,
    isLoading,
    isError,
    error,
    loadMoreBaseProducts,
    isFetchingMoreBaseProducts: baseProductsQuery.isFetchingNextPage,
    hasMoreBaseProducts: baseProductsQuery.hasNextPage,
  };
}
