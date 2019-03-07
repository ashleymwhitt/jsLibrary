3 == 3 //*--> this is an equal operator

3 == '3'; //*--> this is also a true statement. JS assumes you mean a # & converts it. It's not that strict.

//* STRICTLY EQUAL ===

3 === '3' //*--> Must match. Will not assume/convert b/c it's STRICT!

//* NOT EQUAL !=

'3' != 3; //* --> ACTUALLY, it converts the string '3' to a # & makes it read: 3 != 3 which is false b/c 3 DOES = 3!

//* STRICTLY NOT EQUAL !==

'3' !== 3; //*  this is true b/c (string)'3' does not = (number) 3....STRICTLY!

3 > 2




