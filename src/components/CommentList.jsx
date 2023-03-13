import React from 'react'
import useMangaContext from '../hooks/useMangaContext'
import CommentShow from './CommentShow';
function CommentList() {
  const { commentList } = useMangaContext();

  const renderedComments = commentList.map((comment) => {
    return <CommentShow key={comment.id} comment={comment.body}/>
  });
  return (
    <div className='md:w-[70%] bg-neutral'>
      {renderedComments}
    </div>
  )
}

export default CommentList
