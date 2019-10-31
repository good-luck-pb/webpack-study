import $ from "jquery";
import './css/1.css';
import './css/1.less';
import './css/1.scss'

$(function() {
  $("li:even").css("background", "skyblue");
  $("li:odd").css("background", "yellow");
});
