import React from 'react'
import story from '../story.png'

const Story = () => {
  return (
    <div id="story">
      <div className="story-box">
        <span className="story1">manoah,</span> <span className="story2">named after the Hebrew word for
        'rest,' offers a serene dining experience that emphasizes culinary
        excellence and community spirit.</span> <br/><br/><br/>We pride ourselves on crafting dishes
        that elevate taste to an art form using only the freshest New Zealand
        meat from local suppliers. Our dedication shines through in our homemade
        breadcrumbs, which add a unique richness and texture that surpasses
        commercial alternatives. At Manoah, every bite tells a story of flavor,
        quality, and community. Welcome to where dining transcends, and
        community thrives.
      </div>
      <img src={story} className="story-image" alt="story" />
    </div>
  )
}

export default Story
