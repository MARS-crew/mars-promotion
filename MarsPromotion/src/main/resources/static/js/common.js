const popupEl = document.querySelector(".popup-wrap");
const applyBtn = document.querySelector(".apply-btn");
const popupBtn = document.querySelector(".popup-btn");
const popupCloseBtn = document.querySelector(".popup-close-btn");
const userName = document.querySelector("[name='userName']");
const userPhoneNum = document.querySelector("[name='userPhoneNum']");
const jockeyType = document.querySelectorAll("[name='applyInfoType']"); //지원기수
const applyType = document.querySelectorAll("[name='applyType']");
const Motive = document.querySelector("[name='Motive']");
const lastSay = document.querySelector("[name='lastSay']");

let generationValue = "";
let jockeyTypeValue = "";
let applyTypeValue = "";

/**
 * class 추가 함수
 * @param {class} name
 * @param {'추가 할 clss명'} className
 */
const classAdd = (name, className) => {
  name.classList.add(className);
};

/**
 * class 삭제 함수
 * @param {class} name
 * @param {'삭제 할 clss명'} className
 */
const classDel = (name, className) => {
  name.classList.remove(className);
};

/**
 * popup open, close 함수
 */
const popupOpen = () => {
  const popupEl2 = document.querySelector(".popup-wrap");

  if (popupEl2.classList.contains("hidden")) {
    classDel(popupEl2, "hidden");
  } else {
    classAdd(popupEl2, "hidden");
  }
};
popupBtn.addEventListener("click", () => {
  classAdd(popupEl, "hidden");
});
popupCloseBtn.addEventListener("click", () => {
  classAdd(popupEl, "hidden");
});

/**
 *  선택한 Radio버튼 value값 추출
 */
jockeyType.forEach((element) => {
  element.addEventListener("change", () => {
    if (element.checked) {
      generationValue = element.value;
    }
  });
});

/**
 * 선택한 Checkbox value값 저장
 */
applyType.forEach((element) => {
  element.addEventListener("change", () => {
    if (element.checked) {
      applyTypeValue += element.value + ",";
    }
  });
});

const validation = () => {
  if (!userName.value) {
    alert("이름을 작성해주세요.");
    userName.focus();
    return false;
  } else if (!userPhoneNum.value) {
    alert("전화번호를 작성해주세요.");
    userPhoneNum.focus();
    return false;
  } else if (!generationValue) {
    alert("지원기수를 선택해주세요.");
    return false;
  } else if (!applyTypeValue) {
    alert("지원분야를 선택해주세요.");
    return false;
  } else if (!Motive.value) {
    alert("지원동기를 작성해주세요.");
    Motive.focus();
    return false;
  }
  return true;
};

if (applyBtn) {
  applyBtn.addEventListener("click", () => {
    if (!validation()) {
      return false;
    }
    jockeyTypeValue = applyTypeValue.substring(0, applyTypeValue.length - 1);
    popupOpen();
    fetch("/api/v1/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName.value,
        phoneNumber: userPhoneNum.value,
        generation: generationValue,
        objective: jockeyTypeValue,
        reason: Motive.value,
        say: lastSay.value,
      }),
    }).then((response) => {
      console.log(response);
    });
  });
}