export interface Theme {
  name: string;
  properties: any
}

export const blue: Theme = {
  name: "blue",
  properties: {
    "--mainColor": "#6fa1fc",
    "--secColor": "##9fb4d9"
  }
}

export const dark: Theme = {
  name: "dark",
  properties: {
    "--mainColor": "#323232",
    "--secColor": "#b2b2b2"
  }
}

export const green: Theme = {
  name: "green",
  properties: {
    "--mainColor": "#44c444",
    "--secColor": "#78be78"
  }
}

export const purple: Theme = {
  name: "purple",
  properties: {
    "--mainColor": "purple",
    "--secColor": "#c67ec6"
  }
}
