import React, { Component } from 'react'
import NewsItems from "./NewsItems.js"

export default class News extends Component {
  render() {
    return (
      <div>
        This is a news Component
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
      </div>
    )
  }
}
