import { Entry } from './journal';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    const date = $("#journal-date").val();
    const entry = $("#journal-entry").val();
  });
});