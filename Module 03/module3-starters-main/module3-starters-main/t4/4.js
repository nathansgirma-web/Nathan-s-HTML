'use strict';
const students = [
  {value: "2345768", name: "John"},
  {value: "2134657", name: "Paul"},
  {value: "5423679", name: "Jones"}
];

const target = document.getElementById('target');

students.forEach(st => {
  const opt = document.createElement('option');
  opt.value = st.value;
  opt.textContent = st.name;
  target.appendChild(opt);
});