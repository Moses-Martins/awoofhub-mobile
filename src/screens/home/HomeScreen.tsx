import OfferInfiniteList from '@/components/offers/OfferInfiniteList';
import OfferListSkeleton from '@/components/offers/OfferListSkeleton';

import { useRandomInfiniteOffers } from '@/features/offers/useRandomInfiniteOffers';
import React, { useMemo } from 'react';
import { View } from 'react-native';

export default function HomeScreen() {

  const { data, isFetching, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useRandomInfiniteOffers({
    limit: 8,
  });

  const allOffers = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) ?? [];
  }, [data]);


  return (
    <View className="">
      
      {isLoading && <OfferListSkeleton number={8} />}
      {!isLoading && !isFetching && allOffers.length === 0 && (
        <p className="text-gray-500 text-center">No offers available.</p>
      )}
      {isError && <div>{error?.message}</div>}
      {!isLoading && allOffers.length > 0 &&
        <OfferInfiniteList
          offers={allOffers}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      }
    </View>
  );
};

