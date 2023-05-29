import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Projectbox from "../components/Projectbox";
import CreateProjectBox from "../components/CreateProjectBox";


function ScrollComponent() {
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 이벤트 처리 로직 작성
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        {/* 스크롤 가능한 컨텐츠 */}
        {/* 내비바 */}
        <Navbar />
        {/* 프로젝트 생성 박스 */}
        <CreateProjectBox />
        {/* 프로젝트 박스 */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <Projectbox key={index} />
        ))}
    </div>
  );
}

export default ScrollComponent;
