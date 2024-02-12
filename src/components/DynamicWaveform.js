// DynamicWaveform.js
import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';

const DynamicWaveform = ({ isRecording, barCount = 25, duration = 500 }) => {
  const [barAnimations, setBarAnimations] = useState([]);
  Array(barCount).fill(null).map(() => new Animated.Value(0))

  useEffect(() => {
    setBarAnimations(
      Array.from({ length: barCount }, () => new Animated.Value(1.5))
    );
  }, [barCount]);

  useEffect(() => {
    if (isRecording) {
      const animations = barAnimations.map(bar => {
        return Animated.loop(
          Animated.sequence([
            Animated.timing(bar, {
              toValue: 1,
              duration: duration / 2,
              useNativeDriver: true
            }),
            Animated.timing(bar, {
              toValue: -1,
              duration: duration / 2,
              useNativeDriver: true
            })
          ])
        );
      });

      Animated.parallel(animations).start();
    } else {
      barAnimations.forEach(bar => bar.setValue(1.5));
    }
  }, [isRecording, barAnimations, duration]);

  return (
    <View style={{ flexDirection: 'row', height: 0, alignItems: 'center' }}>
      {barAnimations.map((value, index) => (
        <Animated.View
          key={index}
          style={{
            backgroundColor: 'white',
            width: 10,
            marginRight: 1,
            height: 20,
            transform: [
              { 
                scaleY: value.interpolate({
                  inputRange: [-1, 1, 1.5],
                  outputRange: [0.2, 1, 0.1]
                }) 
              }
            ]
          }}
        />
      ))}
    </View>
  );
};

export default DynamicWaveform;
