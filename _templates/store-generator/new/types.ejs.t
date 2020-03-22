---
to: src/store/<%= name %>/types.ts
---
<%
  actionType1 = 'ADD_' + h.changeCase.upper(h.inflection.underscore(name))
  actionType2 = 'DELETE_' + h.changeCase.upper(h.inflection.underscore(name, true))
  action1 = 'Add' + Name + 'Action'
  action2 = 'Delete' + Name + 'Action'
%>
export interface <%= Name %> {

}

export interface <%= Name %>State {
  <%= h.inflection.pluralize(name) %>: <%= Name %>[]
}

export const <%= actionType1 %> = '<%= actionType1 %>'
export const <%= actionType2 %> = '<%= actionType2 %>'

interface <%= action1 %> {
  type: typeof <%= actionType1 %>
  payload: <%= Name %>
}

interface <%= action2 %> {
  type: typeof <%= actionType2 %>
  payload: <%= Name %>
}


export type <%= Name %>ActionTypes = <%= action1 %> | <%= action2 %>
