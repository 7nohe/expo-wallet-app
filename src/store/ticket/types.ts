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

interface SelectTicketAction {
  type: typeof SELECT_TICKET
  payload: Ticket
}

export type TicketActionTypes = SelectTicketAction
