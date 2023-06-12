import Navbar from "../components/Navbar";
import Projectbox from "../components/Projectbox";
import CreateProjectBox from "../components/CreateProjectBox";
import React from 'react';

function main() {

  return (
    <div>
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

export default main;
