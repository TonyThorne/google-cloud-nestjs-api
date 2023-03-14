import { secretesFactory } from './secretesFactory'

secretesFactory('google').then((res: string) => {
  console.log('res', res)
})
