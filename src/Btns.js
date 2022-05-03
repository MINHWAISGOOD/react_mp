import {useState, useEffect} from 'react';

function Btns(props) {
  console.log('btns컴포넌트 호출');
  let [index, setIndex] = useState(0);
  
  const rotate = ()=>{
    props.wrap.current.style.transform = `rotate(${45 * index}deg)`
  }

  // 해당 컴포넌트가 생성시 한번만 호출
  useEffect(()=>{    
    rotate();
  }, [index]);

  return (
    <>
      <a href="#" className="prev" onClick={()=>{setIndex(++index)}}></a>
      <a href="#" className="next" onClick={()=>{setIndex(--index)}}></a> 
    </>
  )
}

export default Btns;

/*
- useRef : 가상돔요소를 참조하는 훅
- 변수 = useRef(null) -> current라는 키값을 품고 있는 빈객체 생성
- 참조하고 싶은 가상돔을 useRef로 생성한 객체를 참조

- useEffect : 컴포넌트의 생명주기에 따라 특정 구문을 호출할 수 있게 해주는 함수
- 컴포넌트가 생성시
- 컴포넌트의 정보값 변경시
- 컴포넌트가 소멸시
*/