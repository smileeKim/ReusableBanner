import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails

  return (
    <li className={`banner-item ${className}`}>
      <div>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="show-more">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
