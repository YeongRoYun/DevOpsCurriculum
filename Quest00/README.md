# Quest 00. 데브옵스란 무엇인가

## Introduction
* 이번 퀘스트에서는 데브옵스가 무엇인지, 이러한 개념이 왜 나오게 되었는지 등에 대해 다룰 예정입니다.

## Resources
* [DevOps란 무엇입니까?](https://aws.amazon.com/ko/devops/what-is-devops/)
* [DevOps란?](https://azure.microsoft.com/ko-kr/overview/what-is-devops/)
* [DevOps](https://cloud.google.com/devops/?hl=ko)
* [DevOps](https://en.wikipedia.org/wiki/DevOps)

## Checklist
* 만약 비개발자에게 데브옵스가 무엇인지 설명하게 된다면 어떻게 설명할 수 있을까요?
  > 상품 공급망을 자동화해 안정적인 서비스를 고객에게 제공하는 것
* 데브옵스라는 개념 이전의 소프트웨어 개발은 어땠을까요? 어떤 요구사항을 충족하기 위해 데브옵스라는 개념이 생겼을까요?
  > 개발과 운영이 분리되어 있었다. 피드백이 적용되는 기간이 상대적으로 길었고, 이를 해결하기 위해 개발과 운영을 통합할 필요가 발생했다.

  > 수동으로 개발 및 서비스를 할 때의 실수가 잦아, 이를 자동화할 필요가 생겼다.

  > 인프라 구성 비용을 줄이고, 필요한 서비스를 빠르게 제공할 필요가 발생했다. 

* 데브옵스 엔지니어가 따로 존재하는 조직과 따로 존재하지 않는 조직은 각각 어떤 장단점을 가지고 있을까요?
  > DevOps Engineer가 있는 조직
    - 장점
      1. Faster product release and faster time to market
      2. Higher productivity
      3. Process efficiency
      4. Shortened production cycles
      5. Better operaional support
      6. Engaged and motivated staff
      7. Better Customer experience management
      8. Clear product vision within the team
      9. Increased deployment success rate
      10. Increased product quality
      11. Better team efficiency
      12. Improved flexibility and support
      13. Reduced chance of product failure
      14. Cross-skilling and self-improvement
    - 단점
      1. Demands proper mindset across the company
      2. Lowered business security by outsourcing the DevOps operations
      3. Dealing with the legacy system is a challenge
      4. Practicing security for CI/CD is a separate affair
      5. Getting the right pool of DevOps expertise is a challenge
      6. Challenges with the number of tools and switching tools
      7. Transition challenges(organizational and technical)
  > DevOps Engineer가 없는 조직
    - In reverse

## Quest
* 발급받은 AWS 계정에 접속해 봅니다.
* 본인의 루트 AWS 엑세스 키 ID와 비밀 엑세스 키를 생성하고, 본인의 로컬 머신에 저장해 놓습니다.
* 새로운 무언가를 생성하지는 않은 상태에서, 어떤 것들이 있는지 둘러봅니다!
* 과제 리뷰용 IAM 계정을 하나 만들어서 저에게 알려 주세요.
  * 콘솔의 IAM 메뉴에 들어가서, 왼쪽의 `엑세스 관리` -> `사용자`에 들어가서 `사용자 추가`를 클릭합니다.
  * 사용자 이름에 `kcho@knowre.com`을 입력하고, 엑세스 유형에 `프로그래밍 방식 엑세스`와 `AWS Management Console 액세스`를 모두 클릭합니다.
  * `자동 생성된 비밀번호`와 `비밀번호 재설정 필요`를 체크합니다.
  * `권한 설정`에서 `기존 정책 직접 연결`을 선택한 뒤, `AdministratorAccess`를 체크하고, 하단의 `다음:태그`와 `다음:검토`를 계속해서 누른 뒤, 사용자를 만듭니다.
  * `액세스 키 ID`와 `비밀 액세스 키`, `비밀번호`, 그리고 위의 안내에 써 있는 접속을 위한 `https://[12자리숫자].signin.aws.amazon.com/console` URL을 저에게 보내 주시면 됩니다!

## Advanced
* SRE(Site Reliability Engineering)는 어떤 개념일까요?
  - construct useful and reliable sites for developments and operations
  - Principles
    1. Automation or elimination of anything repetitive that's also cost-effective to automate or eliminate
    2. Avoidance to pursue much more reliability than what's strictly necessary. Defining what's necessary is a practive by itself
    3. Systems design with a bias toward reduction of risks to availability, latency, and efficiency
    4. Observability, as in, the ability to be able to ask arbitrary questions about your system without having to know ahead of time what you wanted to ask 

* 미래의 데브옵스 직무는 어떻게 변화할까요? 여러 가지 미래를 상상해 봅시다!
  > 필요불가결한 기술이 될 것

## Plus
* Agile and DevOps

| | Agile | DevOps |
| :---: | :---: | :---: |
| 정의 | lean management 제공 방식, 고객 요구사항 우선 | 개발과 운영의 통합 |
| 철학 | fail-fast, 적응성, 고객 요구 응대 | 효율성, 자동화, 프로세스 개선 |
| 범위 | 개발 | 개발, 운영 및 품질 관리 전반 |


> 같이 사용해야 한다.

* Lean project management(https://url.kr/xng47q)
  1. 가치창출에 불필요한 부분을 없애고, 고객이 원하는 것을 빠르게 전달한다.
  2. 5원칙
     1. 고객 요구사항을 명세한다(무엇을 원하는지, 어떻게 줄 수 있을지)
     2. 로드맵을 시각화한다
     3. 로드맵을 수행할 flow를 최적화한다
     4. 고객을 위한 상품을 만든다
     5. 이하의 과정을 지속적으로 수행한다
