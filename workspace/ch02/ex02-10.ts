(() => {
  //   interface CityDropdown {
  //     value: string;
  //     selected: boolean;
  //   }

  //   interface ZipcodeDropdown {
  //     value: number;
  //     selected: boolean;
  //   }

  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }

  function createDropdown<T>(list: Dropdown<T>[]): string {
    let result = "<select>";

    list.forEach((item) => {
      result += `<option ${item.selected ? "selected" : ""}>${
        item.value
      }</option>`;
    });

    result += "</select>";

    return result;
  }

  var cityList: Dropdown<string>[] = [
    { value: "서울시", selected: false },
    { value: "인천시", selected: true },
    { value: "광주시", selected: false },
  ];

  const cityTag = createDropdown<string>(cityList);

  console.log(cityTag);

  var zipcodeList: Dropdown<number>[] = [
    { value: 123, selected: false },
    { value: 456, selected: true },
    { value: 789, selected: false },
  ];

  const ZipcodeTag = createDropdown(zipcodeList);

  console.log(ZipcodeTag);
})();
