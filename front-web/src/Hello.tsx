import React from 'react';

type Props = {
  message: string
}

function Hello({ message }: Props) {
  return (
    <h1>Component Hello!</h1>
  )
}

export default Hello;