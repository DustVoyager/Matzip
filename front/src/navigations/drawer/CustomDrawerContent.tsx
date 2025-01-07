import {colors} from '@/constans';
import useAuth from '@/hooks/queries/useAuth';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {getProfileQuery} = useAuth();
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainer}></DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.WHITE,
  },
});

export default CustomDrawerContent;
