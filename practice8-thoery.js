/*Async thoery
Js is : Default behavior
    single thread language 
    synchronous

Execution Context:
    execute one by one, one at a time
    -console log 1
    -console log 2
    (log 2 will not be executed until previous is executed


    Blocking Code:
    Block  the flow of Program
    Read File Sync

    Non Blocking Code:
    Does not block Execution
    Read File async

    +--------------------------------------------------+
|                    JS ENGINE                     |
|                                                  |
|   Memory Heap            Call Stack              |
|   -----------            -----------             |
|   |         |            |   fn()    |           |
|   | Objects |            |   fn()    |           |
|   |         |            |   fn()    |           |
|   |         |            |  Global   |           |
|   -----------            -----------             |
|                                                  |
+--------------------------------------------------+
                 |
                 | call
                 v

+--------------------------------------------------+
|                     WEB API                      |
|                                                  |
|   DOM API                                        |
|   setTimeout()                                   |
|   setInterval()                                  |
|                                                  |
|   fetch()  ----->  Promise                       |
|                     |                            |
|                     v                            |
|       Register Callback(like action on events)   | 
|                                                  |
+--------------------------------------------------+

+-------------------------------+
|        Callback Queue for promises (act came from async func) or
     fetch() in upper case       |
        fetch() is basically instruct like try catch robust flow   

                |
                | High Priority
                v

|      (Microtask Queue)        |
|   -------------------------   |
|   |   CB   |   CB   |  CB |   |
|   -------------------------   |
+-------------------------------+

                     |
                     v

+----------------------------------+
|            Task Queue (normal)   |
|          (Macrotask)             |
|   ----------------------------   |
|   |   CB   |   CB   |   CB   |   |
|   ----------------------------   |
   will add CB to call stack queue
            JS engine
+----------------------------------+

                     |
                     v

                EVENT LOOP
                     |
                     v

           Add callback to CALL STACK
           when the stack is empty

*/