/**
 * @jest-environment jsdom
 */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
 
 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileStnc("index.html", "utf-8");
     document.open();
     document.write(fileContents);
 })

 describe("game object contains correct keys", () => {
     test("score key exists", () => {
         except("score" in game).toBe(true);
     })
 })