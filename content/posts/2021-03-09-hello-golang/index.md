---
title: Hello Golang!
author: Jherk
date: 2019-04-30
hero: ./images/hero.jpg
excerpt: With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of this incredible tool.
---
> ###### @Xindian, 2019/04/19
> 
> #### [新店和美山－黑翅螢](https://mistjere.com/article/023593)

# Golang

#### Synopsis
* Statically-typed but scripting-like
* Compiled language
* GC/concurrency built-in

#### Structure
```go=
Package main

import "fmt"

func main {
  fmt.Println("hello world");
}
```

#### Variables
```go=
var a = "apple"
var b, c init = 1, 2
var d = true
var e int // defaultValue: 0f := "banana"
```

#### Constants
```go=
const s string = "strawberry"
const n = 500000000
const d = 3e20 / n
```

#### For
```go=
for i := 0; i <= 10; i++ {
    fmt.Println(i)
}
for {
    if (true) fmt.Println(true)
    break
}
```

#### If/Else
> 允許precede conditionals，但是沒有ternary
```go=
if num := 10; num%2 == 0 {
} else if num > 10 {
} else {
}
```

#### Switch
```go=
switch i {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    default:
        fmt.Println("?")
}
```

#### `nil` in GO
> `nil`定義在[src/builtin/builtin.go](https://golang.org/src/builtin/builtin.go)

使用`go doc`指令查看文件`$ go doc builtin.nil`
```go=
// nil is a predeclared identifier representing the zero value for a
// pointer, channel, func, interface, map, or slice type.
var nil Type // Type must be a pointer, channel, func, interface, map, or slice type
```
作為[預定義標識符(Predeclared identifiers)](https://tip.golang.org/ref/spec#Predeclared_identifiers)，與`bool`,`byte`,`int`,`true`, `new`等等在[全域作用域(universe block)](https://tip.golang.org/ref/spec#Blocks)中被隱式宣告(implicitly declared)，並且都不是保留字，因此可以override。

