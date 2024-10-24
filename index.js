import fs from "fs";
function createBlogPost() {
  try {
    const jsonFile = `[
  {
    "id": 1,
    "title": "Title 1",
    "data": "vanakam"
  },
  {
    "id": 2,
    "title": "Title 2",
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

function readAllBlogPost() {
  try {
    let data = fs.readFileSync("blog.json", "utf8");
    data = JSON.parse(data);
    data.forEach((element) => {
      console.log(element);
    });
  } catch (e) {
    console.log(e);
  }
}

function updateBlogPost() {
  try {
    let obj = {
      id: 2,
      data: "",
    };

    let data = fs.readFileSync("blog.json", "utf8");
    data = JSON.parse(data);
    let flag = data.some((item) => item.title === obj.title);
    let index = data.findIndex((item) => item.id === obj.id);

    if (index !== -1) {
      for (let key in obj) {
        data[index][key] = obj[key];
      }
      fs.writeFileSync("blog.json", JSON.stringify(data)); // Make stuff work here!
      console.log("Data Updated!");
    }
  } catch (e) {
    console.log(e);
  }
}

function deleteBlogPost() {
  return;
}
// -------------------------------------------------------------------------------
// readBlogPost(2);

updateBlogPost();
readAllBlogPost();
