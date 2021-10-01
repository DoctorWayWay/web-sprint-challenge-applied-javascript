import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // Creating new elements
  const cardContainer = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthorContainer = document.createElement("div");
  const cardAuthorImageContainer = document.createElement("div");
  const cardAuthorImage = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // Adding classes to the new elements
  cardContainer.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthorContainer.classList.add("author");
  cardAuthorImageContainer.classList.add("img-container");

  // Adding attributes to new elements (only "cardAuthorImage")
  cardAuthorImage.src = article["authorPhoto"];

  // Appending the new elements to each other
  cardContainer.appendChild(cardHeadline);
  cardContainer.appendChild(cardAuthorContainer);
  cardAuthorContainer.appendChild(cardAuthorImageContainer);
  cardAuthorContainer.appendChild(cardAuthorName);
  cardAuthorImageContainer.appendChild(cardAuthorImage);

  // Adding content to new elements
  cardHeadline.textContent = article["headline"];
  cardAuthorName.textContent = `By ${article["authorName"]}`;

  // Click Event
  cardContainer.addEventListener("click", (event) => {
    console.log(cardHeadline.textContent);
  });

  // Returning cardContainer
  return cardContainer;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  // Directing injector to the selector
  const articleInjector = document.querySelector(selector);

  // Axios function to get data from articles API
  axios
    .get(`http://localhost:5000/api/articles`)
    .then((response) => {
      // Storing raw response data inside articleData variable to be broken down
      const articlesData = response.data.articles;

      // Looping over articlesData object to get the array stored each property
      for (const prop in articlesData) {
        const articlesDataProps = articlesData[prop];
        // Looping over the objects inside articleDataProps
        for (const propOfProp in articlesDataProps) {
          const articlesDataInfo = articlesDataProps[propOfProp];
          // Running the desired objects through Card() and appending them to articleInjector (line 66)
          const articlesCard = Card(articlesDataInfo);
          articleInjector.appendChild(articlesCard);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export { Card, cardAppender };
