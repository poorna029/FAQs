import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {list: []}

  onClickFn = a => {
    // const mList = list.filter(x => x.id === parseInt(a))
    this.setState(p => ({
      list: p.list.map(x => {
        if (x.id === parseInt(a)) {
          return {...x, isTrue: !x.isTrue}
        }
        return x
      }),
    }))
  }

  componentDidMount = () => {
    const {faqsList} = this.props
    const mList = faqsList.map(x => ({...x, isTrue: false}))
    this.setState({list: mList})
  }

  render() {
    const {list} = this.state
    const {faqsList} = this.props
    const reqList = list.length === 0 ? faqsList : list
    // console.log(reqList)
    // console.log('list', list)
    // console.log(items)
    return (
      <div className="com">
        <div className="home">
          <h1>FAQs</h1>
          <ul className="ul">
            {reqList.map(x => (
              <FaqItem f={x} fn={this.onClickFn} key={x.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
