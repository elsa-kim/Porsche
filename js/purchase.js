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

function bgImg(idx, className) {
  let img_url = "/img/model/purchase/color-" + idx + ".jpeg";
  document.getElementById("bimg_box").style.backgroundImage = `url(${img_url})`;

  let view = document.getElementById(`c${idx}`);
  let noview = document.getElementsByClassName(className);

  for (let item of noview) {
    if (item.children.length) {
      for (let child of item.children) {
        if (child.tagName.toLowerCase() === "i") item.removeChild(child);
      }
    }
  }

  let check = document.createElement("i");

  check.classList.add("fa-solid");
  check.classList.add("fa-circle-check");

  view.appendChild(check);
}
