import React from 'react'

export default function Topics({topics , selectedTopic}) {
  return (
     (
        <div className="main-content">
          <div className="sidebar">
            <h2>Topics</h2>
            <ul>
              {topics.map((topic) => (
                <li key={topic.id} onClick={() => handleTopicClick(topic)}>
                  {topic.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="topic-detail">
            {selectedTopic ? (
              <div>
                <h2>{selectedTopic.title}</h2>
                <p>{selectedTopic.content}</p>
              </div>
            ) : (
              <p>Select a topic to view details</p>
            )}
          </div>
        </div>
      )
  )
}
