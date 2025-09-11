import React, { useState } from 'react'

const ReactionButton = ({ onReaction, initialReactions = {} }) => {
  const [reactions, setReactions] = useState(initialReactions)
  const [showPicker, setShowPicker] = useState(false)
  const [showReactions, setShowReactions] = useState(false)

  const reactionTypes = [
    { emoji: '👍', name: 'like', label: 'Like', color: 'hover:bg-blue-100', textColor: 'text-blue-600', bgColor: 'bg-blue-50' },
    { emoji: '❤️', name: 'love', label: 'Love', color: 'hover:bg-red-100', textColor: 'text-red-600', bgColor: 'bg-red-50' },
    { emoji: '😂', name: 'laugh', label: 'Laugh', color: 'hover:bg-yellow-100', textColor: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { emoji: '😮', name: 'wow', label: 'Wow', color: 'hover:bg-purple-100', textColor: 'text-purple-600', bgColor: 'bg-purple-50' },
    { emoji: '😢', name: 'sad', label: 'Sad', color: 'hover:bg-blue-100', textColor: 'text-blue-600', bgColor: 'bg-blue-50' },
    { emoji: '😡', name: 'angry', label: 'Angry', color: 'hover:bg-red-100', textColor: 'text-red-600', bgColor: 'bg-red-50' },
    { emoji: '👏', name: 'clap', label: 'Clap', color: 'hover:bg-green-100', textColor: 'text-green-600', bgColor: 'bg-green-50' },
    { emoji: '🔥', name: 'fire', label: 'Fire', color: 'hover:bg-orange-100', textColor: 'text-orange-600', bgColor: 'bg-orange-50' },
    { emoji: '⭐', name: 'star', label: 'Star', color: 'hover:bg-pink-100', textColor: 'text-pink-600', bgColor: 'bg-pink-50' },
    { emoji: '🎉', name: 'party', label: 'Party', color: 'hover:bg-yellow-100', textColor: 'text-yellow-600', bgColor: 'bg-yellow-50' }
  ]

  const handleReaction = (reaction) => {
    const reactionKey = reaction.name
    setReactions(prev => ({
      ...prev,
      [reactionKey]: (prev[reactionKey] || 0) + 1
    }))
    onReaction && onReaction(reactionKey, reactions[reactionKey] + 1)
    setShowPicker(false)
    setShowReactions(false)
  }

  const handleReactionClick = (reactionName) => {
    setReactions(prev => ({
      ...prev,
      [reactionName]: (prev[reactionName] || 0) + 1
    }))
    onReaction && onReaction(reactionName, reactions[reactionName] + 1)
  }

  return (
    <div className="relative">
      {/* Main Reaction Button */}
      <button
        onClick={() => setShowReactions(!showReactions)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
      >
        <span className="text-lg">💬</span>
        <span className="text-sm font-medium text-gray-700">React</span>
        <span className="text-xs text-gray-500">▼</span>
      </button>

      {/* Quick Reactions Popup */}
      {showReactions && (
        <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50">
          <div className="flex gap-1">
            {reactionTypes.slice(0, 6).map((reaction, index) => (
              <button
                key={index}
                onClick={() => handleReaction(reaction)}
                className={`p-2 hover:bg-gray-100 rounded-full transition-colors text-lg hover:scale-110 ${reaction.color}`}
                title={reaction.label}
              >
                {reaction.emoji}
              </button>
            ))}
            <button
              onClick={() => {
                setShowReactions(false)
                setShowPicker(true)
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-lg text-gray-600"
              title="More reactions"
            >
              ➕
            </button>
          </div>
        </div>
      )}

      {/* Emoji Picker */}
      {showPicker && (
        <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
          <div className="text-center mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Choose your reaction</h3>
          </div>
          
          <div className="grid grid-cols-5 gap-2 mb-3">
            {reactionTypes.map((reaction, index) => (
              <button
                key={index}
                onClick={() => handleReaction(reaction)}
                className={`p-2 hover:bg-gray-100 rounded-full transition-colors text-lg hover:scale-110 ${reaction.color}`}
                title={reaction.label}
              >
                {reaction.emoji}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowPicker(false)}
            className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      )}

      {/* Display Current Reactions */}
      {Object.keys(reactions).length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {Object.entries(reactions).map(([reactionName, count]) => {
            const reaction = reactionTypes.find(r => r.name === reactionName)
            return (
              <div
                key={reactionName}
                className={`flex items-center gap-1 px-2 py-1 ${reaction?.bgColor || 'bg-gray-100'} rounded-full text-sm`}
              >
                <span className="text-sm">{reaction?.emoji}</span>
                <span className="font-semibold text-gray-600">{reaction?.label}</span>
                <span className="font-medium text-gray-700">{count}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ReactionButton