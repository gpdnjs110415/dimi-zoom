let days = ['일', '월', '화', '수', '목', '금', '토'];
let period = ['조회', '1교시', '2교시', '3교시', '4교시', '점심시간', '5교시', '6교시', '7교시', '종례', '자습'];


//                문학(4)       공수(3)         수2          영어          응프개         화학          중국어        성직           응프화        운건(5)           정보관          진로      정통(6)        자구           CA           HR               조회          종례      점심    자습       공수(5,6)        상경                  회계           회계           정처(1)        문콘                                    
let zoomId = ['8134411742', '7987833794', '7965443330', '7126847915', '6863031340', '4361766687', '7722593481', '7223454774', '3650046422', '7864104388', '5977904321', '3955689232', '3335559622', '3650046422', '8134411742', '8134411742', '8134411742', '8134411742', '', '7178015132', '6838770867', '3154650453', '', '', '8402132429', '6971690768', '6971690768', '5977904321'];
//                 0       1                2        3                4                                  5           6          7                        8                         9              10                  11           12         13         14    15   16  17  18  19       20          21                   22                 23                24              25                 26 
let subject = ['문학📕', '공업수학📊', '수학2🧮', '영어1📘', '응용프로그래밍 개발👨‍💻 / 정보보호 관리🔐', '화학1🧪', '중국어1👲', '성공적인 직업생활💼', '응용프로그래밍 화면구현💻', '운동과 건강🤸‍♀️', '정보보호 관리🔐', '👩‍🎓진로👨‍🎓', '정보통신📲', '자료구조🤔', 'CA', 'HR', '', '', '', '', '공업수학📊', '상업경제💵', '음악 콘텐츠 일반🎵', '광고 콘텐츠 일반📺', '회계원리🤦‍♀️', '정보처리와 관리👨‍💻', '문화 콘텐츠 일반🎬'];
let teacher = ['김태', '이효', '장문', '이경', '함지', '김종', '정지', '장재', '조혜', '이재', '원미', '박경', '박성', '조혜', '', '', '', '', '', '', '류명', '정재', '이택', '정희', '김준', '안수', '원미'];
let homeroomTeacher = ['6971690768', '3955689232', '7987833794', '8134411742', '7864104388', '3335559622'];
let userClass = localStorage.getItem('userClass');

//1반
let timetable1 = [
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
    ['16', '23', '23', '24', '0', '18', '6', '25', '25', '17', '19'],
    ['16', '0', '26', '26', '2', '18', '21', '14', '14', '17', '19'],
    ['16', '0', '22', '24', '9', '18', '3', '11', '17', '17', '19'],
    ['16', '2', '6', '3', '23', '18', '21', '22', '15', '17', '19'],
    ['16', '6', '22', '9', '24', '18', '3', '21', '22', '17', '19'],
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19']
];
//2반
let timetable2 = [
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
    ['16', '21', '2', '25', '25', '18', '24', '0', '6', '17', '19'],
    ['16', '22', '3', '24', '9', '18', '11', '14', '14', '17', '19'],
    ['16', '3', '0', '23', '23', '18', '22', '21', '17', '17', '19'],
    ['16', '23', '24', '6', '2', '18', '26', '26', '15', '17', '19'],
    ['16', '0', '21', '6', '3', '18', '2', '9', '22', '17', '19'],
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19']
];
//3반
let timetable3 = [
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
    ['16', '6', '7', '8', '3', '18', '5', '12', '2', '17', '19'],
    ['16', '1', '9', '2', '8', '18', '12', '14', '14', '17', '19'],
    ['16', '4', '4', '11', '1', '18', '13', '5', '17', '17', '19'],
    ['16', '4', '4', '5', '0', '18', '2', '1', '15', '17', '19'],
    ['16', '3', '5', '13', '0', '18', '6', '7', '9', '17', '19'],
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19']
];
//4반
let timetable4 = [
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
    ['16', '7', '5', '9', '4', '18', '4', '3', '12', '17', '19'],
    ['16', '13', '1', '7', '0', '18', '2', '14', '14', '17', '19'],
    ['16', '5', '8', '1', '2', '18', '6', '3', '17', '17', '19'],
    ['16', '8', '0', '9', '13', '18', '5', '11', '15', '17', '19'],
    ['16', '2', '12', '4', '4', '18', '1', '6', '5', '17', '19'],
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19']
];
//5반
let timetable5 = [
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
    ['16', '5', '9', '2', '4', '18', '4', '7', '8', '17', '19'],
    ['16', '6', '5', '20', '11', '18', '3', '14', '14', '17', '19'],
    ['16', '2', '12', '5', '0', '18', '20', '13', '17', '17', '19'],
    ['16', '7', '8', '2', '3', '18', '6', '0', '15', '17', '19'],
    ['16', '13', '9', '4', '4', '18', '12', '5', '20', '17', '19'],
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19']
];
//6반
let timetable6 = [
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
    ['16', '0', '10', '10', '5', '18', '8', '2', '9', '17', '19'],
    ['16', '2', '8', '5', '20', '18', '6', '14', '14', '17', '19'],
    ['16', '12', '3', '13', '7', '18', '5', '6', '17', '17', '19'],
    ['16', '3', '9', '0', '7', '18', '13', '20', '15', '17', '19'],
    ['16', '10', '10', '5', '1', '18', '11', '2', '12', '17', '19'],
    ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19']
];


