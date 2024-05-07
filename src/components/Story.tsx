import story from '../story.png'

const Story = () => {
  return (
    <div id="story">
      <div className="story-box">
        <span className="story1">
          Rest, <br />
          Culinary Excellence, <br />
          Community Connection
        </span>
        <br /> <br />
        <span className="story2">
          At manoah, named 'Rest', we offer a serene dining experience that
          transcends the ordinary, celebrating both exceptional cuisine and a
          strong community connection.
        </span>
        <br />
        <br />
        <span className="story2">
          Our commitment to quality is showcased in our entire menu, which
          features only the finest local ingredients sourced from trusted
          suppliers. Beyond our famous katsu, we take pride in every detail—from
          the ambient setting to our innovative dishes that introduce guests to
          new flavors while respecting classic techniques. Join us at manoah,
          where each meal is an opportunity to experience culinary artistry and
          forge meaningful connections.
        </span>
      </div>
      <img src={story} className="story-image" alt="story" />
    </div>
  )
}

export default Story
