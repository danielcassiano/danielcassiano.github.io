const content = document.getElementById("content");

// List of blog post filenames
const postFilenames = ["file1.md", "file2.md", "file3.md"];

// Fetch and render blog posts
async function fetchBlogPosts() {
  for (const filename of postFilenames) {
    const response = await fetch(filename);
    const markdown = await response.text();
    console.log(markdown);
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = markdown;

    content.appendChild(post);
  }
}

fetchBlogPosts();
