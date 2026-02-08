function toggleDark() {
  document.body.classList.toggle("dark");
}


const darkBtn = document.getElementById("dark-mode-btn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Animate button 🌙 → ☀️
  if(document.body.classList.contains("dark")) {
    darkBtn.textContent = "☀️";
  } else {
    darkBtn.textContent = "🌙";
  }
});
const searchInput = document.getElementById("search");
const posts = document.querySelectorAll("main .post");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  posts.forEach(post => {
    const text = post.textContent.toLowerCase();
    if(text.includes(query)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
});
const commentBtn = document.getElementById("comment-btn");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

if(commentBtn){ // only exists on post pages
  commentBtn.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if(text !== "") {
      const div = document.createElement("div");
      div.className = "comment";
      div.textContent = text;
      commentList.appendChild(div);
      commentInput.value = "";
    }
  });
}
