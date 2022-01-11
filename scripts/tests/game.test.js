/**
 * @jest-environment jsdom
 */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
 
 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileStnc("index.html", "utf-8");
     document.open();
     document.write(fileContents);
 })