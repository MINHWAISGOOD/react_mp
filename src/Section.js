import Card from './Card';
import Btns from './Btns';
import { useRef } from 'react';
// import {useState} from 'react'; -> Btns.js

/*
- useRef는 특정 DOM을 직접적으로 제어하지 않고 제어할 대상을 미리 참조하기 위한 훅
순서1. const 변수명 = useRef(null) : current라는 키값을 가지고 있는 비어있는 객체가 생성
순서2. 해당 객체를 참조하고 싶은 가상DOM에 ref={객체}
순서3. 이렇게 참조된 객체는 추후 다른 컴포넌트에서 자유롭게 호출 가능

- useRef로 할당된 값을 설사 다른 state의 변경에 의해서 컴포넌트가 재랜더링 되더라도 값이 사라지지 않는다
- useRef로 할당된 값은 해당값이 변경되더라도 컴포넌트를 재호출 하지 않는다

- document.querySelector로 DOM을 탐색하면 안되는 이유
- 리액트는 실제 DOM을 직접적으로 변경하는 것이 아닌 가상돔을 메모리상에서 state값에 따라 상태관리를 함
- querySelector로 탐색을 하면 메모리상에서 가상돔을 제어하는 것이 아닌 실제 리얼돔을 제어하므로 브라우저 리소스 낭비
- 마찬가지로 querySelector로 찾은 DOM을 변수에 할당하면 state 변경에 의해 해당 컴포넌트가 재랜더링시 메모리와 탐색된 돔이 초기화 되므로 다시 탐색, 변수할당의 프로세스가 반복됨
- 반면 useRef로 메모리상에 참조되어 있는 가상돔은 해당 컴포넌트 함수가 재랜더링되더라도 값을 그대로 계속 유지
*/

// public에 있는 img를 불러오기 위해 지정한 path
const path = process.env.PUBLIC_URL;

function Section() {
	const wrap = useRef(null);
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];
	const num = arr.length;

	/*
  - useState 훅은 배열을 리턴
  - 첫번째 배열값 : 앞으로 변경이 일어날 state값
  - 두번째 배열값 : 해당 상태값을 변경시킬 수 있는 state변경함수
  - 컴포넌트 함수 안쪽에서 state값이 변경이 되면 해당 컴포넌트 함수가 다시 호출되면서 화면이 재랜더링됨
  - state값 변경으로 재 랜더링이 일어나려면 무조건 state변경함수로만 변경을 해야 재랜더링됨
  */

	// let [index, setIndex] = useState(0); -> Btns.js
	// console.log(index);

	/*
  - JSX 문법 안쪽에서 반복처리할때는 map을 이용
  - JSX 문법 안쪽에서 연산처리가 필요한 부분은 중괄호로 감싸줌
  - map에 의해서 반복생성되는 요소에는 무조건 key값 설정
  */

	return (
		<>
			<section className='wrap' ref={wrap}>
				{arr.map((data, idx) => {
					// 자식인 Card 컴포넌트로 data, path 정보값을 props로 전달
					return (
						<Card key={idx} data={data} path={path} num={num} index={idx} />
					);
				})}
			</section>
			<Btns wrap={wrap} />
		</>
	);
}

export default Section;

/*
- 주석
- 연산되는 중괄호 안쪽에서는 일반 js 주석 활용 가능
- JSX 안쪽에서는 주석도 중괄호로 감싸줘야 함

- props
- 부모컴포넌트에서 자식컴포넌트로 정보값을 전달할 때 props를 활용
- 부모에서 자식으로 데이터를 전달 가능
- 자식요소에서 props라는 객체로 해당 값을 전달 받음
*/
