
document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const newPostContent = document.getElementById("newPost").value;
    if (newPostContent.trim() !== "") {
        const post = document.createElement("div");
        post.className = "post";
        post.textContent = newPostContent;

        document.getElementById("posts").prepend(post);
        document.getElementById("newPost").value = "";
    }
});
    