const container = document.querySelector(".images");

const wait = (second) => {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

function createImage(imgPath) {
  return new Promise((resovle, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", () => {
      container.append(img);
      resovle(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Cannot get image"));
    });
  });
}

let currentImg;

createImage("../array_method.png")
  .then((img) => {
    currentImg = img;
    console.log("load img  1: ", img.src);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("../Screenshot_1.png");
  })
  .then((img) => {
    currentImg = img;
    console.log("load img  2: ", img.src);
    return wait(2);
  })
  .catch((err) => console.log(err));
