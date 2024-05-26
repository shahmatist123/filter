import { Filter, Message } from 'data/filter';
import { filterMessages } from 'logic/filterMessages';

export const or = (messages: Message[], filter: Filter, result: Message[]) => {
  if (filter.type === "or") {
    filter.filters.forEach((filterData: Filter) => {
      const tempResult = filterMessages(messages, filterData)

      if (tempResult) {
        result.push(...tempResult)
      }
    })
  }
}