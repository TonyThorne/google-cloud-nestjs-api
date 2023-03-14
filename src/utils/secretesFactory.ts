import { main as google } from './googleSecrete'
import { cegedim } from './cegedimSecrete'

// Pass in which secretes service you want to use, e.g. google, cegedim, etc.
export function secretesFactory(service?: string): any {
  switch (service) {
    case 'google':
      return google()
    case 'cegedim':
      return cegedim()
    default:
      return 'secret'
  }
}
