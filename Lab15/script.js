const container = document.querySelector(".images");

function wait(second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
}

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

// createImage("../array_method.png")
//   .then((img) => {
//     currentImg = img;
//     console.log("load img  1: ", img.src);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("../Screenshot_1.png");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("load img  2: ", img.src);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => {
//     console.log(err);
//     throw err;
//   });

// 15.2
async function loadNPause() {
  try {
    let a = await createImage("../array_method.png");
    await wait(2);
    a.style.display = "none";
    a = await createImage("../Screenshot_1.png");
    await wait(2);
    a.style.display = "none";
  } catch (err) {
    console.log(err);
    throw err;
  }
}
// loadNPause();

async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));

    const Els = Promise.all(imgs);
    (await Els).forEach((img) => img.classList.add("parrallel"));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

loadAll(["../Screenshot_1.png", "../Screenshot_1.png", "../array_method.png"]);
