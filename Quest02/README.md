# Quest 02. 프로그래밍의 기초

## Introduction
* 이번 퀘스트를 통해 가장 기초적인 프로그래밍과 그를 둘러싼 개념을 익힙니다.

## Topics
* node.js
* 컴파일러, 인터프리터, JIT 컴파일, 가상머신, 런타임
* `let`, `const`, `if`, `for`, `function`

## Resources
* [패키지 매니저로 Node.js 설치하기](https://nodejs.org/ko/download/package-manager/)
* [node.js](https://nodejs.org/ko/)

## Checklist
* node.js란 무엇일까요? 
  > Software platform used when devloping extensible network applications, especially server-side
  
  > Use javascript
  
  > Adopt Non-blocking I/O and single thread event loop for higher performance.
  
  > Include HTTP server libraries, so be able to run without extra services, s.t Apach, and control server.

* `node.js는 V8 엔진 위에 만들어진 자바스크립트 런타임이다`라는 문장을 뜯어 보면 어떤 의미일까요?(https://url.kr/omdkfn)
  1. V8 engine
     - Opensource Javascript engine inside browsers
     - Use JIT
  
  2. Javascript
     - Single thread, Non-blocking language
  
  3. Runtime
     - Environment running programing languages
  
  4. Node.js
     - V8 engine을 이용해 backend를 javascript runtime으로 구현할 수 있는 tool
     - Web API를 이용해 Single thread, Non-blocking을 유지한다.

* 사람의 언어에 가까운 프로그램 코드를 어떻게 컴퓨터가 실행시킬까요? 그 과정은 무엇일까요?
  > Parsing code, compile parsed code, link binary code with lld, execute it.

* node.js가 자바스크립트 코드를 리눅스, 윈도우, 맥OS 어느 곳에서든 똑같이 실행할 수 있는 이유는 무엇일까요?
  > Use VM

## Quest
* node.js 최신 LTS 버전을 설치합니다.
* 다음과 같이 입력에 따라 별의 산을 출력하는 프로그램을 작성합니다.
```
$ node quest02.js 5
    *
   ***
  *****
 *******
*********
```

## Advanced
* 퀘스트의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* 함수형 프로그래밍이란 어떤 컨셉일까요? 어떤 특징들을 가지고 있을까요?

## Plus
* Blocking and Non-blocking, Syncronous and Asyncronous(https://url.kr/e9nik7)

  1. Blocking and Non-blocking
     - Concern: 누가 제어권을 가지고 있는가

     | Type | Description |
     | :---: | :---: |
     | Blocking | 호출된 Callable이 제어권을 가진다 |
     | Non-blocking | 호출한 Callable에 즉시 제어권이 넘어간다 |
  
  2. Syncronous and Asyncronous
     - Concern: 모두가 동일한 시간에 있는가
     
     | Type | Description |
     | :---: | :---: |
     | Syncronous | 호출된 Callable의 반환이 될 때까지 기다린다 |
     | Asyncronous | 호출된 Callable의 반환을 기다리지 않는다 |
  
  3. Blocking/Non-blocking과 Syncronous/Asyncronous는 전체 프로세스에서 단일하게 지켜지지 않는다.

* Single Thread I/O and Non-blocking event loop(https://url.kr/fkh8ut, https://url.kr/zwfcqd)

  - Reduce multithread hazards and imitate multithread environment.
  - Use kernel threads instead of creating threads.
