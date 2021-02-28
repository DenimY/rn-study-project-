# rn-study-project-

react-navtive-app 

1. 시작하기 

/src/frontend
<br>
yarn update
<br>
yarn install 

-> react-native run-ios

2. 에러 발생 

65 error 발생
</br>
xocde 버전 통일 & 
</br>
=>
{
use_flipper!
    post_install do |installer|
    flipper_post_install(installer)
end
}
<br>
 해당 부분 주석 처리 -> cd ios && pod install 

