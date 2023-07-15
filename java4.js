let count1 = 0;
let sum = 0;
let totalEl = document.getElementById("total-el");
let row1El = document.getElementById("row1-el");
function add1() {
  count1 += 1;
  row1El.innerHTML = `<td>Hot Coffee</th><th>${count1}</td>`;
  sum += 499;
  totalEl.textContent = "Total : $" + sum;
}
let count2 = 0;
let row2El = document.getElementById("row2-el");
function add2() {
  count2 += 1;
  row2El.innerHTML = `<td>Hot Tea</th><th>${count2}</td>`;
  sum += 299;
  totalEl.textContent = "Total : $" + sum;
}
let count3 = 0;
let row3El = document.getElementById("row3-el");
function add3() {
  count3 += 1;
  row3El.innerHTML = `<td>Iced Tea</th><th>${count3}</td>`;
  sum += 399;
  totalEl.textContent = "Total : $" + sum;
}
let count4 = 0;
let row4El = document.getElementById("row4-el");
function add4() {
  count4 += 1;
  row4El.innerHTML = `<td>Donut</th><th>${count4}</td>`;
  sum += 499;
  totalEl.textContent = "Total : $" + sum;
}
let count5 = 0;
let row5El = document.getElementById("row5-el");
function add5() {
  count5 += 1;
  row5El.innerHTML = `<td>Cold Coffee</th><th>${count5}</td>`;
  sum += 399;
  totalEl.textContent = "Total : $" + sum;
}
let count6 = 0;
let row6El = document.getElementById("row6-el");
function add6() {
  count6 += 1;
  row6El.innerHTML = `<td>Frappuccino</th><th>${count6}</td>`;
  sum += 599;
  totalEl.textContent = "Total : $" + sum;
}
let count7 = 0;
let row7El = document.getElementById("row7-el");
function add7() {
  count7 += 1;
  row7El.innerHTML = `<td>Cold Drinks</th><th>${count7}</td>`;
  sum += 49;
  totalEl.textContent = "Total : $" + sum;
}
let count8 = 0;
let row8El = document.getElementById("row8-el");
function add8() {
  count8 += 1;
  row8El.innerHTML = `<td>Burger</th><th>${count8}</td>`;
  sum += 499;
  totalEl.textContent = "Total : $" + sum;
}
let count9 = 0;
let row9El = document.getElementById("row9-el");
function add9() {
  count9 += 1;
  row9El.innerHTML = `<td>Sandwich</th><th>${count9}</td>`;
  sum += 349;
  totalEl.textContent = "Total : $" + sum;
}
let count10 = 0;
let row10El = document.getElementById("row10-el");
function add10() {
  count10 += 1;
  row10El.innerHTML = `<td>Snack and Sweet</th><th>${count10}</td>`;
  sum += 49;
  totalEl.textContent = "Total : $" + sum;
}
let count11 = 0;
let row11El = document.getElementById("row11-el");
function add11() {
  count11 += 1;
  row11El.innerHTML = `<td>Oatmeal</th><th>${count11}</td>`;
  sum += 149;
  totalEl.textContent = "Total : $" + sum;
}
let count12 = 0;
let row12El = document.getElementById("row12-el");
function add12() {
  count12 += 1;
  row12El.innerHTML = `<td>Ice Cream</th><th>${count12}</td>`;
  sum += 199;
  totalEl.textContent = "Total : $" + sum;
}
function refresh() {
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;
  count8 = 0;
  count9 = 0;
  count10 = 0;
  count10 = 0;
  count11 = 0;
  count12 = 0;
  sum = 0;
  totalEl.textContent = "Total : $0";
  row1El.textContent = "";
  row2El.textContent = "";
  row3El.textContent = "";
  row4El.textContent = "";
  row5El.textContent = "";
  row6El.textContent = "";
  row7El.textContent = "";
  row8El.textContent = "";
  row9El.textContent = "";
  row10El.textContent = "";
  row11El.textContent = "";
  row12El.textContent = "";
}
