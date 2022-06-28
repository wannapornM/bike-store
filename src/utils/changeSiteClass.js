export default function changeSiteClass(id) {
  clickedButton = document.getElementsByClassName("clicked");
  if (clickedButton.length === 1) {
    clickedButton[0].setAttribute("class", "notClicked");
  }
  document.getElementById(id).setAttribute("class", "clicked");
}
