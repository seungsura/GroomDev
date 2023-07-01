import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // 인증 여부를 확인하기 위한 API 호출
        const response = await fetch('http://gosu.digital:8080/api/check-authentication', {
          method: 'GET',
          credentials: 'include', // 쿠키 정보를 전송하기 위해 설정합니다.
        });

        if (response.ok) {
          // 인증된 사용자인 경우
          console.log('인증되었습니다.');
        } else {
          // 인증되지 않은 사용자인 경우 로그인 페이지로 리다이렉트
          console.log('인증되지 않았습니다.');
          router.push('/');
        }
      } catch (error) {
        console.error('인증 여부 확인 에러:', error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default Dashboard;
