fetch('http://localhost:3000/images/1')
.then(res => res.json())
.then(pic => imageUploadData(pic))

function imageUploadData(pic) {
    const imageCard = document.getElementById('fg-image');
    imageCard.src = pic.image;
    // console.log(pic.image)
    const picTitle = document.getElementById('fg-title');
    picTitle.innerHTML = pic.title

    const addComments = document.querySelector('ul#fg-comments.comments li')
    addComments.innerHTML = `<li> ${pic.comments[0].content} </li>
    <li> ${pic.comments[1].content} </li>
    <li> ${pic.comments[2].content} </li>`
}

function commentForm() {
    document.getElementsByTagName('button').addEventListener('submit', (e) => {
        e.preventDefault();
        buildComments(e.target.previousElementSibling)
    })
}

function buildComments(com) {
    let li = document.createElement('li');
    li.textContent = `${com}`;
    document.getElementsById('fg-comments').appendChild(li);
}


let likeButtn = document.querySelector('#fg_like_button')
likeButtn.addEventListener('click', increaseLike)

function increaseLike(e) {
    const likes = (e.target.previousElementSibling)
    likes.textContent = parseInt(likes.textContent) + 1
}
