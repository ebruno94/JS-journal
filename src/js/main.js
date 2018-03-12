import {Entry} from './entry.js';
import {journal} from './journal.js';
import '../css/styles.css';

$(document).ready(function(){
  $('.initHidden').addClass("hidden");
  $('#form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    journal.addEntry(new Entry(title, body));
    $('#displayTitle').text(title);
    $('#displayBody').text(body);
    $('#buttonContainer').removeClass("hidden");
  });
  $('#btnCons').click(function(){
    $('#output').text(journal.entries[0].countConsonants());
  });
  $('#btnVows').click(function(){
    $('#output').text(journal.entries[0].countVowels());
  });
});
