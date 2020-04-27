export interface Theme {
  name: string;
  properties: Object;
}

export const blue: Theme = {
  name: "blue",
  properties: {
    "--mainColor": "#6fa1fc",
    "--secColor": "#9fb4d9",
    "--inputFocusColor": "#b2cbfa"
  }
}

export const dark: Theme = {
  name: "dark",
  properties: {
    "--mainColor": "#3c3c3c",
    "--secColor": "#686868",
    "--inputFocusColor": "#c4c4c4"
  }
}

export const green: Theme = {
  name: "green",
  properties: {
    "--mainColor": "#40b440",
    "--secColor": "#78be78",
    "--inputFocusColor": "#b5dfb5"
  }
}

export const purple: Theme = {
  name: "purple",
  properties: {
    "--mainColor": "#a344a3",
    "--secColor": "#c67ec6",
    "--inputFocusColor": "#fabcfa"
  }
}
