module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // 이 플러그인은 반드시 맨 아래에 있어야 합니다.
  ],
};
