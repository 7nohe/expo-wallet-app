import { TicketState, TicketActionTypes, SELECT_TICKET } from './types'

const initialState: TicketState = {
  selectedTicket: {
    index: 0,
    name: null,
    balance: 0
  },
  savedTickets: []
}

export function ticketReducer(
  state = initialState,
  action: TicketActionTypes
): TicketState {
  switch (action.type) {
    case SELECT_TICKET:
      return {
        ...state,
        selectedTicket: action.payload
      }
    default:
      return state
  }
}
