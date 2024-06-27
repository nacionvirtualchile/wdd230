const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
});


function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);
}


function getChapterList() {
    return JSON.parse(localStorage.getItem('myListOfBOMScriptures'));
}


function setChapterList() {
    localStorage.setItem('myListOfBOMScriptures', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


button.addEventListener('click', () => {

    if (input.value != '') {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        /*
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        */
        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }

});




