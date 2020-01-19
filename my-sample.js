"use strict";
document.write("外部定義したJavaScriptからの書き込み");
//alert("alertは警告⚠️");
let age = prompt('How old are you ?'); //prompt('What is...', '山田花子');
let acceseAllowed = (age > 17) ? confirm("このページは、性的な表現が含まれています。閲覧を続行しますか？") :
//alert('18才未満の方には不適切な内容が含まれているため、閲覧できません。');
