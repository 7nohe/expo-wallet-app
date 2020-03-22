---
to: src/store/<%= name %>/reducers.ts
---
<%
  actionType1 = 'ADD_' + h.changeCase.upper(h.inflection.underscore(name))
  actionType2 = 'DELETE_' + h.changeCase.upper(h.inflection.underscore(name, true))
%>
import { <%= Name %>State, <%= Name %>ActionTypes, <%= actionType1 %>, <%= actionType2 %> } from './types'

const initialState: <%= Name %>State = {
  <%= h.inflection.pluralize(name) %>: []
}

export function <%= name %>Reducer(
  state = initialState,
  action: <%= Name %>ActionTypes
): <%= Name %>State {
  switch (action.type) {
    case <%= actionType1 %>:
      return {
        <%= h.inflection.pluralize(name) %>: state.<%= h.inflection.pluralize(name) %>.concat(action.payload)
      }
    case <%= actionType2 %>:
      return {
        <%= h.inflection.pluralize(name) %>: state.<%= h.inflection.pluralize(name) %>.filter(<%= name %> => <%= name %> !== action.payload)
      }
    default:
      return state
  }
}
