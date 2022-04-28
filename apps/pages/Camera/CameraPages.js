
import React, { Component, useRef } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import styles from './CameraStyles';
import { useCameraDevices, Camera } from 'react-native-vision-camera';

const CameraPages = () => {

  const devices = useCameraDevices();
  const device = devices.back

  if (device == null) return <ActivityIndicator small />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      photo={true}
    />
  )

}

export default CameraPages;
