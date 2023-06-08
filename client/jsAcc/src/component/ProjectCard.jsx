import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { github } from '../assets';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_proj_link,
}) => {
  return (
    <div className="project-card">
      <div className="card-img">
        <img src={image} alt="project_image" />
        <div className="card-img-hover">
          <div
            onClick={() => window.open(source_proj_link, '_blank')}
            className="eye-icon"
          >
            <AiFillEye className="eye-icon-svg" />
          </div>
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="github-icon"
          >
            <img src={github} alt="source code" className="github-icon-img" />
          </div>
        </div>
      </div>

      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="tags">
        {tags.map((tag,i) => (
          <p
            key={`${name}-${tag.name}`}
            className={`tags_me`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
