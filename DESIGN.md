# 설계 계약: Godot for Unity Devs

Unity/C# 개발자가 Godot 4.7을 배우는 한국어 학습 사이트의 계약서다. 2026-09-28 질의응답(grilling, Q1~Q35)으로 합의한 내용을 기록한다. Q28~Q35는 문서를 쓰면서 발견한 수정 사항을 저장소 주인이 확인한 것이다.

용어는 [CONTEXT.md](CONTEXT.md), 되돌리기 어려운 결정의 이유는 [docs/adr/](docs/adr/)에 있다.

## 1. 목적과 독자

- **독자**: Unity와 C#으로 게임을 만들어 본 개발자. 저장소 주인 본인도 포함한다.
- **"기초부터"의 뜻**: Godot의 기초를 말한다. 프로그래밍이나 게임 개발 입문은 다루지 않는다.
- **빈자리**: 공식 Godot 4.x 문서에는 Unity 사용자용 페이지가 없다. 3.3까지 있던 "From Unity to Godot Engine"은 2020년에 삭제됐다. 공개된 대안도 낡았다. Kodeco 글은 2023년 Godot 4 기준이고, GDQuest의 개발자용 경로는 Godot 3 기준이다.

## 2. 기준 버전

- **Godot 4.7.x**: `godot/` 아래의 모든 Godot 프로젝트(개념 스니펫 프로젝트와 샘플 스냅샷)는 4.7.2로 고정한다.
- **Godot 3.x는 다루지 않는다**: API가 바뀐 곳(3.x나 이전 4.x의 이름)은 짧은 표시로만 알린다.
- **Unity 6.3 LTS**: 비교 대상이다. 새 Input System 패키지와 uGUI를 기준으로 하고, UI Toolkit은 보조로 언급한다. 구 Input Manager처럼 흔히 마주치는 레거시 기능은 "예전 방식" 박스로 따로 설명한다.
- **배지**: 모든 페이지에 "Godot 4.7 기준" 배지를 단다.
- **갱신 정책**: [ADR-0004](docs/adr/0004-version-baselines.md)를 따른다.

## 3. 언어 축과 코드 탭

- 본문은 GDScript로 설명한다. 코드 비교는 코드 탭으로 보여준다. 이유는 [ADR-0001](docs/adr/0001-gdscript-first-with-godot-csharp-tab.md)에 있다.
- 코드 탭을 쓰는 모든 곳에서 탭 이름은 정확히 `Unity C#`, `GDScript`, `Godot C#` 세 개다. Starlight의 `syncKey` 동기화는 탭 이름 문자열이 같아야 동작한다.
- Unity C# 탭에는 설명용 코드라는 표시를 붙인다.
- 샘플 단계 페이지는 코드 탭을 쓰지 않고 GDScript 코드만 보여준다.

## 4. 사이트 구조

- **코스**: 모듈 1부터 12까지 순서대로 읽는 학습 경로다. 사이트의 뼈대다.
- **대응표**: Unity 개념이나 API에서 Godot의 대응물을 찾아보는 레퍼런스다. 코스의 챕터와 서로 링크한다.
- **모듈 구성**: 각 모듈은 개념 챕터 여러 개와, 끝의 샘플 단계 페이지 하나로 이루어진다.

## 5. 커리큘럼

| # | 모듈 | 핵심 대응 |
|---|---|---|
| 1 | 에디터와 프로젝트 구조 | `res://`/`user://`, `.tscn`/`.tres` 텍스트 포맷, `.godot/` ↔ `Library/`, 가져오기와 `.uid` |
| 2 | 노드와 씬 | 노드 ↔ GameObject+Component, 씬 ↔ Prefab, 인스턴스화, 상속된 씬, 씬 트리 |
| 3 | GDScript 언어 | 정적 타입, `@export`/`@onready`, `class_name`, `await`, 람다, C# 문법 대응 |
| 4 | 생명주기 | `_ready`/`_process`/`_physics_process`/`_input` ↔ `Awake`/`Start`/`Update`/`FixedUpdate` |
| 5 | 시그널과 그룹 | C# event, UnityEvent, `FindWithTag` |
| 6 | 리소스 | ScriptableObject |
| 7 | 오토로드 | 싱글턴, `DontDestroyOnLoad` |
| 8 | 입력 | 입력 맵 ↔ Input System |
| 9 | 물리 | CharacterBody/RigidBody/Area, 콜리전 레이어와 마스크 |
| 10 | UI | Control/Container ↔ uGUI, UI Toolkit |
| 11 | 애니메이션 | AnimationPlayer/AnimationTree ↔ Animator |
| 12 | 디버깅, 프로파일러, 내보내기 | Profiler, Build |

