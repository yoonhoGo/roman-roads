interface Schema {
  actions?: {
    [name: string]: Function
  }
  mutations?: {
    [name: string]: Function
  }
}

interface OrderSheet {
  action: string
  context: any
}
export default class Service {
  constructor(private schema: Schema) {}
  start(order: OrderSheet) {
    return this.invoke(order.action, order.context)
  }
  invoke(actionName: string, context: any) {
    // _.invoke(this.schema, actionName, ...context)
    if (this.schema.actions === undefined) return
    
    if ('function' == typeof this.schema.actions[actionName]) {
      // noFunc() 사용
      const func = this.schema.actions[actionName]
      func(...context)
    } else {
      // 뭔가 다른 것 수행
      throw new Error(`The schema does not have a function named ${actionName}.`)
    }
  }
}
