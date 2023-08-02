const  chalk  = require("chalk");
const yargs = require("yargs");
const notes = require('./notes.js')

// add, remove, read, list

// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // just to make it required to pass argument
            type: 'string' // just to make sure we are passing string only
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
notes.addNote(argv.title, argv.body)
        
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // just to make it required to pass argument
            type: 'string' // just to make sure we are passing string only
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
        
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes()
        
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler() {
        console.log('Title: ' + argv.title)
        
    }
})

yargs.parse()