import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon, { IconsFeather } from '../../src/index';

export default function App() {
  const data = Array.from(IconsFeather);

  const renderItem = ({ item }: { item: [string, unknown] }) => {
    const [name] = item;
    return (
      <View style={styles.item}>
        <Text>{name}</Text>
        <Icon nameFont="feather" nameIcon={name} size={24} color="white" />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={([name]) => name}
      renderItem={renderItem}
      numColumns={7}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
  },
});
