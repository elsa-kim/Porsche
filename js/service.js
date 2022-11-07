// 서비스 메뉴 리스트
const serviceBtn = document.querySelectorAll(".service_list_nav li");
const serviceContent = document.querySelectorAll(".service_list_contents article");


for (let i = 0; i < serviceBtn.length; i++) {

    serviceBtn[i].addEventListener("click", () => {

        for (let k = 0; k < serviceBtn.length; k++) {
            serviceBtn[k].classList.remove("on");
            serviceContent[k].classList.remove("on");
        }
        serviceBtn[i].classList.add("on");
        serviceContent[i].classList.add("on");
    })
}

// 더보기버튼 활성화
const btnMore = document.getElementsByClassName("btn_wrap");
const moreContents = document.getElementsByClassName("more_contents");
const btnClose = document.getElementsByClassName("close");

for (let i = 0; i < btnMore.length; i++) {
    btnMore[i].addEventListener("click", () => {
        btnMore[i].classList.add("on");
        moreContents[i].classList.add("on");
        btnClose[i].addEventListener("click", () => {
            moreContents[i].classList.remove("on");
            btnMore[i].classList.remove("on");
        })

    })
}

