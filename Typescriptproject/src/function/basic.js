"use strict";
let nama: string = "imam";

function getNama(): string {
  return nama;
}

function getnoreturn(): void {
  console.log("function void");
}
console.log(getNama());
console.log(getnoreturn);
