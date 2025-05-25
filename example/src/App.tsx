import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import IconsFeather from '../../src/index';

export default function App() {
  return (
    <View style={styles.container}>
      {Array.from(IconsFeather).map(([name, xml]) => (
        <View>
          <Text>{name}: </Text>
          <SvgXml xml={xml} width="24" height="24" />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
