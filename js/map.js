/* 
79c0df25605b0f7facb1369d9be6fe68
 */

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.530357, 126.954236), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

let zoom = true; //확대 축소 가능
let drag = false; // 드래그 가능

// 마커가 표시될 위치입니다 
var markerPosition = new kakao.maps.LatLng(37.530357, 126.954236);
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);