let timetable = [timetable1, timetable2, timetable3, timetable4, timetable5, timetable6];


//zoom 링크
let zoom = 'https://zoom.us/j/'; //zoom기본 링크
var platForm = navigator.platform;
if (platForm.match('Win16|Win32') != null) {
    zoom = 'zoommtg://zoom.us/join?pwd=dimigo&confno=';
} else {
    zoom = 'zoomus://join?pwd=dimigo&conf='
}

//반 선택 팝업 띄우기
function classChoicePopup(num) {
    if (num == 1) {
        document.getElementById('classChoicePopup').style.opacity = '1';
        document.getElementById('classChoicePopup').style.zIndex = '5';
    } else {
        document.getElementById('classChoicePopup').style.opacity = '0';
        document.getElementById('classChoicePopup').style.zIndex = '-1';
    }

}

//시간표이미지 변경
function timetableChange(classNum) {
    localStorage.setItem('userClass', classNum);
    classChoicePopup(0);
    document.getElementById('timetableImg').src = './image/' + classNum + '.png';
    document.getElementById('classNum').innerHTML = classNum + '반';
}

//시간 정보 가져오기
function getTimeInfo() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = days[today.getDay()];
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    //몇시?
    today = year + `년 ` + month + `월 ` + date + `일 ` + day + `요일`;
    document.getElementById('date').innerText = today;
    document.getElementById('now').innerText = hour + '시 ' + minute + '분 ' + second + '초';


    //몇교시?
    let time;
    if (hour == 8) {
        if (minute <= 54) { time = 0; } else { time = 1; }
    } else if (hour == 9) {
        if (minute >= 00 && minute <= 49) { time = 1; } else { time = 2; }
    } else if (hour == 10) {
        if (minute >= 00 && minute <= 49) { time = 2; } else { time = 3; }
    } else if (hour == 11) {
        if (minute >= 00 && minute <= 49) { time = 3; } else { time = 4; }
    } else if (hour == 12) {
        if (minute >= 00 && minute <= 49) { time = 4; } else { time = 5; }
    } else if (hour == 13) {
        if (minute >= 00 && minute <= 49) { time = 5; } else { time = 6; }
    } else if (hour == 14) {
        if (minute >= 00 && minute <= 39) { time = 6; } else { time = 7; }
    } else if (hour == 15) {
        if (minute >= 00 && minute <= 39) { time = 7; } else { time = 8; }
    } else if (hour == 16) {
        if (minute >= 00 && minute <= 39) { time = 8; } else { time = 9; }
    } else if (hour > 16 || hour < 8) { time = 10; }

    document.getElementById('time').innerText = period[time];

    //다음교시까지 남은 시간 체크
    if (time <= 4 && time > 0) {
        leftTime = 60 - minute;
    } else if (time > 4 && time < 10) {
        leftTime = 50 - minute;
    }
    if (hour == 12) {
        leftTime = 11;
    }
    //쉬는시간이면 남은시간 출력
    if (leftTime >= 0 && leftTime <= 10) {
        document.getElementById('leftTime').innerText = '다음 수업까지 ' + leftTime + '분 남았어요!';
    } else { document.getElementById('leftTime').innerText = '  '; }

    getZoom(time);
}
//subject[요일][교시]


