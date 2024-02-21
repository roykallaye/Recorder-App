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



// do a scaleFont, scaleSize, etc functions in a file to call here
// const scaleSize = (size) => size * (width / 375);
// const scaleFont = (size) => size * (width / 375);
// etc.
// call: fontSize: scaleFont(GlobalStyles.headerTextFontSize)
// ... ensure usage on all screens