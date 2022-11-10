const loginBtn = document.querySelector(".login");
console.log(loginBtn);

loginBtn.addEventListener("click", e => {
    e.preventDefault();

    let pop = document.createElement("figure");

    pop.classList.add("pop");
    pop.innerHTML = `
        <div class="login">
            <div class="wrap">
                <div class="pic">
                    <img src="../img/login.jpg" alt="">
                </div>
                <h1>반갑습니다.</h1>
                <form>
                    <!-- id -->
                    <label for="id">ID</label><br>
                    <input type="text" name="id" id="id">
                    <br>
                    <!-- pw -->
                    <label for="pwd">PW</label><br>
                    <input type="password" name="pwd" id="pwd">
                    <br>
                    <!-- 회원선택 -->
                    <input type="radio" name="member" id="personal">
                    <label for="personal">개인회원</label>
                    <input type="radio" name="member" id="legal">
                    <label for="legal">법인회원</label>
                </form>
                <!-- 로그인버튼 -->
                <a href="#">> 로그인</a>
                <!-- 회원가입 -->
                <span>또는</span>
                <p>
                    <a href="#">지금 등록하세요</a>, Porsche의 디지털 세상을 알아보세요.
                </p>
            </div>
            <!-- 닫기버튼 -->
            <span class="btnClose"><i class="fa-solid fa-xmark"></i></span>
        </div>
    `
    loginBtn.append(pop);
})

loginBtn.addEventListener("click", e => {
    const pop = loginBtn.querySelector("figure");

    if (pop != null) {
        const close = pop.querySelector(".btnClose");

        if (e.target = close) {
            e.target.closest("figure").remove();
        }
    }
})