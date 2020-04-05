export interface Ticket {
  index: number
  name: string
  balance: number
}

export interface TicketState {
  selectedTicket: Ticket
  savedTickets: Ticket[]
}

export const SELECT_TICKET = 'SELECT_TICKET'
export const GET_TICKETS_REQUEST_START = 'GET_TICKETS_REQUEST_START'
export const GET_TICKETS_REQUEST_END = 'GET_TICKETS_REQUEST_END'

interface SelectTicketAction {
  type: typeof SELECT_TICKET
  payload: Ticket
}

interface GetTicketsRequestStartAction {
  type: typeof GET_TICKETS_REQUEST_START
  payload: null
}

export interface GetTicketsRequestEndAction {
  type: typeof GET_TICKETS_REQUEST_END
  payload: Ticket[]
}

export type TicketActionTypes = SelectTicketAction | GetTicketsRequestStartAction | GetTicketsRequestEndAction
