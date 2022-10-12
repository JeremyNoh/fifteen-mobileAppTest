import React, {useEffect, useState} from 'react';
import bikeService from '../../api/bikeService';
import {AllBikes, Bike} from '../../types/bikes';
import {HomeOrganism} from '../organisms';
import Toast from 'react-native-toast-message';

interface Props {}

export default function HomeContainer({}: Props) {
  const [allBikes, setallBikes] = useState<AllBikes>();

  useEffect(() => {
    getAllBikes();
  }, []);

  const getAllBikes = async () => {
    const data = await bikeService.getAllBikes();
    if (data.succes) {
      //  L'api renvoi les coordinates à l'envers
      const reverseCordinatesBikes: AllBikes = {
        ...data.data,
        bikes: data.data.bikes.map((el: Bike) => ({
          ...el,
          coordinates: el.coordinates.reverse() as [number, number],
        })),
      };
      setallBikes(reverseCordinatesBikes);
    }
  };

  const onActionOnBike = (
    id: string,
    action: 'connection' | 'lock' | 'unlock' | 'disconnection',
  ) => {
    console.log('id', id);

    Toast.show({
      type: 'success',
      text1: `${action} au Vélo`,
      text2: `Super Vous êtes ${action} au vélo`,
    });

    // se connecter au SDK pour effectuer les actions

    /**
     * Personnellement les SDK ne sont pas bien documentés
     * Je ne trouve pas normal qu'on soit obligé d'aller dans les exemples pour voir les paramêtres de fonctions...
     * le Principe d'un SDK c'est d'avoir l'ensemble des outils pour utiliser les fonctions or ce n'est pas le cas dans les votres.
     **/
  };

  return <HomeOrganism onActionOnBike={onActionOnBike} allBikes={allBikes} />;
}