- **2차 범위**: 셰이더, 네트워킹, GDExtension, 에디터 플러그인, 내비게이션.
- **2D와 3D**: 개념 설명은 2D로 한다. 3D 물리, 카메라, 조명은 3D 전용 챕터로 다룬다.

## 6. MVP

첫 공개 범위는 세 가지다.

- 모듈 1~5의 개념 챕터
- 모듈 1~5 각각의 샘플 단계(샘플 스냅샷 01~05)
- 대응표 초안

나머지 모듈은 하나씩 완성되는 대로 추가한다.

## 7. 페이지 템플릿

### 개념 챕터

1. **Unity에서는**: 독자가 이미 아는 방식
2. **Godot에서는**: 개념과 멘탈 모델
3. **코드 비교**: 코드 탭
4. **함정**: Unity 습관 때문에 틀리기 쉬운 곳
5. **한 줄 대응**: 대응표로 이어지는 요약 한 줄
6. **연습**: 정답은 접이식 `<details>`에 넣는다

### 샘플 단계

1. **목표**: 이 모듈에서 배운 것 가운데 무엇을 샘플 게임에 넣는지
2. **바뀌는 점**: 이전 샘플 스냅샷과 비교해서 달라지는 것
3. **GDScript 코드**
4. **웹 데모**: "클릭해서 실행"
5. **샘플 스냅샷 링크**

## 8. 예제 전략

- **개념 스니펫**: 한 개념만 보여주는 최소 코드다. 샘플 게임과는 독립적이다.
- **샘플 게임**: 2D 탑다운 슈터를 모듈마다 조금씩 키워 간다(이동, 사격, 적 스폰, HP·점수 UI, 피격 애니메이션). GDScript로만 작성한다. 샘플 단계 페이지에는 Godot C# 탭을 두지 않는다.
- **3D로 옮기기**: 3D 챕터에서 같은 게임을 3D로 옮겨 이어 갈 수 있다. 3D 챕터의 위치와 함께 모듈 9를 쓸 때 정한다.
- **샘플 스냅샷**: 모듈이 끝난 시점의 샘플 게임을 폴더 하나로 남긴다. 각 폴더는 독자가 그대로 열 수 있는 독립 Godot 프로젝트다([ADR-0002](docs/adr/0002-monorepo-with-real-godot-projects.md)).

## 9. 저장소 레이아웃

```
/
├── package.json, pnpm-workspace.yaml   # 워크스페이스 루트
├── site/                               # Astro 7 + Starlight 0.42
├── godot/
│   ├── snippets/                       # 개념 스니펫용 Godot 4.7.2 프로젝트 하나 (GDScript + Godot C#)
│   │   └── <NN-모듈>/                  # 모듈별 폴더
│   └── sample/<NN-모듈>/               # 샘플 스냅샷마다 독립 Godot 프로젝트 (GDScript)
├── unity/<NN-모듈>/                    # 설명용 Unity C# 파일 (컴파일하지 않음)
├── docs/adr/
├── DESIGN.md, CONTEXT.md, README.md
```

**발췌 방식**
- 챕터는 `<Snippet file region>` 컴포넌트로 코드를 발췌한다.
- 이 컴포넌트는 `?raw`로 파일을 읽은 뒤 `#region 이름` / `#endregion` 마커 사이만 잘라낸다. GDScript와 C#(Unity C# 포함) 모두 이 마커를 쓴다.
- Starlight와 Expressive Code에는 부분 발췌 기능이 없어서 직접 만든다.

