import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas'; // 라이브러리 import
import './Styles/style.css';

function App(): JSX.Element {
  // useRef로 DOM에 접근 (SignatureCanvas 라는 캔버스 태그에 접근)
  const signCanvas = useRef() as React.MutableRefObject<any>;
  const [img, setImg] = useState('');

  // 캔버스 지우기
  const clear = () => {
    signCanvas.current.clear();
  };

  // 이미지 저장
  const save = () => {
    const image = signCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'sign_image.png';
    link.click();
    setImg(image);
  };

  console.log(img);

  return (
    <>
      <div className="container">
        <div className="canvasContainer">
          <SignatureCanvas // canvas element
            ref={signCanvas}
            canvasProps={{ className: 'sigCanvas canvasStyle' }}
            backgroundColor="#fff"
            penColor="#000"
          />
        </div>
        <button onClick={clear}>clear</button>
        <button onClick={save}>save</button>
        <img src={img} alt="dd" className="imgBox" />
      </div>
    </>
  );
}

export default App;
