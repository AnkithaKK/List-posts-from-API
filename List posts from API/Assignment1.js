// JavaScript source code
async function listPosts() {
    let responses = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await responses.json();
    let i = 1;
    let ul = document.getElementById('postList');
    posts.forEach(post => {
        let container = document.createElement('div');
        container.classList.add('posts');

        let userId = document.createElement('p');
        userId.append(`UserId: ${post.userId},`);

        let id = document.createElement('p');
        id.append(`Id: ${post.id},`);

        let title = document.createElement('p');
        title.append(`Title: ${post.title},`);

        let body = document.createElement('p');
        body.append(`Body: ${post.body}`);

        container.append(`Post ${i} {`);
        container.append(userId);
        container.append(id);
        container.append(title);
        container.append(body);
        container.append('},');

        ul.append(container);
        i++;
    });

}
listPosts();