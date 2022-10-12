import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {Bike, StatusBikes} from '../../types/bikes';

interface Props {
  onClose: () => void;
  bike: Bike | undefined;
  onActionOnBike: (
    id: string,
    action: 'connection' | 'lock' | 'unlock' | 'disconnection',
  ) => void;
}

export default function InfoBikes({onClose, bike, onActionOnBike}: Props) {
  const openGps = () => {
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${bike?.coordinates[0]},${bike?.coordinates[1]}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.viewCloseIcon}>
        <TouchableOpacity onPress={onClose}>
          <Image style={styles.closeIcon} source={images.close} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>
          État du Vélo :{' '}
          {bike && bike.service_status
            ? StatusBikes[bike.service_status]
            : StatusBikes[0]}
        </Text>
        <Text style={styles.title}> Batterie : {bike?.battery_level}%</Text>
      </View>

      <TouchableOpacity style={styles.letsDriveView} onPress={openGps}>
        <Text style={styles.letsDriveText}>Me rendre à ce Velo</Text>
        <Image style={styles.mapsIcon} source={images.maps} />
      </TouchableOpacity>

      <View style={styles.actionView}>
        <TouchableOpacity
          style={styles.buttonActionView}
          onPress={() => onActionOnBike(bike?.id!, 'connection')}>
          <Image style={styles.actionIcon} source={images.connection} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonActionView}
          onPress={() => onActionOnBike(bike?.id!, 'unlock')}>
          <Image style={styles.actionIcon} source={images.unlock} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonActionView}
          onPress={() => onActionOnBike(bike?.id!, 'lock')}>
          <Image style={styles.actionIcon} source={images.lock} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonActionView}
          onPress={() => onActionOnBike(bike?.id!, 'disconnection')}>
          <Image style={styles.actionIcon} source={images.disconnect} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(1, 29, 47, 0.90)',
    bottom: 0,
    left: 0,
    height: 250,
    width: '100%',
  },
  viewCloseIcon: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginRight: 4,
  },
  closeIcon: {
    height: 40,
    width: 40,
    tintColor: '#fff',
  },
  viewTitle: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
  },
  letsDriveView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4498d5',
    width: 250,
    borderRadius: 12,
    alignSelf: 'center',
    marginVertical: 5,
  },
  letsDriveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mapsIcon: {
    height: 40,
    width: 40,
  },
  actionView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttonActionView: {
    height: 55,
    width: 55,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    height: 30,
    width: 30,
  },
});
