// 랜덤으로 생성된 숫자의 적합성 확인
function condition(num) {
    num = String(num);
    let temp = num.split("");
    // 첫번째와 두번째, 첫번째와 세번째, 두번째와 세번째의 숫자의 중복 확인
    if (temp[0] == temp[1] || temp[0] == temp[2] || temp[1] == temp[2]) {
        return true; // 중복이 있을 경우
    } else if (num < 100 || num >= 1000) {
        return true; // 생성된 수가 세자리 수가 아닐 때
    } else {
        return false; // 중복이 없고 세자리 수인 경우
    }
}

let target;
do {
    target = Math.floor(Math.random() * 1000); // 1000이하의 랜덤 수 생성
} while (condition(target)) // 랜덤으로 생성된 숫자의 적합성 확인 후 반복문 종료
// console.log(target) // target 값 출력

// 정답 비교 함수 (볼, 스트라이크 판단)
function compare(target, guess) {
    let target_temp = String(target).split("");
    let guess_temp = String(guess).split("");
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
        if (guess_temp[i] === target_temp[i]) {
            strikes++;
        } else if (target_temp.includes(guess_temp[i])) {
            balls++;
        }
    }
    return { balls, strikes };
}

// 게임 시작
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0; // 시도 횟수
let input; // 입력값
do {
    rl.on("line", (line) => {
        count++;
        input = line;
        console.log(`${count}번째 시도 : ${input}`);
        
        // 입력값이 세자리 수가 아닌 경우 다시 시도
        if(input.length !== 3) {
            console.log("세자리 숫자를 입력해주세요.");
            count--;
            return;
        }
        
        // 정답 비교 함수 수행 후 balls, strikes에 값 할당
        let { balls, strikes } = compare(target, Number(input));
        
        // 볼, 스트라이크를 표현
        if (balls == 0 && strikes == 0) {
            console.log(balls + "B" + strikes + "S");
        } else if (balls == 0) {
            console.log(strikes + "S");
        } else if (strikes == 0) {
            console.log(balls + "B");
        } else {
            console.log(balls + "B" + strikes + "S");
        }
        
        // 3S로 맞췄을 경우 메시지 출력 후 종료
        if (strikes == 3) {
            console.log(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
            rl.close();
        }
    })
} while (target === input)