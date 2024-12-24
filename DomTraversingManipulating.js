// 3 direction for traversing

/*
    1.Downwards 
        1.querySelector/ querySelectorAll
        2.children
    2.Upwards
        1.parenElement
    3.sideWays
        1.nextElementSibling / previousElementSibling
        2.parenElement + children + index

*/



//1.Downwards 
    //1.querySelector/ querySelectorAll

    const studentList1 = document.querySelector(".student-list");
    const studentA1 =studentList1.querySelector(".student-a");

    //2.children
    const studentList2 = document.querySelector(".student-list");
    studentList2.children;
    const studentA = studentList2.children[0];


//2.Upwards

    //1.parenElement
    const studentA2 = document.querySelector("li");
    const studentList3 = studentA.parentElement;



//3.sideWays
    //1.nextElementSibling / previousElementSibling
    const studentA3 = document.querySelector("li");
    const studentB3 =studentA3.nextElementSibling;
    const studentC3 = studentB3.nextElementSibling;

    //other ways method
    const studentC4 = document.querySelectorAll("li")[2];
    const studentB4 = studentC4.previousElementSibling;

    //2.parenElement + children + index

    const studentA5 = document.querySelector("li");
    const studentList5 = studentA5.parentElement;
    const studentC5 = studentList5.children[2];