//교시를 주면 링크를 가져옴
function getZoom(time) {
    userClass = localStorage.getItem('userClass');
    let today = new Date();
    let day = today.getDay();
    switch (userClass) {
        case '1': timetableNow = timetable1[day][time]; break;
        case '2': timetableNow = timetable2[day][time]; break;
        case '3': timetableNow = timetable3[day][time]; break;
        case '4': timetableNow = timetable4[day][time]; break;
        case '5': timetableNow = timetable5[day][time]; break;
        case '6': timetableNow = timetable6[day][time]; break;
    }
    let userClassTimetable = timetable[userClass - 1];
    document.getElementById('subject').innerText = subject[timetableNow];

    if (timetableNow == 4) {
        if (userClass == 4 || userClass == 5) {
            document.getElementById('teacher').innerText = '함지* T / 원미* T';
            document.getElementById('enterZoomBtn').innerHTML = '<div id="enterZoom"><a id="zoomLink" href="' + zoom + '6863031340" target="_blank">응용프로그래밍 개발</a></div><div id="enterZoom" style="margin-top:1rem;"><a id="zoomLink" href="' + zoom + '5977904321" target="_blank">정보보호 관리</a></div>';
        }
    } else if (timetableNow == 14 || timetableNow == 16 || timetableNow == 17 || timetableNow == 15) {
        document.getElementById('teacher').innerText = ' ';
        document.getElementById('enterZoomBtn').innerHTML = '<div id="enterZoom"><a id="zoomLink" href="' + zoom + homeroomTeacher[userClass - 1] + '" target="_blank">담임쌤 줌 들어가기</a></div>';
    } else if (timetableNow < 18 || timetableNow >= 20) {
        document.getElementById('teacher').innerText = teacher[timetableNow] + '* T';
        document.getElementById('zoomLink').href = zoom + zoomId[timetableNow];
        if (timetableNow == 22) {
            document.getElementById('enterZoomBtn').innerHTML = '<div id="enterZoom"><a id="zoomLink" href="https://calendar.google.com/calendar/b/1/r?cid=dimigo.hs.kr_classroome3c06dd6@group.calendar.google.com" target="_blank">수업 들어가기</a></div>';
        } else if (timetableNow == 23) {
            document.getElementById('enterZoomBtn').innerHTML = '<div id="enterZoom"><a id="zoomLink" href="https://discord.gg/uETT8E" target="_blank">수업 들어가기</a></div>';
        }
    } else if (timetableNow == 18) {
        document.getElementById('teacher').innerText = teacher[userClassTimetable[day][time + 1]] + '* T';
        document.getElementById('zoomLink').href = zoom + zoomId[userClassTimetable[day][time + 1]];
        document.getElementById('subject').innerText = subject[userClassTimetable[day][time + 1]] + '\n(5교시)';
        document.getElementById('subject').style.paddingTop = '1.2rem';
    } else {
        document.getElementById('teacher').innerText = teacher[timetableNow];
        document.getElementById('enterZoomBtn').innerHTML = '';
    }
}

//시간표 띄우기
function showTimetable(num) {
    if (num == '1') {
        document.getElementById('timetable').style.opacity = '1';
        document.getElementById('timetable').style.zIndex = '2';
        document.getElementById('timetableBtn').style.opacity = '0';
        document.getElementById('zoomLink').style.zIndex = '0';
        document.getElementById('covidSurv').style.opacity = '0';
    } else {
        document.getElementById('timetable').style.zIndex = '-3';
        document.getElementById('timetable').style.opacity = '0';
        document.getElementById('timetableBtn').style.opacity = '1';
        document.getElementById('zoomLink').style.zIndex = '1';
        document.getElementById('covidSurv').style.opacity = '1';
    }
}

//초기 설정
function init() {
    if (userClass === null) {
        classChoicePopup(1);
    } else {
        timetableChange(userClass);
    }
    getTimeInfo();
    setInterval(getTimeInfo, 1000);
}

init();