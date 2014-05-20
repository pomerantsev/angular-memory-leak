Angular Memory Leak
========

This is a simple app illustrating a memory leak that could probably be caused by Angular itself or V8.
The isolate scope of a directive has two bindings: one `&`, and another one `@` or `=`.
How to reproduce:
- open the app at / and take a heap snapshot;
- follow the link and then go back;
- take another snapshot and switch to comparison view. There should be a dangling node among the first items in the (array) list.

This leak is reproduceable in the latest version of Chrome (34.0.1847.137) with Angular versions 1.2.16 and 1.3.0-beta.9.
I was not able to reproduce it in Canary.
