# Quest 01. 리눅스와 친해지기

## Introduction
* 이번 퀘스트를 통해 리눅스의 기본적인 구조와 기능에 대해 공부할 수 있습니다.

## Topics
* 리눅스의 기본 커맨드
  * `cd`, `pwd`, `ls`, `cp`, `mv`, `mkdir`, `rm`, `touch`, `ln`, `echo`, `cat`, `tail`, `find`, `ps`, `kill`, `grep`, `wc`, `df`, `du`
  * 파이프(`|`) 문자
* 리눅스의 기본적인 디렉토리 구성
  * `/bin`, `/usr/bin`, `/boot`, `/dev`, `/etc`, `/home`, `/lib`, `/mnt`, `/proc`, `/root`, `/sbin`, `/usr/sbin`, `/tmp`, `/usr`, `/var`
* 쉘과 환경변수와 퍼미션
  * sh, bash, zsh
  * `.bash_profile`, `.bashrc`, `.zshrc`
  * `env`, `set`, `unset`, `export`
  * `chmod`, `chown`, `chgrp`
  * setuid, Sticky bit
* 운영체제의 기초
  * 프로세스와 쓰레드
  * 파일 시스템
* 리눅스의 배포판
  * Ubuntu, Debian, Redhat Enterprise, CentOS, Gentoo, Amazon Linux
  * 패키지 시스템: `apt`(.deb), `yum`(.rpm)
* vi
  * `i`, `w`, `q`, `u`, `d`, `p` 명령

## Resources
* [The Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
* [The Linux Directory Structure, Explained](https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/)
* [Unix / Linux - What is Shells?](https://www.tutorialspoint.com/unix/unix-what-is-shell.htm)
* [zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
* [About systemd](https://www.infoworld.com/article/2832405/what-is-systemd-and-why-does-it-matter-to-linux-users.html)
* [About linux distributions](https://thebloggingpot.com/2018/05/23/different-linux-distributions-explained/)
* [RPM and YUM package management](https://developer.ibm.com/technologies/linux/tutorials/l-lpic1-102-5/)
* [File editing with vi](https://developer.ibm.com/technologies/linux/tutorials/l-lpic1-103-8/)

## Checklist
* 리눅스의 파이프 문자는 어떤 역할을 하나요?
  > command1 | command2 | command3 :  The output of command1 becomes to the input of command2, the output of command2 becomes to the input of command3, go on..
  
* 리눅스의 셸은 어떤 역할을 하나요? bash와 zsh는 어떻게 다른가요?(https://url.kr/pzhtg6)
  > A shell is an interpreter between a terminal and users.

  | | Bash | Zsh |
  | :---: | :---: | :---: |
  | Configuration file | .bashrc in non-login shell, .hash_profile in login shell | .zshrc in both login and non-login shell, .zprofile in login shell |
  | Key binding | .inputrc and bind builtin to readline commands | bindkey builitin to zle widgets |
  | Prompt | $ | % |
  | command history | inner machanism | inner machanism |
  | Completion | bash_completion | compinit |
  | Scripting | starting index(0) | starting index(1) |
  

* 리눅스의 권한 체계는 어떻게 이루어져 있나요?
  1. Ownership
     - onwer user group user
  3. Permission
     1. special
        1. setuid(4000): treat as file owner
        2. setgrp(2000): treat as file group
        3. sticky bit(1000): treat directory as board
     2. user
        - read(0400), write(0200), execute(0100)
     3. group
        - read(0040), write(0020), execute(0010)
     4. others
        - read(0004), write(0002), execute(0001)
    
* 프로세스와 쓰레드는 무엇인가요?
  > Process: a active entity in memory
  
  > Thread: a component of process, sharing all except stack 

* 현재 실행되고 있는 프로세스들 중 PID가 1인 프로세스는 어떤 역할을 할까요? init과 systemd는 무엇이고 어떻게 다른가요?
  > launchd(on Mac) initialize OS after executing kernel
  
  > init is old version(hard code), systemd is new version(event driven)

* 파일시스템이란 무엇일까요? 어떤 것이 있을까요? 지금 다루는 운영체제는 어떤 파일시스템을 쓰고 있나요?
  > 

* 리눅스의 배포판이란 무엇일까요? 여러 가지 배포판들은 어떻게 생겨났을까요?
* 리눅스의 패키지 시스템이란 무엇일까요? 이러한 시스템이 생긴 이유는 무엇일까요? deb과 rpm은 어떤 차이가 있을까요? RPM이 있는데 yum과 같은 시스템이 나온 이유는 무엇일까요?
* vi는 어떤 에디터인가요? vi와 vim은 어떻게 다를까요? vi는 왜 모든 리눅스의 기본 에디터가 되었을까요?

## Quest
* 인스턴스 생성
  * t3.nano 등급으로 EC2 인스턴스를 생성해 봅시다! Amazon Linux 2, Ubuntu 두 가지를 각각 생성해 봅니다.
  * EC2 생성 과정에서 .pem 파일이 하나 생기는데, 이는 저에게 슬랙을 통해 공유해 주시면 됩니다.
  * 세 배포판은 어떻게 다른가요?
* 리눅스 연습
  * Amazon Linux 2 인스턴스에서 위의 Topics의 기본 커맨드를 연습해 봅니다.
  * 리눅스의 기본 디렉토리들에 어떤 정보들이 있는지 둘러 봅니다.
  * zsh를 설치하고 `.zshrc` 파일을 포함해 여러 가지 설정을 해 봅니다.
  * Topics의 환경변수나 퍼미션 관련 커맨드를 연습해 봅니다.
  * 현재 실행되고 있는 프로세스들과 마운트 된 파일시스템들을 확인해 봅니다.
  * vi를 열어 여러 가지 기본 명령과 간단한 편집 방법을 연습해 봅니다.
* 생성한 인스턴스 중 Ubuntu는 완전히 종료(Terminate)하고, Amazon Linux 2는 일단 꺼둡니다.

## Advanced
* 리눅스 외의 POSIX 호환 운영체제에는 어떤 것들이 있을까요? 그러한 운영체제들은 어떤 용도로 쓰일까요?
  > OS X for Mac
  
  > VxWorks for RTOS

* 윈도우를 제외하고, 최근에 발표된 운영체제들 중 POSIX에 호환되지 않는 운영체제도 있을까요?
  > Very Minor

## Plus
* pipeline and redirection
  1. pipeline is used to connect commands in sequence

  2. redirection is used to redirect I/O direction of a command 

* bindkey
  1. bind keys for zle(zsh line editor) widgets
  2. use main Map as a default Map
  3. -e : emacs mode, -v : vi mode
  4. -A Map main to use Map as a main(main is a symbolic link)

* history
  1. search : Ctrl + R
  2. !! : expansion last
  3. Alt+. / $_ : recall last

* POSIX
  > Portable Operator System Interface
  
  > If OS follows POSIX, then it is called UNIX-like
