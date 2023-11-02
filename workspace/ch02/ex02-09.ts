(() => {
  interface CityDropdown {
    value: string;
    selected: boolean;
  }

  interface ZipcodeDropdown {
    value: number;
    selected: boolean;
  }

  function createDropdown(list: CityDropdown[]): string {
    let result = "<select>";

    const content = list
      .map((item) => {
        return `<option>${item.value}</option>`;
      })
      .join("");

    result += content + "</select>";

    return result;
  }

  var cityList: CityDropdown[] = [
    { value: "서울시", selected: false },
    { value: "인천시", selected: true },
    { value: "광주시", selected: false },
  ];

  const cityTag = createDropdown(cityList);

  console.log(cityTag);

  var ZipcodeList: ZipcodeDropdown[] = [
    { value: 123, selected: false },
    { value: 456, selected: true },
    { value: 789, selected: false },
  ];

  const ZipcodeTag = createDropdown(zipcodeList);

  console.log(ZipcodeTag);
})();
