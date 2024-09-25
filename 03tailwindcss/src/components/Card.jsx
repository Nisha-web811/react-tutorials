import React from 'react'

function Card({userName="V" , post="not assigned yet" ,image="not posted yet"}) {
  return (
    <div>
    <figure className="mdbg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512"/>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {userName}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
</div>
  )
}

export default Card