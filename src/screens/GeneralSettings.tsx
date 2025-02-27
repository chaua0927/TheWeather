import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SettingsTabsParamList} from '../navigators/SettingsTabs';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type GeneralSettingsScreenNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<SettingsTabsParamList, 'GeneralSettings'>,
  CompositeNavigationProp<
    DrawerNavigationProp<MainDrawerParamList>,
    StackNavigationProp<RootStackParamList>
  >
>;
type Props = {
  navigation: GeneralSettingsScreenNavigationProp;
};

const GeneralSettings = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Settings!`}</Text>
      <Button
        onPress={() => navigation.navigate('AppearanceSettings')}
        title="Go to Appearance Settings"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GeneralSettings;
