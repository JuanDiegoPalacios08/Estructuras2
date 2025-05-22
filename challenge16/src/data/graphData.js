export const graphData = {
    nodes: [
      { id: "Cali", city: true, color: "orange" },
      { id: "Bogotá", city: true, color: "orange" },
      { id: "Alice", age: 25, city: "Cali", color: "lightgreen" },
      { id: "Bob", age: 30, city: "Bogotá", color: "lightgreen" },
      { id: "Charlie", age: 22, city: "Cali", color: "lightgreen" },
    ],
    links: [
      { source: "Alice", target: "Cali" },
      { source: "Bob", target: "Bogotá" },
      { source: "Charlie", target: "Cali" },
      { source: "Alice", target: "Bob" },
      { source: "Bob", target: "Charlie" },
    ],
  };
  
  