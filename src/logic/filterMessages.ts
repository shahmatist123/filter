import { Filter, Message } from 'data/filter';
import { getFilterData } from 'logic/filterOperations/getFilterData';
import { checkMessage } from 'logic/checkMessage';
import { or } from 'logic/filterOperations/or';
import { and } from 'logic/filterOperations/and';
import { getFieldType } from 'logic/getFieldType';

export const filterMessages = (messages: Message[], filter: Filter) => {
  const result: Message[] = []

  or(messages, filter, result)
  and(messages, filter, result)

  const option = getFilterData(filter)
  messages.forEach((message) => {
    const key = option.field
    if (!key) {
      return;
    }
    const messageValue = key && message[key]
    let isCorrectMessage = false

    if (messageValue === undefined) {
      return ;
    }
    if (getFieldType(messageValue) !== filter.type) {
      return;
    }

    const params = { messageValue, filterValue: option.value };
    isCorrectMessage = checkMessage(params, option.operation);
    if (isCorrectMessage) {
      result.push(message)
    }
  })

  return result
}