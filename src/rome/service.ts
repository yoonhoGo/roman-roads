export default class Service implements Schema {
  alias?: string
  name: string
  provider: Provider

  constructor(schema: Schema) {
    if (!schema.name) {
      throw new Error('Schema is required name property.')
    } else if (!schema.provider) {
      throw new Error('Schema is required provider property.')
    }
    
    this.name = schema.name
    this.alias = schema.alias
    this.provider = schema.provider
  }

  run(action: string, context: any) {
    const order = { action, context }
    return this.provider.invoke(order)
  }
}
