import fs from "fs";
function createBlogPost() {
  try {
    const jsonFile = `[
  {
    "id": 1,
    "data": "vanakam"
  },
  {
    "id": 2,
    "data": "hello"
  }
]`;

    fs.writeFileSync("blog.json", jsonFile);
    console.log("File created!");
  } catch (e) {
    console.log(e);
  }
}

function readBlogPost(id) {
  try {
    let data = fs.readFileSync("blog.json", "utf8");
    data = JSON.parse(data);
    console.log(data[id - 1]);
  } catch (e) {
    console.log(e);
  }
}

readBlogPost(2);
