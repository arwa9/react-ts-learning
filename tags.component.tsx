import React from 'react';
import './tags.component.scss';

type PropsType = {
  tagsList: string[];
  removeTag: any;
};

export const TagsComponent = ({ tagsList, removeTag }: PropsType) => (
  <div className="tags-list">
    {tagsList.length > 0 
      ? <div>
          <h5 style={{display: 'inline'}}>Tags: </h5>
          {tagsList.map(tag => (
          <button className="tag" onClick={() => removeTag(tag)}>
            {tag} 
            <span className="remove-btn">X</span>
          </button>))}
        </div>
      : <div>No tags selected</div>}
  </div>
)