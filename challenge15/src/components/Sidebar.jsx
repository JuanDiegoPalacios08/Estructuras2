import {Link} from "react-router-dom";

function renderTree(nodes,depth =0){
    return(
        <ul style={{paddingLeft: depth *10}}>
            {nodes.map((node,i)=>(
                <li key={i}>
                    <Link to={node.link}>{node.title}</Link>
                    {node.children?.length > 0 && renderTree(node.children, depth+1)}
                </li>
            ))}
        </ul>
    );
}

export default function Sidebar({tree}){
    return <nav className="sidebar">{renderTree(tree)}</nav>
}