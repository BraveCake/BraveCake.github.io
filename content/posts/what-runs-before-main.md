+++
date = '2026-07-02T01:54:53+03:00'
draft = false
duration = '5'
description = ''
title = 'What Runs Before `main()`?'
+++

## Introduction

Behind the abstraction of high-level languages, there is more happening than meets the eye. Contrary to what many assume, `main()` is not always the first code that executes.

I'm not here to give an absolute answer about what runs first on every platform or language. Instead, we'll explore two common cases: C executables and Java programs.

## The Invisible Startup Code

Just because you can't see it doesn't mean it isn't there.

Behind the abstraction of high-level languages lies startup code that runs before our `main()` function (or routine). Whenever we compile a C program, a small piece of code is linked into the executable before `main()`. This code is the program's true entry point and is commonly referred to as the **C Runtime (CRT)**.

The CRT performs a variety of startup tasks before calling `main()`, including:

* Processing the command-line arguments and environment variables, assigning them to `argc`, `argv`, and `environ`.
* Preparing the execution environment by resetting certain registers and aligning the stack pointer according to the CPU architecture's requirements (for example, 16-byte alignment on x86-64).
* Initializing memory sections such as `.bss`, which stores uninitialized global and static variables.
* Mapping the operating system's standard file descriptors (usually 0, 1, and 2) to the C standard library streams: `stdin`, `stdout`, and `stderr`.
* Performing additional compiler- or platform-specific initialization tasks.

After completing these startup tasks, the CRT finally calls `main()`, making it appear as though `main()` is the first function that executes.

The CRT is also involved after `main()` returns. It invokes functions registered with `atexit()`, flushes buffered output, releases runtime resources, and passes the program's exit status back to the operating system.

Some compilers, such as GCC and Clang, even allow you to execute code before `main()` by using constructor attributes:

```c
#include <stdio.h>

void __attribute__((constructor)) setup() {
    printf("This runs before main!\n");
}

int main() {
    printf("This is main.\n");
    return 0;
}
```

## Java and the JVM World

Java follows a different startup process.

It is widely known that Java runs on the **Java Virtual Machine (JVM)**. Before your program can execute, the JVM itself must start. It performs several tasks, including basic verification of the program, allocating memory, loading the required `.class` files, and linking them.

The details of class loading and bytecode verification are beyond the scope of this article. What matters here is that Java executes **static initialization blocks** when a class is first loaded—before the `main()` method is invoked.

Static blocks execute only once per class and are commonly used for logging, debugging, or initialization logic such as loading configuration files or establishing database connections that `main()` depends on.

```java
public class ExampleProgram {

    // 1. First Static Block
    static {
        System.out.println("1. First Static Block executed (Class loaded).");
    }

    // 2. Main Method
    public static void main(String[] args) {
        System.out.println("3. Main Method executed (Program logic starts).");
    }

    // 3. Second Static Block
    static {
        System.out.println("2. Second Static Block executed (Class loaded).");
    }
}
```
