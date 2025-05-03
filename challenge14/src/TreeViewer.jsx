import Tree from 'react-d3-tree';

const containerStyles = {
  width: '100%',
  height: '500px'
};

const TreeViewer = ({ data }) => {
  return (
    <div style={containerStyles}>
      <Tree data={data} orientation="vertical" />
    </div>
  );
};

export default TreeViewer;
