const fs=require("fs")

function main(file)
{
    console.log(process.argv)
    fs.readFile(file,"utf-8",function(err,data)
    {
        let total=0
        for (let i=0;i < data.length;i++)
        {
            if(data[i] === " ")
            {
                total++;
            }
        }
        console.log(total)
    })
}
main("a.txt")


// To count words
// const fs = require("fs");

// function main(file) {
//     fs.readFile(file, "utf-8", function (err, data) {
//         if (err) {
//             console.error("Error reading the file:", err);
//             return;
//         }

//         // Split the content into words using spaces and newlines as delimiters
//         const words = data.split(/\s+/).filter(word => word.length > 0);
//         console.log("Words:", words.length);
//     });
// }

// main("a.txt");
