import React, {useMemo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import images from '../../assets/images';
import {AllBikes, Bike} from '../../types/bikes';
import {InfoBikes} from '../views';
import {MAPBOX_PRIVATE_KEY} from 'react-native-dotenv';

MapboxGL.setAccessToken(MAPBOX_PRIVATE_KEY);

interface Props {
  allBikes?: AllBikes;
  onActionOnBike: (
    id: string,
    action: 'connection' | 'lock' | 'unlock' | 'disconnection',
  ) => void;
}

export default function HomeOrganism({allBikes, onActionOnBike}: Props) {
  const [selectedBikes, setselectedBikes] = useState<string>();

  const bike: Bike | undefined = useMemo(
    () =>
      selectedBikes && allBikes && allBikes.bikes
        ? allBikes.bikes.find(el => el.id === selectedBikes)
        : undefined,
    [selectedBikes, allBikes],
  );

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.UserLocation />
          <MapboxGL.Camera zoomLevel={1} followUserLocation />

          {allBikes &&
            allBikes.bikes &&
            allBikes.bikes.map(oneBike => (
              <MapboxGL.MarkerView
                key={oneBike.id}
                id={oneBike.id}
                coordinate={oneBike.coordinates}>
                <TouchableOpacity
                  onPress={() => {
                    setselectedBikes(oneBike.id);
                  }}>
                  <Image
                    style={styles.iconPin}
                    source={
                      oneBike.service_status === 1
                        ? images.freeBike
                        : images.bike
                    }
                  />
                </TouchableOpacity>
              </MapboxGL.MarkerView>
            ))}
        </MapboxGL.MapView>
      </View>
      {bike && (
        <InfoBikes
          bike={bike}
          onClose={() => setselectedBikes(undefined)}
          onActionOnBike={onActionOnBike}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  iconPin: {
    height: 50,
    width: 50,
  },
});
