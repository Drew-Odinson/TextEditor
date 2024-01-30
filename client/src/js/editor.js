// Import methods to save and get data from the IndexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    // Assume there is only one entry in IndexedDB and it has an id of 1.
    const contentId = 1;

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    // Initialize CodeMirror editor
    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in IndexedDB.
    getDb().then((data) => {
      // Assuming the latest entry is the one we need
      const latestEntry = data?.length ? data[data.length - 1].content : null;
      console.info('Loaded data from IndexedDB, injecting into editor');
      this.editor.setValue(latestEntry || header);
    });

    // Event listener for editor changes to keep localStorage updated (might be redundant if using IndexedDB)
    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor to IndexedDB when the editor loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      const content = this.editor.getValue();
      putDb(contentId, content); // Save content to IndexedDB with the specified contentId
    });
  }
}
