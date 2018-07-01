import _ from 'lodash'

export class Service {
  constructor(private schema: Schema) {}
  start(order: OrderSheet) {
    return this.invoke(order.action, order.context)
  }
  invoke(actionName: string, context: any) {
    // _.invoke(this.schema, actionName, ...context)
    if ('function' == typeof this.schema[actionName]) {
      // noFunc() 사용
      const func = this.schema[actionName]
      func(...context)
    } else {
      // 뭔가 다른 것 수행
      throw new Error(`The schema does not have a function named ${actionName}.`)
    }
  }
}
