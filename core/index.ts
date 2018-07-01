import Service from './service'

interface Services {
  [name: string]: Service
}

class Core {
  services: Services = {}

  addService(service: Service) {
    const name = service.alias || service.name
    this.services[name] = service
  }

  async call(name: string, context: any) {
    const [service, action] = name.split('.', 1)
    return this.services[service].call(action, context)
  }
}

export default Core