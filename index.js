const RHYME_API = "https://api.datamuse.com/words?"
let rhymeList = document.querySelector(".rhymeList")
let input = document.querySelector(".word")
let RhymeButton = document.querySelector(".rhyme-button")
let form = document.querySelector("form")
let AssociationButton = document.querySelector(".association-button")
let AdjectiveButton = document.querySelector(".adjective-button")
let NounButton = document.querySelector(".noun-button")
let title = document.querySelector(".title")
let SynonymButton = document.querySelector(".synonym-button")

function getRhymes() {
    fetch(`https://api.datamuse.com/words?rel_rhy=${input.value}`)
    .then(res => res.json())
    .then(data => data.map(data => {
        let item = document.createElement('li')
        item.innerHTML = data.word;
        rhymeList.appendChild(item)
        title.innerHTML = "Rhymes"
    }
)
)
}

function getAssociation() {
    fetch(`https://api.datamuse.com/words?rel_trg=${input.value}`)
    .then(res => res.json())
    .then(data => data.map(data => {
        let item = document.createElement('li')
        item.innerHTML = data.word;
        rhymeList.appendChild(item)
        title.innerHTML = "Associations"
    }
)
)
}

function getAdjectives() {
    fetch(`https://api.datamuse.com/words?rel_jjb=${input.value}`)
    .then(res => res.json())
    .then(data => data.map(data => {
        let item = document.createElement('li')
        item.innerHTML = data.word;
        rhymeList.appendChild(item)
        title.innerHTML = "Adjectives"
    }
)
)
}

function getNouns() {
    fetch(`https://api.datamuse.com/words?rel_jja=${input.value}`)
    .then(res => res.json())
    .then(data => data.map(data => {
        let item = document.createElement('li')
        item.innerHTML = data.word;
        rhymeList.appendChild(item)
        title.innerHTML = "Nouns Described by"
    }
)
)
}
/* function getSynonyms() {
    fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key`)
    .then(res => res.json())
    .then(data => console.log(data)
        
    
)
} */



// find out how to submit on enter?
RhymeButton.addEventListener("click",(e) => {
    rhymeList.innerHTML = ""
    getRhymes()
})

AssociationButton.addEventListener("click",(e) => {
    rhymeList.innerHTML = ""
    getAssociation()
})

AdjectiveButton.addEventListener("click",(e) => {
    rhymeList.innerHTML = ""
    getAdjectives()
})

NounButton.addEventListener("click",(e) => {
    rhymeList.innerHTML = ""
    getNouns()
})

/* SynonymButton.addEventListener("click",(e) => {
    rhymeList.innerHTML = ""
    getSynonyms()
}) */




getRhymes()




