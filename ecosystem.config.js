module.exports = {
    /**
     * 앱 설정
     */
    apps: [
      {
        name: 'Withyou',
        script: './src/server.js', // 앱 실행 스크립트
        instances: 4, // 앱 인스턴스의 수
        exec_mode: 'cluster', // 실행 모드.
        env: { // 환경변수. 모든 배포 환경에서 공통으로 사용한다.
          NODE_ENV: 'production',
        },
        env_staging: { // staging 배포 환경에서만 사용할 환경 변수
          API_ROOT: 'http://api.server.name'
        }
      },
    ]}