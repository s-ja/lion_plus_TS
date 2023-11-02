// ex02-02.ts 복사
// ex02-01.js 복사
(() => {
  interface IHighSchool {
    // kor: number;
    // eng: number;
    // sum(): number;
    avg(): number;
  }

  class HighSchool implements IHighSchool {
    private kor = 0;
    private eng = 0;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    private sum(): number {
      return this.kor + this.eng;
    }
    avg(): number {
      return Math.round(this.sum() / 2);
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log("평균", s1.avg());

  // 잘못된 사용
  // s1.eng = 100;
  // console.log("평균", s1.sum() / 2);
})();
