interface Schema {
  actions: {
    [name: string]: Function
  }
  mutations: {
    [name: string]: Function
  }
}

interface OrderSheet {
  action: string
  context: any
}