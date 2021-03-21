# rn-study-project-

react-navtive-app

# 1. Start

/src/frontend
<br>
yarn update
<br>
yarn install

-> react-native run-ios

# 2. Error

- 65 error 발생
- 해결방법 :
    - xocde 버전 통일
    - 아래 코드 주석 처 
      
        
    use_flipper!
        post_install do
        installer
        flipper_post_install(installer)
    end
    # 해당 부분 주석 처리 
    # -> cd ios && pod install

# 3. ETC

# References

go tcp chatting repo url<br>
-> https://github.com/Seseong-Jang/simple_go_tcp_chat

RN Airbnb clone coding <br>
-> https://github.com/imandyie/react-native-airbnb-clone


