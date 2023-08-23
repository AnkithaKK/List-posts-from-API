// JavaScript source code
async function listPosts() {
    let responses = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await responses.json();
    let i = 1;
    let h1 = document.createElement('h1');
    h1.append('List of Posts');
    let ul = document.getElementById('postList');
    posts.forEach(post => {
        let container = document.createElement('div');
        container.classList.add('posts');

        let title = document.createElement('p');
        title.append(post.title);

        let body = document.createElement('p');
        body.append(post.body);

        container.append(`Post ${i} {`);

        container.append(title);
        container.append(body);
        container.append('}');

        ul.append(container);
        i++;
    });
    document.body.append(h1);
    document.body.append(ul);

    
}
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.getElementById("loadspinner").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.getElementById("loadspinner").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 3000)
    }
};
setTimeout(listPosts);

