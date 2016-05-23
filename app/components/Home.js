import React, { Component } from 'react'
import { View, Text, Stylesheet } from 'react-native'

export default function Home() {
  return (
    Hello World
  )
}

var styles = Stylesheet.create({
  container{
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: '#f2f2f2',
    paddingTop:40
  }
})
