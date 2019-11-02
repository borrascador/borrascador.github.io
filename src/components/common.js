import React from 'react';

export const parseFirstLink = (line) => {
  const elementStack = [];
  if (line.indexOf('[') !== -1) {
    const b1 = line.indexOf('[');
    const b2 = line.indexOf(']');
    const p1 = line.indexOf('(');
    const p2 = line.indexOf(')');
    if (b1 < b2 && b2 < p1 && p1 < p2) {
      const before = line.slice(0, b1);
      const label = line.slice(b1 + 1, b2);
      const url = line.slice(p1 + 1, p2);
      const after = line.slice(p2 + 1, line.length).concat('\n');
      if (before.length > 0) elementStack.push(before);
      elementStack.push(<a href={url}>{ label }</a>);
      if (after.length > 0) elementStack.push(after);
    }
  } else {
    elementStack.push(line);
  }
  return elementStack;
}

export const parseMdText = (inputText) => {
  const elementStack = [];
  const lines = inputText.split('\n');
  lines.forEach((line) => {
    if (line.indexOf('# ') === 0) {
      elementStack.push(<h1>{ parseFirstLink(line.slice(2)) }</h1>)
    } else if (line.indexOf('## ') === 0) {
      elementStack.push(<h3>{ parseFirstLink(line.slice(3)) }</h3>)
    } else if (line.length === 0) {
      elementStack.push(<br/>)
    } else if (line.indexOf('---') === 0) {
      elementStack.push(<hr/>)
    } else {
      elementStack.push(parseFirstLink(line.concat('\n')));
    }
  });
  return elementStack;
};