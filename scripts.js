document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Sing!");

  button.appendChild(btnText);
  document.body.appendChild(button);
  button.addEventListener("click", function () {
    singSong(friends);
  });
});

let friends = ["Jake", "Zak", "Lewis", "Michelle", "Rachel"];

function singSong(myfriends) {
  for (let f = 0; f < myfriends.length; f++) {
    let singDiv = document.createElement("div");
    singDiv.className = "friend";

    
    let friendHeading = document.createElement("h3");
    singDiv.appendChild(friendHeading);

    document.body.appendChild(singDiv);
    friendHeading.appendChild(document.createTextNode(myfriends[f] + ": "));

    for (let counter = 99; counter > 0; counter--) {
      let line = counter;

      if (counter === 1) {
        let paragraph = document.createElement("p");
        let paragraphText = document.createTextNode(
          line +
            " line of code in the file, " +
            line +
            " line of code; " +
            myfriends[f] +
            " strikes one out, clears it all out, no more lines of code in the file."
        );
        paragraph.appendChild(paragraphText);
        singDiv.appendChild(paragraph);
      } else if (counter === 2) {
        let paragraph = document.createElement("p");
        let songline = line - 1;
        let paragraphText = document.createTextNode(
          line +
            " lines of code in the file, " +
            line +
            " lines of code; " +
            myfriends[f] +
            " strikes one out, clears it all out, " +
            line +
            " line of code in the file."
        );
        paragraph.appendChild(paragraphText);
        singDiv.appendChild(paragraph);

      } else {
        let paragraph = document.createElement("p");
        let songline = line - 1;
        let paragraphText = document.createTextNode(
          line +
            " lines of code in the file, " +
            line +
            " lines of code; " +
            myfriends[f] +
            " strikes one out, clears it all out, " +
            line +
            " lines of code in the file."
        );
        paragraph.appendChild(paragraphText);
        singDiv.appendChild(paragraph);
      }
    }
  }
}
