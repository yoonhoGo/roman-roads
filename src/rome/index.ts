import ServiceSchema from './service'

interface Services {
  [name: string]: ServiceSchema
}

class Rome {
  services: Services = {}

  createService(service: ServiceSchema) {
    const name = service.alias || service.name
    this.services[name] = service
  }

  async run(name: string, context?: any) {
    const [service, action] = name.split('.')
    return this.services[service].run(action, context)
  }
}

export default Rome

export {
  ServiceSchema
}