import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // Creating new element with class (only topicContainer)
  const topicContainer = document.createElement("div");
  topicContainer.classList.add("topics");

  // Looping through "topics" array to create desired elements, set up their classes, add content, and appended them to the topicContainer
  topics.forEach((topic) => {
    const topicTab = document.createElement("div");
    topicTab.classList.add("tab");
    topicTab.textContent = topic;
    topicContainer.appendChild(topicTab);
  });

  // Returning topicContainer
  return topicContainer;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  // Directing injector to the selector
  const tabsInjector = document.querySelector(selector);

  // Axios function to get data from topics API
  axios
    .get(`http://localhost:5000/api/topics`)
    .then((response) => {
      const tabsData = response.data.topics;
      tabsInjector.appendChild(Tabs(tabsData));
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Response for topics has arrived!");
    });
};

export { Tabs, tabsAppender };
