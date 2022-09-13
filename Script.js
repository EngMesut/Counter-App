 // Selecting the value

 const value = document.querySelector(".value");

 // Selecting each button

 const btn_increment = document.querySelector(".btn_increment");
 const btn_decrement = document.querySelector(".btn_decrement");
 const btn_reset = document.querySelector(".btn_reset");

 let count = 0;

 // Click event for increment

 btn_increment.addEventListener("click", () => {
     value.textContent = count;

     count++;

 });

 // Click event for decrement

 btn_decrement.addEventListener("click", () => {

     count--;

     value.textContent = count;

 });

 // Click event for reset count

 btn_reset.addEventListener("click", () => {

     count = 0;

     value.textContent = count;

 });