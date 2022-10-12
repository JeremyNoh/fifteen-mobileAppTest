import React from 'react';
import {HomeScreen} from './components/screens';
import Toast from 'react-native-toast-message';

/**
 * Pour la suite, j'avais prévu d'utiliser une navigation ( nous allons faire au plus simple dans ce POC)
 *  https://reactnavigation.org/
 **/

export default function App() {
  return (
    <>
      <HomeScreen />
      <Toast />
    </>
  );
}
