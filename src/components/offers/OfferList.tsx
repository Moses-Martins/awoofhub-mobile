import { Offer } from '@/types/offer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import OfferCard from './OfferCard';

interface Props {
  offers: Offer[];
}

export default function OfferList({ offers }: Props) {

  return (
    <View style={styles.products}>
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} />
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
});