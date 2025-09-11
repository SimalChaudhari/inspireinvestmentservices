import React, { useState } from 'react'

const AdvancedReactions = ({ onReaction, initialReactions = {} }) => {
  const [reactions, setReactions] = useState(initialReactions)
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
    onReaction && onReaction(reactionKey, reaction.name, reactions[reactionKey] + 1)
    setShowReactions(false)
  }

  const totalReactions = Object.values(reactions).reduce((sum, count) => sum + count, 0)

  return (
    <div className="relative">
      {/* Main Reaction Button */}
      <button
        onClick={() => setShowReactions(!showReactions)}
        className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <span className="text-lg group-hover:animate-bounce">💬</span>
        <span className="text-sm font-medium">
          {totalReactions > 0 ? `${totalReactions} reactions` : 'React'}
        </span>
        <span className={`text-xs transition-transform duration-200 ${showReactions ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Reactions Popup */}
      {showReactions && (
        <div className="absolute bottom-full left-0 mb-3 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 z-50 min-w-[300px]">
          <div className="text-center mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Choose your reaction</h3>
          </div>
          
          <div className="grid grid-cols-5 gap-2 mb-4">
            {reactionTypes.map((reaction, index) => (
              <button
                key={index}
                onClick={() => handleReaction(reaction)}
                className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${reaction.color} group`}
                title={reaction.label}
              >
                <span className={`text-2xl group-hover:animate-pulse ${reaction.textColor}`}>{reaction.emoji}</span>
              </button>
            ))}
          </div>

          {/* Current Reactions Display */}
          {Object.keys(reactions).length > 0 && (
            <div className="border-t border-gray-100 pt-3">
              <div className="text-xs text-gray-500 mb-2">Current reactions:</div>
              <div className="flex flex-wrap gap-1">
                {Object.entries(reactions).map(([reactionName, count]) => {
                  const reaction = reactionTypes.find(r => r.name === reactionName)
                  return (
                    <div
                      key={reactionName}
                      className={`flex items-center gap-1 px-2 py-1 ${reaction?.bgColor || 'bg-gray-50'} rounded-full text-xs`}
                    >
                      <span className="text-sm">{reaction?.emoji}</span>
                      <span className="font-semibold text-gray-600">{count}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <button
            onClick={() => setShowReactions(false)}
            className="w-full mt-3 px-3 py-2 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      )}

      {/* Reactions Summary */}
      {Object.keys(reactions).length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {Object.entries(reactions)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([reactionName, count]) => {
              const reaction = reactionTypes.find(r => r.name === reactionName)
              return (
                <div
                  key={reactionName}
                  className={`flex items-center gap-1 px-3 py-1 ${reaction?.bgColor || 'bg-gray-50'} border border-gray-200 rounded-full text-sm shadow-sm`}
                >
                  <span className="text-sm">{reaction?.emoji}</span>
                  <span className="text-sm font-semibold text-gray-600">{reaction?.label}</span>
                  <span className="font-semibold text-gray-700">{count}</span>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default AdvancedReactions