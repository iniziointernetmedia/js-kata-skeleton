
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

const loadDocument = () => {
    // load index document
    const data = fs.readFileSync('./dist/index.html', { encoding: 'utf8', flag: 'r' });
    const dom = new JSDOM(data);
    document = dom.window.document;
}

loadDocument();

const index = require("../src/index");

describe('Test', function(){

    it('should have empty todolist', async function(){
        expect(document.getElementById('todoList').innerHTML).toBe('');
    });

})