class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.completed = false;
    }

    changEtatCompletion() {
        this.completed = !this.completed;
    }
}

let taches = [];
let idtache = 0;

const tacheInput = document.getElementById('tacheInput');
const addtacheButton = document.getElementById('addtacheButton');
const tacheList = document.getElementById('listTaches');

const addtache = () => {
    const description = tacheInput.value.trim();
    if (!description) return;

    const tache = new Task(idtache++, description);
    taches.push(tache);

};
