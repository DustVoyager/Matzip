import {useEffect} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

function usePermission() {
  useEffect(() => {
    (async () => {
      const permissonOS =
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
          : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

      const checked = await check(permissonOS);
      console.log('checked', checked);

      switch (checked) {
        case RESULTS.BLOCKED:
        case RESULTS.LIMITED:
          Alert.alert(
            '위치 권한 허용이 필요합니다.',
            '설정 화면에서 위치 권한을 허용해주세요.',
            [
              {
                text: '설정하기',
                onPress: () => Linking.openSettings(),
              },
              {
                text: '취소',
                style: 'cancel',
              },
            ],
          );
      }
    })();
  }, []);
}

export default usePermission;
