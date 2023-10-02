import React from "react";

const ProjectTop = () => {
  return (
    <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Project</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Project</li>
            </ol>
        </nav>
    </div>
</div>
  );
};

export default ProjectTop;
