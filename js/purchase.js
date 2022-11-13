function collapse(element) {
  var before = document.getElementsByClassName("active")[0]; // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) {
    // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.style.maxHeight = null; // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  var panel = element.nextElementSibling;
  if (panel.style.maxHeight != 0) {
    // 버튼 다음 요소가 펼쳐져 있으면
    panel.style.maxHeight = null; // 접기
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"; // 접혀있는 경우 펼치기
  }
}

function bgImg(n) {
  let img_url = "/img/model/purchase/color-" + n + ".jpeg";
  document.getElementById("bimg_box").style.backgroundImage = `url(${img_url})`;

  let check = document.createElement("i");

  check.classList.add("fa-solid");
  check.classList.add("fa-circle-check");
  let view = document.getElementById(`c${n}`);
  let noview = document.getElementsByClassName("box")[0];
  if (noview.length != 0) {
    noview.removeChild();
  }
  view.appendChild(check);
}
