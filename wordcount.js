// const fs=require("fs")

// function main(file)
// {
//     console.log(process.argv)
//     fs.readFile(file,"utf-8",function(err,data)
//     {
//         let total=0
//         for (let i=0;i < data.length;i++)
//         {
//             if(data[i] === " ")
//             {
//                 total++;
//             }
//         }
//         console.log(total)
//     })
// }
// main("a.txt")




//Creating a cli 


const fs = require("fs");
const { program } = require("commander");

program.command("Count")
  .name("word-count")
  .description("CLI tool to count words in a file")
  .version("1.0.0")
  .argument("<file>", "File to count words in")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      
      const wordCount = data.split(" ").filter(word => word.length > 0).length;
      console.log(`Word count: ${wordCount}`);
    });
  });

// Creating a cli for sentence count


  program.command("Count-Sentence")
  .description("CLI tool to count sentence in a file")
    .argument("<file>", "File to Sentence words in")
    .action((file) => {
      fs.readFile(file, "utf-8", (err, data) => {
        
        const sCount = data.split(/[?.,!]/).filter(word => word.length > 0).length;
        console.log(`Sentence count: ${sCount}`);
      });
    });
  
  program.parse(process.argv);
  