**이름 충돌 규칙** (`godot/snippets/`는 프로젝트가 하나라서 필요하다)
- GDScript: `class_name`이 겹치면 안 된다. 겹칠 수 있는 이름은 모듈 접두사를 붙이거나 `class_name`을 빼고 쓴다.
- Godot C#: 스니펫을 모듈별 네임스페이스(예: `namespace Snippets.M02;`)에 넣는다. Godot C# 클래스는 `partial`이라서 같은 네임스페이스의 같은 이름 클래스가 하나로 합쳐진다. 그러면 멤버 중복(CS0111) 등으로 빌드가 깨진다.

## 10. 코드 검증 규칙

- **GDScript**: CI에서 Godot 4.7.2 에디터 바이너리로 파싱 검사한다. `--check-only`는 한 번에 파일 하나만 받으므로 파일마다 반복 실행한다.
- **Godot C#**: CI에서 빌드한다.
- **Unity C#**: 설명용 코드다. 컴파일하지 않고 리뷰로만 검증한다.
- **공식 문서 링크**: 모든 개념 설명에 Godot 4.7 공식 문서 링크를 단다.
- **CI 설치**: `chickensoft-games/setup-godot`(.NET 지원)이나 `barichello/godot-ci` 이미지를 쓴다.

## 11. 작성 방식

1. Claude가 챕터마다 조사하고 초안을 쓴다.
2. 초안의 사실 주장은 공식 문서와 대조해서 반박 검증을 거친다.
3. 사용자가 챕터 단위 PR로 검수하고 머지한다. 톤, 예시 선택, 누락은 사용자가 최종 결정한다.

## 12. 표기 규칙

용어는 [CONTEXT.md](CONTEXT.md)를 따른다. 한글 표기는 아래 우선순위로 정한다.

1. **에디터 번역**: Godot 4.7.2 에디터의 한국어 번역이 자연스러우면 그대로 쓴다. 번역 파일은 `editor/translations/editor/ko.po`(메뉴와 독)와 `editor/translations/properties/ko.po`(인스펙터 속성 이름) 두 개다.
2. **음차**: 에디터 번역이 없거나 어색하면 영어 발음대로 쓰고, CONTEXT.md의 음차 목록에 올린다.
3. **코드 서체**: 식별자나 타입 자체를 가리킬 때는 영어 코드 서체로 쓴다.

사이트 본문은 한국어로 쓰고, 영어판은 필요해질 때 Starlight i18n으로 추가한다.

## 13. v1 인터랙티브 범위

v1에는 세 가지만 넣는다.

- 코드 탭
- 접이식 연습 정답
- 샘플 단계 페이지의 웹 데모(14절)

퀴즈, 진도 체크, 댓글은 MVP 반응을 본 뒤에 결정한다.

## 14. 웹 데모

- **위치**: 웹 데모는 샘플 단계 페이지에만 둔다. 독자가 "클릭해서 실행"을 눌러야 로드되고, 페이지당 1개다.
- **개념 챕터는 스크린샷**: 웹 데모의 첫 로드가 약 10 MB라서 샘플 단계에만 두기 때문이다.
- **3D 챕터는 데스크톱 렌더러 스크린샷**: 웹은 Compatibility 렌더러만 지원하기 때문이다.
- **형태**: 단일 스레드로 내보낸 GDScript 프로젝트만 쓴다. 이유는 [ADR-0003](docs/adr/0003-github-pages-and-gdscript-only-web-demos.md)에 있다.

## 15. 검색

Starlight 기본 검색인 Pagefind를 쓴다. Pagefind는 한국어를 띄어쓰기 단위로만 색인하고 페이지 단위로 찾는다. 그래서 아래 규칙으로 보완한다.

- **영문 병기**: 챕터에서 용어가 처음 나올 때 영문 이름을 함께 적는다. CONTEXT.md의 첫 등장 규칙과 같다. 페이지당 한 번이면 검색에 충분하다.
- **클래스와 메서드 이름**: 언제나 영어 코드 서체로 쓴다.
- **띄어쓰기**: 에디터 번역에 고정된 표기(예: 파일시스템)는 그대로 쓴다. 에디터가 정하지 않은 본문 복합어만 띄어 쓴다(예: "씬 트리").

