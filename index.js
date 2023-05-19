function createBlogCards(cards) {
  // Get the container where the elements will be added
  let container = document.querySelector("#blog-tree");

  // Iterate over the cards array
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    // Create the main container div for each card
    let blogCard = document.createElement("a");
    blogCard.id = "blog-card";
    blogCard.className = "single-blog";
    blogCard.href = card.route;
    blogCard.target = "_blank";
    blogCard.style.textDecoration = "none";

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
    heading: "Como escolher as tecnologias do seu mais novo projeto?",
    date: "On May 19, 2023",
    paragraph:
      "A cada dia, novas tecnologias são lançadas e escolher entre elas pode se tornar uma tarefa árdua. Muitas vezes, tendemos a pegar nossas favoritas para estudar e aplicar aos nossos projetos. Isso é absolutamente normal no processo de aprendizado. Contudo, quando possuímos mais de uma opção em nosso arsenal, qual seria a melhor escolha?",
    route:
      "https://www.tabnews.com.br/danielchaves/como-escolher-as-tecnologias-do-seu-mais-novo-projeto",
  },
];

createBlogCards(cards);
