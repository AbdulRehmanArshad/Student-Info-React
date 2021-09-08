let arr = [
  { name: "talha ", lastname: "arshad", class: "85" },
  { name: "HAseeb ", lastname: "arshad", class: "85" },
  { name: "slaman ", lastname: "arshad", class: "85" },
  { name: "Talha ", lastname: "arshad", class: "85" },
  { name: "talha ", lastname: "arshad", class: "85" },
];
let arr1 = [
  { name: "talha ", lastname: "arshad", class: "85" },
  { name: "HAseeb ", lastname: "arshad", class: "85" },
  { name: "slaman ", lastname: "arshad", class: "85" },
  { name: "Talha ", lastname: "arshad", class: "85" },
  { name: "talha ", lastname: "arshad", class: "85" },
];
let arr3 = arr.filter((e) => e !== arr1);
console.log("Arr3,", arr3);
