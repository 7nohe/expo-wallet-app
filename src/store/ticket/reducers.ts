import { TicketState, TicketActionTypes, SELECT_TICKET, GET_TICKETS_REQUEST_END, GET_TICKETS_REQUEST_START } from './types'

const initialState: TicketState = {
  selectedTicket: {
    index: 0,
    name: null,
    balance: 0
  },
  savedTickets: [],
  loading: false
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
      return {
        ...state,
        loading: true
      }
    case GET_TICKETS_REQUEST_END:
      return {
        ...state,
        savedTickets: [...state.savedTickets, ...action.payload],
        loading: false
      }
    default:
      return state
  }
}
