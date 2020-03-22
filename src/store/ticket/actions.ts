import { TicketActionTypes, SELECT_TICKET, Ticket } from './types'

export function selectTicket(ticket: Ticket): TicketActionTypes {
  return {
    type: SELECT_TICKET,
    payload: ticket
  }
}
