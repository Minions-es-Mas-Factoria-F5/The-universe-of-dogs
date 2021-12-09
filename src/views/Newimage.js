/* function genNewImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((body) => {
      let url = body.data.message;
      let image = document.getElementById("dogs-img");
      let dogText = document.getElementById("dogs-text");

      let urlCutter = url.split("/")[4].split("-");
      let first =
        typeof urlCutter[1] == "undefined"
          ? ""
          : urlCutter[1].charAt(0).toUpperCase() +
            urlCutter[1].split("").slice(1, urlCutter[1].length).join("");
      let second =
        urlCutter[0].charAt(0).toUpperCase() +
        urlCutter[0].split("").slice(1, urlCutter[0].length).join("");
      image.src = url; // set the src of the image object
      dogText.innerHTML = "This is a: " + first + " " + second; //Set the dog breed name in the paragraph
    })
    .catch((error) => {
      console.log(error.response);
    });
}
genNewImage();
 */
