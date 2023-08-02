const fs = require('fs');
const chalk = require('chalk')

const getNotes = ()=> {
    return "notes"
}
// debugger
const addNote =  (title, body) => {
const notes = loadNotes();
const duplicateNotes = notes.filter((note)=>{
    return note.title===title
})

if(duplicateNotes.length===0){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log("new notes added")
}
else{
    console.log("Note title taken")
}
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))

    notes.forEach((note)=>{
        console.log(note.title)
    })

}


const saveNotes = (notes)=>{
const dataJSON = JSON.stringify(notes);
fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = ()=>{
    try{
const dataBuffer = fs.readFileSync('notes.json');
const dataJSON = dataBuffer.toString();
return JSON.parse(dataJSON);
    } catch(e){
        return []
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>{
return note.title!==title;

    })
    saveNotes(notesToKeep)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}