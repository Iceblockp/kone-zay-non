"use client";

import {
  useInfiniteBaseProducts,
  useInfiniteVariants,
  useInfinitePriceReports,
} from "./use-api";
import { useCallback, useMemo } from "react";
import type { BaseProduct, ProductVariant, PriceReport } from "@/types/product";

export function useHomeData(searchTerm: string = "") {
  // Fetch base products with infinite query
  const baseProductsQuery = useInfiniteBaseProducts({
    search: searchTerm || undefined,
    limit: 20,
  });

  // Fetch variants with infinite query
  const variantsQuery = useInfiniteVariants({
    search: searchTerm || undefined,
    limit: 50,
  });

  // Fetch price reports with infinite query
  const priceReportsQuery = useInfinitePriceReports({
    limit: 100,
  });

  // Combine data from all pages
  const baseProducts = useMemo(() => {
    if (!baseProductsQuery.data) return [];
    return baseProductsQuery.data.pages.flatMap((page) => page.data);
  }, [baseProductsQuery.data]);

  const productVariants = useMemo(() => {
    if (!variantsQuery.data) return [];
    return variantsQuery.data.pages.flatMap((page) => page.data);
  }, [variantsQuery.data]);

  const priceReports = useMemo(() => {
    if (!priceReportsQuery.data) return [];
    return priceReportsQuery.data.pages.flatMap((page) => page.data);
  }, [priceReportsQuery.data]);

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
      const variantMatch = productVariants.some(
        (variant) =>
          variant.baseProductId === product.id &&
          variant.barcode?.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return nameMatch || categoryMatch || variantMatch;
    });
  }, [baseProducts, productVariants, searchTerm]);

  // Get the latest price report for a base product
  const getLatestPriceForBaseProduct = useCallback(
    (baseProductId: string) => {
      // Find all variants for this base product
      const variants = productVariants.filter(
        (v) => v.baseProductId === baseProductId
      );
      const variantIds = variants.map((v) => v.id);

      // Find all price reports for these variants
      const relevantPriceReports = priceReports.filter((report) =>
        variantIds.includes(report.variantId)
      );

      // Sort all relevant price reports by date to get the latest overall
      const sortedReports = relevantPriceReports.sort(
        (a, b) =>
          new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime()
      );

      // Return the latest report
      return sortedReports[0] || null;
    },
    [priceReports, productVariants]
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
  const isLoading =
    baseProductsQuery.isLoading ||
    variantsQuery.isLoading ||
    priceReportsQuery.isLoading;
  const isError =
    baseProductsQuery.isError ||
    variantsQuery.isError ||
    priceReportsQuery.isError;
  const error =
    baseProductsQuery.error || variantsQuery.error || priceReportsQuery.error;

  // Load more data
  const loadMoreBaseProducts = useCallback(() => {
    if (
      baseProductsQuery.hasNextPage &&
      !baseProductsQuery.isFetchingNextPage
    ) {
      baseProductsQuery.fetchNextPage();
    }
  }, [baseProductsQuery]);

  const loadMoreVariants = useCallback(() => {
    if (variantsQuery.hasNextPage && !variantsQuery.isFetchingNextPage) {
      variantsQuery.fetchNextPage();
    }
  }, [variantsQuery]);

  const loadMorePriceReports = useCallback(() => {
    if (
      priceReportsQuery.hasNextPage &&
      !priceReportsQuery.isFetchingNextPage
    ) {
      priceReportsQuery.fetchNextPage();
    }
  }, [priceReportsQuery]);

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
    loadMoreVariants,
    loadMorePriceReports,
    isFetchingMoreBaseProducts: baseProductsQuery.isFetchingNextPage,
    isFetchingMoreVariants: variantsQuery.isFetchingNextPage,
    isFetchingMorePriceReports: priceReportsQuery.isFetchingNextPage,
    hasMoreBaseProducts: baseProductsQuery.hasNextPage,
    hasMoreVariants: variantsQuery.hasNextPage,
    hasMorePriceReports: priceReportsQuery.hasNextPage,
  };
}
