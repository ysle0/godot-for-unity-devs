# GDScript를 본문 언어로, Godot C#은 코드 탭으로

독자는 이미 C#에 익숙한 Unity 개발자다. 그런데도 본문은 GDScript로 설명하고, Godot C#은 코드 탭의 세 번째 탭(`Unity C# | GDScript | Godot C#`)으로만 제공한다. 이유는 세 가지다.

- Godot 공식 문서, 튜토리얼, 커뮤니티 예제의 대부분이 GDScript를 먼저 보여준다.
- Godot 4.7의 Godot C# 프로젝트는 Web으로 내보낼 수 없어서 웹 데모를 만들 수 없다.
- Godot C#과 Unity C#은 같은 C# 언어다. 차이는 세 가지로, 탭 하나로 충분히 보여줄 수 있다.
  - 언어 버전: Unity 6.3은 C# 9, Godot 4.7은 기본 `net8.0`/C# 12
  - `partial` 필수 같은 규칙
  - API 관례

## Considered Options

- **Unity C# ↔ GDScript 2단 비교**: Godot C#으로 옮기려는 독자에게 갈 길이 보이지 않는다.
- **Godot C# 중심**: Unity 독자의 진입 장벽은 가장 낮다. 하지만 공식 자료와 예제는 대부분 GDScript가 먼저이고 C# 자료는 일부뿐이다. 독자가 사이트 밖으로 나가면 결국 GDScript를 읽어야 한다. 웹 데모도 만들 수 없다.
- **GDScript만 쓰고 Unity는 글로만 비교**: Unity 코드와 나란히 놓고 보는 것이 이 사이트의 핵심 가치인데 그것을 버리게 된다.
