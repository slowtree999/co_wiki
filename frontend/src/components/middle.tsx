
// 메인페이지에 선택하면 나올 텍스트박스

// MiddleBox.tsx
import React from 'react';
//import './MiddleBox.css';   스타일링을 위한 별도의 CSS 파일을 생성할 수 있습니다.

const Middle: React.FC = () => {
  return (
    <div className="middle-box">
      {/* 여기에 내용을 추가하세요 */}
      <p>JavaScript 내용을 여기에 추가하세요</p>
    </div>
  );
};

export default Middle;
