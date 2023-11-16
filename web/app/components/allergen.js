import React, { Suspense, useEffect, useState } from 'react'
import Since from './since';
import Eaten from './eaten';

export default function allergen({props}) {
  const [history, setHistory] = useState(false);

  // useEffect(() => {
  //   const last = window.localStorage.getItem(props.title);
  //   console.log(`${props.title} / Last: ${last}`)
  //   if(last === null) {
  //     console.log("Last === null, returning.")
  //     return;
  //   }
  //   console.log("Should be setting history to ", last);
  //   setHistory(last);
  // })

  useEffect(() => {
    const last = window.localStorage.getItem(props.title);
    console.log(last);
    console.log("typeof last: ", typeof last, "\nLast is truthy? ", last ? 'truthy' : 'falsy');
    if(last) {
      setHistory(new Date(last));
    }
  }, [])

  function setWindowHistory() {
    const now = new Date();
    setHistory(now);
    window.localStorage.setItem(props.title, now);
  }

  return (
    <div className='border border-black pl-4 py-4'>
      <div>{`${props.title}`}</div>
      <Suspense fallback={<h1>loading</h1>}>
        <Since props={{time: new Date(), since: history}} suppressHydrationWaring />
        <Eaten props={{title: props.title, updater: setWindowHistory}}/>
      </Suspense>
    </div>
  )
}
