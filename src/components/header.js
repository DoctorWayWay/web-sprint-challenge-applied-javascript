const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Creating new elements
  const headerContainer = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  // Adding classes to new elements
  headerContainer.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");

  // Appending new elements to each other
  headerContainer.appendChild(headerDate);
  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerTemp);

  // Adding content to new elements
  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  // Returning headerContainer
  return headerContainer;
};

// Creating component with values that match the example page
const headerValues = Header("Lambda Times", "JANUARY 6, 2021", "27º");

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // Directing injector to the selector
  const headerInjector = document.querySelector(selector);

  // Appending Header to selector
  headerInjector.appendChild(headerValues);
};

export { Header, headerAppender };
