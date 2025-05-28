import React, { createContext, useContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

const ADD_CITY    = 'ADD_CITY';
const DELETE_CITY = 'DELETE_CITY';
const ADD_ZONE    = 'ADD_ZONE';
const EDIT_ZONE   = 'EDIT_ZONE';
const ADD_EDGE    = 'ADD_EDGE';
const DELETE_EDGE = 'DELETE_EDGE';

const initialState = {
  cities: [],   // array de { id, name, zones: Zone[] }
  edges:  []    // array de [cityIdA, cityIdB]
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_CITY: {
      const { name } = action.payload;
      const newCity = { id: uuid(), name, zones: [] };
      return {
        ...state,
        cities: [...state.cities, newCity]
      };
    }
    case DELETE_CITY: {
      const { id } = action.payload;
      return {
        ...state,
        cities: state.cities.filter(c => c.id !== id),
        edges:  state.edges.filter(
          ([a,b]) => a !== id && b !== id
        )
      };
    }
    case ADD_ZONE: {
      const { cityId, parentZoneId, zoneName } = action.payload;
      const addRec = zones =>
        zones.map(z =>
          z.id === parentZoneId
            ? { ...z, children: [...z.children, { id: uuid(), name: zoneName, children: [] }] }
            : { ...z, children: addRec(z.children) }
        );
      return {
        ...state,
        cities: state.cities.map(c => {
          if (c.id !== cityId) return c;
          const newZones = parentZoneId == null
            ? [...c.zones, { id: uuid(), name: zoneName, children: [] }]
            : addRec(c.zones);
          return { ...c, zones: newZones };
        })
      };
    }
    case EDIT_ZONE: {
      const { cityId, zoneId, newName } = action.payload;
      const editRec = zones =>
        zones.map(z =>
          z.id === zoneId
            ? { ...z, name: newName }
            : { ...z, children: editRec(z.children) }
        );
      return {
        ...state,
        cities: state.cities.map(c =>
          c.id === cityId ? { ...c, zones: editRec(c.zones) } : c
        )
      };
    }
    case ADD_EDGE: {
      const { source, target } = action.payload;
      const exists = state.edges.some(
        ([a,b]) => (a === source && b === target) || (a === target && b === source)
      );
      return exists
        ? state
        : { ...state, edges: [...state.edges, [source, target]] };
    }
    case DELETE_EDGE: {
      const { source, target } = action.payload;
      return {
        ...state,
        edges: state.edges.filter(
          ([a,b]) =>
            !((a === source && b === target) || (a === target && b === source))
        )
      };
    }
    default:
      return state;
  }
}

const GraphContext = createContext();

export function useGraph() {
  return useContext(GraphContext);
}

export function GraphProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCity    = name               => dispatch({ type: ADD_CITY,    payload: { name } });
  const deleteCity = id                 => dispatch({ type: DELETE_CITY, payload: { id } });
  const addZone    = (cityId, pz, name) => dispatch({ type: ADD_ZONE,    payload: { cityId, parentZoneId: pz, zoneName: name } });
  const editZone   = (cityId, zid, nm)  => dispatch({ type: EDIT_ZONE,   payload: { cityId, zoneId: zid, newName: nm } });
  const addEdge    = (source, target)   => dispatch({ type: ADD_EDGE,    payload: { source, target } });
  const deleteEdge = (source, target)   => dispatch({ type: DELETE_EDGE, payload: { source, target } });

  return (
    <GraphContext.Provider value={{
      cities:     state.cities,
      edges:      state.edges,
      addCity, deleteCity,
      addZone, editZone,
      addEdge, deleteEdge
    }}>
      {children}
    </GraphContext.Provider>
  );
}
