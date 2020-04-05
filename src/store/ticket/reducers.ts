import { TicketState, TicketActionTypes, SELECT_TICKET, GET_TICKETS_REQUEST_END, GET_TICKETS_REQUEST_START } from './types'

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
    case GET_TICKETS_REQUEST_START:
      return state
    case GET_TICKETS_REQUEST_END:
      return {
        ...state,
        savedTickets: [...state.savedTickets, ...action.payload]
      }
    default:
      return state
  }
}
