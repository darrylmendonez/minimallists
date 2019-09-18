import React from 'react'
import ListSummary from './ListSummary'

const Lists = ({lists}) => {
  return (
    <div className="project-list section">
      { lists && lists.map(list => {
        return (
          <ListSummary list={list} key={list.id} />
        )
      })}  
    </div>
  )
}

export default Lists