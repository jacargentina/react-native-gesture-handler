import * as React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
  Swipeable,
  RectButton,
} from 'react-native-gesture-handler';
import { isFabric, isHermes } from './utils';
import { COLORS } from './colors';

interface GestureDetectorDemoProps {
  color: string;
}

export function GestureDetectorDemo({ color }: GestureDetectorDemoProps) {
  const gesture = Gesture.Pan()
    .onBegin(() => {
      console.log(window.performance.now(), 'onBegin');
    })
    .onStart(() => {
      console.log(window.performance.now(), 'onStart');
    })
    .onUpdate(() => {
      console.log(window.performance.now(), 'onUpdate');
    })
    .onEnd(() => {
      console.log(window.performance.now(), 'onEnd');
    })
    .onFinalize(() => {
      console.log(window.performance.now(), 'onFinalize');
    });

  return (
    <View style={styles.demo}>
      <Text style={styles.text}>Gesture.Pan</Text>
      <GestureDetector gesture={gesture}>
        <View style={[styles.box, { backgroundColor: color }]} />
      </GestureDetector>
    </View>
  );
}

interface ManualGestureDemoProps {
  color: string;
}

export function ManualGestureDemo({ color }: ManualGestureDemoProps) {
  const gesture = Gesture.Manual()
    .onTouchesDown(() => {
      console.log(window.performance.now(), 'onTouchesDown');
    })
    .onTouchesMove(() => {
      console.log(window.performance.now(), 'onTouchesMove');
    })
    .onTouchesUp(() => {
      console.log(window.performance.now(), 'onTouchesUp');
    });

  return (
    <View style={styles.demo}>
      <Text style={styles.text}>Gesture.Manual</Text>
      <GestureDetector gesture={gesture}>
        <View style={[styles.box, { backgroundColor: color }]} />
      </GestureDetector>
    </View>
  );
}

interface PanGestureHandlerDemoProps {
  color: string;
}

export function PanGestureHandlerDemo({ color }: PanGestureHandlerDemoProps) {
  const onGestureEvent = () => {
    console.log(window.performance.now(), 'onGestureEvent');
  };

  const onHandlerStateChange = () => {
    console.log(window.performance.now(), 'onHandlerStateChange');
  };

  return (
    <View style={styles.demo}>
      <Text style={styles.text}>PanGestureHandler</Text>
      <PanGestureHandler
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}>
        <View style={[styles.box, { backgroundColor: color }]} />
      </PanGestureHandler>
    </View>
  );
}

type AnimatedEventDemoProps = {
  useNativeDriver: boolean;
  color: string;
};

export function AnimatedEventDemo({
  useNativeDriver,
  color,
}: AnimatedEventDemoProps) {
  const drag = React.useRef(new Animated.Value(0));

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: drag.current } }],
    { useNativeDriver }
  );

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (
      event.nativeEvent.state === State.FAILED ||
      event.nativeEvent.state === State.CANCELLED ||
      event.nativeEvent.state === State.END
    ) {
      Animated.spring(drag.current, {
        velocity: event.nativeEvent.velocityX,
        tension: 10,
        friction: 2,
        toValue: 0,
        useNativeDriver,
      }).start();
    }
  };

  return (
    <View style={styles.demo}>
      <Text style={styles.text}>
        Animated.event useNativeDriver: {useNativeDriver.toString()}
      </Text>
      <PanGestureHandler
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [{ translateX: drag.current }],
              backgroundColor: color,
            },
          ]}
        />
      </PanGestureHandler>
    </View>
  );
}

const styles1 = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const SwipeableRightAction = (props: {
  text: string;
  color: string;
  x: number;
  progress: any;
}) => {
  const { text, color, x, progress } = props;
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [x, 0],
  });

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
      <RectButton style={[styles1.rightAction, { backgroundColor: color }]}>
        <Text style={styles1.actionText}>{text}</Text>
      </RectButton>
    </Animated.View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Hello from React Native Gesture Handler!</Text>
      <Text style={styles.bold}>
        This example app runs on {isHermes() ? 'Hermes' : 'JSC'} with Fabric{' '}
        {isFabric() ? 'enabled' : 'disabled'}.
      </Text>
      <Swipeable
        friction={2}
        rightThreshold={30}
        renderRightActions={(progress, dragX) => {
          return (
            <View style={{ width: 200, flexDirection: 'row' }}>
              <SwipeableRightAction
                color={'blue'}
                progress={progress}
                text="ACTION 1"
                x={200}
              />
              <SwipeableRightAction
                color={'red'}
                progress={progress}
                text="ACTION 2"
                x={100}
              />
            </View>
          );
        }}>
        <Text
          style={{
            padding: 5,
            backgroundColor: 'red',
            ...styles.text,
          }}>
          Swipe me to left
        </Text>
      </Swipeable>
      <GestureDetectorDemo color={COLORS.NAVY} />
      <ManualGestureDemo color={COLORS.KINDA_RED} />
      <PanGestureHandlerDemo color={COLORS.YELLOW} />
      <AnimatedEventDemo color={COLORS.KINDA_GREEN} useNativeDriver={true} />
      <AnimatedEventDemo color={COLORS.KINDA_BLUE} useNativeDriver={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 3,
  },
  demo: {
    marginVertical: 3,
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
});
