type Provider = AWS.Lambda

interface Schema {
  alias?: string
  name: string
  provider: Provider
  region?: string
  [name: string]: any
}