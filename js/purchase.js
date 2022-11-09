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
// $(function (n) {
//   $(`.color-${n}`).click(function (n) {
//     $(".img_box").style.backgroundImage = url("/img/model/purchase/color-" + n + ".jpeg");
//   });
// });

function changeBg(bimg) {
  let color_box = document.getElementsByClassName(`color-${bimg}`);
  let img_box = document.getElementsByClassName("img_box");
  let img_url = url(`/img/model/purchase/color-${bimg}.jpeg`);
  img_box.style.backgroundImage = "img_url";
}
