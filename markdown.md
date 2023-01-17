# 마크다운(Markdown)

# 1. 개요

[마크다운(Markdown)](https://www.markdownguide.org/getting-started/)은 일반 텍스트 문서에 서식 요소를 추가하는 데 사용할 수 있는 간단한 마크업 언어입니다. 2004년 [John Gruber](https://daringfireball.net/projects/markdown/)가 만든 Markdown은 현재 세계에서 가장 인기 있는 마크업 언어 중 하나입니다.

# 2. 문법

[2.1. 머리말(Header)](#21-머리말header) \
[2.2. 인용문(Blockquote)](#22-인용문blockquote)  
[2.3. 목록(Lists)](#23-목록lists)  
[2.4. 코드 블록(Code Blocks)](#24-코드-블록code-blocks)

---

## 2.1. 머리말(Header)

-   글머리에 Hash`#`의 수로 Header Level이 결정된다. H1`#`부터 H6`######`까지 지원하며 H1과 H2는 자동으로 밑줄이 그어진다.

`예시 1`
```
# The First Level Header
======================
```

# The First Level Header

<br />

`예시 2`
```
# The Second Level Header
-----------------------
```

## The Second Level Header

<br />

`예시 3`
```
# The First Level Header
## The Second Level Header
### The Third Level Header
#### The Fourth Level Header
##### The Fifth Level Header
###### The Sixth Level Header
####### The Seventh Level Header (not supported)
```

# The First Level Header

## The Second Level Header

### The Third Level Header

#### The Fourth Level Header

##### The Fifth Level Header

###### The Sixth Level Header

####### The Seventh Level Header (not supported)

<br />

## 2.2. 인용문(Blockquote)

-   글머리에 이메일에서 사용하는 `>`기호를 사용한다. 인용문을 중복해서 사용하거나 다른 마크다운 요소를 포함할 수 있다.

`예시 1`
````
> This is the first level of quoting.
>
>> This is nested blockquote.
>
> Back to the first level.
>
> * This is list.
>
> ``` This is code block. ```
````

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
>
> -   This is list.
>
> `This is code block.`

<br />

## 2.3. 목록(Lists)

-   순서 없는 목록은 글머리에 별표`*`, 더하기표`+`, 붙임표`-`를 사용한다. `*`, `+`, `-` 세 기호 모두 글머리기호로 `●`가 표시된다.

`예시 1`
```
* Red
* Green
* Blue
```

-   Red
-   Green
-   Blue

`예시 2`
```
+ Red
+ Green
+ Blue
```

-   Red
-   Green
-   Blue

`예시 3`
```
- Red
- Green
- Blue
```

-   Red
-   Green
-   Blue

---

-   들여쓰기 정도에 따라 글머리기호가 달라진다. 글머리에 `*`, `+`, `-` 세 기호 중 어떠한 기호를 조합하여 쓰더라도 1단계는 `●`, 2단계는 `○`, 3단계 이하에서는 `■`로 표시된다.

`예시 4`
```
* The First Level
    + The Second Level
        - The Third Level
            + The Fourth Level
                * The Fifth Level
```

-   The First Level
    -   The Second Level
        -   The Third Level
            -   The Fourth Level
                -   The Fifth Level

---

-   순서 있는 목록은 글머리에 숫자를 사용한다.

`예시 5`
```
1. Bird
2. McHale
3. Parish
```

1. Bird
2. McHale
3. Parish

---

-   글머리에 어떠한 순서로 숫자를 입력하더라도 첫 줄을 기준으로 내림차순으로 나타난다.

`예시 6`
```
1. Bird
1. McHale
1. Parish
```

1. Bird
1. McHale
1. Parish

`예시 7`
```
3. Bird
1. McHale
8. Parish
```

3. Bird
1. McHale
8. Parish

<br />

## 2.4. 코드 블록(Code Blocks)

- 최소 4개의 공백 또는 1개의 탭으로 들여쓰기를 하면 코드 블록이 생성된다. 코드 블록은 들여쓰기되지 않은 줄에 도달할 때까지 계속된다.

`예시 1`
```
This is a normal paragraph:

    This is a code block.

end code block.
```

This is a normal paragraph:

    This is a code block.

end code block.

- 개행하며 한 줄 씩 띄어쓰지 않으면 코드 블록이 제대로 되지 않는다.

`예시 2`
```
This is a normal paragraph:
    This is a code block.
end code block.
```

This is a normal paragraph:
    This is a code block.
end code block.

- 코드 블록 앞뒤에 삼중 백틱 `` ``` ``을 배치하여 코드 블럭을 생성할 수 있다.

`예시 3`
````
```
function test() {
  console.log("notice the blank line before this function?");
}
```
````
```
function test() {
  console.log("notice the blank line before this function?");
}
```

- 코드 블록에 3중 백틱을 표시하려면 4중 백틱 안에 넣는다.

`예시 4`
`````
````
```
Look! You can see my backticks.
```
````
`````

````
```
Look! You can see my backticks.
```
````

- GitHub에서는 선택적 언어 식별자를 추가하여 구문을 강조하도록 설정할 수 있다.

`예시 5`
````
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
````

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```