import {colors} from '@/constans';
import {MarkerColor} from '@/types/domain';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LatLng, MapMarkerProps, Marker} from 'react-native-maps';

interface CustomMakerProps extends MapMarkerProps {
  coordinate: LatLng;
  color: MarkerColor;
}

const CustomMaker = ({coordinate, ...props}: CustomMakerProps) => {
  return (
    <Marker coordinate={coordinate} {...props}>
      <View style={styles.container}>
        <View
          style={[styles.marker, {backgroundColor: colorHex[color]}]}></View>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 32,
    alignItems: 'center',
  },
  marker: {
    width: 27,
    height: 27,
    borderRadius: 27,
    borderBottomRightRadius: 1,
    borderWidth: 1,
    borderColor: colors.BLACK,
  },
});

export default CustomMaker;
