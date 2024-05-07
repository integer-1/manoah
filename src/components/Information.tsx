const Information = () => {
  return (
    <div id="information">
      <p className="information-title">Contact</p>
      <p className="information-contact">
        <a href="tel:02040829119" rel="noopener noreferrer">
          📞 020 40829119
        </a>
        <br />
        <a
          href="https://www.google.com/maps/search/?api=1&query=3/146+Sunnynook+Road"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 3/146 Sunnynook Road
        </a>
      </p>
      <p className="information-title">Hours</p>
      <p className="information-hours">
        OPEN
        <br />
        Tuesday ~ Saturday <br />
        11:30am - 8:30pm (Break 3pm-5pm) <br /> <br />
        CLOSED <br />
        Monday, Sunday & Public Holiday
      </p>
    </div>
  )
}

export default Information
