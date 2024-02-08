"use client"
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <TypewriterComponent
    options={{
        loop: true,
    }}
    onInit={(typewriter) => {
        typewriter
        .typeString("Take notes with ease..")
        .pauseFor(1000)
        .deleteAll()
        .typeString("let AI do the rest!")
        .start()
        .pauseFor(1000)
        .deleteAll()
        .typeString("GET PRODUCTIVE! 🚀")
        .start();
    }}
    />
  )
}

export default TypewriterTitle