import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { TextStyles } from './TextStyles';
import { LayoutStyles } from './LayoutStyles';
import { IconStyles } from './IconStyles';
import { GeneralStyles } from './GeneralStyles';

export const GlobalStyles = StyleSheet.create({
  ...Colors,
  ...TextStyles,
  ...LayoutStyles,
  ...IconStyles,
  ...GeneralStyles,
});

export default GlobalStyles;
