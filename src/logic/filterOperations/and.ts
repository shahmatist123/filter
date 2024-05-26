import { Filter, Message } from 'data/filter';
import { filterMessages } from 'logic/filterMessages';

export const and = (messages: Message[], filter: Filter, result: Message[]) => {
  const fieldResult: Message[] = []
  if (filter.type === "and") {
    filter.filters.forEach((filterData: Filter) => {
      const tempResult = filterMessages(messages, filterData)

      if (tempResult) {
        fieldResult.push(...tempResult)
      }
    })

    const uniqueMessages = new Set(fieldResult)
    uniqueMessages.forEach((message) => {
      const filterWithoutCurrent = fieldResult.filter((field) => message !== field).length
      if (fieldResult.length-filterWithoutCurrent === filter.filters.length) {
        result.push(message)
      }
    })
  }
}