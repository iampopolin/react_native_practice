# React_Native0.57.8
## Genymotion  react-native init --version 0.57.8 projectname
* * * 
  cd project -> react-native start
  cd project -> react-native run-android
* * *
#### 屬性傳遞
  cd project/test2
  react-native start
  
  cd project/test2
  react-native run-android
* * *
#### 登入介面
  cd project/login2
  react-native start
  
  cd project/login2
  react-native run-android
  
  使用了 react-native-vector-icons方法(如果透明的話)
  
  1.
  Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
  
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  
  2.
  react-native link
* * *
#### 滾輪&對不同裝置調整圖片大小
  cd project/scroll2
  react-native start
  
  cd project/scroll2
  react-native run-android
* * *
#### 滾動式和引用.json
  cd project/flash2
  react-native start
  
  cd project/flash2
  react-native run-android
  
  使用了maxs15 / react-native-modalbox , react-native-vector-icons, dancormier / react - native - swipeout , APSL/react-native-button
  備註 : 只有flash2在AddModal才會往最底層 (flash3因為切割了模組 程式碼更改 所以新增時不會自動往最底層)
  flash4為橫向展現
* * *
#### (後台交互)啟用json-server (需用 --watch db.json)
  cd project/demo2
  json-server --watch db.json
  
  cd project/demo2
  react-native start
  
  cd project/demo2
  react-native run-android
  
  
  下載jhen0409 / react-native-debugger  (window version
  然後用remotely js debugging
  
  使用Genymotion發現沒辦法正常顯示FlatList項目，即使json是在http://localhost:3000/.......
  在使用fetch時，也要改成符合Genymotion的模擬器IP -> fetch('http://10.0.3.2:3000/.......')
* * *
#### react-navigation  (使用 npm install react-navigation@2.18.2)
  cd project/nav1
  react-native start
  
  cd project/nav1
  react-native run-android  
  
  在nav2中 ，又因為[定義state]緣故，
  所以記得使用的是 *this.* props.navigation來處理路由跳轉又或著傳遞參數
  
  在nav3中 
  [在MainStack的headerMode: 'none'] :  把這一層的所有標題都去除掉，包含 RootStack 的navigationOptions的title資訊 ，但是RootStack里各個底下的
  HomeScreen.navigationOptions，SettingsScreen.navigationOption，DetailScreen.navigationOptions仍然有效果。
  MainStack底下放 主要節點 以及 分支節點 ，他們各有自己的首頁
* * *
## 綜合練習
  cd project/instances
  json-server --watch db.json
  
  cd project/instances
  react-native start
  
  cd project/instances
  react-native run-android
  
  使用react-native 0.57.8版本 ，npm install react-navigation@2.18.2 ，npm install native-base，
  使用了maxs15 / react-native-modalbox , react-native-vector-icons(請看github安裝教學), dancormier / react - native - swipeout , APSL/react-native-button
  在BasicFlatList中，考慮到上方的icon要左右對稱，原來的布局必須要修改
  BasicFlatList並沒有this.props.navigation 所以要從 原來引用他的原件那裏傳遞 this.props.navigation參數
* * *
試作品

![image](https://github.com/B0544218/react_native_practice/blob/master/react_native/gif%E7%B6%9C%E5%90%88%E5%AF%A6%E4%BE%8B.gif)

* * *
### FireBase

npm install firebase

注意! 

import firebase from '@firebase/app';

import '@firebase/database';

import '@firebase/auth';

import '@firebase/storage';

然後在firebase上 點擊專案設定來到Database底下

如果上方Database旁邊顯示 Cloud Firestore 點擊他 將他選為Realtime Database
  
