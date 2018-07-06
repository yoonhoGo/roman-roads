type Provider = AWS.Lambda | any

interface Schema {
  alias?: string
  name: string
  provider: Provider
  region?: string
  [name: string]: any
}