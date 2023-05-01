import './index.css'

function Faqitem(arg) {
  const {f, fn} = arg
  const {id, questionText, answerText, isTrue} = f
  //   console.log(isTrue)
  const alt = isTrue ? 'minus' : 'plus'
  const link = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const clickFn = () => {
    fn(id)
  }
  return (
    <li className="first">
      <div className="second">
        <h2>{questionText}</h2>
        <button type="button" onClick={clickFn}>
          <img src={link} alt={alt} />
        </button>
      </div>

      {isTrue ? (
        <div>
          <hr className="hr" />
          <p className="para">{answerText}</p>
        </div>
      ) : null}
    </li>
  )
}

export default Faqitem
