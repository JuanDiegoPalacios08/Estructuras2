
import React, { useRef, useState, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useGraph } from '../context/GraphContext';

export default function GraphView() {
  const containerRef = useRef();
  const { cities, edges } = useGraph();

  // Estado para guardar medidas
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Cada vez que cambie el tamaño de la ventana (o monte el componente),
  // actualizo width/height del contenedor
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { clientWidth: width, clientHeight: height } = containerRef.current;
        setDimensions({ width, height });
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();                       // inicializo medidas
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Preparo los nodos y enlaces
  const data = {
    nodes: cities.map(c => ({ id: c.id, name: c.name })),
    links: edges.map(([src, tgt]) => ({ source: src, target: tgt }))
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',        // ocupa todo el ancho padre
        height: '400px',      // altura fija (puedes cambiarla)
        border: '1px solid #ccc',
        marginTop: '16px'
      }}
    >
      {/* Solo renderizo el grafo cuando ya tengo medidas */}
      {dimensions.width > 0 && (
        <ForceGraph2D
          width={dimensions.width}
          height={dimensions.height}
          graphData={data}
          nodeLabel="name"
          nodeAutoColorBy="id"
          linkDirectionalArrowLength={4}
          linkDirectionalArrowRelPos={1}
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
        />
      )}
    </div>
  );
}