MVP에서 검색 품질이 부족하면 Algolia DocSearch를 검토한다.

## 16. 호스팅, 저장소, 라이선스

- **호스팅**: GitHub Pages에 GitHub Actions로 배포한다. 주소는 `ysle0.github.io/godot-for-unity-devs`다.
- **커스텀 도메인**: 나중에 붙인다면 네 단계다. Actions 배포에서는 `CNAME` 파일이 무시된다.
  1. 저장소 Settings > Pages에서 도메인을 지정한다.
  2. DNS 레코드를 추가한다.
  3. astro 설정의 `site`를 새 도메인으로 바꾼다.
  4. `base`를 지운다.
- **저장소**: 공개 저장소 `ysle0/godot-for-unity-devs`. GitHub Free에서는 공개 저장소만 Pages를 쓸 수 있다.
- **라이선스**: 본문은 CC BY 4.0, 코드와 예제는 MIT.
- **공식 문서 인용**: 문장을 복제하지 않고 직접 쓴 뒤 링크한다. 각색이 필요하면 CC BY 3.0 조건에 따라 "Juan Linietsky, Ariel Manzur, and the Godot Engine community"로 출처를 밝힌다. 클래스 레퍼런스는 MIT다.

## 17. 첫 스파이크: 확인되지 않은 위험

콘텐츠를 쓰기 전에 아래 항목을 실제로 실행해서 확인한다.

