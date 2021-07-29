fetch('http://localhost:3000/images/1')
.then(res => res.json())
.then(pic => imageUploadData(pic))
const addComments = document.querySelector('ul#fg-comments.comments')

function imageUploadData(pic) {
    const imageCard = document.getElementById('fg-image');
    imageCard.src = pic.image;
    // console.log(pic.image)
    const picTitle = document.getElementById('fg-title');
    picTitle.innerHTML = pic.title

    
    addComments.innerHTML = `<li> ${pic.comments[0].content} </li>
    <li> ${pic.comments[1].content} </li>
    <li> ${pic.comments[2].content} </li>`
}

form = document.getElementById('fg-comment-form')
form.addEventListener('submit', buildComments);
function buildComments(e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.textContent = e.target.comment.value;
    addComments.append(li);
    form.reset();
}


let likeButtn = document.querySelector('#fg_like_button')
likeButtn.addEventListener('click', increaseLike)

function increaseLike(e) {
    const likes = (e.target.previousElementSibling)
    likes.textContent = parseInt(likes.textContent) + 1
}
