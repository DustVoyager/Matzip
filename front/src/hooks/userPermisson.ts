import {useEffect} from 'react';
import {Platform} from 'react-native';
import {check, PERMISSIONS} from 'react-native-permissions';

function usePermission() {
  useEffect(() => {
    (async () => {
      const permissonOS =
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
          : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

      const checked = await check(permissonOS);
      console.log(checked);
    })();
  }, []);
}

export default usePermission;