1. **`?raw` import 경로**: `site/`가 `godot/`와 `unity/` 파일을 dev와 build 모두에서 import하는지 확인한다. 워크스페이스 루트 인식이나 `vite.server.fs.allow`가 필요할 수 있다. `allow`를 직접 설정하면 워크스페이스 자동 인식이 꺼지므로 `searchForWorkspaceRoot`를 함께 넣는다.
2. **배포 액션과 lockfile 위치**: `withastro/action`은 `path` 폴더 안에서만 lockfile을 찾는다. pnpm 워크스페이스에서는 lockfile이 루트에 있어서 이 액션이 실패할 수 있다. 그렇다면 직접 빌드 단계를 짜고 `actions/upload-pages-artifact` + `actions/deploy-pages`로 배포한다.
3. **GDScript 검사**:
   - 새로 체크아웃한 CI에는 `.godot/`가 없다. 먼저 `godot --headless --import`로 `class_name` 캐시를 만들어야 파일 간 참조가 해결되는지 확인한다.
   - 오토로드를 참조할 때 오탐이 나는 이슈(#78587, #111515)가 발생하는지 확인한다.
4. **Godot C# 이름 충돌**: 모듈별 네임스페이스로 스니펫의 타입 이름 충돌이 막히는지 확인한다. 같은 이름의 `[GlobalClass]`가 전역 클래스 목록에서 충돌하는지도 본다.
5. **Pagefind 한국어 검색**: 조사 단계의 결론은 소스를 읽고 내린 추론이다. 실제 빌드에서 조사가 붙은 단어("노드를")와 복합어를 검색해 본다.
6. **GitHub Pages base 경로**: `base: '/godot-for-unity-devs'`가 사이드바 링크, Pagefind 경로, 웹 데모 경로와 충돌하지 않는지 확인한다.
7. **웹 데모 내보내기**:
   - CI에서 스냅샷마다 Web으로 내보낸다.
   - 스냅샷들이 같은 `index.wasm` 하나를 공유하게 해서 브라우저 캐시를 재사용하는지 확인한다.
   - iframe 안에서 키보드 포커스와 오디오 자동재생이 어떻게 동작하는지 확인한다.
8. **Shiki 하이라이트**: `gdscript` 문법이 4.7 문법을 제대로 칠하는지 눈으로 확인한다.

## 18. 미결 사항

- 3D 카메라와 조명 챕터가 어느 모듈에 속할지, 그리고 샘플 게임을 3D로 옮길지는 모듈 9를 쓸 때 정한다.
- 퀴즈, 진도 체크, 댓글(giscus) 도입 여부.
- 영어판 추가 시점.

## 19. 근거: 2026-09-28 조사

아래 사실은 1차 출처로 조사한 뒤 별도 에이전트가 반박 검증했다. 확인 방식이 서로 달라서 표에 함께 적는다.

| 사실 | 확인 방식 | 출처 |
|---|---|---|
| 4.7 Web 내보내기 기본값은 단일 스레드이고 HTTPS만 필요하다 | 문서 + 소스 | [exporting_for_web (4.7)](https://docs.godotengine.org/en/4.7/tutorials/export/exporting_for_web.html), [export_plugin.cpp](https://raw.githubusercontent.com/godotengine/godot/4.7.2-stable/platform/web/export/export_plugin.cpp) |
| 단일 스레드 4.7.1 데모가 COOP/COEP 헤더 없는 GitHub Pages에서 실행된다 | **실측** (Chromium, 2026-09-28) | [Pong 데모](https://godotengine.github.io/godot-demo-projects/2d/pong/) |
| Godot 4.7에서 Godot C# 프로젝트는 Web으로 내보낼 수 없다. 관련 PR은 초안 상태다 | 문서 + 소스 + GitHub API | [exporting_for_web (4.7)](https://docs.godotengine.org/en/4.7/tutorials/export/exporting_for_web.html), [PR #106125](https://github.com/godotengine/godot/pull/106125), [issue #70796](https://github.com/godotengine/godot/issues/70796) |
| 공식 4.7.1 `index.wasm`은 39,513,091 B(37.7 MiB)이고, gzip 전송 시 10,248,573 B(약 9.8 MiB)다 | **실측** | [index.wasm](https://godotengine.github.io/godot-demo-projects/2d/pong/index.wasm) |
| Cloudflare Pages와 Workers 정적 자산은 파일당 25 MiB로 제한된다 | 문서 | [Pages limits](https://developers.cloudflare.com/pages/platform/limits/), [Workers limits](https://developers.cloudflare.com/workers/platform/limits/) |
| GitHub Pages는 Free 플랜에서 공개 저장소만 지원하고, 사이트는 1 GB까지다 | 문서 | [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) |
| GitHub Actions로 배포하면 `CNAME` 파일은 만들어지지 않고, 있어도 무시된다 | 문서 | [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) |
| Web은 Compatibility(WebGL 2) 렌더러만 지원한다 | 문서 | [exporting_for_web (4.7)](https://docs.godotengine.org/en/4.7/tutorials/export/exporting_for_web.html) |
| 한 문서 안에서 같은 wasm을 공유하는 엔진 인스턴스는 기본 1개다. iframe은 문서마다 따로 센다 | 문서 + 소스 | [customizing_html5_shell](https://docs.godotengine.org/en/4.7/tutorials/platform/web/customizing_html5_shell.html) |
| Astro 7.3.5와 Starlight 0.42.4는 Node 22.12 이상이 필요하다 | npm + 문서 | [Astro install](https://docs.astro.build/en/install-and-setup/) |
| Starlight Tabs의 `syncKey`는 탭 이름으로 동기화하고 localStorage에 저장한다 | 문서 + 소스 | [Tabs](https://starlight.astro.build/components/tabs/) |
| Shiki 전체 번들에 `gdscript`(gd), `gdshader`, `gdresource`(tscn, tres), `csharp`가 있다 | 소스 | [langs-bundle-full.ts](https://raw.githubusercontent.com/shikijs/shiki/main/packages/shiki/src/langs-bundle-full.ts) |
| Pagefind는 한국어를 형태소로 분리하지 않고 띄어쓰기 단위로만 색인한다. 접두어 일치는 동작한다 | **소스 판독, 미실행** | [fossick/mod.rs](https://raw.githubusercontent.com/Pagefind/pagefind/v1.5.2/pagefind/src/fossick/mod.rs), [search.rs](https://raw.githubusercontent.com/Pagefind/pagefind/v1.5.2/pagefind_web/src/search.rs) |
| `withastro/action`은 `path` 폴더 안에서만 lockfile을 찾는다 | 소스 | [action.yml](https://raw.githubusercontent.com/withastro/action/main/action.yml) |
| `--check-only`는 파일 하나씩만 검사하고 에디터 바이너리가 필요하다 | 문서 + 소스 | [command_line_tutorial](https://raw.githubusercontent.com/godotengine/godot-docs/4.7/tutorials/editor/command_line_tutorial.rst), [main.cpp](https://raw.githubusercontent.com/godotengine/godot/4.7.2-stable/main/main.cpp), [proposal #1758](https://github.com/godotengine/godot-proposals/issues/1758) |
| `--check-only`는 `.godot/global_script_class_cache.cfg`로 `class_name`을 찾는다 | **소스 판독, 미실행** | [project_settings.cpp](https://raw.githubusercontent.com/godotengine/godot/4.7.2-stable/core/config/project_settings.cpp), [script_language.cpp](https://raw.githubusercontent.com/godotengine/godot/4.7.2-stable/core/object/script_language.cpp) |
| 공식 4.x 문서에 Unity 사용자용 페이지가 없다(2020년 삭제) | 저장소 트리 + 커밋 | [삭제 커밋](https://github.com/godotengine/godot-docs/commit/72618e68c24c7b6b1d7b40b89afacd32f7c47280) |
| Godot 문서(클래스 레퍼런스 제외)는 CC BY 3.0이다. 클래스 레퍼런스와 데모 프로젝트 코드는 MIT이고, 데모 애셋은 개별 라이선스다 | 문서 | [introduction (4.7)](https://docs.godotengine.org/en/4.7/about/introduction.html), [godot-docs README](https://raw.githubusercontent.com/godotengine/godot-docs/4.7/README.md), [godot-demo-projects](https://github.com/godotengine/godot-demo-projects) |
| Unity 6.3 LTS가 현재 LTS이고, 다음 LTS는 6.7이다(베타 2026-09-17) | Unity 공지 | [Unity 6 releases](https://unity.com/releases/unity-6), [6.5 공지](https://discussions.unity.com/t/unity-6-5-is-now-available/1723176), [6.7 베타 공지](https://discussions.unity.com/t/unity-6-7-beta-is-now-available/1736830) |
| Unity 6.3 매뉴얼은 런타임 UI로 uGUI를 권장하고 UI Toolkit을 대안으로 둔다 | 문서 | [UI system compare (6.3)](https://docs.unity3d.com/6000.3/Documentation/Manual/UI-system-compare.html) |
| Unity 6.3은 C# 9로 컴파일한다. Godot 4.7의 Godot C# 프로젝트는 기본 `net8.0`(C# 12)이고 `partial`이 필수다(GD0001) | 문서 + 소스 | [Unity C# compiler](https://docs.unity3d.com/6000.3/Documentation/Manual/csharp-compiler.html), [c_sharp_basics (4.7)](https://docs.godotengine.org/en/4.7/tutorials/scripting/c_sharp/c_sharp_basics.html), [GD0001](https://docs.godotengine.org/en/4.7/tutorials/scripting/c_sharp/diagnostics/GD0001.html) |

### 콘텐츠에 반영할 4.7 사실

- 4.7에서 새로 만든 프로젝트는 stretch mode `canvas_items`, aspect `expand`가 기본값이다.
- 4.7에서 Asset Library가 Asset Store로 바뀌었다.
- Godot C#은 .NET 8 이상이 필요하다. Android로 내보낼 때는 .NET 9 이상이 필요하다.
- Godot C# 프로젝트는 Web으로 내보낼 수 없다. 모듈 12 내보내기 챕터의 함정으로 다룬다.
- **C# 버전 차이**: Godot C# 탭에서 되는 문법(파일 범위 네임스페이스, 컬렉션 식, 기본 생성자)이 Unity 6.3의 C# 9에서는 컴파일되지 않는다. 또 Godot C# 클래스는 `partial`이어야 한다. 모듈 3의 함정으로 다룬다.
- Unity 문서는 새 프로젝트에서 Input System이 기본인지를 두고 서로 다르게 설명한다. 모듈 8은 "패키지를 설치한 상태"를 전제로 쓴다.
