
const myRow = document.querySelector(".my-row");

for (let i = 1; i <= 100; i++) {
    const myNewDiv = document.createElement("div");
    if ((i % 3 == 0) && (i%5 == 0)){
        // console.log("FizzBuzz");
        myNewDiv.classList.add("multiploentrambi");
    } else if (i%3 == 0){
        // console.log("Fizz");
        myNewDiv.classList.add("multiplo3");
    } else if (i%5 == 0){
        // console.log("Buzz");
        myNewDiv.classList.add("multiplo5");
    } else {
        // console.log(i);
    }
    myRow.append(myNewDiv);
    myNewDiv.append(i);
    myNewDiv.classList.add("my-col", "square", "text-center" , "fw-bold");
}

