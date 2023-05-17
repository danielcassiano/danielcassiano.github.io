function createBlogCards(cards) {
  // Get the container where the elements will be added
  let container = document.querySelector("#blog-tree");

  // Iterate over the cards array
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    // Create the main container div for each card
    let blogCard = document.createElement("div");
    blogCard.id = "blog-card";
    blogCard.className = "single-blog";

    // Create the inner text container div
    let textContainer = document.createElement("div");
    textContainer.className = "single-blog__text";

    // Create the heading element
    let heading = document.createElement("h4");
    heading.innerHTML = card.heading;

    // Create the date span element
    let dateSpan = document.createElement("span");
    dateSpan.innerHTML = card.date;

    // Create the paragraph element
    let paragraph = document.createElement("p");
    paragraph.innerHTML = card.paragraph;

    // Append the elements in the appropriate hierarchy
    textContainer.appendChild(heading);
    textContainer.appendChild(dateSpan);
    textContainer.appendChild(paragraph);
    blogCard.appendChild(textContainer);

    // Append the dynamically created card to the container
    container.appendChild(blogCard);
  }
}

let cards = [
  {
    heading: "Lorem impsum",
    date: "On April 29, 2023",
    paragraph:
      "Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.",
    route: "blog-post-1.html",
  },
  {
    heading: "Lorem impsum",
    date: "On April 29, 2023",
    paragraph:
      "Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.",
    route: "blog-post-2.html",
  },
];

createBlogCards(cards);
