import { Dream } from '../entities'

export const dreamData = (props = {}): Partial<Dream> => {
  return {
    name: 'My Dream',
    body: 'I had lobster claws',
    ...props,
  }
}

export const dreamFactory = async ({ ...props }: Partial<Dream>): Promise<Dream> => {
  const dream = Dream.create(await dreamData(props))
  return await dream.save()
}
