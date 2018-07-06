import Service from './service'

interface Services {
  [name: string]: Service
}

class Rome {
  services: Services = {}

  createService(service: Service) {
    const name = service.alias || service.name
    this.services[name] = service
  }

  async run(name: string, context?: any) {
    const [service, action] = name.split('.', 1)
    return this.services[service].run(action, context)
  }
}

export default Rome

export {
  Service
}