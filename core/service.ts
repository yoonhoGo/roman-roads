export default class Service implements Schema {
  alias?: string
  name: string
  provider: Provider
  region?: string

  constructor(schema: Schema) {
    if (!schema.name) {
      throw new Error('Schema is required name property.')
    } else if (!schema.provider) {
      throw new Error('Schema is required provider property.')
    }
    
    this.name = schema.name
    this.provider = schema.provider
    this.region = schema.region
  }

  call(action: string, context: any) {
    return this.provider.invoke(name)
  }
}
